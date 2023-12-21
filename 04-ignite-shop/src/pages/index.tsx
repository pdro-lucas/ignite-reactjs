import { Slider } from '@/components/ProductsSlider'
import SliderArrow from '@/components/ProductsSlider/SliderArrow'
import { stripe } from '@/lib/stripe'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import Stripe from 'stripe'

export interface ProductProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: string
  }[]
}

export default function Home({ products }: ProductProps) {
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
      <Head>
        <title>Home | IgShop</title>
      </Head>

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

      <Slider products={products} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount ? price.unit_amount / 100 : 0),
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 hours
  }
}
