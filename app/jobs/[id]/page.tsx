'use client'

import Layout from '@/components/layout/Layout'
import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { Briefcase, MapPin, DollarSign, Clock, Building2, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import toast from 'react-hot-toast'

interface JobPost {
  id: string
  title: string
  description: string
  requirements: string | null
  location: string | null
  jobType: string
  salaryRange: string | null
  category: string | null
  applicationDeadline: string | null
  createdAt: string
  organization: {
    organizationName: string
    logo: string | null
    description: string | null
    location: string | null
  }
  _count: {
    applications: number
  }
}

export default function JobDetailPage() {
  const params = useParams()
  const router = useRouter()
  const { data: session } = useSession()
  const [job, setJob] = useState<JobPost | null>(null)
  const [loading, setLoading] = useState(true)
  const [applying, setApplying] = useState(false)
  const [coverLetter, setCoverLetter] = useState('')
  const [showApplyForm, setShowApplyForm] = useState(false)
  const [hasApplied, setHasApplied] = useState(false)

  useEffect(() => {
    if (params.id) {
      fetchJob()
    }
  }, [params.id])

  const fetchJob = async () => {
    try {
      const response = await fetch(`/api/jobs/${params.id}`)
      if (response.ok) {
        const data = await response.json()
        setJob(data)
        checkApplicationStatus(data.id)
      } else {
        router.push('/jobs')
      }
    } catch (error) {
      console.error('Error fetching job:', error)
    } finally {
      setLoading(false)
    }
  }

  const checkApplicationStatus = async (jobId: string) => {
    if (!session) return

    try {
      const response = await fetch('/api/applications')
      if (response.ok) {
        const applications = await response.json()
        const applied = applications.some((app: any) => app.jobPostId === jobId)
        setHasApplied(applied)
      }
    } catch (error) {
      console.error('Error checking application status:', error)
    }
  }

  const handleApply = async () => {
    if (!session) {
      toast.error('Please login to apply')
      router.push('/auth/login')
      return
    }

    if (session.user.userType !== 'JOB_SEEKER') {
      toast.error('Only job seekers can apply for jobs')
      return
    }

    setApplying(true)
    try {
      const response = await fetch('/api/applications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          jobPostId: job?.id,
          coverLetter: coverLetter || null,
        }),
      })

      if (response.ok) {
        toast.success('Application submitted successfully!')
        setHasApplied(true)
        setShowApplyForm(false)
        setCoverLetter('')
      } else {
        const data = await response.json()
        toast.error(data.error || 'Failed to submit application')
      }
    } catch (error) {
      toast.error('An error occurred')
    } finally {
      setApplying(false)
    }
  }

  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-lg">Loading...</div>
        </div>
      </Layout>
    )
  }

  if (!job) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-lg">Job not found</div>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/jobs"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Jobs
          </Link>

          <div className="bg-white rounded-lg shadow-md p-8 mb-6">
            <div className="flex items-start space-x-6 mb-6">
              {job.organization.logo ? (
                <img
                  src={job.organization.logo}
                  alt={job.organization.organizationName}
                  className="w-20 h-20 rounded-lg object-cover"
                />
              ) : (
                <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center">
                  <Building2 className="h-10 w-10 text-gray-400" />
                </div>
              )}
              <div className="flex-1">
                <h1 className="text-3xl font-bold mb-2">{job.title}</h1>
                <p className="text-xl text-gray-600">{job.organization.organizationName}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 pb-6 border-b">
              {job.location && (
                <div className="flex items-center space-x-2 text-gray-600">
                  <MapPin className="h-5 w-5" />
                  <span>{job.location}</span>
                </div>
              )}
              <div className="flex items-center space-x-2 text-gray-600">
                <Briefcase className="h-5 w-5" />
                <span>{job.jobType.replace('_', ' ')}</span>
              </div>
              {job.salaryRange && (
                <div className="flex items-center space-x-2 text-gray-600">
                  <DollarSign className="h-5 w-5" />
                  <span>{job.salaryRange}</span>
                </div>
              )}
              {job.applicationDeadline && (
                <div className="flex items-center space-x-2 text-gray-600">
                  <Clock className="h-5 w-5" />
                  <span>{new Date(job.applicationDeadline).toLocaleDateString()}</span>
                </div>
              )}
            </div>

            <div className="prose max-w-none mb-6">
              <h2 className="text-2xl font-semibold mb-4">Job Description</h2>
              <div className="text-gray-700 whitespace-pre-wrap">{job.description}</div>

              {job.requirements && (
                <>
                  <h2 className="text-2xl font-semibold mb-4 mt-8">Requirements</h2>
                  <div className="text-gray-700 whitespace-pre-wrap">{job.requirements}</div>
                </>
              )}
            </div>

            {session?.user.userType === 'JOB_SEEKER' && (
              <div className="mt-8 pt-6 border-t">
                {hasApplied ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="text-green-800 font-medium">
                      ✓ You have already applied for this position
                    </p>
                    <Link
                      href="/dashboard/applications"
                      className="text-green-700 hover:text-green-800 text-sm mt-2 inline-block"
                    >
                      View your applications →
                    </Link>
                  </div>
                ) : (
                  <>
                    {!showApplyForm ? (
                      <button
                        onClick={() => setShowApplyForm(true)}
                        className="bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors font-semibold"
                      >
                        Apply for this Position
                      </button>
                    ) : (
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Cover Letter (Optional)
                          </label>
                          <textarea
                            rows={6}
                            value={coverLetter}
                            onChange={(e) => setCoverLetter(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            placeholder="Tell us why you're interested in this position..."
                          />
                        </div>
                        <div className="flex space-x-4">
                          <button
                            onClick={handleApply}
                            disabled={applying}
                            className="bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 disabled:opacity-50 font-semibold"
                          >
                            {applying ? 'Submitting...' : 'Submit Application'}
                          </button>
                          <button
                            onClick={() => {
                              setShowApplyForm(false)
                              setCoverLetter('')
                            }}
                            className="px-8 py-3 border border-gray-300 rounded-lg hover:bg-gray-50"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            )}

            {!session && (
              <div className="mt-8 pt-6 border-t">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-blue-800 mb-3">
                    Please login or create an account to apply for this position.
                  </p>
                  <div className="flex space-x-4">
                    <Link
                      href="/auth/login"
                      className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700"
                    >
                      Login
                    </Link>
                    <Link
                      href="/auth/register"
                      className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                    >
                      Sign Up
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}
