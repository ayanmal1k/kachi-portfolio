import type { Metadata } from 'next'
import { Geist, Geist_Mono, Syne } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LenisProvider } from '@/components/lenis-provider'
import './globals.css'

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'Kachi — Creative Studio & Portfolio',
  description: 'Award-winning creative engineering and high-performance interactive experiences.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geist.variable} ${geistMono.variable} ${syne.variable} min-h-screen bg-[#0d0f12] font-sans text-[#f4f4f5] antialiased selection:bg-[#fa5d29] selection:text-white`}
      >
        <LenisProvider>
          {children}
        </LenisProvider>
        <Analytics />
      </body>
    </html>
  )
}
