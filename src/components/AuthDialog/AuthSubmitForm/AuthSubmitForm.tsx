import { Alert, Button } from '@mui/material'
import { FieldValues, SubmitHandler, useFormContext } from 'react-hook-form'
import { StyledAuthSubmitForm } from './AuthSubmitFormStyles'

interface AuthSubmitFormProps {
  onSubmit: SubmitHandler<FieldValues>
  buttonText: string
  errorMessage: string
}

const AuthSubmitForm: React.FC<AuthSubmitFormProps> = ({
  onSubmit,
  buttonText,
  errorMessage,
}) => {
  const { handleSubmit, formState } = useFormContext()

  return (
    <StyledAuthSubmitForm onSubmit={handleSubmit(onSubmit)}>
      {errorMessage && <Alert severity='error'>{errorMessage}</Alert>}
      <Button
        type='submit'
        color='success'
        disabled={!formState.isValid || formState.isSubmitting}
      >
        {buttonText}
      </Button>
    </StyledAuthSubmitForm>
  )
}

export default AuthSubmitForm
