import { ShoppingBag } from 'lucide-react'
import { Badge } from './Badge'

export function ShoppingCart() {
  const totalItemsInCart = 1
  return (
    <button className="relative p-3 transition-colors rounded-md cursor-pointer bg-zinc-900 text-zinc-400 hover:bg-zinc-800">
      <ShoppingBag size={24} />

      {totalItemsInCart > 0 && <Badge count={totalItemsInCart} />}
    </button>
  )
}
