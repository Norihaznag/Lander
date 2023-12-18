import type { Metadata } from 'next'
import './globals.css'
import StyledComponentsRegistry from './registry'
import { SpeedInsights } from "@vercel/speed-insights/next"
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
        <StyledComponentsRegistry>{children}
        <SpeedInsights />
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}