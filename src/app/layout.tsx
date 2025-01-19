import type { Metadata } from 'next'
import { Noto_Sans_JP, ADLaM_Display } from 'next/font/google'
import '@/styles/globals.css'
import React from 'react'
import { Header } from '@/components/Header'
import { Main } from '@/components/Main'

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
    <html lang='ja'>
      <body
        className={`${notoSansJP.variable} ${adlamDisplay.variable} mx-auto max-w-screen-lg antialiased`}
      >
        <Header />
        <Main>{children}</Main>
      </body>
    </html>
  )
}
