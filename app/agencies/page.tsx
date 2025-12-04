import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function AgenciesPage() {
  const agencies = [
    {
      name: 'National Transport And Safety Authority (NTSA) (New)',
      description: 'Dedicated platform for Application and Renewal of Driving Licence, Driving School Management and PSV related services',
      link: '#',
    },
    {
      name: 'National Transport And Safety Authority (NTSA) (Old)',
      description: 'National Transport and Safety Authority Act (NTSA) is a statutory body established by the National Transport and...',
      link: '#',
    },
    {
      name: 'Directorate of Immigration Services (New Applications)',
      description: 'Utilize DIS\'s online services for efficient ePassport, temporary permit, and eVisa applications.',
      link: '#',
    },
    {
      name: 'Kenya Wildlife Service',
      description: 'Explore. Experience. Conserve. Kenya Parks',
      link: '#',
    },
    {
      name: 'Directorate of Criminal Investigations',
      description: 'Access the Directorate of Criminal Investigations\' online platform for police clearance certificate services and more.',
      link: '#',
    },
    {
      name: 'Business Registration Services',
      description: 'Leverage BRS\'s digital platform for simplified and efficient business registration procedures.',
      link: '#',
    },
    {
      name: 'Kenya Revenue Authority',
      description: 'To enhance mobilisation of government revenue and to facilitate growth in economic activities and trade by ensuring....',
      link: '#',
    },
    {
      name: 'Registrar Of Marriages',
      description: 'Utilize OAG\'s online services for efficient marriage registration and other legal services.',
      link: '#',
    },
    {
      name: 'Civil Registration Services',
      description: 'Access CRS\'s online platform to conveniently apply and pay for birth and death registration services.',
      link: '#',
    },
    {
      name: 'Boma Yangu',
      description: 'The Boma Yangu platform is the gateway into the Affordable Housing Program. Start your journey towards home ownership.',
      link: '#',
    },
    {
      name: 'National Council for Persons with Disabilities(NCPWD)',
      description: 'To promote and protect equalization of opportunities and realization of human rights for PWDs to live descent livelihoods.',
      link: '#',
    },
    {
      name: 'Kenya Bureau of Standards (KEBS)',
      description: 'The Kenya Bureau of Standards (KEBS) has remained the premier government agency for the provision of Standards,...',
      link: '#',
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-4xl font-bold text-gray-900">Agencies</h1>
            <Link href="#" className="text-ecitizen-green hover:underline">View all agencies</Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agencies.map((agency, index) => (
              <Link
                key={index}
                href={agency.link}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-ecitizen-green transition-all group relative"
              >
                <div className="absolute top-4 right-4">
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-ecitizen-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                <div className="w-16 h-16 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-400">
                    {agency.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-ecitizen-green">
                  {agency.name}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-3">
                  {agency.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

