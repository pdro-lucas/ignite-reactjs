import * as Checkbox from '@radix-ui/react-checkbox'
import { keyframes } from '@stitches/react'
import { styled } from '../../styles'

export const CheckboxContainer = styled(Checkbox.Root, {
  all: 'unset',
  width: '$6',
  height: '$6',
  backgroundColor: '$gray900',
  borderRadius: '$xs',
  lineHeight: 0,
  cursor: 'pointer',
  overflow: 'hidden',
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderColor: '$2px solid $gary900',
  color: '$white',

  '&[data-state="checked"]': {
    backgroundColor: '$ignite300',
  },

  '&:focus': {
    borderColor: '$2px solid $ignite300',
  },
})

const slideIn = keyframes({
  from: { transform: 'translateY(-100%)' },
  to: { transform: 'translateY(0)' },
})

const slideOut = keyframes({
  from: { transform: 'translateY(0%)' },
  to: { transform: 'translateY(-100%)' },
})

export const CheckboxIndicator = styled(Checkbox.Indicator, {
  width: '$4',
  height: '$4',

  '&[data-state="checked"]': {
    animation: `${slideIn} 0.2s ease-out`,
  },

  '&[data-state="unchecked"]': {
    animation: `${slideOut} 0.2s ease-out`,
  },
})
