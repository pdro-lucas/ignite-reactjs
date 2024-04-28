import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Text, TextInput } from '@ignite-ui/react'
import { useRouter } from 'next/router'
import { ArrowRight } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Form, FormAnotation } from './styles'

const clainUsernameFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'O usuário deve ter no mínimo 3 caracteres' })
    .regex(/^([a-z\\-]+)$/i, {
      message: 'O usuário deve conter apenas letras e hífens',
    })
    .transform((username) => username.toLowerCase()),
})

type ClainUsernameFormData = z.infer<typeof clainUsernameFormSchema>

export function ClainUsernameForm() {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ClainUsernameFormData>({
    resolver: zodResolver(clainUsernameFormSchema),
  })

  async function handleClainUsername(data: ClainUsernameFormData) {
    const { username } = data

    // TODO: Check if username is available before redirecting

    await router.push(`/register?username=${username}`)
  }

  return (
    <>
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
        <Button size="sm" type="submit" disabled={isSubmitting}>
          Reservar usuário
          <ArrowRight />
        </Button>
      </Form>

      <FormAnotation>
        <Text size="sm">
          {errors.username
            ? errors.username.message
            : 'Digite um nome de usuário para reservar'}
        </Text>
      </FormAnotation>
    </>
  )
}
