import Layout from '@/components/layout/Layout'
import { Building2, Users, Target, Award } from 'lucide-react'

export default function AboutPage() {
  return (
    <Layout>
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Prinstine Group</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Connecting talent with opportunity through innovative technology and personalized service
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-700 mb-4">
                Prinstine Group of Companies is dedicated to creating a comprehensive platform
                that bridges the gap between job seekers, companies seeking contracts, and employers
                looking for talent. We believe in empowering individuals and organizations by
                providing transparent, efficient, and accessible employment and contracting solutions.
              </p>
              <p className="text-gray-700">
                Our platform serves as a trusted intermediary, ensuring that all parties benefit
                from meaningful connections and opportunities.
              </p>
            </div>
            <div className="bg-primary-50 p-8 rounded-lg">
              <Building2 className="h-16 w-16 text-primary-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Building Connections</h3>
              <p className="text-gray-600">
                We facilitate connections that drive career growth and business success.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Users className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">People First</h3>
              <p className="text-gray-600">
                We prioritize the needs and aspirations of our users, ensuring every interaction
                adds value to their journey.
              </p>
            </div>
            <div className="text-center">
              <Target className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in everything we do, from platform design to customer service.
              </p>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Integrity</h3>
              <p className="text-gray-600">
                We operate with transparency and honesty, building trust through consistent actions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">What We Offer</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-primary-600 pl-6">
              <h3 className="text-xl font-semibold mb-2">For Job Seekers</h3>
              <p className="text-gray-700">
                Create comprehensive profiles showcasing your skills, experience, and education.
                Connect directly with employers or through our intermediary services.
              </p>
            </div>
            <div className="border-l-4 border-primary-600 pl-6">
              <h3 className="text-xl font-semibold mb-2">For Companies</h3>
              <p className="text-gray-700">
                Showcase your company and services to organizations seeking contract opportunities.
                Access a network of potential clients and projects.
              </p>
            </div>
            <div className="border-l-4 border-primary-600 pl-6">
              <h3 className="text-xl font-semibold mb-2">For Employers</h3>
              <p className="text-gray-700">
                Find the right talent for your organization. Post job openings and connect with
                qualified candidates through our comprehensive platform.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
