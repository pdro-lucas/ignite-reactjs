import { User } from 'phosphor-react'
import React, { ComponentProps } from 'react'
import { AvatarContainer, AvatarFallback, AvatarImage } from './styles'

export interface AvatarProps extends ComponentProps<typeof AvatarImage> {}

export const Avatar = React.forwardRef<HTMLImageElement, AvatarProps>(
  (props, ref) => {
    return (
      <AvatarContainer>
        <AvatarImage ref={ref} {...props} />
        <AvatarFallback delayMs={600}>
          <User />
        </AvatarFallback>
      </AvatarContainer>
    )
  },
)

Avatar.displayName = 'Avatar'
