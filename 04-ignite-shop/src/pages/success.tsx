import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Stripe from 'stripe'

import { stripe } from '@/lib/stripe'

import { NextPageWithLayout } from './_app'
import Layout from './layout'

interface SuccessProps {
  customerName: string
  products: Stripe.Product[]
}

const Page: NextPageWithLayout<SuccessProps> = ({ customerName, products }) => {
  return (
    <>
      <Head>
        <title>Compra efetuada | IgShop</title>
        <meta name="robots" content="noindex" />
      </Head>

      <div className="max-w-[1180px] mx-auto flex flex-col items-center justify-center h-[656px]">
        <h1 className="text-4xl font-bold text-zinc-300">Compra efetuada</h1>

        <div className="flex justify-center items-center w-full -space-x-12">
          {products.map((product) => (
            <div
              key={product.id}
              className="w-36 h-36 rounded-full p-1 flex items-center justify-center bg-product-gradient mt-16 shadow-[0px_0px_60px_rgba(0,0,0,0.80)]"
            >
              <Image
                src={product.images[0]}
                width={120}
                height={110}
                alt={product.description as string}
              />
            </div>
          ))}
        </div>

        <p className="max-w-xl mt-8 text-2xl text-center text-zinc-400">
          Uhuul <strong className="text-zinc-300">{customerName}</strong>, sua
          compra de <strong className="text-zinc-300">{products.length}</strong>{' '}
          camisas já está a caminho de sua casa.
        </p>

        <Link
          href="/"
          className="block mt-20 text-xl transition-colors text-emerald-500 hover:text-emerald-400"
        >
          Voltar ao catálogo
        </Link>
      </div>
    </>
  )
}

Page.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}

export default Page

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const sessionId = String(query.session_id)

  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  })

  const customerName = session.customer_details?.name
  // const product = session.line_items?.data[0].price?.product as Stripe.Product
  const lineItems = session.line_items?.data as Stripe.LineItem[]

  const products = lineItems.map((lineItem) => {
    return lineItem.price?.product as Stripe.Product
  })

  return {
    props: {
      customerName,
      products,
    },
  }
}
