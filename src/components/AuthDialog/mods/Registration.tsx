import { FormProvider, useForm } from 'react-hook-form'
import { RegisterFormSchema } from '../validations'
import { yupResolver } from '@hookform/resolvers/yup'
import { CreateUserDto } from '../../../api/types'
import { Api } from '../../../api/api'
import FormField from '../../common/FormField'
import PasswordField from '../PasswordField'
import AuthSubmitForm from '../AuthSubmitForm/AuthSubmitForm'

interface RegistrationProps {
  errorMessage: string
  onSubmit: (values: CreateUserDto, request: () => void) => void
}

const Registration: React.FC<RegistrationProps> = ({
  onSubmit,
  errorMessage,
}) => {
  const form = useForm({
    mode: 'onChange',
    resolver: yupResolver(RegisterFormSchema),
  })

  const register = (values: CreateUserDto) => {
    onSubmit(values, () => Api().user.register(values))
  }

  return (
    <FormProvider {...form}>
      <FormField name='name' label='Name' />
      <FormField name='email' label='Email' />
      <PasswordField />
      <AuthSubmitForm
        onSubmit={register}
        buttonText='Registration'
        errorMessage={errorMessage}
      />
    </FormProvider>
  )
}

export default Registration
