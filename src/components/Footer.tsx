import Link from 'next/link'
import { Github, Twitter, Mail, Heart } from 'lucide-react'

export default function Footer() {
  const footerLinks = {
    Product: [
      { name: 'How It Works', href: '/how-it-works' },
      { name: 'Features', href: '/#features' },
      { name: 'Roadmap', href: '/roadmap' },
      { name: 'Changelog', href: '/changelog' },
    ],
    Resources: [
      { name: 'Documentation', href: '/docs' },
      { name: 'Research', href: '/research' },
      { name: 'Blog', href: '/blog' },
      { name: 'Case Studies', href: '/case-studies' },
    ],
    Community: [
      { name: 'GitHub', href: 'https://github.com/taiscoding/smart-file-organizer' },
      { name: 'Discussions', href: 'https://github.com/taiscoding/smart-file-organizer/discussions' },
      { name: 'Issues', href: 'https://github.com/taiscoding/smart-file-organizer/issues' },
      { name: 'Contributing', href: 'https://github.com/taiscoding/smart-file-organizer/blob/main/CONTRIBUTING.md' },
    ],
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center mb-4">
              <div className="bg-blue-600 text-white p-2 rounded-lg mr-3">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2z"/>
                  <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2"/>
                </svg>
              </div>
              <span className="text-xl font-bold">Smart File Organizer</span>
            </Link>
            
            <p className="text-gray-300 mb-6 max-w-md">
              Transform digital chaos into organized clarity. Intelligent file organization 
              that learns from your workflow and saves you hours every week.
            </p>

            <div className="flex space-x-4">
              <Link
                href="https://github.com/taiscoding/smart-file-organizer"
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link
                href="https://twitter.com/smartfileorg"
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="mailto:hello@smartfileorganizer.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors"
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            © 2025 Smart File Organizer. Released under MIT License.
          </div>
          
          <div className="flex items-center text-gray-400 text-sm mt-4 md:mt-0">
            <span>Made with</span>
            <Heart className="w-4 h-4 mx-1 text-red-500" />
            <span>for organized minds everywhere</span>
          </div>
        </div>
      </div>
    </footer>
  )
}