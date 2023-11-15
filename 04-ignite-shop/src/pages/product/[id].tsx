import { useRouter } from 'next/router';
import Image from 'next/image';

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="grid grid-cols-2 max-w-[1180px] mx-auto items-stretch gap-16">
      <div className="flex items-center justify-center w-full max-w-xl p-2 rounded-lg bg-product-gradient h-[656px]">
        <Image
          className="object-cover"
          src="https://files.stripe.com/links/MDB8YWNjdF8xT0JsaGxFZ0lTZEF1TmtXfGZsX3Rlc3RfVDZPUEFHc1N4RTFDQU1pbEo2TVVSdzh500OHQgS5dS"
          alt="Picture of the author"
          width={520}
          height={520}
        />
      </div>
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold text-zinc-300">Camiseta X</h1>
        <span className="block mt-4 text-2xl text-emerald-500">R$ 79,99</span>
        <p className="mt-10 text-lg/7 text-zinc-400">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et vel
          expedita cum iusto suscipit pariatur corporis temporibus, accusantium,
          facere amet rem. Voluptatum voluptatibus rerum labore aperiam aliquam,
          illo impedit eius?
        </p>
        <button className="p-5 mt-auto text-lg font-bold text-white transition-colors border-none rounded-lg cursor-pointer bg-emerald-500 hover:bg-emerald-600">
          Comprar agora
        </button>
      </div>
    </div>
  );
}
