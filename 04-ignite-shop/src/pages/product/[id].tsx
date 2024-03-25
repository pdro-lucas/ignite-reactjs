import axios from 'axios'
import { ChevronLeft, Loader2 } from 'lucide-react'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useContext, useState } from 'react'
import { toast } from 'react-toastify'
import Stripe from 'stripe'

import { ShoppingCartContext } from '@/contexts/shoppingCart'
import { stripe } from '@/lib/stripe'
import { formatCurrency } from '@/utils/formatCurrency'

import { NextPageWithLayout } from '../_app'
import Layout from '../layout'

interface ProductProps {
  product: {
    id: string
    name: string
    description: string
    imageUrl: string
    price: string
    defaultPriceId: string
  }
}

const Page: NextPageWithLayout<ProductProps> = ({ product }) => {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)
  const { isFallback, push } = useRouter()
  const { addProduct } = useContext(ShoppingCartContext)

  if (isFallback) {
    return <p>Carregando...</p>
  }

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true)
      const response = await axios.post('/api/checkout', {
        products: [
          {
            quantity: 1,
            ...product,
          },
        ],
      })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (error) {
      setIsCreatingCheckoutSession(false)
      console.log(error)
    }
  }

  return (
    <>
      <Head>
        <title>{product.name}</title>
      </Head>

      <div className="grid grid-cols-2 max-w-[calc(100vw-((100vw-1180px)/2))] mx-auto items-stretch gap-16">
        <div className="flex items-center justify-center w-full max-w-xl p-2 rounded-lg bg-product-gradient h-[656px]">
          <Image
            className="object-cover"
            src={product.imageUrl}
            alt="Picture of the author"
            width={520}
            height={520}
          />
        </div>

        <div className="flex flex-col">
          <div className="flex gap-2 items-center">
            <button
              onClick={() => push('/')}
              className="bg-zinc-900 p-2 rounded-md hover:bg-zinc-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-500 focus-visible:ring-opacity-75 transition-colors"
            >
              <ChevronLeft size={32} />
              <span className="sr-only">Voltar</span>
            </button>
            <h1 className="text-2xl font-bold text-zinc-300">{product.name}</h1>
          </div>

          <span className="block mt-4 text-2xl text-emerald-500">
            {formatCurrency(Number(product.price) / 100)}
          </span>
          <p className="mt-10 text-lg/7 text-zinc-400">{product.description}</p>
          <button
            className="flex items-center justify-center gap-4 p-5 mt-auto text-lg font-bold text-white transition-colors border-none rounded-lg cursor-pointer bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-500/50 disabled:cursor-not-allowed"
            onClick={handleBuyProduct}
            disabled={isCreatingCheckoutSession}
          >
            <span className="flex-1 ml-6">Comprar agora</span>

            <Loader2
              size={24}
              className={`${
                isCreatingCheckoutSession === false
                  ? 'opacity-0'
                  : 'opacity-100'
              } animate-spin`}
            />
          </button>
          <button
            className="flex items-center justify-center gap-4 p-5 mt-4 text-lg font-bold text-white transition-colors border-none rounded-lg cursor-pointer bg-zinc-800 hover:bg-zinc-700 disabled:bg-zinc-900/50 disabled:cursor-not-allowed"
            onClick={() => {
              addProduct(product)
              toast.success('Produto adicionado ao carrinho')
            }}
          >
            <span className="flex-1 ml-6">Adicionar ao carrinho</span>
          </button>
        </div>
      </div>
    </>
  )
}

Page.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}

export default Page

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: { id: 'prod_OznHIsNl1EeuRe' },
      },
    ],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  if (!params || !params.id) {
    return {
      notFound: true,
    }
  }

  const productId = params.id

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        description: product.description,
        imageUrl: product.images[0],
        defaultPriceId: price.id,
        price: price.unit_amount,
      },
    },
    revalidate: 60 * 60 * 1, // 1 hour
  }
}
