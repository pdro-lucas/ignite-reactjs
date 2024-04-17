import * as Tooltip from '@radix-ui/react-tooltip'
import { styled } from '../../styles'

export const TooltipContent = styled(Tooltip.Content, {
  backgroundColor: '$gray900',
  padding: '$1 $2',
  borderRadius: '$xs',
})

export const TooltipArrow = styled(Tooltip.Arrow, {
  fill: '$gray900',
})
