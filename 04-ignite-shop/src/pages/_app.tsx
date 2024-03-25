/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable react/no-unknown-property */
import '@/styles/globals.css'

import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { Roboto } from 'next/font/google'
import type { ReactElement, ReactNode } from 'react'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  return getLayout(
    <>
      <style jsx global>{`
        html {
          font-family: ${roboto.style.fontFamily};
        }
      `}</style>

      <Component {...pageProps} />
    </>,
  )
}
