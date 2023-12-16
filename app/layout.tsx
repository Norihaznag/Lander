import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'


export const metadata: Metadata = {
  title: 'Zans Association',
  description: 'Zans is A dommy ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
              <Nav/>

      <body className='gallaralla bg-green-800'>
        {children}</body>
    </html>
  )
}
