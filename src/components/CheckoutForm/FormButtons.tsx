import styled from '@emotion/styled'
import { Button } from '@mui/material'
import { FC } from 'react'
import Grid from '../common/Grid/Grid'

const FormButton = styled(Button)({
  borderRadius: '20px',
  padding: '15px',
  transition: 'box-shadow .15s ease-in-out, background-color .3s',
  '&:hover': {
    boxShadow: '4px 4px 8px 0px rgba(0, 0, 0, 0.185)',
  },
})

interface CheckoutFormButtonsProps {
  previouslyStep: () => void
  changingForm: boolean
}

const FormButtons: FC<CheckoutFormButtonsProps> = ({
  previouslyStep,
  changingForm,
}) => {
  return (
    <Grid gap={20}>
      <FormButton
        color='secondary'
        onClick={previouslyStep}
        disabled={changingForm}
      >
        Return to cart
      </FormButton>
      <FormButton color='success' type='submit' disabled={changingForm}>
        Continue to shipping
      </FormButton>
    </Grid>
  )
}

export default FormButtons
