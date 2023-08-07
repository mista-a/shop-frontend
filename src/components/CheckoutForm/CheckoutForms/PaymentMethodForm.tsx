import PaymentMethod from '../PaymentMethod/PaymentMethod'
import FormField from '../../common/FormField'
import Grid from '../../common/Grid/Grid'
import { FormProvider, useForm } from 'react-hook-form'
import FormButtons from '../FormButtons'
import { yupResolver } from '@hookform/resolvers/yup'
import { PaymentMethodSchema } from '../validation'
import { Api } from '../../../api/api'
import FlexBox from '../../UI/FlexBox'
import { styled } from '@mui/material'
import CheckoutFormWrapper from './CheckoutFormWrapper'

const Content = styled(FlexBox)({
  flexDirection: 'column',
  gap: '20px',
  marginTop: '20px',
  cursor: 'default',
})

const PaymentMethodForm = ({ checkoutData, previouslyStep, changingForm }) => {
  const form = useForm({
    defaultValues: {
      ...checkoutData,
    },
    mode: 'onBlur',
    resolver: yupResolver(PaymentMethodSchema),
  })

  const onSubmit = async (orderData) => {
    try {
      await Api().user.postOrderData(checkoutData)
    } catch (err) {
      console.warn(err)
    }
  }

  const normalizeCardNumber = (value: string) => {
    return (
      value
        .replace(/\s/g, '')
        .match(/[0-9]{1,4}/g)
        ?.join(' ')
        .substring(0, 19) || ''
    )
  }

  const normalizeeExparationDate = (value: string) => {
    return (
      value
        .replace(/\s/g, '')
        .match(/[0-9]{1,2}/g)
        ?.join('/')
        .substring(0, 5) || ''
    )
  }

  return (
    <FormProvider {...form}>
      <CheckoutFormWrapper onSubmit={form.handleSubmit(onSubmit)}>
        <PaymentMethod
          label='Credit card'
          name='paymentMethod'
          active={form.watch('paymentMethod') === 'Credit card'}
        >
          <Content>
            <FormField
              type='text'
              name='cardNumber'
              label='Card number'
              onChange={(e) => {
                form.setValue('cardNumber', normalizeCardNumber(e.target.value))
              }}
            />
            <FormField type='text' name='nameOnCard' label='Name on card' />
            <Grid gap={20}>
              <FormField
                type='text'
                name='exparationDate'
                label='Exparation date'
                onChange={(e) => {
                  form.setValue(
                    'exparationDate',
                    normalizeeExparationDate(e.target.value)
                  )
                }}
              />
              <FormField
                type='text'
                name='securityCode'
                label='Security code'
              />
            </Grid>
          </Content>
        </PaymentMethod>
        <PaymentMethod
          label='Paypal'
          name='paymentMethod'
          active={form.watch('paymentMethod') === 'Paypal'}
        >
          <Content>
            <FormField type='text' name='payPalName' label='PayPal Name' />
            <FormField type='text' name='payPalEmail' label='PayPal Email' />
            <FormField
              type='text'
              name='payPalPassword'
              label='PayPal Password'
            />
          </Content>
        </PaymentMethod>
        <FormButtons
          changingForm={changingForm}
          previouslyStep={previouslyStep}
        />
      </CheckoutFormWrapper>
    </FormProvider>
  )
}

export default PaymentMethodForm
