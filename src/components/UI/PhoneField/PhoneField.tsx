import React, { FC } from 'react'
import styles from './PhoneField.module.sass'
import { FormHelperText } from '@mui/material'
import PhoneInput, { PhoneInputProps } from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

interface PhoneFieldProps extends PhoneInputProps {
  error?: boolean
  errorMessage?: string
  showCountryGuess?: boolean
}

const PhoneField: FC<PhoneFieldProps> = ({
  showCountryGuess,
  error,
  errorMessage,
  ...props
}) => {
  return (
    <div>
      <PhoneInput
        inputClass={props.inputClass || styles.input}
        buttonClass={props.buttonClass || styles.button}
        {...props}
      />
      {<FormHelperText error>{errorMessage}</FormHelperText>}
    </div>
  )
}

export default PhoneField
