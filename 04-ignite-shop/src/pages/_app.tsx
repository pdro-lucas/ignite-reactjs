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
    <>
      <style
        jsx
        global
      >{`
        html {
          font-family: ${roboto.style.fontFamily};
        }
      `}</style>

      <Navbar />
      <main className="w-full h-[100vh - calc(100vw-((100vw-1180px)/2))] mt-8 overflow-hidden">
        <Component {...pageProps} />
      </main>
    </>
  )
}
