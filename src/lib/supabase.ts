export { supabase } from '@/integrations/supabase/client'

export type UserRole = 'student' | 'parent' | 'teacher' | 'admin' | 'finance' | 'foundation'

export const ROLE_LABELS: Record<UserRole, string> = {
  student: 'Student',
  parent: 'Parent',
  teacher: 'Teacher',
  admin: 'Administrator',
  finance: 'Finance Officer',
  foundation: 'Foundation Manager',
}

export const ROLE_HOME: Record<UserRole, string> = {
  student: '/basicstudies',
  parent: '/montessori',
  teacher: '/highschool',
  admin: '/admin/users',
  finance: '/basicstudies',
  foundation: '/foundation',
}

export interface UserProfile {
  id: string
  email: string | null
  full_name?: string | null
  role?: UserRole
  created_at: string
  updated_at: string
}
