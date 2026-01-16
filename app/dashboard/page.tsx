'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Layout from '@/components/layout/Layout'
import Link from 'next/link'
import { User, Building2, Briefcase, FileText, CreditCard, Settings } from 'lucide-react'

export default function DashboardPage() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/login')
    }
  }, [status, router])

  if (status === 'loading') {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-lg">Loading...</div>
        </div>
      </Layout>
    )
  }

  if (!session) {
    return null
  }

  const userType = session.user.userType

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent mb-2">
              Dashboard
            </h1>
            <p className="text-gray-600">Welcome back! Manage your account and activities.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {userType === 'JOB_SEEKER' && (
              <>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <Link href="/dashboard/profile" className="bg-white p-6 rounded-xl shadow-soft hover-lift border border-gray-100 group block">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-3 bg-primary-50 rounded-lg group-hover:bg-primary-100 transition-colors">
                        <User className="h-6 w-6 text-primary-600" />
                      </div>
                      <h2 className="text-xl font-semibold text-gray-900">My Profile</h2>
                    </div>
                    <p className="text-gray-600">View and edit your profile details</p>
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Link href="/dashboard/applications" className="bg-white p-6 rounded-xl shadow-soft hover-lift border border-gray-100 group block">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-3 bg-green-50 rounded-lg group-hover:bg-green-100 transition-colors">
                        <FileText className="h-6 w-6 text-green-600" />
                      </div>
                      <h2 className="text-xl font-semibold text-gray-900">Applications</h2>
                    </div>
                    <p className="text-gray-600">Track your job applications</p>
                  </Link>
                </motion.div>
              </>
            )}

            {userType === 'COMPANY' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Link href="/dashboard/company-profile" className="bg-white p-6 rounded-xl shadow-soft hover-lift border border-gray-100 group block">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                      <Building2 className="h-6 w-6 text-blue-600" />
                    </div>
                    <h2 className="text-xl font-semibold text-gray-900">Company Profile</h2>
                  </div>
                  <p className="text-gray-600">Manage your company profile</p>
                </Link>
              </motion.div>
            )}

            {userType === 'ORGANIZATION' && (
              <>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <Link href="/dashboard/organization-profile" className="bg-white p-6 rounded-xl shadow-soft hover-lift border border-gray-100 group block">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-3 bg-purple-50 rounded-lg group-hover:bg-purple-100 transition-colors">
                        <Building2 className="h-6 w-6 text-purple-600" />
                      </div>
                      <h2 className="text-xl font-semibold text-gray-900">Organization Profile</h2>
                    </div>
                    <p className="text-gray-600">Manage your organization profile</p>
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Link href="/dashboard/job-posts" className="bg-white p-6 rounded-xl shadow-soft hover-lift border border-gray-100 group block">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-3 bg-orange-50 rounded-lg group-hover:bg-orange-100 transition-colors">
                        <Briefcase className="h-6 w-6 text-orange-600" />
                      </div>
                      <h2 className="text-xl font-semibold text-gray-900">Job Posts</h2>
                    </div>
                    <p className="text-gray-600">Manage job postings</p>
                  </Link>
                </motion.div>
              </>
            )}

            {userType === 'ADMIN' && (
              <>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <Link href="/dashboard/admin/users" className="bg-white p-6 rounded-xl shadow-soft hover-lift border border-gray-100 group block">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-3 bg-red-50 rounded-lg group-hover:bg-red-100 transition-colors">
                        <User className="h-6 w-6 text-red-600" />
                      </div>
                      <h2 className="text-xl font-semibold text-gray-900">Manage Users</h2>
                    </div>
                    <p className="text-gray-600">View and manage all users</p>
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Link href="/dashboard/admin/payments" className="bg-white p-6 rounded-xl shadow-soft hover-lift border border-gray-100 group block">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-3 bg-emerald-50 rounded-lg group-hover:bg-emerald-100 transition-colors">
                        <CreditCard className="h-6 w-6 text-emerald-600" />
                      </div>
                      <h2 className="text-xl font-semibold text-gray-900">Payments</h2>
                    </div>
                    <p className="text-gray-600">Approve and manage payments</p>
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Link href="/dashboard/admin/content" className="bg-white p-6 rounded-xl shadow-soft hover-lift border border-gray-100 group block">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-3 bg-indigo-50 rounded-lg group-hover:bg-indigo-100 transition-colors">
                        <FileText className="h-6 w-6 text-indigo-600" />
                      </div>
                      <h2 className="text-xl font-semibold text-gray-900">Content Management</h2>
                    </div>
                    <p className="text-gray-600">Manage platform content</p>
                  </Link>
                </motion.div>
              </>
            )}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link href="/dashboard/subscription" className="bg-white p-6 rounded-xl shadow-soft hover-lift border border-gray-100 group block">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-yellow-50 rounded-lg group-hover:bg-yellow-100 transition-colors">
                    <CreditCard className="h-6 w-6 text-yellow-600" />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900">Subscription</h2>
                </div>
                <p className="text-gray-600">Manage your subscription package</p>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Link href="/dashboard/settings" className="bg-white p-6 rounded-xl shadow-soft hover-lift border border-gray-100 group block">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-gray-100 rounded-lg group-hover:bg-gray-200 transition-colors">
                    <Settings className="h-6 w-6 text-gray-600" />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900">Settings</h2>
                </div>
                <p className="text-gray-600">Account settings</p>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
