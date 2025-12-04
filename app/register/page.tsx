import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-12 h-12 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-10 h-10">
                  <circle cx="50" cy="50" r="45" fill="#00A651" />
                  <text x="50" y="65" fontSize="40" fill="white" textAnchor="middle" fontWeight="bold">e</text>
                </svg>
              </div>
              <span className="text-2xl font-bold text-gray-900">eCitizen</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Create an Account</h1>
            <p className="text-gray-600">Join eCitizen to access all government services</p>
          </div>

          <form className="space-y-6 bg-white border border-gray-200 rounded-lg p-8">
            <div>
              <label htmlFor="idNumber" className="block text-sm font-medium text-gray-700 mb-2">
                ID Number *
              </label>
              <input
                type="text"
                id="idNumber"
                placeholder="Enter your ID number"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-ecitizen-green focus:border-transparent outline-none"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email address *
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-ecitizen-green focus:border-transparent outline-none"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="Enter your phone number"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-ecitizen-green focus:border-transparent outline-none"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password *
              </label>
              <input
                type="password"
                id="password"
                placeholder="Create a password"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-ecitizen-green focus:border-transparent outline-none"
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                Confirm Password *
              </label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirm your password"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-ecitizen-green focus:border-transparent outline-none"
              />
            </div>

            <div className="flex items-center">
              <input type="checkbox" id="terms" className="rounded border-gray-300 text-ecitizen-green focus:ring-ecitizen-green" />
              <label htmlFor="terms" className="ml-2 text-sm text-gray-700">
                I agree to the <Link href="/terms" className="text-ecitizen-green hover:underline">Terms & Conditions</Link> and <Link href="/privacy" className="text-ecitizen-green hover:underline">Privacy Policy</Link>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-ecitizen-green text-white py-3 rounded-md hover:bg-green-600 transition font-medium"
            >
              Create Account
            </button>

            <p className="text-center text-sm text-gray-600">
              Already have an account?{' '}
              <Link href="/login" className="text-ecitizen-green hover:underline font-medium">
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  )
}

