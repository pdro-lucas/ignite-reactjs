import { ChevronLeft, ChevronRight } from 'lucide-react'

type SliderArrowProps = {
  direction: 'left' | 'right'
  disabled?: boolean
  onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

export function SliderArrow({
  direction,
  disabled,
  onClick,
}: SliderArrowProps) {
  const isLeft = direction === 'left'
  const Chevron = isLeft ? ChevronLeft : ChevronRight
  const className = `absolute top-2/4 transform -translate-y-2/4 ${
    isLeft ? 'left-0' : 'right-0'
  } z-10 h-full flex justify-center items-center w-32 ${
    isLeft ? 'bg-slider-arrow-left-bg' : 'bg-slider-arrow-right-bg'
  } cursor-pointer data-[disabled=true]:text-zinc-400 data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-50 data-[disabled=true]:hover:opacity-1`

  return (
    <div className={className} onClick={onClick} data-disabled={disabled}>
      <span>
        <Chevron size={48} strokeWidth={1} />
      </span>
    </div>
  )
}

export default SliderArrow
