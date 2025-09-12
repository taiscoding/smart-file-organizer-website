'use client'

import { useState } from 'react'
import { Mail, CheckCircle, AlertCircle } from 'lucide-react'

interface NewsletterSignupProps {
  variant?: 'inline' | 'modal' | 'footer'
  className?: string
}

export default function NewsletterSignup({ variant = 'inline', className = '' }: NewsletterSignupProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email.trim()) {
      setStatus('error')
      setMessage('Please enter your email address')
      return
    }

    if (!isValidEmail(email)) {
      setStatus('error')
      setMessage('Please enter a valid email address')
      return
    }

    setStatus('loading')
    
    try {
      // Simulate API call for now - in production, integrate with ConvertKit/Mailchimp
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Store locally for now (in production, this would go to your newsletter service)
      const subscribers = JSON.parse(localStorage.getItem('newsletter_subscribers') || '[]')
      const existingSubscriber = subscribers.find((sub: any) => sub.email === email.trim())
      
      if (existingSubscriber) {
        setStatus('error')
        setMessage('This email is already subscribed!')
        return
      }
      
      subscribers.push({
        email: email.trim(),
        subscribedAt: new Date().toISOString(),
        source: 'website_signup',
        interests: ['file-organization', 'productivity', 'automation']
      })
      
      localStorage.setItem('newsletter_subscribers', JSON.stringify(subscribers))
      
      setStatus('success')
      setMessage('Thanks for subscribing! Check your email for confirmation.')
      setEmail('')
      
      // Track successful signup
      console.log('Newsletter signup successful:', { email: email.trim(), variant })
      
    } catch (error) {
      console.error('Newsletter signup error:', error)
      setStatus('error')
      setMessage('Something went wrong. Please try again later.')
    }
  }

  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const resetStatus = () => {
    setStatus('idle')
    setMessage('')
  }

  if (variant === 'footer') {
    return (
      <div className={`max-w-md ${className}`}>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Stay Updated
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          Get notified about new features, productivity tips, and organization strategies.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="flex">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                if (status === 'error') resetStatus()
              }}
              placeholder="Enter your email"
              className="flex-1 px-3 py-2 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              disabled={status === 'loading'}
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="px-4 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {status === 'loading' ? (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <Mail className="w-4 h-4" />
              )}
            </button>
          </div>
          
          {message && (
            <div className={`flex items-center gap-2 text-sm ${
              status === 'success' ? 'text-green-600' : 'text-red-600'
            }`}>
              {status === 'success' ? (
                <CheckCircle className="w-4 h-4" />
              ) : (
                <AlertCircle className="w-4 h-4" />
              )}
              {message}
            </div>
          )}
        </form>
      </div>
    )
  }

  return (
    <div className={`bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 ${className}`}>
      <div className="text-center mb-6">
        <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
          <Mail className="w-6 h-6 text-blue-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Stay Organized & Informed
        </h3>
        <p className="text-gray-600">
          Get weekly productivity tips, feature updates, and early access to new organization tools.
          Join 1,200+ professionals already subscribed.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              if (status === 'error') resetStatus()
            }}
            placeholder="Enter your email address"
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            disabled={status === 'loading'}
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
          >
            {status === 'loading' ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Subscribing...
              </>
            ) : (
              <>
                <Mail className="w-4 h-4" />
                Subscribe
              </>
            )}
          </button>
        </div>
        
        {message && (
          <div className={`mt-4 flex items-center gap-2 text-sm justify-center ${
            status === 'success' ? 'text-green-600' : 'text-red-600'
          }`}>
            {status === 'success' ? (
              <CheckCircle className="w-4 h-4" />
            ) : (
              <AlertCircle className="w-4 h-4" />
            )}
            {message}
          </div>
        )}
      </form>

      <div className="mt-6 text-center text-xs text-gray-500">
        No spam, unsubscribe anytime. We respect your privacy.
      </div>
    </div>
  )
}