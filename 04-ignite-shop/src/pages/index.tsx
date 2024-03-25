import 'keen-slider/keen-slider.min.css'

import { GetStaticProps } from 'next'
import Head from 'next/head'
import Stripe from 'stripe'

import { Slider } from '@/components/ProductsSlider'
import { stripe } from '@/lib/stripe'

import { NextPageWithLayout } from './_app'
import Layout from './layout'

export type Product = {
  id: string
  name: string
  imageUrl: string
  price: string
  defaultPriceId: string
}

export interface ProductProps {
  products: Product[]
}

const Page: NextPageWithLayout<ProductProps> = ({ products }) => {
  return (
    <>
      <Head>
        <title>Home | IgShop</title>
      </Head>

      <Slider products={products} />
    </>
  )
}

Page.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}

export default Page

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
      defaultPriceId: price.id,
      price: price.unit_amount,
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 hours
  }
}
