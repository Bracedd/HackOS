import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HackOS',
  description: 'A Hack Club-themed desktop OS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cloud.typography.com/7977514/6962392/css/fonts.css"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}

