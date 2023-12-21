import { ShoppingBag } from 'lucide-react'
import { Badge } from './Badge'

export function ShoppingCart() {
  return (
    <div className="relative p-3 rounded-md bg-zinc-900 text-zinc-400">
      <ShoppingBag size={24} />
      <Badge totalItemsInCart={3} />
    </div>
  )
}
