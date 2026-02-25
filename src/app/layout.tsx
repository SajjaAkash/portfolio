import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'
import Cursor from '@/components/ui/Cursor'
import { profileData } from '@/data/profile'

export const metadata: Metadata = {
  title: `${profileData.name} | ${profileData.role} Portfolio`,
  description: profileData.tagline,
  keywords: ['DevOps', 'Cloud Engineering', 'Kubernetes', 'CI/CD', 'AWS', 'Terraform', 'Portfolio'],
  openGraph: {
    title: `${profileData.name} | ${profileData.role}`,
    description: profileData.tagline,
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="bg-dark-950 text-white antialiased cursor-none">
        <Cursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
