import { styled } from './styles'

const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$ignite300',
  color: '$gray100',
  padding: '$4',
})

export function App() {
  return <Button>Teste</Button>
}
