import { Button, styled } from '@mui/material'

type StyledSimularProductProps = {
  active?: boolean
}

export const StyledSimularProduct = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'active',
})<StyledSimularProductProps>(({ active = false }) => ({
  padding: 0,
  borderRadius: '12px',
  overflow: 'hidden',
  height: 'fit-content',
  lineHeight: 0,
  ...(active && {
    outline: '1px solid black',
  }),
}))
