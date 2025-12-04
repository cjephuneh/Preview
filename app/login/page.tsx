import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 flex">
        {/* Left Panel - Login Form */}
        <div className="w-full md:w-1/2 bg-white flex items-center justify-center p-8">
          <div className="w-full max-w-md">
            <div className="mb-8">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-12 h-12 flex items-center justify-center">
                  <svg viewBox="0 0 100 100" className="w-10 h-10">
                    <circle cx="50" cy="50" r="45" fill="#00A651" />
                    <text x="50" y="65" fontSize="40" fill="white" textAnchor="middle" fontWeight="bold">e</text>
                  </svg>
                </div>
                <span className="text-2xl font-bold text-gray-900">eCitizen</span>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">One Login</h1>
              <p className="text-lg text-gray-600">All Government Services.</p>
            </div>

            <form className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email address or ID number *
                </label>
                <input
                  type="text"
                  id="email"
                  placeholder="Enter your email or ID number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-ecitizen-green focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password *
                </label>
                <div className="relative">
                  <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-ecitizen-green focus:border-transparent outline-none pr-12"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="rounded border-gray-300 text-ecitizen-green focus:ring-ecitizen-green" />
                  <span className="ml-2 text-sm text-gray-700">Remember for 30 days</span>
                </label>
                <Link href="#" className="text-sm text-ecitizen-green hover:underline">
                  Forgot Password
                </Link>
              </div>

              <button
                type="submit"
                className="w-full bg-ecitizen-green text-white py-3 rounded-md hover:bg-green-600 transition font-medium"
              >
                Sign In
              </button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or continue with</span>
                </div>
              </div>

              <button
                type="button"
                className="w-full bg-ecitizen-green text-white py-3 rounded-md hover:bg-green-600 transition font-medium flex items-center justify-center space-x-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
                <span>Sign in with Digital ID</span>
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-gray-600">
              Don't have an account?{' '}
              <Link href="/register" className="text-ecitizen-green hover:underline font-medium">
                Sign up
              </Link>
            </p>
          </div>
        </div>

        {/* Right Panel - Promotional Image */}
        <div className="hidden md:flex w-1/2 bg-gradient-to-br from-teal-500 via-teal-400 to-teal-500 relative overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="absolute inset-0 flex items-center justify-center p-12 z-10">
            <div className="text-center text-white">
              <p className="text-2xl font-semibold mb-4 bg-white bg-opacity-25 backdrop-blur-sm rounded-2xl px-8 py-6 inline-block shadow-lg">
                Government services now available at your fingertips.
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white bg-opacity-10 rounded-full -mr-32 -mb-32"></div>
          <div className="absolute top-0 left-0 w-48 h-48 bg-white bg-opacity-10 rounded-full -ml-24 -mt-24"></div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

