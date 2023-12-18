import type { Metadata } from 'next'
import './globals.css'
import StyledComponentsRegistry from './registry'
import Head from 'next/head'

export const metadata: Metadata = {
  title: 'Lander Association',
  description: 'Lander is A dommy ',
}

 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}