import { Product } from '@/pages'
import { useKeenSlider } from 'keen-slider/react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import SliderArrow from './SliderArrow'

interface SliderProps {
  products: Product[]
}

export function Slider({ products }: SliderProps) {
  const [isDragging, setIsDragging] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
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
        onClick={(e) => {
          e.stopPropagation()
          instanceRef.current?.prev()
        }}
      />

      <SliderArrow
        direction="right"
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
                <strong className="text-xl">{product.name}</strong>
                <span className="text-2xl font-bold text-emerald-500">
                  {product.price}
                </span>
              </footer>
            </Link>
          )
        })}
      </div>
    </>
  )
}
