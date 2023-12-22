import { Navbar } from '@/components/Navbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`${roboto.className} flex flex-col items-start justify-start min-h-screen gap-20`}
    >
      <Navbar />
      <main className="w-full overflow-hidden">
        <Component {...pageProps} />
      </main>
    </div>
  )
}
