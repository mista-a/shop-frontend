import { useState } from 'react'
import FormField from '../common/FormField'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'
import { Button, TextFieldProps } from '@mui/material'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'

type FormFieldType = 'text' | 'password'

const PasswordField: React.FC<TextFieldProps> = ({ onChange, ...props }) => {
  const [formFieldType, setFormFieldType] = useState<FormFieldType>('password')

  const toggleShowPassword = () => {
    formFieldType === 'text'
      ? setFormFieldType('password')
      : setFormFieldType('text')
  }

  return (
    <FormField
      type={formFieldType}
      name='password'
      label='Password'
      InputProps={{
        endAdornment: (
          <Button variant='text' onClick={toggleShowPassword}>
            {formFieldType === 'text' ? (
              <VisibilityOffIcon />
            ) : (
              <RemoveRedEyeIcon />
            )}
          </Button>
        ),
      }}
      {...props}
    />
  )
}

export default PasswordField
