import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'EcoMindShift',
  description: 'EcoMindShift combines climate tech solutions with mental health apps to help small businesses and individuals reduce their carbon footprint while managing stress related to environmental issues.',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">EcoMindShift</h1>
      <p className="mt-4 text-lg">EcoMindShift combines climate tech solutions with mental health apps to help small businesses and individuals reduce their carbon footprint while managing stress related to environmental issues.</p>
    </main>
  )
}
