'use client'

import { useState, useEffect } from 'react'
import { ThumbsUp, MessageCircle, Plus, Lightbulb, Clock, CheckCircle, Star, Users } from 'lucide-react'
import Link from 'next/link'

interface FeatureRequest {
  id: number
  title: string
  description: string
  category: 'performance' | 'ui-ux' | 'features' | 'integration' | 'medical' | 'research'
  votes: number
  status: 'open' | 'in-progress' | 'completed'
  submittedBy: string
  submittedDate: string
  hasVoted: boolean
}

const mockRequests: FeatureRequest[] = [
  {
    id: 1,
    title: "Medical Image DICOM Support",
    description: "Add native support for organizing DICOM medical imaging files with metadata parsing for patient ID, study date, and modality type.",
    category: 'medical',
    votes: 47,
    status: 'in-progress',
    submittedBy: "med_student_2024",
    submittedDate: "2024-11-15",
    hasVoted: false
  },
  {
    id: 2,
    title: "Research Paper Citation Extraction",
    description: "Automatically extract and organize research papers by journal, publication year, and author. Create citation-based folder structures.",
    category: 'research',
    votes: 34,
    status: 'open',
    submittedBy: "researcher_phd",
    submittedDate: "2024-11-12",
    hasVoted: false
  },
  {
    id: 3,
    title: "Batch Processing Progress Bar",
    description: "Show detailed progress when organizing large directories (>1000 files) with estimated time remaining and current file being processed.",
    category: 'performance',
    votes: 28,
    status: 'open',
    submittedBy: "dev_user_99",
    submittedDate: "2024-11-10",
    hasVoted: false
  },
  {
    id: 4,
    title: "Custom Rule Builder Interface",
    description: "Visual rule builder for creating custom organization patterns without editing config files. Drag-and-drop interface for complex logic.",
    category: 'ui-ux',
    votes: 23,
    status: 'open',
    submittedBy: "ux_designer",
    submittedDate: "2024-11-08",
    hasVoted: false
  },
  {
    id: 5,
    title: "Google Drive Integration",
    description: "Organize files directly in Google Drive with OAuth authentication. Respect Drive's sharing permissions and collaborative features.",
    category: 'integration',
    votes: 19,
    status: 'completed',
    submittedBy: "cloud_user",
    submittedDate: "2024-10-22",
    hasVoted: false
  }
]

export default function CommunityPage() {
  const [requests, setRequests] = useState<FeatureRequest[]>(mockRequests)
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [showSubmitForm, setShowSubmitForm] = useState(false)
  const [newRequest, setNewRequest] = useState({
    title: '',
    description: '',
    category: 'features' as const
  })

  const categories = [
    { id: 'all', name: 'All Features', count: requests.length },
    { id: 'medical', name: 'Medical', count: requests.filter(r => r.category === 'medical').length },
    { id: 'research', name: 'Research', count: requests.filter(r => r.category === 'research').length },
    { id: 'performance', name: 'Performance', count: requests.filter(r => r.category === 'performance').length },
    { id: 'ui-ux', name: 'UI/UX', count: requests.filter(r => r.category === 'ui-ux').length },
    { id: 'integration', name: 'Integration', count: requests.filter(r => r.category === 'integration').length },
    { id: 'features', name: 'Features', count: requests.filter(r => r.category === 'features').length }
  ]

  const filteredRequests = selectedCategory === 'all' 
    ? requests 
    : requests.filter(request => request.category === selectedCategory)

  const getStatusInfo = (status: FeatureRequest['status']) => {
    switch (status) {
      case 'completed':
        return { icon: CheckCircle, color: 'text-green-600 bg-green-50 border-green-200', label: 'Completed' }
      case 'in-progress':
        return { icon: Clock, color: 'text-blue-600 bg-blue-50 border-blue-200', label: 'In Progress' }
      default:
        return { icon: Lightbulb, color: 'text-gray-600 bg-gray-50 border-gray-200', label: 'Open' }
    }
  }

  const getCategoryColor = (category: FeatureRequest['category']) => {
    const colors = {
      'medical': 'bg-red-100 text-red-800',
      'research': 'bg-blue-100 text-blue-800',
      'performance': 'bg-yellow-100 text-yellow-800',
      'ui-ux': 'bg-purple-100 text-purple-800',
      'integration': 'bg-green-100 text-green-800',
      'features': 'bg-gray-100 text-gray-800'
    }
    return colors[category]
  }

  const handleVote = (id: number) => {
    setRequests(prev => prev.map(request => 
      request.id === id 
        ? { ...request, votes: request.hasVoted ? request.votes - 1 : request.votes + 1, hasVoted: !request.hasVoted }
        : request
    ))
  }

  const handleSubmitRequest = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!newRequest.title.trim() || !newRequest.description.trim()) {
      alert('Please fill in all fields')
      return
    }

    const request: FeatureRequest = {
      id: Math.max(...requests.map(r => r.id)) + 1,
      title: newRequest.title,
      description: newRequest.description,
      category: newRequest.category,
      votes: 1,
      status: 'open',
      submittedBy: 'anonymous_user',
      submittedDate: new Date().toISOString().split('T')[0],
      hasVoted: true
    }

    setRequests(prev => [request, ...prev])
    setNewRequest({ title: '', description: '', category: 'features' })
    setShowSubmitForm(false)
    
    // In production, this would POST to an API
    console.log('New feature request:', request)
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Community Features
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Help shape the future of Smart File Organizer. Submit feature requests, vote on priorities, 
            and see what's being built based on community needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => setShowSubmitForm(true)}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              <Plus className="w-5 h-5" />
              Request Feature
            </button>
            <Link
              href="https://github.com/taiscoding/smart-file-organizer/discussions"
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Join Discussion
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-blue-600 mb-2">{requests.length}</div>
            <div className="text-gray-600">Total Requests</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-green-600 mb-2">
              {requests.filter(r => r.status === 'completed').length}
            </div>
            <div className="text-gray-600">Completed</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-yellow-600 mb-2">
              {requests.filter(r => r.status === 'in-progress').length}
            </div>
            <div className="text-gray-600">In Progress</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-purple-600 mb-2">
              {requests.reduce((sum, r) => sum + r.votes, 0)}
            </div>
            <div className="text-gray-600">Total Votes</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors flex justify-between items-center ${
                      selectedCategory === category.id 
                        ? 'bg-blue-50 text-blue-600 border border-blue-200' 
                        : 'hover:bg-gray-50 text-gray-700'
                    }`}
                  >
                    <span>{category.name}</span>
                    <span className="text-sm text-gray-500">{category.count}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="space-y-6">
              {filteredRequests
                .sort((a, b) => {
                  // Sort by status first (in-progress, open, completed), then by votes
                  const statusOrder = { 'in-progress': 0, 'open': 1, 'completed': 2 }
                  if (statusOrder[a.status] !== statusOrder[b.status]) {
                    return statusOrder[a.status] - statusOrder[b.status]
                  }
                  return b.votes - a.votes
                })
                .map(request => {
                  const statusInfo = getStatusInfo(request.status)
                  const StatusIcon = statusInfo.icon
                  
                  return (
                    <div key={request.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-lg font-semibold text-gray-900">{request.title}</h3>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(request.category)}`}>
                              {request.category}
                            </span>
                          </div>
                          <p className="text-gray-600 mb-3">{request.description}</p>
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span>by {request.submittedBy}</span>
                            <span>{request.submittedDate}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-4">
                          <button
                            onClick={() => handleVote(request.id)}
                            className={`flex items-center gap-2 px-3 py-1 rounded-lg border transition-colors ${
                              request.hasVoted
                                ? 'bg-blue-50 border-blue-200 text-blue-600'
                                : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                            }`}
                          >
                            <ThumbsUp className="w-4 h-4" />
                            <span>{request.votes}</span>
                          </button>
                          
                          <div className={`flex items-center gap-2 px-3 py-1 rounded-lg border ${statusInfo.color}`}>
                            <StatusIcon className="w-4 h-4" />
                            <span className="text-sm font-medium">{statusInfo.label}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
            </div>
          </div>
        </div>

        {/* Submit Form Modal */}
        {showSubmitForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Submit Feature Request</h2>
                
                <form onSubmit={handleSubmitRequest} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Feature Title *
                    </label>
                    <input
                      type="text"
                      value={newRequest.title}
                      onChange={(e) => setNewRequest(prev => ({ ...prev, title: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Brief, descriptive title for the feature"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Category
                    </label>
                    <select
                      value={newRequest.category}
                      onChange={(e) => setNewRequest(prev => ({ ...prev, category: e.target.value as any }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="features">General Features</option>
                      <option value="medical">Medical</option>
                      <option value="research">Research</option>
                      <option value="performance">Performance</option>
                      <option value="ui-ux">UI/UX</option>
                      <option value="integration">Integration</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Detailed Description *
                    </label>
                    <textarea
                      value={newRequest.description}
                      onChange={(e) => setNewRequest(prev => ({ ...prev, description: e.target.value }))}
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Describe the feature in detail. What problem does it solve? How should it work? Include use cases and examples."
                      required
                    />
                  </div>

                  <div className="flex justify-end gap-3 pt-4">
                    <button
                      type="button"
                      onClick={() => setShowSubmitForm(false)}
                      className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Submit Request
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}


