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
  product: {
    name: string
    image: string
  }
}

const Page: NextPageWithLayout<SuccessProps> = ({ customerName, product }) => {
  return (
    <>
      <Head>
        <title>Compra efetuada | IgShop</title>
        <meta
          name="robots"
          content="noindex"
        />
      </Head>

      <div className="max-w-[1180px] mx-auto flex flex-col items-center justify-center h-[656px]">
        <h1 className="text-4xl font-bold text-zinc-300">Compra efetuada</h1>

        <div className="w-full max-w-[130px] h-36 rounded-lg p-1 flex items-center justify-center bg-product-gradient mt-16">
          <Image
            src={product.image}
            width={120}
            height={110}
            alt=""
          />
        </div>

        <p className="max-w-xl mt-8 text-2xl text-center text-zinc-200">
          Uhuul <strong>{customerName}</strong>, sua{' '}
          <strong>{product.name}</strong> está a caminho da sua casa!
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
  const product = session.line_items?.data[0].price?.product as Stripe.Product

  return {
    props: {
      customerName,
      product: {
        name: product.name,
        image: product.images[0],
      },
    },
  }
}
