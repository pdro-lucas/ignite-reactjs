import { ChevronLeft, ChevronRight } from 'lucide-react'

type SliderArrowProps = {
  direction: 'left' | 'right'
  onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

export function SliderArrow({ direction, onClick }: SliderArrowProps) {
  const isLeft = direction === 'left'
  const Chevron = isLeft ? ChevronLeft : ChevronRight
  const className = `absolute top-2/4 transform -translate-y-2/4 ${
    isLeft ? 'left-0' : 'right-0'
  } z-10 h-full flex justify-center items-center w-32 ${
    isLeft ? 'bg-slider-arrow-left-bg' : 'bg-slider-arrow-right-bg'
  } cursor-pointer`

  return (
    <div
      className={className}
      onClick={onClick}
    >
      <span>
        <Chevron
          size={48}
          strokeWidth={1}
        />
      </span>
    </div>
  )
}

export default SliderArrow
