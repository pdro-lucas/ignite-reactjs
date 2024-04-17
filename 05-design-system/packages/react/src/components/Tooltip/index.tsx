import * as TooltipBase from '@radix-ui/react-tooltip'
import { ComponentProps } from 'react'
import { TooltipArrow, TooltipContent } from './styles'

export interface TooltipProps extends ComponentProps<typeof TooltipContent> {
  triggerComponent: React.ReactNode
  children: React.ReactNode
}

export function Tooltip({
  triggerComponent,
  children,
  ...props
}: TooltipProps) {
  return (
    <TooltipBase.Provider>
      <TooltipBase.Root>
        <TooltipBase.Trigger asChild>{triggerComponent}</TooltipBase.Trigger>
        <TooltipBase.Portal>
          <TooltipContent {...props}>
            <TooltipArrow />
            {children}
          </TooltipContent>
        </TooltipBase.Portal>
      </TooltipBase.Root>
    </TooltipBase.Provider>
  )
}
