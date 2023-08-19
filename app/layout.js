import './globals.css'
import { Raleway } from 'next/font/google'

const inter = Raleway ({ subsets: ['latin'] })

export const metadata = {
  title: 'Appondas',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
