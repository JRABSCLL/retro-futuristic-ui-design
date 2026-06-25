import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Retro Gadget Gallery',
  description: 'Retro-futuristic UI design — Cassette Futurism gadget gallery',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-[#1a1a1a]">
      <body>{children}</body>
    </html>
  )
}
