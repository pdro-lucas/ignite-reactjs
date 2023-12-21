interface BadgeProps {
  totalItemsInCart: number
}

export function Badge({ totalItemsInCart }: BadgeProps) {
  return (
    <span className="absolute flex items-center justify-center w-5 h-5 leading-none rounded-full outline outline-4 outline-zinc-950 -top-2 bg-emerald-600 -right-2">
      <span className="font-bold text-white">{totalItemsInCart}</span>
    </span>
  )
}
