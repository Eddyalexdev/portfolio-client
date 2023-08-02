import Header from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Eddyalexdev',
  description: 'Full Stack Developer - Eddy Alex Chambi Llanco',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#323232] w-full h-screen grid grid-cols-12">
        <Header />
        {children}
      </body>
    </html>
  )
}
