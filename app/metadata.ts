import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Brailliant - Affordable Braille Technology',
  description: 'Making it affordable to convert text to tactile braille in real-time',
  icons: {
    icon: '/logo.svg',
    shortcut: '/logo.svg',
    apple: '/logo.svg',
    other: {
      rel: 'icon',
      url: '/logo.svg',
      type: 'image/svg+xml'
    }
  },
  openGraph: {
    title: 'Brailliant - Affordable Braille Technology',
    description: 'Making it affordable to convert text to tactile braille in real-time',
    url: 'https://brailliant.org',
    siteName: 'Brailliant',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Brailliant Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brailliant - Affordable Braille Technology',
    description: 'Making it affordable to convert text to tactile braille in real-time',
    images: ['/og-image.png'],
  },
} 