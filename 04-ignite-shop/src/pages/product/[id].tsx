import { stripe } from '@/lib/stripe';
import axios from 'axios';
import { Loader2 } from 'lucide-react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Stripe from 'stripe';
import Head from 'next/head';

interface ProductProps {
  product: {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    price: string;
    defaultPriceId: string;
  };
}

export default function Product({ product }: ProductProps) {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false);
  const { isFallback } = useRouter();

  if (isFallback) {
    return <p>Carregando...</p>;
  }

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true);
      const response = await axios.post('/api/checkout', {
        priceId: product.defaultPriceId,
      });

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
    } catch (error) {
      setIsCreatingCheckoutSession(false);
      console.log(error);
    }
  }

  return (
    <>
      <Head>
        <title>{product.name} | IgShop</title>
      </Head>

      <div className="grid grid-cols-2 max-w-[1180px] mx-auto items-stretch gap-16">
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
          <h1 className="text-2xl font-bold text-zinc-300">{product.name}</h1>
          <span className="block mt-4 text-2xl text-emerald-500">
            {product.price}
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
        </div>
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: { id: 'prod_OznHIsNl1EeuRe' },
      },
    ],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  if (!params || !params.id) {
    return {
      notFound: true,
    };
  }

  const productId = params.id;

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  });

  const price = product.default_price as Stripe.Price;

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        description: product.description,
        imageUrl: product.images[0],
        defaultPriceId: price.id,
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(price.unit_amount ? price.unit_amount / 100 : 0),
      },
    },
    revalidate: 60 * 60 * 1, // 1 hour
  };
};
