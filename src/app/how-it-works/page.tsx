import { CheckCircle, Download, FolderOpen, Brain, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'How It Works - Smart File Organizer',
  description: 'Learn how Smart File Organizer uses intelligent categorization and temporal clustering to automatically organize your digital files.',
}

export default function HowItWorksPage() {
  const steps = [
    {
      number: "01",
      title: "Install & Run",
      description: "Download and run the setup script. Creates organized folder structure in seconds.",
      details: ["One-command installation", "Automatic folder creation", "No configuration required"],
      icon: Download
    },
    {
      number: "02", 
      title: "Intelligent Analysis",
      description: "AI analyzes your files using content keywords, file context, and timing patterns.",
      details: ["Medical terminology recognition", "Academic content detection", "Professional workflow awareness"],
      icon: Brain
    },
    {
      number: "03",
      title: "Smart Organization", 
      description: "Files are categorized into logical folders while preserving relationships.",
      details: ["Content-aware categorization", "Temporal clustering", "Duplicate handling"],
      icon: FolderOpen
    },
    {
      number: "04",
      title: "Continuous Learning",
      description: "System learns from your patterns and improves organization over time.",
      details: ["Pattern recognition", "Workflow adaptation", "Context preservation"],
      icon: CheckCircle
    }
  ]

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How Smart File Organizer Works
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Four simple steps to transform your digital chaos into organized clarity. 
            No manual sorting, no complex rules—just intelligent automation.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {steps.map((step, index) => (
              <div key={step.number} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className="bg-blue-600 text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mr-4">
                      {step.number}
                    </div>
                    <step.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-lg text-gray-600 mb-6">
                    {step.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-center text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`bg-gray-100 rounded-xl p-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                    <div className="text-gray-500 text-center">
                      <step.icon className="w-16 h-16 mx-auto mb-4" />
                      <div className="text-lg font-semibold">Step {step.number}</div>
                      <div className="text-sm">Interactive Demo</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Experience Intelligent Organization?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Download Smart File Organizer and see your digital chaos transform into organized clarity in minutes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://github.com/taiscoding/smart-file-organizer" className="btn-primary flex items-center gap-2">
              <Download className="w-5 h-5" />
              Download Free
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/blog" className="btn-secondary">
              Read Success Stories
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}