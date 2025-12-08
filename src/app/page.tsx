import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'EcoPlanify',
  description: 'EcoPlanify is an AI-driven SaaS platform that helps small businesses and e-commerce stores track their carbon footprint and implement sustainable practices. With personalized recommendations based on real-time data, EcoPlanify makes it easy for businesses to go green without compromising on efficiency.',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">EcoPlanify</h1>
      <p className="mt-4 text-lg">EcoPlanify is an AI-driven SaaS platform that helps small businesses and e-commerce stores track their carbon footprint and implement sustainable practices. With personalized recommendations based on real-time data, EcoPlanify makes it easy for businesses to go green without compromising on efficiency.</p>
    </main>
  )
}
