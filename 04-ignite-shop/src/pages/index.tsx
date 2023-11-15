import { stripe } from '@/lib/stripe';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Stripe from 'stripe';

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
  }[];
}

export default function Home({ products }: HomeProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
    dragStarted: () => setIsDragging(true),
    dragEnded: () => setIsDragging(false),
  });

  return (
    <div
      className={`flex max-w-[calc(100vw-((100vw-1180px)/2))] ml-auto min-h-[656px] keen-slider ${
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
        );
      })}
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount ? price.unit_amount / 100 : 0),
    };
  });

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 hours
  };
};
