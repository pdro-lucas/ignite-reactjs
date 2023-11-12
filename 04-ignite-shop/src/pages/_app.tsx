import Logo from '@/assets/logo.svg';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Roboto } from 'next/font/google';
import Image from 'next/image';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="container mx-auto">
      <header className="p-8">
        <Image src={Logo} alt="" width={130} height={52} />
      </header>
      <main className={`${roboto.className}`}>
        <Component {...pageProps} />
      </main>
    </div>
  );
}
