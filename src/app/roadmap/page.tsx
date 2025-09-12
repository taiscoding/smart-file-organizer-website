import Link from 'next/link'
import { CheckCircle, Clock, Lightbulb, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Roadmap - Smart File Organizer',
  description: 'See what\'s planned for Smart File Organizer, including upcoming features, research integrations, and community-requested enhancements.',
}

export default function RoadmapPage() {
  const roadmapItems = [
    {
      status: 'completed',
      version: 'v1.0',
      title: 'Core Organization System',
      description: 'Intelligent file categorization with medical, academic, and technical optimization',
      features: [
        'Universal folder organization',
        'Smart screenshot clustering',
        'Content-aware categorization',
        'Temporal relationship preservation',
        'Medical terminology recognition'
      ]
    },
    {
      status: 'in_progress',
      version: 'v1.1',
      title: 'Enhanced Intelligence',
      description: 'Machine learning improvements and expanded domain recognition',
      features: [
        'Improved medical specialization detection',
        'Academic discipline recognition',
        'Programming language-specific organization',
        'Learning from user corrections',
        'Confidence scoring for categorizations'
      ],
      eta: 'Q1 2025'
    },
    {
      status: 'planned',
      version: 'v1.2',
      title: 'Integration & Automation',
      description: 'Seamless workflow integration and automated scheduling',
      features: [
        'Cloud storage integration (Dropbox, Google Drive)',
        'Scheduled automatic organization',
        'Email attachment processing',
        'Browser download integration',
        'Mobile companion app'
      ],
      eta: 'Q2 2025'
    },
    {
      status: 'planned',
      version: 'v1.3',
      title: 'Collaborative Features',
      description: 'Team organization and shared intelligent systems',
      features: [
        'Team-shared organization rules',
        'Collaborative tagging systems',
        'Shared screenshot libraries',
        'Research group organization',
        'Clinical team file sharing'
      ],
      eta: 'Q3 2025'
    },
    {
      status: 'research',
      version: 'v2.0',
      title: 'Advanced AI Integration',
      description: 'Next-generation AI with deep content understanding',
      features: [
        'OCR and document content analysis',
        'Image content recognition',
        'Cross-language file organization',
        'Predictive organization suggestions',
        'Natural language organization queries'
      ],
      eta: 'Q4 2025'
    }
  ]

  const communityRequests = [
    { 
      title: 'Windows PowerShell Support', 
      votes: 47, 
      status: 'planned',
      description: 'Native Windows PowerShell scripts for organization'
    },
    { 
      title: 'Legal Document Organization', 
      votes: 23, 
      status: 'considering',
      description: 'Specialized categorization for legal professionals'
    },
    { 
      title: 'Academic Citation Integration', 
      votes: 31, 
      status: 'planned',
      description: 'Automatic organization based on citation metadata'
    },
    { 
      title: 'Custom Category Templates', 
      votes: 19, 
      status: 'in_progress',
      description: 'User-defined category templates for specific workflows'
    }
  ]

  type RoadmapStatus = 'completed' | 'in_progress' | 'planned' | 'research' | 'considering';

  const getStatusInfo = (status: RoadmapStatus) => {
    switch (status) {
      case 'completed':
        return { icon: CheckCircle, color: 'text-green-600 bg-green-50 border-green-200', label: 'Completed' }
      case 'in_progress':
        return { icon: Clock, color: 'text-blue-600 bg-blue-50 border-blue-200', label: 'In Progress' }
      case 'planned':
        return { icon: Clock, color: 'text-orange-600 bg-orange-50 border-orange-200', label: 'Planned' }
      case 'research':
        return { icon: Lightbulb, color: 'text-purple-600 bg-purple-50 border-purple-200', label: 'Research' }
      case 'considering':
        return { icon: Lightbulb, color: 'text-gray-600 bg-gray-50 border-gray-200', label: 'Considering' }
      default:
        return { icon: Clock, color: 'text-gray-600 bg-gray-50 border-gray-200', label: 'Unknown' }
    }
  }

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Smart File Organizer Roadmap
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our vision for the future of intelligent file organization, driven by research, 
            user feedback, and the evolving needs of knowledge workers.
          </p>
        </div>
      </section>

      {/* Roadmap Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Development Timeline
          </h2>

          <div className="space-y-8">
            {roadmapItems.map((item, index) => {
              const statusInfo = getStatusInfo(item.status)
              const StatusIcon = statusInfo.icon
              
              return (
                <div key={index} className="flex gap-8">
                  {/* Timeline indicator */}
                  <div className="flex flex-col items-center">
                    <div className={`w-12 h-12 rounded-full border-2 ${statusInfo.color} flex items-center justify-center`}>
                      <StatusIcon className="w-6 h-6" />
                    </div>
                    {index < roadmapItems.length - 1 && (
                      <div className="w-0.5 h-16 bg-gray-200 mt-4"></div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-8">
                    <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-sm font-semibold text-blue-600">{item.version}</span>
                        <span className={`px-3 py-1 text-xs font-medium rounded-full border ${statusInfo.color}`}>
                          {statusInfo.label}
                        </span>
                        {item.eta && (
                          <span className="text-sm text-gray-500">ETA: {item.eta}</span>
                        )}
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-gray-600 mb-6">{item.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {item.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Community Requests */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Community-Requested Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {communityRequests.map((request, index) => {
              const statusInfo = getStatusInfo(request.status)
              
              return (
                <div key={index} className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">{request.title}</h3>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="font-semibold text-blue-600">{request.votes}</span>
                      <span className="text-gray-500">votes</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4">{request.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className={`px-2 py-1 text-xs font-medium rounded border ${statusInfo.color}`}>
                      {statusInfo.label}
                    </span>
                    <Link href="https://github.com/taiscoding/smart-file-organizer/discussions" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                      Join Discussion →
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Research Priorities */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Research Priorities
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Cognitive Load Optimization</h3>
              <p className="text-gray-600">
                Advanced research into minimizing mental overhead through predictive organization 
                and attention-aware interfaces.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Domain Expertise Integration</h3>
              <p className="text-gray-600">
                Expanding intelligent categorization to new professional domains including 
                law, finance, engineering, and creative fields.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Temporal Intelligence</h3>
              <p className="text-gray-600">
                Advanced understanding of workflow timing patterns to preserve context 
                and improve predictive organization accuracy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contributing CTA */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Shape the Future of File Organization
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Your feedback and contributions directly influence our roadmap. 
            Join our community of researchers, developers, and professionals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="https://github.com/taiscoding/smart-file-organizer/discussions" className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-2">
              Join Discussions
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="https://github.com/taiscoding/smart-file-organizer/blob/main/CONTRIBUTING.md" className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
              Contribute Code
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}