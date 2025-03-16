import type { Metadata } from 'next'
import { Noto_Sans_JP, ADLaM_Display } from 'next/font/google'
import '@/styles/globals.css'
import React from 'react'
import { Footer } from '@/components/shared/Footer'
import { Header } from '@/components/shared/Header'
import { Main } from '@/components/shared/Main'

const notoSansJP = Noto_Sans_JP({
  variable: '--font-noto-sans-jp',
  subsets: ['latin'],
})

const adlamDisplay = ADLaM_Display({
  weight: '400',
  variable: '--font-adlam-display',
  subsets: ['adlam'],
})

export const metadata: Metadata = {
  title: 'Mi-no-blog',
  description: 'my tech blog',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ja' className='dark'>
      <body
        className={`${notoSansJP.variable} ${adlamDisplay.variable} mx-auto max-w-screen-lg scroll-pt-header antialiased`}
      >
        <Header />
        <Main>{children}</Main>
        <Footer />
      </body>
    </html>
  )
}
