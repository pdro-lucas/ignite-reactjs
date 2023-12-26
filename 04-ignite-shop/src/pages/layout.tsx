import { Navbar } from '@/components/Navbar'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <main className="w-full h-[100vh - calc(100vw-((100vw-1180px)/2))] mt-8 overflow-hidden">
        {children}
      </main>
    </>
  )
}
