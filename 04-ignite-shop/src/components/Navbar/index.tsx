import Image from 'next/image'
import Link from 'next/link'

import Logo from '@/assets/logo.svg'

import { ShoppingCart } from '../ShoppingCart'

export function Navbar() {
  return (
    <header
      className={`py-8 flex items-center max-w-[calc(100vw-((100vw-1180px)/2))] w-full mx-auto z-50 ${'justify-between'}`}
    >
      <Link href="/">
        <Image src={Logo} alt="" width={130} height={52} />
      </Link>

      <ShoppingCart />
    </header>
  )
}
