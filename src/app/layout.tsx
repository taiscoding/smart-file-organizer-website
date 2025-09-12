import './globals.css'
import { Inter } from 'next/font/google'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Smart File Organizer - Transform Digital Chaos Into Organized Clarity',
  description: 'Intelligently categorize and organize your digital files with zero cognitive overhead. Features temporal clustering, screenshot-to-action conversion, and content-aware analysis optimized for professionals.',
  keywords: 'file organization, productivity, automation, file management, digital organization, screenshot organization',
  authors: [{ name: 'Smart File Organizer Team' }],
  openGraph: {
    title: 'Smart File Organizer - Transform Digital Chaos Into Organized Clarity',
    description: 'Intelligently categorize and organize your digital files with zero cognitive overhead.',
    url: 'https://smart-file-organizer.com',
    siteName: 'Smart File Organizer',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Smart File Organizer - Transform Digital Chaos Into Organized Clarity',
    description: 'Intelligently categorize and organize your digital files with zero cognitive overhead.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}