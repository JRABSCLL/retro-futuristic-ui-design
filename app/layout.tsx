import type { Metadata } from 'next'
import { VT323, Share_Tech_Mono, Orbitron } from 'next/font/google'
import './globals.css'

const vt323 = VT323({ weight: '400', subsets: ['latin'], variable: '--font-vt323' })
const shareTechMono = Share_Tech_Mono({ weight: '400', subsets: ['latin'], variable: '--font-share-tech-mono' })
const orbitron = Orbitron({ weight: ['400', '700'], subsets: ['latin'], variable: '--font-orbitron' })

export const metadata: Metadata = {
  title: 'Retro Gadget Gallery',
  description: 'Retro-futuristic UI design — Cassette Futurism gadget gallery',
  keywords: ['retro', 'futuristic', 'CRT', 'terminal', 'cassette futurism'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" style={{ background: '#1a1a1a' }} className={`${vt323.variable} ${shareTechMono.variable} ${orbitron.variable}`}>
      <body>{children}</body>
    </html>
  )
}
