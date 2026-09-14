import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
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

export const viewport: Viewport = {
  themeColor: '#0099ff',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://kachi-web3.netlify.app'),
  title: {
    default: 'Kachi — Web3 Growth Partner & Community Architect',
    template: '%s | Kachi',
  },
  description:
    'Official portfolio of Kachi — Web3 Growth Partner specializing in Community Management, Moderation, Influencer & KOL Marketing, Ambassador Guilds, Raiding & Shilling, and Strategic Advisory.',
  applicationName: 'Kachi Portfolio',
  authors: [{ name: 'Kachi', url: 'https://kachi-web3.netlify.app' }],
  generator: 'Next.js',
  keywords: [
    'Kachi',
    'Web3 Growth Partner',
    'Crypto Community Manager',
    'Telegram Moderator',
    'Discord Community Architect',
    'X Twitter Manager',
    'KOL Marketing Specialist',
    'Ambassador Program Lead',
    'Crypto Raiding & Shilling',
    'Web3 Strategy Consultant',
    'Token Launch Advisory',
    'Proof of Work',
    'Crypto Portfolio',
  ],
  creator: 'Kachi',
  publisher: 'Kachi',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kachi-web3.netlify.app',
    siteName: 'Kachi — Web3 Growth Partner',
    title: 'Kachi — Web3 Growth Partner & Community Architect',
    description:
      'I help Web3 projects grow through community building, influencer marketing, ambassador programs, and strategic execution. Real receipts, real proof of work.',
    images: [
      {
        url: '/kachi-text-with-crown.png',
        width: 1200,
        height: 630,
        alt: 'Kachi — Web3 Growth Partner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kachi — Web3 Growth Partner & Community Architect',
    description:
      'Community Management, Influencer Marketing, Ambassador Programs, Raiding, and Strategic Advisory for Web3 projects.',
    images: ['/kachi-text-with-crown.png'],
    creator: '@Kachi_Base',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/crown-icon.png' },
      { url: '/icon.png', type: 'image/png' },
    ],
    shortcut: '/crown-icon.png',
    apple: '/crown-icon.png',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Kachi',
  url: 'https://kachi-web3.netlify.app',
  image: 'https://kachi-web3.netlify.app/kachi-text-with-crown.png',
  jobTitle: 'Web3 Growth Partner & Community Architect',
  description:
    'Web3 Growth Partner specializing in Community Management, Moderation, Influencer Marketing, Ambassador Programs, Raiding & Shilling, and Strategic Advisory.',
  knowsAbout: [
    'Web3 Growth Strategy',
    'Crypto Community Management',
    'Telegram & Discord Moderation',
    'X (Twitter) Marketing',
    'Ambassador Program Development',
    'Crypto Raiding and Shilling',
    'Token Launch Architecture',
    'KOL and Influencer Outreach',
  ],
  sameAs: [
    'https://x.com/Kachi_Base',
    'https://t.me/KachiFX1',
    'https://t.me/KachiFX12',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geist.variable} ${geistMono.variable} ${syne.variable} min-h-screen bg-[#02050e] font-sans text-[#f4f4f5] antialiased selection:bg-[#0099ff] selection:text-white`}
      >
        <LenisProvider>
          {children}
        </LenisProvider>
        <Analytics />
        <Script
          id="webagent-chatbot"
          src="https://webagent.ai/api/chatbot/5ab1a3dd-26ed-416a-98b4-ffd52d8b0ac4"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
