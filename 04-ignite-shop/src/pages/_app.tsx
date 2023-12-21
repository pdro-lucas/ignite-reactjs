import Logo from '@/assets/logo.svg'
import { ShoppingCart } from '@/components/ShoppingCart'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Roboto } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`${roboto.className} flex flex-col items-start justify-start min-h-screen gap-20`}
    >
      <header className="py-8 flex justify-between items-center max-w-[calc(100vw-((100vw-1180px)/2))] w-full mx-auto">
        <Link href="/">
          <Image
            src={Logo}
            alt=""
            width={130}
            height={52}
          />
        </Link>

        <ShoppingCart />
      </header>
      <main className="w-full overflow-hidden">
        <Component {...pageProps} />
      </main>
    </div>
  )
}
