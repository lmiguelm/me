import type { Metadata } from 'next'
import { twMerge } from 'tailwind-merge'

import { ThemeProvider } from '@/contexts/theme-provider'

import '../global.css'
import { inter } from './fonts'

export const metadata: Metadata = {
  title: {
    template: 'lmiguelm - %s',
    default: 'lmiguelm',
  },
  description: 'Portfólio de Luis Miguel',
  manifest: '/manifest.json',
  icons: {
    apple: '/icon.png',
  },
  themeColor: '#FFFFFF',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning suppressContentEditableWarning>
      <head>
        <link
          rel="icon"
          href="/favicon.ico"
          sizes="32x32"
          type="image/x-icon"
        />

        <link
          rel="icon"
          href="/favicon-16x16.png"
          sizes="16x16"
          type="image/png"
        />

        <link
          rel="icon"
          href="/favicon-32x32.png"
          sizes="32x32"
          type="image/png"
        />
      </head>

      <body
        className={twMerge(
          inter.className,
          'scrollbar-thin scrollbar-track-background scrollbar-thumb-highlight',
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
