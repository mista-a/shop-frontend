import { Button, Typography } from '@mui/material'
import { StyledCounter } from './CounterStyles'

interface CounterProps {
  counter: number
  setCounter: (counter?: number) => void
}

const Counter: React.FC<CounterProps> = ({ counter, setCounter }) => {
  const increment = () => setCounter(counter + 1)

  const decrement = () => {
    counter > 1 && setCounter(counter - 1)
  }

  return (
    <StyledCounter>
      <Button onClick={decrement}>-</Button>
      <Typography>{counter}</Typography>
      <Button onClick={increment}>+</Button>
    </StyledCounter>
  )
}

export default Counter
