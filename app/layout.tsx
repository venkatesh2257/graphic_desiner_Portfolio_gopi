import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gopi - Graphic Designer Portfolio',
  description: 'Portfolio website for Gopi, a creative graphic designer',
  icons: {
    icon: [
      { url: '/assets/hero_image.png', sizes: '192x192', type: 'image/png' },
      { url: '/assets/hero_image.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/assets/hero_image.png', sizes: '180x180', type: 'image/png' },
    ],
  },
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


