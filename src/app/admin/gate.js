import 'server-only'

import { redirect } from 'next/navigation'

import { isAuthenticated } from '@/lib/cms/auth'

export async function requireAdmin() {
  if (!(await isAuthenticated())) redirect('/admin/login')
}