import Layout from '@/components/layout/Layout'
import Link from 'next/link'
import { Check, User, Building2, Briefcase, DollarSign, Shield } from 'lucide-react'

export default function ServicesPage() {
  return (
    <Layout>
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Comprehensive solutions for job seekers, companies, and employers
          </p>
        </div>
      </div>

      {/* Subscription Packages */}
      <section id="packages" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Subscription Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Direct Package */}
            <div className="border-2 border-primary-600 rounded-lg p-8 bg-white shadow-lg">
              <div className="text-center mb-6">
                <DollarSign className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Direct Package</h3>
                <div className="text-4xl font-bold text-primary-600 mb-2">$10</div>
                <p className="text-gray-600">per year</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Full profile showcase to employers</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Direct contact with employers</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Priority in search results</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Access to all job postings</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Full profile details visible</span>
                </li>
              </ul>
              <Link
                href="/auth/register"
                className="block w-full bg-primary-600 text-white text-center py-3 rounded-lg hover:bg-primary-700 transition-colors"
              >
                Get Started
              </Link>
            </div>

            {/* In-Direct Package */}
            <div className="border-2 border-gray-300 rounded-lg p-8 bg-white shadow-lg">
              <div className="text-center mb-6">
                <Shield className="h-12 w-12 text-gray-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">In-Direct Package</h3>
                <div className="text-4xl font-bold text-gray-600 mb-2">$5+</div>
                <p className="text-gray-600">minimum per year</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Limited profile showcase</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Contact through Prinstine Group</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Basic profile details visible</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Access to selected job postings</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Privacy protection</span>
                </li>
              </ul>
              <Link
                href="/auth/register"
                className="block w-full bg-gray-600 text-white text-center py-3 rounded-lg hover:bg-gray-700 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services by User Type */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Job Seekers */}
            <div id="job-seekers" className="bg-white rounded-lg p-6 shadow-md">
              <User className="h-10 w-10 text-primary-600 mb-4" />
              <h3 className="text-xl font-bold mb-4">For Job Seekers</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Create comprehensive profiles</li>
                <li>• Showcase skills and experience</li>
                <li>• Connect with employers</li>
                <li>• Apply to job openings</li>
                <li>• Track applications</li>
              </ul>
            </div>

            {/* Companies */}
            <div id="companies" className="bg-white rounded-lg p-6 shadow-md">
              <Building2 className="h-10 w-10 text-primary-600 mb-4" />
              <h3 className="text-xl font-bold mb-4">For Companies</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Showcase company profile</li>
                <li>• Find contract opportunities</li>
                <li>• Connect with organizations</li>
                <li>• Post service offerings</li>
                <li>• Build business network</li>
              </ul>
            </div>

            {/* Employers */}
            <div id="employers" className="bg-white rounded-lg p-6 shadow-md">
              <Briefcase className="h-10 w-10 text-primary-600 mb-4" />
              <h3 className="text-xl font-bold mb-4">For Employers</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Post job openings</li>
                <li>• Browse candidate profiles</li>
                <li>• Find contract services</li>
                <li>• Manage applications</li>
                <li>• Contact candidates</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
