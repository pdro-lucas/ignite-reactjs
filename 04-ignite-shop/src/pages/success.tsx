import Image from 'next/image';
import Link from 'next/link';

export default function Success() {
  return (
    <div className="max-w-[1180px] mx-auto flex flex-col items-center justify-center h-[656px]">
      <h1 className="text-4xl font-bold text-zinc-300">Compra efetuada</h1>
      <div className="w-full max-w-[130px] h-36 rounded-lg p-1 flex items-center justify-center bg-product-gradient mt-16">
        {/* <Image src="/img/success.png" width={500} height={500} alt=''/> */}
      </div>
      <p className="max-w-xl mt-8 text-2xl text-center text-zinc-200">
        Uhuul <strong>Pedro Lucas</strong>, sua{' '}
        <strong>Camiseta Beyound The Limits</strong> está a caminho da sua casa!
      </p>

      <Link
        href="/"
        className="block mt-20 text-xl transition-colors text-emerald-500 hover:text-emerald-400"
      >
        Voltar ao catálogo
      </Link>
    </div>
  );
}
