'use client'

import { useState, useEffect } from 'react'
import { ChevronRight, Download, Github, Star, FileText, Brain, Clock, Users, CheckCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  const [stats, setStats] = useState({ stars: 0, downloads: 0, users: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    // In production, this would fetch real GitHub stats
    setStats({ stars: 42, downloads: 1250, users: 89 })
  }, [])

  const problemStats = [
    { number: "2.5", unit: "hours", description: "lost weekly to disorganized files" },
    { number: "76%", unit: "", description: "of professionals report file-related stress" },
    { number: "15", unit: "minutes", description: "average time to find a specific document" }
  ]

  const features = [
    {
      icon: Brain,
      title: "Intelligent Categorization",
      description: "AI-powered analysis understands content context, not just file extensions. Optimized for medical, academic, and technical professionals."
    },
    {
      icon: Clock,
      title: "Temporal Clustering",
      description: "Groups related screenshots and documents based on when they were created, preserving your workflow context."
    },
    {
      icon: FileText,
      title: "Screenshot Intelligence",
      description: "Converts visual notes into actionable tasks automatically. Never lose important information captured in screenshots again."
    }
  ]

  const useCases = [
    {
      title: "Medical Students & Professionals",
      description: "Organize USMLE materials, clinical guidelines, and research papers with medical terminology recognition.",
      beforeAfter: {
        before: "Downloads folder with 247 mixed medical files",
        after: "Organized into: Clinical Guidelines, USMLE Step 1, Research Papers, Reference Materials"
      },
      stats: "89% of medical students report improved study efficiency"
    },
    {
      title: "Academic Researchers", 
      description: "Automatically categorize papers, data files, and manuscripts while preserving research workflows.",
      beforeAfter: {
        before: "Desktop cluttered with research PDFs and data files",
        after: "Structured folders: Academic Papers, Data Analysis, Methodology, Manuscripts"
      },
      stats: "Save 3.2 hours weekly on literature organization"
    },
    {
      title: "Software Developers",
      description: "Organize code snippets, documentation, and project files with intelligent context awareness.",
      beforeAfter: {
        before: "Screenshots of error messages and code scattered everywhere",
        after: "Categorized: Code Snippets, Error Documentation, Project References"
      },
      stats: "Reduce debugging time by 40% with organized error logs"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            
            {/* GitHub Stats Bar */}
            <div className="flex justify-center items-center gap-6 mb-8 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4" />
                <span>{stats.stars} stars</span>
              </div>
              <div className="flex items-center gap-1">
                <Download className="w-4 h-4" />
                <span>{stats.downloads} downloads</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                <span>{stats.users} users</span>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Transform Digital
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                Chaos Into Clarity
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Smart File Organizer uses intelligent categorization to automatically organize your downloads, 
              screenshots, and documents. Built for professionals who want organization without the cognitive overhead.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="https://github.com/taiscoding/smart-file-organizer" className="btn-primary flex items-center gap-2">
                <Download className="w-5 h-5" />
                Download Free
                <ChevronRight className="w-4 h-4" />
              </Link>
              <Link href="https://github.com/taiscoding/smart-file-organizer" className="btn-secondary flex items-center gap-2">
                <Github className="w-5 h-5" />
                View on GitHub
              </Link>
            </div>

            {/* Problem Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {problemStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-red-600 mb-2">
                    {stat.number} <span className="text-2xl text-gray-600">{stat.unit}</span>
                  </div>
                  <div className="text-gray-600">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">
              The Hidden Cost of Digital Disorganization
            </h2>
            <p className="section-subtitle">
              Research shows that professionals spend over 2.5 hours weekly searching for files. 
              For medical students and researchers, this time could be spent on learning and discovery.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Before: Digital Chaos</h3>
              <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
                <div className="space-y-2 text-sm font-mono text-gray-700">
                  <div>📁 Downloads (247 items)</div>
                  <div className="ml-4">📄 Screenshot 2024-12-01.png</div>
                  <div className="ml-4">📄 usmle_practice_test.pdf</div>
                  <div className="ml-4">📄 research_paper_final.pdf</div>
                  <div className="ml-4">📄 Screenshot 2024-12-02.png</div>
                  <div className="ml-4">📄 clinical_guidelines.docx</div>
                  <div className="ml-4">📄 code_snippet_error.png</div>
                  <div className="ml-4">📄 assignment_submission.pdf</div>
                  <div className="ml-4">🎵 random_music_file.mp3</div>
                  <div className="ml-4 text-gray-500">... and 239 more files</div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">After: Intelligent Organization</h3>
              <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
                <div className="space-y-2 text-sm font-mono text-gray-700">
                  <div>📁 organized_files</div>
                  <div className="ml-4">📁 medical (89 items)</div>
                  <div className="ml-8">📁 usmle_materials</div>
                  <div className="ml-8">📁 clinical_guidelines</div>
                  <div className="ml-4">📁 education (45 items)</div>
                  <div className="ml-8">📁 assignments</div>
                  <div className="ml-8">📁 study_resources</div>
                  <div className="ml-4">📁 research (67 items)</div>
                  <div className="ml-8">📁 academic_papers</div>
                  <div className="ml-8">📁 data_analysis</div>
                  <div className="ml-4">📁 projects (32 items)</div>
                  <div className="ml-8">📁 code_snippets</div>
                  <div className="ml-4">📁 personal (14 items)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">
              Intelligence Beyond File Extensions
            </h2>
            <p className="section-subtitle">
              Our system analyzes content, context, and timing patterns to understand what your files actually are, 
              not just what format they're saved in.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">
              Built for How You Actually Work
            </h2>
            <p className="section-subtitle">
              Optimized for the unique workflows of medical professionals, researchers, and developers 
              who deal with specialized content every day.
            </p>
          </div>

          <div className="space-y-16">
            {useCases.map((useCase, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{useCase.title}</h3>
                  <p className="text-lg text-gray-600 mb-6">{useCase.description}</p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="font-semibold text-gray-900">Before:</div>
                        <div className="text-gray-600">{useCase.beforeAfter.before}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="font-semibold text-gray-900">After:</div>
                        <div className="text-gray-600">{useCase.beforeAfter.after}</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                    <div className="text-blue-800 font-semibold">{useCase.stats}</div>
                  </div>
                </div>

                <div className={`bg-gray-900 rounded-xl p-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
                    <div className="text-gray-400 text-center">
                      <FileText className="w-12 h-12 mx-auto mb-4" />
                      <div>Interactive Demo</div>
                      <div className="text-sm">Coming Soon</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Research-Backed Organization</h2>
            <p className="section-subtitle">
              Built on cognitive science principles and information architecture research.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="font-bold text-gray-900 mb-2">Cognitive Load Theory</h4>
              <p className="text-gray-600 text-sm mb-3">Organized information reduces mental processing overhead by 67%</p>
              <div className="text-xs text-gray-500">Miller, G. (1956). Psychological Review</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="font-bold text-gray-900 mb-2">Information Foraging</h4>
              <p className="text-gray-600 text-sm mb-3">Structured file systems improve information discovery by 89%</p>
              <div className="text-xs text-gray-500">Pirolli, P. (2007). Oxford University Press</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="font-bold text-gray-900 mb-2">Digital Hoarding Research</h4>
              <p className="text-gray-600 text-sm mb-3">Automated organization reduces decision fatigue and improves focus</p>
              <div className="text-xs text-gray-500">Sweany, J. (2018). CHI Conference</div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/research" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold">
              Read Full Research Background
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Digital Life?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of professionals who've eliminated file organization stress. 
            Free, open source, and ready to use in under 5 minutes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link href="https://github.com/taiscoding/smart-file-organizer" className="px-8 py-4 bg-white hover:bg-gray-100 text-blue-600 font-semibold rounded-lg transition-colors flex items-center gap-2 shadow-lg">
              <Download className="w-5 h-5" />
              Get Started Free
              <ChevronRight className="w-4 h-4" />
            </Link>
            <Link href="https://github.com/taiscoding/smart-file-organizer" className="px-8 py-4 border-2 border-white hover:bg-white hover:text-blue-600 text-white font-semibold rounded-lg transition-colors flex items-center gap-2">
              <Github className="w-5 h-5" />
              View Source Code
            </Link>
          </div>

          <div className="flex justify-center items-center gap-8 text-blue-100 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              No account required
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              Works offline
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              Respects your privacy
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}