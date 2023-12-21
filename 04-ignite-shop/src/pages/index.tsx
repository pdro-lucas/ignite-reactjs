import { Slider } from '@/components/ProductsSlider'
import { stripe } from '@/lib/stripe'
import 'keen-slider/keen-slider.min.css'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Stripe from 'stripe'

export type Product = {
  id: string
  name: string
  imageUrl: string
  price: string
}
export interface ProductProps {
  products: Product[]
}

export default function Home({ products }: ProductProps) {
  return (
    <>
      <Head>
        <title>Home | IgShop</title>
      </Head>

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
