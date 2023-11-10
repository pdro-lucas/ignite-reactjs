import Logo from '@/assets/logo.svg';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Image from 'next/image';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="container mx-auto">
      <header className="p-8">
        <Image src={Logo} alt="" width={130} height={52} />
      </header>
      <Component {...pageProps} />
    </div>
  );
}
