import { Box, styled, Typography } from '@mui/material'
import { FC, ReactNode } from 'react'
import { useFormContext } from 'react-hook-form'
import RadioIcon from '../../UI/RadioIcon'

interface PaymentMethodProps {
  name?: string
  label?: string
  active?: boolean
  children?: ReactNode
}

const PaymentMethod: FC<PaymentMethodProps> = ({
  name,
  children,
  label,
  active = false,
}) => {
  const PaymentMethod = styled('label')({
    padding: '20px',
    borderRadius: '15px',
    border: '1px solid #E1E1E1',
    display: 'block',
    '&:active': {
      transform: 'scale(0.98)',
    },
    '&:hover': {
      cursor: 'pointer',
    },
  })

  const { register } = useFormContext()

  return (
    <PaymentMethod
      sx={{
        ...(active && {
          '&:active': {
            transform: 'none',
          },
        }),
      }}
    >
      <div style={{ display: 'flex' }}>
        <input
          style={{ width: 0, height: 0, margin: 0 }}
          value={label}
          type='radio'
          {...register(name)}
        />
        <RadioIcon active={active} />
        <Typography component='span' sx={{ fontSize: '19px', fontWeight: 500 }}>
          {label}
        </Typography>
      </div>
      <Box
        sx={{
          display: 'none',
          ...(active && {
            display: 'block',
          }),
        }}
      >
        {children}
      </Box>
    </PaymentMethod>
  )
}

export default PaymentMethod
