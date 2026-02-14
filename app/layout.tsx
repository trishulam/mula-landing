import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Mula — Production-grade AI systems',
  description:
    'We help product and operations teams identify where AI can meaningfully reduce manual decisions and operational load, then design and deploy production-grade agentic systems that hold up in real workflows.',
  openGraph: {
    title: 'Mula — Production-grade AI systems',
    description:
      'We help product and operations teams identify where AI can meaningfully reduce manual decisions and operational load, then design and deploy production-grade agentic systems that hold up in real workflows.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
