import { Avatar, Box, Text, Tooltip, TooltipProps } from '@ignite-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Helpers/Tooltip',
  component: Tooltip,
  args: {
    children: <Text size={'sm'}>This is Tooltip message</Text>,
    triggerComponent: (
      <Avatar
        src="https://github.com/pdro-lucas.png"
        alt="Github Profile Photo"
      />
    ),
    side: 'right',
    sideOffset: 6,
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          <Text size={'sm'}>Hover to show the Tooltip</Text>
          {Story()}
        </Box>
      )
    },
  ],
  argTypes: {
    children: {
      control: { type: null },
    },
    triggerComponent: {
      control: { type: null },
    },
    side: {
      options: ['top', 'right', 'bottom', 'left'],
      control: { type: 'inline-radio' },
    },
    sideOffset: {
      control: { type: 'number' },
    },
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
