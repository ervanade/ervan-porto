import './globals.css'
import { Inter, Manrope } from 'next/font/google'

const inter = Manrope({ subsets: ['latin'] })

export const metadata = {
  title: 'Ervan Ade Wijaya',
  description: 'Ervan Ade Wijaya Website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
