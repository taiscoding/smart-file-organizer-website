'use client'

import { useState, useEffect } from 'react'
import { FileText, Image, Code, BookOpen, Activity, CheckCircle } from 'lucide-react'

interface FileItem {
  name: string
  type: 'document' | 'image' | 'code' | 'research' | 'medical'
  size: string
  originalPath: string
  newPath: string
  confidence: number
}

const demoFiles: FileItem[] = [
  { 
    name: 'chest_xray_001.png', 
    type: 'medical', 
    size: '2.1 MB', 
    originalPath: '/Downloads', 
    newPath: '/Medical/Radiology/Chest_X-rays', 
    confidence: 0.94 
  },
  { 
    name: 'neural_networks_paper.pdf', 
    type: 'research', 
    size: '1.8 MB', 
    originalPath: '/Desktop', 
    newPath: '/Research/Machine_Learning/Papers', 
    confidence: 0.97 
  },
  { 
    name: 'patient_data_analysis.py', 
    type: 'code', 
    size: '45 KB', 
    originalPath: '/Downloads', 
    newPath: '/Code/Medical_Analytics/Python', 
    confidence: 0.91 
  },
  { 
    name: 'Screenshot 2024-01-15 at 3.42.01 PM.png', 
    type: 'image', 
    size: '856 KB', 
    originalPath: '/Desktop', 
    newPath: '/Screenshots/Medical_Software/2024-01', 
    confidence: 0.89 
  },
  { 
    name: 'clinical_trial_protocol.docx', 
    type: 'document', 
    size: '892 KB', 
    originalPath: '/Documents', 
    newPath: '/Medical/Clinical_Trials/Protocols', 
    confidence: 0.96 
  }
]

export default function OrganizationDemo() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [processedFiles, setProcessedFiles] = useState<Set<number>>(new Set())

  const getFileIcon = (type: FileItem['type']) => {
    switch (type) {
      case 'medical': return <Activity className="w-5 h-5 text-red-600" />
      case 'research': return <BookOpen className="w-5 h-5 text-blue-600" />
      case 'code': return <Code className="w-5 h-5 text-green-600" />
      case 'image': return <Image className="w-5 h-5 text-purple-600" />
      case 'document': return <FileText className="w-5 h-5 text-gray-600" />
    }
  }

  const runDemo = () => {
    setIsRunning(true)
    setCurrentStep(0)
    setProcessedFiles(new Set())

    const processFile = (index: number) => {
      setTimeout(() => {
        setProcessedFiles(prev => new Set([...prev, index]))
        setCurrentStep(index + 1)
        
        if (index < demoFiles.length - 1) {
          processFile(index + 1)
        } else {
          setTimeout(() => setIsRunning(false), 1000)
        }
      }, 1200)
    }

    processFile(0)
  }

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
        <h3 className="text-xl font-bold mb-2">Live Organization Demo</h3>
        <p className="text-blue-100">
          Watch Smart File Organizer intelligently categorize medical and research files 
          with domain-specific understanding
        </p>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="text-sm text-gray-600">
            Processing {demoFiles.length} files from chaotic directories
          </div>
          <button
            onClick={runDemo}
            disabled={isRunning}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isRunning ? 'Processing...' : 'Run Demo'}
          </button>
        </div>

        <div className="space-y-3">
          {demoFiles.map((file, index) => {
            const isProcessed = processedFiles.has(index)
            const isActive = currentStep === index && isRunning
            
            return (
              <div
                key={index}
                className={`p-4 rounded-lg border transition-all duration-500 ${
                  isProcessed
                    ? 'bg-green-50 border-green-200'
                    : isActive
                    ? 'bg-blue-50 border-blue-200 animate-pulse'
                    : 'bg-gray-50 border-gray-200'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    {isProcessed ? (
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    ) : (
                      getFileIcon(file.type)
                    )}
                    <div>
                      <p className="font-medium text-gray-900">{file.name}</p>
                      <p className="text-sm text-gray-500">{file.size}</p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    {isProcessed && (
                      <div className="text-xs text-green-600 font-medium mb-1">
                        {(file.confidence * 100).toFixed(0)}% confidence
                      </div>
                    )}
                    <div className="text-xs text-gray-500">
                      <div className="font-mono">{file.originalPath}</div>
                      {isProcessed && (
                        <div className="font-mono text-green-600 mt-1">
                          → {file.newPath}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {processedFiles.size === demoFiles.length && !isRunning && (
          <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
            <div className="flex items-center space-x-2 text-green-800">
              <CheckCircle className="w-5 h-5" />
              <span className="font-medium">Organization Complete!</span>
            </div>
            <div className="mt-2 text-sm text-green-700">
              Successfully organized {demoFiles.length} files with an average confidence of {' '}
              {Math.round(demoFiles.reduce((sum, file) => sum + file.confidence, 0) / demoFiles.length * 100)}%.
              Medical files were intelligently separated from research materials and code.
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
