import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'EcoPlanify',
  description: 'EcoPlanify is an AI-driven SaaS platform that helps small businesses and e-commerce stores track their carbon footprint and implement sustainable practices. With personalized recommendations based on real-time data, EcoPlanify makes it easy for businesses to go green without compromising on efficiency.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
