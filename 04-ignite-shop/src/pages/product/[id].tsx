import { stripe } from '@/lib/stripe';
import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Stripe from 'stripe';

interface ProductProps {
  product: {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    price: string;
  };
}

export default function Product({ product }: ProductProps) {
  const { isFallback } = useRouter();

  if (isFallback) {
    return <p>Carregando...</p>;
  }

  return (
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
        <button className="p-5 mt-auto text-lg font-bold text-white transition-colors border-none rounded-lg cursor-pointer bg-emerald-500 hover:bg-emerald-600">
          Comprar agora
        </button>
      </div>
    </div>
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
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(price.unit_amount ? price.unit_amount / 100 : 0),
      },
    },
    revalidate: 60 * 60 * 1, // 1 hour
  };
};
