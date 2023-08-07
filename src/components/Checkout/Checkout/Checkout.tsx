import { Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { Api } from '../../../api/api'
import { ICartItem } from '../../../types/CartItem'
import { ICheckoutData } from '../../../types/CheckoutData'
import CheckoutForm from '../../CheckoutForm/CheckoutForm'
import Steps from '../Steps/Steps'
import TotalCheckout from '../TotalCheckout/TotalCheckout'
import { StyledCheckout } from './CheckoutStyled'
import { IStep } from '../../../types/Step'

interface CheckoutProps {
  cart: ICartItem[]
}

const Checkout: React.FC<CheckoutProps> = ({ cart }) => {
  const [stepCount, setStepCount] = useState<number>(1)
  const [checkoutData, setCheckoutData] = useState<ICheckoutData>()

  useEffect(() => {
    const getLastOrderData = async () => {
      const data = await Api().user.getLastOrderData()
      setCheckoutData(data)
    }

    getLastOrderData()
  }, [])

  const steps: IStep[] = [
    {
      id: 1,
      stepName: 'Contact information',
      description: `${checkoutData?.firstName} ${checkoutData?.lastName} (${checkoutData?.email})`,
    },
    {
      id: 2,
      stepName: 'Shipping address',
      description: `${checkoutData?.firstNameRecipient}, ${
        checkoutData?.lastNameRecipient
      }, ${checkoutData?.address} ${checkoutData?.city}, ${
        checkoutData?.state ? `${checkoutData?.state},` : ''
      } ${checkoutData?.zip}, ${checkoutData?.country}`,
    },
    {
      id: 3,
      stepName: 'Shipping method',
      description: `${checkoutData?.shippingMethod} • $${checkoutData?.shippingMethodPrice}`,
    },
    { id: 4, stepName: 'Payment method', description: '' },
  ]

  const previouslyStep = () => {
    if (stepCount > 1) setStepCount(stepCount - 1)
  }

  const nextStep = () => {
    if (stepCount < steps.length) setStepCount(stepCount + 1)
  }

  return (
    <StyledCheckout>
      <div>
        <Typography variant='h4'>CHECKOUT DETAILS</Typography>
        <CheckoutForm
          checkoutData={checkoutData}
          setCheckoutData={setCheckoutData}
          previouslyStep={previouslyStep}
          nextStep={nextStep}
          activeStep={steps[stepCount - 1]}
        />
      </div>
      <div>
        {stepCount > 1 && (
          <Steps
            steps={steps}
            stepCount={stepCount}
            setStepCount={setStepCount}
          />
        )}
        <TotalCheckout
          stepCount={stepCount}
          checkoutData={checkoutData}
          cart={cart}
        />
      </div>
    </StyledCheckout>
  )
}

export default Checkout
