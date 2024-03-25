import { useKeenSlider } from 'keen-slider/react'
import { ShoppingBag } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useContext, useState } from 'react'
import { toast } from 'react-toastify'
import { zinc } from 'tailwindcss/colors'

import { ShoppingCartContext } from '@/contexts/shoppingCart'
import { Product } from '@/pages'
import { formatCurrency } from '@/utils/formatCurrency'

import SliderArrow from './SliderArrow'

interface SliderProps {
  products: Product[]
}

export function Slider({ products }: SliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isDragging, setIsDragging] = useState(false)

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel)
    },
    slides: {
      perView: 3,
      spacing: 48,
    },
    dragStarted: () => setIsDragging(true),
    dragEnded: () => setIsDragging(false),
  })

  const { addProduct, removeProduct } = useContext(ShoppingCartContext)

  return (
    <>
      <div className="relative">
        <SliderArrow
          direction="left"
          disabled={currentSlide === 0}
          onClick={(e) => {
            e.stopPropagation()
            instanceRef.current?.prev()
          }}
        />

        <SliderArrow
          direction="right"
          disabled={
            currentSlide ===
            (instanceRef.current?.track.details.slides.length ?? 0) - 3
          }
          onClick={(e) => {
            e.stopPropagation()
            instanceRef.current?.next()
          }}
        />
        <div
          className={`flex max-w-[calc(100vw-((100vw-1180px)/2))] mx-auto min-h-[656px] keen-slider !overflow-visible ${
            isDragging ? 'cursor-grabbing' : 'cursor-grab'
          }`}
          ref={sliderRef}
        >
          {products.map((product) => {
            return (
              <div
                key={product.id}
                className="relative flex items-center justify-center p-1 overflow-hidden rounded-lg keen-slider__slide bg-product-gradient group"
              >
                <Link href={`/product/${product.id}`}>
                  <Image
                    src={product.imageUrl}
                    alt=""
                    width={520}
                    height={480}
                    className="object-cover"
                  />
                </Link>

                <footer className="absolute flex items-center justify-between p-8 transform translate-y-[110%] rounded-md bottom-1 left-1 right-1 bg-black/60 opacity-0 transition-all ease-in-out duration-200 group-hover:translate-y-0 group-hover:opacity-100 cursor-default">
                  <div className="space-y-2">
                    <p className="text-xl font-bold">{product.name}</p>
                    <span className="block text-2xl font-bold text-emerald-500">
                      {formatCurrency(Number(product.price) / 100)}
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      addProduct({
                        ...product,
                        id: product.id + Math.random(),
                      })
                      toast.success('Product added to cart', {
                        style: {
                          background: zinc[900],
                        },
                        icon: () => (
                          <ShoppingBag size={24} className="text-emerald-500" />
                        ),
                      })
                    }}
                    className="p-4 transition-colors rounded-md bg-emerald-600 hover:bg-emerald-700"
                  >
                    <ShoppingBag size={24} />
                  </button>
                </footer>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
