import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Gopi - Graphic Designer Portfolio',
  description: 'Portfolio website for Gopi, a creative graphic designer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}


