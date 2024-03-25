import * as Dialog from '@radix-ui/react-dialog'
import axios from 'axios'
import { ShoppingBag, X } from 'lucide-react'
import Image from 'next/image'
import { useContext } from 'react'

import { ShoppingCartContext } from '@/contexts/shoppingCart'
import { formatCurrency } from '@/utils/formatCurrency'

import { Badge } from '../Badge'

export function ShoppingCart() {
  const { products, removeProduct, removeAllProducts } =
    useContext(ShoppingCartContext)

  const totalItemsInCart = products.length

  async function handleBuyAllProductsInCart() {
    try {
      const response = await axios.post('/api/checkout', {
        products,
      })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (error) {
      // console.log(error)
    }
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="relative p-3 transition-colors rounded-md cursor-pointer bg-zinc-900 text-zinc-400 hover:bg-zinc-800">
          <ShoppingBag size={24} />

          {totalItemsInCart > 0 && <Badge count={totalItemsInCart} />}
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Content className="data-[state=open]:animate-slideIn data-[state=closed]:animate-slideOut fixed top-0 right-0 z-30 h-[100vh] max-h-dvh p-6 w-full max-w-[450px] bg-zinc-900 shadow-[-4px_0px_30px_0px_rgba(0,0,0,0.80)]">
          <Dialog.Close className=" text-zinc-400 text-right">
            <X size={24} />
          </Dialog.Close>

          <Dialog.Title className="text-xl">Sacola de compras</Dialog.Title>
          <div className="flex flex-col justify-between h-[90%] mt-8">
            <div className="space-y-6 h-[580px] scrollbar-thumb-zinc-800 scrollbar-thumb-rounded-full scrollbar-thin overflow-y-auto">
              {products.map((product) => (
                // TODO - Generate random id here
                <div key={product.id} className="flex gap-5">
                  <div className="w-24 h-24 rounded-md bg-product-gradient">
                    <Image
                      src={product.imageUrl}
                      alt=""
                      width={96}
                      height={96}
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-2">
                    <p className="text-lg text-zinc-200">{product.name}</p>
                    <p className="text-lg font-bold">
                      {formatCurrency(Number(product.price) / 100)}
                    </p>
                    <button
                      onClick={() => removeProduct(product.id)}
                      className="block text-emerald-600"
                    >
                      Remover
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="">
              <div className="flex justify-between text-zinc-400">
                <span>Quantidade</span>
                <span>
                  {totalItemsInCart > 1
                    ? `${totalItemsInCart} itens`
                    : `${totalItemsInCart} item`}
                </span>
              </div>

              <div className="flex justify-between text-lg font-bold">
                <span>Valor total</span>
                <span>
                  {formatCurrency(
                    products.reduce((acc, product) => {
                      return acc + Number(product.price)
                    }, 0) / 100,
                  )}
                </span>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={handleBuyAllProductsInCart}
                  disabled={totalItemsInCart === 0}
                  className="w-full p-4 mt-12 transition-colors rounded-md bg-emerald-500 disabled:bg-emerald-500/20 hover:bg-emerald-600 disabled:cursor-not-allowed"
                >
                  Finalizar compra
                </button>
                <button
                  onClick={() => removeAllProducts()}
                  disabled={totalItemsInCart === 0}
                  className="w-full p-4 mt-12 transition-colors rounded-md bg-red-500 hover:bg-red-600 disabled:bg-red-500/20 disabled:cursor-not-allowed"
                >
                  Remover Todos
                </button>
              </div>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
