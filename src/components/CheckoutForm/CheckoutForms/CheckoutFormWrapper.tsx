import { FC, FormEventHandler, ReactNode } from 'react'

interface CheckoutFormWrapperProps {
  onSubmit: FormEventHandler<HTMLFormElement>
  children?: ReactNode
}

const CheckoutFormWrapper: FC<CheckoutFormWrapperProps> = ({
  onSubmit,
  children,
}) => {
  return (
    <form
      // sx={{ display: 'flex', flexDirection: 'column', gap: '30px' }}
      onSubmit={onSubmit}
    >
      {children}
    </form>
  )
}

export default CheckoutFormWrapper
