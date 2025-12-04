import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function HelpPage() {
  const faqs = [
    {
      question: 'How do I create an account?',
      answer: 'You can create an account by clicking on the "Register" button and providing your ID number, email, and phone number.',
    },
    {
      question: 'What services are available on eCitizen?',
      answer: 'eCitizen provides access to over 22,000 government services from 100+ Ministries, Counties, Departments and Agencies.',
    },
    {
      question: 'How do I reset my password?',
      answer: 'Click on "Forgot Password" on the login page and follow the instructions sent to your registered email.',
    },
    {
      question: 'Is my information secure?',
      answer: 'Yes, eCitizen uses secure encryption to protect your personal information and follows strict data protection protocols.',
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Help & Support</h1>
          
          <div className="space-y-6 mb-12">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
              <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Email Support</h3>
                  <p className="text-gray-600">support@ecitizen.go.ke</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Phone Support</h3>
                  <p className="text-gray-600">+254 20 222 2222</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Operating Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 8:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

