import { useEffect, useState } from 'react'
import ShippingAddressForm from './CheckoutForms/ShippingAddressForm'
import ShippingMethodForm from './CheckoutForms/ShippingMethodForm'
import PaymentMethodForm from './CheckoutForms/PaymentMethodForm'
import ContactInformationForm from './CheckoutForms/ContactInformationForm'
import FlexBox from '../UI/FlexBox'
import { Typography } from '@mui/material'
import { StyledCheckoutForm } from './CheckoutFormStyled'
import { ICheckoutData } from '../../types/CheckoutData'
import { IStep } from '../../types/Step'
import StepCount from '../Checkout/Checkout/StepCount'

interface CheckoutFormProps {
  checkoutData: ICheckoutData
  setCheckoutData: (data: ICheckoutData) => void
  previouslyStep: () => void
  nextStep: () => void
  activeStep: IStep
}

const CheckoutForm = ({
  checkoutData,
  setCheckoutData,
  previouslyStep,
  nextStep,
  activeStep,
}: CheckoutFormProps) => {
  const [changingForm, setChangingForm] = useState<boolean>(true)

  const setFormData = (values) => {
    setCheckoutData({ ...checkoutData, ...values })
  }

  const showAnimationTime = 700

  useEffect(() => {
    setTimeout(() => {
      setChangingForm(false)
    }, showAnimationTime)
  }, [])

  const onSubmit = (values) => {
    setChangingForm(true)
    setFormData(values)
    nextStep()
    setTimeout(() => {
      setChangingForm(false)
    }, showAnimationTime)
  }

  const previouslyForm = () => {
    setChangingForm(true)
    previouslyStep()
    setTimeout(() => {
      setChangingForm(false)
    }, showAnimationTime)
  }

  const formProps = {
    changingForm,
    onSubmit,
    checkoutData,
    previouslyStep: previouslyForm,
  }

  const forms = [
    <ContactInformationForm {...formProps} key={1} />,
    <ShippingAddressForm {...formProps} key={2} />,
    <ShippingMethodForm {...formProps} key={3} />,
    <PaymentMethodForm {...formProps} key={4} />,
  ]

  return (
    <StyledCheckoutForm
      changingForm={changingForm}
      showAnimationTime={showAnimationTime}
    >
      <FlexBox sx={{ alignItems: 'center', gap: '10px' }}>
        <StepCount number={activeStep.id} active />
        <Typography sx={{ fontSize: '25px', fontWeight: '500' }}>
          {activeStep.stepName}
        </Typography>
      </FlexBox>
      {forms[activeStep.id - 1]}
    </StyledCheckoutForm>
  )
}

export default CheckoutForm
