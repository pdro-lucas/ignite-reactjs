import { zodResolver } from '@hookform/resolvers/zod'
import { Button, TextInput } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Form } from './styles'

const clainUsernameFormSchema = z.object({
  username: z
    .string()
    .min(3)
    .regex(/^([a-z\\-]+)$/i)
    .transform((username) => username.toLowerCase()),
})

type ClainUsernameFormData = z.infer<typeof clainUsernameFormSchema>

export function ClainUsernameForm() {
  const { register, handleSubmit } = useForm<ClainUsernameFormData>({
    resolver: zodResolver(clainUsernameFormSchema),
  })

  async function handleClainUsername(data: ClainUsernameFormData) {
    console.log(data)
  }

  return (
    <Form as="form" onSubmit={handleSubmit(handleClainUsername)}>
      <TextInput
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        size="sm"
        prefix="ignite.com/"
        placeholder="Seu usuário"
        crossOrigin=""
        css={{
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}
        {...register('username')}
      />
      <Button size="sm" type="submit">
        Reservar usuário
        <ArrowRight />
      </Button>
    </Form>
  )
}
