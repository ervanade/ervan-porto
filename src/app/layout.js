import Head from 'next/head'
import './globals.css'
import { Inter, Manrope } from 'next/font/google'
import Image from 'next/image'


const inter = Manrope({ subsets: ['latin'] })

export const metadata = {
  title: 'Ervan Ade Wijaya',
  description: 'Ervan Ade Wijaya Website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>

        <link rel="icon" href="/favicon.png" />
      </head>
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <body className={inter.className}>
        <header className='bg-white'>
          <div className="navbar container mx-auto max-w-7xl flex justify-between items-center px-7 py-5 lg:py-12">
            <div className="nav__link space-x-16 flex items-center">
              <div className="logo">
                <a href="#">
                  <Image
                    src="/assets/logo-ervan.svg"
                    alt="logo"
                    height={40}
                    width={80}
                    className="lg:h-12 lg:w-auto"
                  />
                </a>
              </div>
              <div className="nav__link hidden lg:inline-block">
                <ul className="flex items-center space-x-10 text-[#394360] text-xl font-semibold">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Learnings</a>
                  </li>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Testimonial</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="navbar__button space-x-4">
              <button className="px-8 py-3 text-[#26B2E6] hidden lg:inline-block">
                Log In
              </button>
              <button className="px-8 py-3 bg-[#26B2E6] text-white rounded-xl hidden lg:inline-block">
                Sign Up
              </button>
              <button className="lg:hidden">
                <Image
                  src="/assets/bars.svg"
                  alt="logo"
                  height={40}
                  width={56}
                  className="lg:h-12 lg:w-auto"
                />
              </button>
            </div>
          </div>
        </header>
        {children}
      </body>
    </html>
  )
}
