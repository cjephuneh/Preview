import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function CountiesPage() {
  const counties = [
    { code: '001', name: 'Mombasa County', link: '/counties/001-mombasa' },
    { code: '012', name: 'Meru County', link: '/counties/012-meru' },
    { code: '013', name: 'Tharaka-Nithi County', link: '/counties/013-tharaka-nithi' },
    { code: '014', name: 'Embu County', link: '/counties/014-embu' },
    { code: '034', name: 'Kajiado County', link: '/counties/034-kajiado' },
    { code: '036', name: 'Bomet County', link: '/counties/036-bomet' },
    { code: '042', name: 'Kisumu County', link: '/counties/042-kisumu' },
    { code: '002', name: 'Kwale County', link: '/counties/002-kwale' },
    { code: '003', name: 'Kilifi County', link: '/counties/003-kilifi' },
    { code: '004', name: 'Tana River County', link: '/counties/004-tana-river' },
    { code: '005', name: 'Lamu County', link: '/counties/005-lamu' },
    { code: '006', name: 'Taita-Taveta County', link: '/counties/006-taita-taveta' },
    { code: '007', name: 'Garissa County', link: '/counties/007-garissa' },
    { code: '008', name: 'Wajir County', link: '/counties/008-wajir' },
    { code: '009', name: 'Mandera County', link: '/counties/009-mandera' },
    { code: '010', name: 'Marsabit County', link: '/counties/010-marsabit' },
    { code: '011', name: 'Isiolo County', link: '/counties/011-isiolo' },
  ]

  return (
    <div classNameName="min-h-screen flex flex-col">
      <Header />
      
      <main classNameName="flex-1 bg-white py-12">
        <div classNameName="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 classNameName="text-4xl font-bold text-gray-900 mb-8">Counties</h1>
          
          <div classNameName="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {counties.map((county) => (
              <Link
                key={county.code}
                href={county.link}
                classNameName="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-ecitizen-green transition-all group"
              >
                <div classNameName="flex items-center justify-center mb-4">
                  <div classNameName="w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center border-2 border-gray-300">
                    <div classNameName="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-inner">
                      <span classNameName="text-xl font-bold text-gray-600">{county.code}</span>
                    </div>
                  </div>
                </div>
                <h3 classNameName="text-base font-semibold text-gray-900 text-center group-hover:text-ecitizen-green">
                  {county.code} - {county.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section classNameName="bg-gray-100 py-20">
        <div classNameName="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div classNameName="text-center mb-12">
            <h2 classNameName="text-4xl font-bold text-gray-900 mb-4">
              The single point of access for all government services
            </h2>
            <p classNameName="text-lg text-gray-600">
              Enjoy the convenience. Get information about government online services and make applications quickly and easily.
            </p>
          </div>
          
          <div classNameName="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div classNameName="bg-white p-8 rounded-lg">
              <div classNameName="w-16 h-16 mb-6 mx-auto flex items-center justify-center">
                <svg classNameName="w-16 h-16 text-ecitizen-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 classNameName="text-xl font-bold text-gray-900 mb-3 text-center">
                One Log-in, all government services
              </h3>
              <p classNameName="text-gray-600 text-center">
                All you need is one account. Citizens and residents can register with an ID number
              </p>
            </div>
            
            <div classNameName="bg-white p-8 rounded-lg">
              <div classNameName="w-16 h-16 mb-6 mx-auto flex items-center justify-center">
                <svg classNameName="w-16 h-16 text-ecitizen-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 classNameName="text-xl font-bold text-gray-900 mb-3 text-center">
                A single unified citizen's profile
              </h3>
              <p classNameName="text-gray-600 text-center">
                Your information as a citizen or resident from across government will be accessible through your profile
              </p>
            </div>
            
            <div classNameName="bg-white p-8 rounded-lg">
              <div classNameName="w-16 h-16 mb-6 mx-auto flex items-center justify-center">
                <svg classNameName="w-16 h-16 text-ecitizen-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 classNameName="text-xl font-bold text-gray-900 mb-3 text-center">
                Convenient service access
              </h3>
              <p classNameName="text-gray-600 text-center">
                Search, apply and pay for services online, receive progress notifications and access all your downloads in one place
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

