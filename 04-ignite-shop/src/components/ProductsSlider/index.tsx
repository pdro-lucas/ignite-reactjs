import { Product } from '@/pages'
import { useKeenSlider } from 'keen-slider/react'
import { ShoppingBag } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
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

  return (
    <>
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
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              className="relative flex items-center justify-center p-1 overflow-hidden rounded-lg cursor-pointer keen-slider__slide bg-product-gradient group"
            >
              <Image
                src={product.imageUrl}
                alt=""
                width={520}
                height={480}
                className="object-cover"
              />

              <footer className="absolute flex items-center justify-between p-8 transform translate-y-[110%] rounded-md bottom-1 left-1 right-1 bg-black/60 opacity-0 transition-all ease-in-out duration-200 group-hover:translate-y-0 group-hover:opacity-100">
                <div className="space-y-2">
                  <p className="text-xl font-bold">{product.name}</p>
                  <span className="block text-2xl font-bold text-emerald-500">
                    {product.price}
                  </span>
                </div>

                <button className="p-4 transition-colors rounded-md bg-emerald-600 hover:bg-emerald-700">
                  <ShoppingBag size={24} />
                </button>
              </footer>
            </Link>
          )
        })}
      </div>
    </>
  )
}
