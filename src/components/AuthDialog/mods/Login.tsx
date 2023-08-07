import { useForm, FormProvider } from 'react-hook-form'
import { LoginFormSchema } from '../validations'
import { yupResolver } from '@hookform/resolvers/yup'
import { LoginDto } from '../../../api/types'
import { Api } from '../../../api/api'
import FormField from '../../common/FormField'
import PasswordField from '../PasswordField'
import AuthSubmitForm from '../AuthSubmitForm/AuthSubmitForm'

interface LoginProps {
  errorMessage: string
  onSubmit: (values: LoginDto, request: () => void) => void
}

const Login: React.FC<LoginProps> = ({ errorMessage, onSubmit }) => {
  const form = useForm({
    mode: 'onChange',
    resolver: yupResolver(LoginFormSchema),
  })

  const login = (values: LoginDto) => {
    onSubmit(values, () => Api().user.login(values))
  }

  return (
    <FormProvider {...form}>
      <FormField name='email' label='Email' />
      <PasswordField />
      <AuthSubmitForm
        onSubmit={login}
        buttonText='Login'
        errorMessage={errorMessage}
      />
    </FormProvider>
  )
}

export default Login
