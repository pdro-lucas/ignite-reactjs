import Image from 'next/image';
import Shirt2 from '@/assets/2.png';
import Shirt3 from '@/assets/3.png';
import Shirt4 from '@/assets/4.png';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { useState } from 'react';

export default function Home() {
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
      <a
        href="#"
        className="relative flex items-center justify-center p-1 overflow-hidden rounded-lg cursor-pointer keen-slider__slide bg-product-gradient group"
      >
        <Image
          src={Shirt2}
          alt=""
          width={520}
          height={480}
          className="object-cover"
        />

        <footer className="absolute flex items-center justify-between p-8 transform translate-y-[110%] rounded-md bottom-1 left-1 right-1 bg-black/60 opacity-0 transition-all ease-in-out duration-200 group-hover:translate-y-0 group-hover:opacity-100">
          <strong className="text-xl">Camiseta x</strong>
          <span className="text-2xl font-bold text-green-500">R$ 79,90</span>
        </footer>
      </a>
      <a
        href="#"
        className="relative flex items-center justify-center p-1 overflow-hidden rounded-lg cursor-pointer keen-slider__slide bg-product-gradient group"
      >
        <Image
          src={Shirt3}
          alt=""
          width={520}
          height={480}
          className="object-cover"
        />

        <footer className="absolute flex items-center justify-between p-8 transform translate-y-[110%] rounded-md bottom-1 left-1 right-1 bg-black/60 opacity-0 transition-all ease-in-out duration-200 group-hover:translate-y-0 group-hover:opacity-100">
          <strong className="text-xl">Camiseta x</strong>
          <span className="text-2xl font-bold text-green-500">R$ 79,90</span>
        </footer>
      </a>
      <a
        href="#"
        className="relative flex items-center justify-center p-1 overflow-hidden rounded-lg cursor-pointer keen-slider__slide bg-product-gradient group"
      >
        <Image
          src={Shirt4}
          alt=""
          width={520}
          height={480}
          className="object-cover"
        />

        <footer className="absolute flex items-center justify-between p-8 transform translate-y-[110%] rounded-md bottom-1 left-1 right-1 bg-black/60 opacity-0 transition-all ease-in-out duration-200 group-hover:translate-y-0 group-hover:opacity-100">
          <strong className="text-xl">Camiseta x</strong>
          <span className="text-2xl font-bold text-green-500">R$ 79,90</span>
        </footer>
      </a>
      <a
        href="#"
        className="relative flex items-center justify-center p-1 overflow-hidden rounded-lg cursor-pointer keen-slider__slide bg-product-gradient group"
      >
        <Image
          src={Shirt4}
          alt=""
          width={520}
          height={480}
          className="object-cover"
        />

        <footer className="absolute flex items-center justify-between p-8 transform translate-y-[110%] rounded-md bottom-1 left-1 right-1 bg-black/60 opacity-0 transition-all ease-in-out duration-200 group-hover:translate-y-0 group-hover:opacity-100">
          <strong className="text-xl">Camiseta x</strong>
          <span className="text-2xl font-bold text-green-500">R$ 79,90</span>
        </footer>
      </a>
    </div>
  );
}
