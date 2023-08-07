import { styled } from '@mui/material'

interface StyledCheckoutFormProps {
  changingForm: boolean
  showAnimationTime: number
}

export const StyledCheckoutForm = styled('div', {
  shouldForwardProp: (prop) =>
    prop !== 'changingForm' && prop !== 'showAnimationTime',
})<StyledCheckoutFormProps>(({ changingForm, showAnimationTime }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 30,
  width: 520,
  backgroundColor: '#fff',
  border: '1px solid grey',
  padding: '40px',
  borderRadius: '35px',
  '@keyframes show': {
    '0%': {
      opacity: 0.3,
      transform: 'translateY(100px)',
    },
    '100%': {
      transform: 'translateY(0px)',
      opacity: 1,
    },
  },
  ...(changingForm && {
    animation: `show ${showAnimationTime / 1000}s`,
  }),
}))
