import Logo from '@/assets/logo.svg';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Roboto } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col items-start justify-center min-h-screen">
      <header className="py-8 w-full max-w-[1180px] mx-auto">
        <Link href="/">
          <Image src={Logo} alt="" width={130} height={52} />
        </Link>
      </header>
      <main className={`${roboto.className} w-full`}>
        <Component {...pageProps} />
      </main>
    </div>
  );
}
