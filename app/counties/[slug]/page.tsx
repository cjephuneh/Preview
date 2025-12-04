import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { notFound } from 'next/navigation'

const countyData: { [key: string]: { code: string; name: string; services: number; overview: string; image?: string } } = {
  '013-tharaka-nithi': {
    code: '013',
    name: 'Tharaka-Nithi County',
    services: 13,
    overview: 'Tharaka-Nithi County is located in the eastern part of Kenya and is characterized by its hilly terrain and diverse agro-ecological zones, ranging from highlands to lowlands. The county\'s economy is largely driven by agriculture, with crops such as tea, coffee, maize, beans, and potatoes being grown for both local consumption and export. Other economic activities in the county include livestock rearing, beekeeping, and mining of minerals such as iron ore, gypsum, and limestone. The county is also home to the Chuka University, which is a major institution of higher learning in the region.',
  },
  '034-kajiado': {
    code: '034',
    name: 'Kajiado County',
    services: 8,
    overview: 'Kajiado County is located in the Rift Valley region of Kenya. The county is known for its diverse landscapes, from savannah grasslands to semi-arid areas. The economy is primarily based on livestock keeping, tourism, and agriculture.',
  },
  '001-mombasa': {
    code: '001',
    name: 'Mombasa County',
    services: 15,
    overview: 'Mombasa County is a coastal county in Kenya, known for its port city and tourism industry. The county serves as a major economic hub for the region.',
  },
}

const services = [
  'Liquor License Category Changes',
  'Gaming License Application Fees',
  'Casino Operating License Fee',
  'Single Business Permit Penalty',
  'On-street Parking',
  'Impounding Fees',
  'Livestock Sale Fees',
  'Amusement Services',
]

export default function CountyDetailPage({ params }: { params: { slug: string } }) {
  const county = countyData[params.slug]
  
  if (!county) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-white">
        {/* County Header */}
        <div className="bg-gray-50 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-gray-600">{county.code}</span>
              </div>
              <h1 className="text-3xl font-bold text-gray-900">{county.code} - {county.name}</h1>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="w-full h-96 bg-gradient-to-br from-gray-200 to-gray-300 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-gray-400 text-lg">County Image Placeholder</span>
          </div>
        </div>

        {/* Info Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">TOTAL SERVICES</h2>
              <p className="text-6xl font-bold text-ecitizen-green">{county.services}</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">OVERVIEW</h2>
              <p className="text-gray-700 leading-relaxed">{county.overview}</p>
            </div>
          </div>

          {/* Services Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">SERVICES</h2>
              <div className="flex-1 max-w-md ml-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search services"
                    className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-ecitizen-green focus:border-transparent outline-none"
                  />
                  <svg className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-gray-50 border border-gray-200 rounded-lg p-4 hover:bg-gray-100 hover:border-ecitizen-green transition cursor-pointer flex items-center justify-between"
                >
                  <span className="text-gray-900 font-medium">{service}</span>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

