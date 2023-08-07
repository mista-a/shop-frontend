import * as yup from 'yup'
import { email, required } from '../../utils/yup'

export const LoginFormSchema = yup.object().shape({
  email: required(email),
  password: required(yup.string()),
})

export const RegisterFormSchema = yup
  .object()
  .shape({
    name: required(yup.string()),
  })
  .concat(LoginFormSchema)
