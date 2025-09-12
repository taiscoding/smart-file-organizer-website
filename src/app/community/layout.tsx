import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Community Features - Smart File Organizer',
  description: 'Submit feature requests, vote on priorities, and help shape the future of Smart File Organizer based on community needs.'
}

export default function CommunityLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
