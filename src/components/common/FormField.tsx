import { TextFieldProps } from '@mui/material'
import React, { FC } from 'react'
import { useFormContext } from 'react-hook-form'
import BackgroundTextField from '../UI/BackgroundTextField'

const FormField: FC<TextFieldProps> = ({ name, onChange, ...props }) => {
  const form = useFormContext()

  return (
    <BackgroundTextField
      fullWidth
      variant='filled'
      error={!!form?.formState.errors[name]?.message}
      helperText={form?.formState.errors[name]?.message}
      name={name}
      onChange={onChange}
      {...form?.register(name, { onChange })}
      {...props}
    />
  )
}

export default FormField
