import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

console.log('Supabase environment check:', {
  url: supabaseUrl ? 'Set' : 'Missing',
  key: supabaseAnonKey ? 'Set' : 'Missing',
  actualUrl: supabaseUrl?.substring(0, 30) + '...' || 'undefined'
})

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase environment variables. Please check your Supabase connection.')
}

export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder-key'
)

export type UserRole = 'student' | 'parent' | 'teacher' | 'admin' | 'finance' | 'foundation'

export interface UserProfile {
  id: string
  email: string
  role: UserRole
  full_name?: string
  created_at: string
  updated_at: string
}