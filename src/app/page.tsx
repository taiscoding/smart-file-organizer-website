import HomePage from '../components/HomePage'
import NewsletterSignup from '../components/NewsletterSignup'

export default function Home() {
  return (
    <div>
      <HomePage />
      
      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <NewsletterSignup />
        </div>
      </section>
    </div>
  )
}