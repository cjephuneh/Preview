import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function NationalPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">National Services</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/agencies" className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-ecitizen-green transition-all group">
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-ecitizen-green">
                View All Agencies
              </h3>
              <p className="text-sm text-gray-600">
                Access services from all government agencies
              </p>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

