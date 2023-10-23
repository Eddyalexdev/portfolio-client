import Container from '@/components/Container'
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
    <html lang="es">
      <body className="bg-black w-full h-screen overflow-hidden">
        <Container>
          {children}
        </Container>
      </body>
    </html>
  )
}
