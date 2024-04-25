import { Heading, Text } from '@ignite-ui/react'
import Image from 'next/image'
import previewImage from '../../assets/calendar.png'
import { ClainUsernameForm } from './components/ClainUsernameForm'
import { Container, Hero, Preview } from './style'

export default function Home() {
  return (
    <>
      <Container>
        <Hero>
          <Heading size="4xl">Agendamento descomplicado</Heading>
          <Text size="xl">
            Conecte seu calendário e permita que as pessoas marquem agendamentos
            no seu tempo livre.
          </Text>

          <ClainUsernameForm />
        </Hero>

        <Preview>
          <Image
            src={previewImage}
            alt="Preview app image"
            height={400}
            quality={100}
            priority
          />
        </Preview>
      </Container>
    </>
  )
}
