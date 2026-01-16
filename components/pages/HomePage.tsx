'use client'

import Layout from '@/components/layout/Layout'
import { useState, useEffect } from 'react'
import { Search, Filter, Briefcase, Users, Building2, TrendingUp } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [filters, setFilters] = useState({
    category: '',
    location: '',
    type: 'all' // all, job-seekers, companies
  })
  const [profiles, setProfiles] = useState<any>({ jobSeekers: [], companies: [] })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchProfiles()
  }, [filters])

  const fetchProfiles = async () => {
    try {
      setLoading(true)
      const params = new URLSearchParams({
        type: filters.type,
        ...(filters.category && { category: filters.category }),
        ...(filters.location && { location: filters.location }),
        ...(searchQuery && { search: searchQuery }),
      })
      const response = await fetch(`/api/profiles/public?${params}`)
      if (response.ok) {
        const data = await response.json()
        setProfiles(data)
      }
    } catch (error) {
      console.error('Error fetching profiles:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Connect with Opportunities
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100">
              Find your next career move or contract opportunity
            </p>
            
            {/* Search Bar */}
            <div className="max-w-3xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 bg-white rounded-lg p-2 shadow-lg">
                <div className="flex-1 flex items-center space-x-2">
                  <Search className="h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search by skills, job title, company..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 border-none outline-none text-gray-900"
                  />
                </div>
                <button
                  type="button"
                  onClick={fetchProfiles}
                  className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Search
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <Users className="h-12 w-12 text-primary-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-gray-900">1,000+</div>
              <div className="text-gray-600">Active Job Seekers</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <Building2 className="h-12 w-12 text-primary-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-gray-900">500+</div>
              <div className="text-gray-600">Companies</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <Briefcase className="h-12 w-12 text-primary-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-gray-900">200+</div>
              <div className="text-gray-600">Job Openings</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <TrendingUp className="h-12 w-12 text-primary-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-gray-900">95%</div>
              <div className="text-gray-600">Success Rate</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-600" />
              <span className="font-semibold">Filters:</span>
            </div>
            <select
              value={filters.type}
              onChange={(e) => setFilters({ ...filters, type: e.target.value })}
              className="border rounded-lg px-4 py-2"
            >
              <option value="all">All</option>
              <option value="job-seekers">Job Seekers</option>
              <option value="companies">Companies</option>
            </select>
            <select
              value={filters.category}
              onChange={(e) => setFilters({ ...filters, category: e.target.value })}
              className="border rounded-lg px-4 py-2"
            >
              <option value="">All Categories</option>
              <option value="technology">Technology</option>
              <option value="finance">Finance</option>
              <option value="healthcare">Healthcare</option>
              <option value="education">Education</option>
            </select>
            <input
              type="text"
              placeholder="Location"
              value={filters.location}
              onChange={(e) => setFilters({ ...filters, location: e.target.value })}
              className="border rounded-lg px-4 py-2"
            />
          </div>
        </div>
      </section>

      {/* Profiles Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Featured Profiles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Profile cards will be rendered here - placeholder for now */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
                <div>
                  <h3 className="font-semibold text-lg">Profile Name</h3>
                  <p className="text-gray-600">Job Title</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">Brief description of the profile...</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Skill 1</span>
                <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Skill 2</span>
              </div>
              <Link
                href="/profiles/1"
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                View Profile →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-primary-100">
            Join thousands of professionals and companies on our platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/auth/register"
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Create Account
            </Link>
            <Link
              href="/services"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}
