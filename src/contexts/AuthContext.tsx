import React, { createContext, useContext, useEffect, useState } from 'react'
import { User } from '@supabase/supabase-js'
import { supabase, UserProfile, UserRole } from '@/lib/supabase'

interface AuthContextType {
  user: User | null
  profile: UserProfile | null
  loading: boolean
  signIn: (email: string, password: string) => Promise<{ error: any }>
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null)
      if (session?.user) {
        fetchProfile(session.user.id)
      } else {
        setLoading(false)
      }
    })

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setUser(session?.user ?? null)
        if (session?.user) {
          await fetchProfile(session.user.id)
        } else {
          setProfile(null)
          setLoading(false)
        }
      }
    )

    return () => subscription.unsubscribe()
  }, [])

  const fetchProfile = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('id', userId)
        .single()
      
      if (error && error.code !== 'PGRST116') {
        console.error('Error fetching profile:', error)
      } else if (data) {
        setProfile(data)
      }
    } catch (error) {
      console.error('Error fetching profile:', error)
    } finally {
      setLoading(false)
    }
  }

  const signIn = async (email: string, password: string) => {
    console.log("AuthContext signIn called with:", { email, hasPassword: !!password });
    setLoading(true)
    
    // Check if we're in demo mode (using placeholder Supabase)
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
    const isDemoMode = !supabaseUrl || supabaseUrl.includes('placeholder')
    
    if (isDemoMode) {
      console.log("Demo mode detected - simulating login");
      // Demo mode - simulate successful login
      const demoCredentials = [
        { email: "student@kingskids.edu", password: "password123", role: "student" },
        { email: "teacher@kingskids.edu", password: "password123", role: "teacher" },
        { email: "parent@kingskids.edu", password: "password123", role: "parent" },
        { email: "admin@kingskids.edu", password: "password123", role: "admin" },
        { email: "finance@kingskids.edu", password: "password123", role: "finance" },
        { email: "foundation@kingskids.edu", password: "password123", role: "foundation" }
      ]
      
      const validCredential = demoCredentials.find(cred => 
        cred.email === email && cred.password === password
      )
      
      if (validCredential) {
        // Simulate successful authentication
        const demoUser = {
          id: `demo-${validCredential.role}-${Date.now()}`,
          email: validCredential.email,
          aud: 'authenticated',
          role: 'authenticated',
          email_confirmed_at: new Date().toISOString(),
          phone_confirmed_at: null,
          confirmation_sent_at: null,
          recovery_sent_at: null,
          email_change_sent_at: null,
          new_email: null,
          invited_at: null,
          action_link: null,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
          is_anonymous: false,
          app_metadata: {},
          user_metadata: {},
          identities: []
        }
        
        const demoProfile = {
          id: demoUser.id,
          email: validCredential.email,
          role: validCredential.role as UserRole,
          full_name: `Demo ${validCredential.role}`,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        }
        
        setUser(demoUser as any)
        setProfile(demoProfile)
        setLoading(false)
        return { error: null }
      } else {
        setLoading(false)
        return { error: { message: "Invalid email or password" } }
      }
    }
    
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })
      
      console.log("Supabase auth result:", { error: error?.message || "success" });
      
      if (error) {
        setLoading(false)
        console.error("Auth error:", error);
      }
      
      return { error }
    } catch (err) {
      console.error("SignIn catch block error:", err);
      setLoading(false);
      return { error: err };
    }
  }

  const signOut = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) {
      console.error('Error signing out:', error)
    }
  }

  const value = {
    user,
    profile,
    loading,
    signIn,
    signOut,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}