import 'react-toastify/dist/ReactToastify.css'

import { ToastContainer } from 'react-toastify'

import { Navbar } from '@/components/Navbar'
import { ShoppingCartProvider } from '@/contexts/shoppingCart'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <ShoppingCartProvider>
        <Navbar />
        <ToastContainer theme="dark" position="top-center" hideProgressBar />
        <main className="w-full h-[100vh - calc(100vw-((100vw-1180px)/2))] mt-8 overflow-hidden">
          {children}
        </main>
      </ShoppingCartProvider>
    </>
  )
}
