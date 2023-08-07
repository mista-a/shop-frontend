import FormField from '../../common/FormField'
import Grid from '../../common/Grid/Grid'
import { ShippingAddressSchema } from '../validation'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormProvider, useForm } from 'react-hook-form'
import FormButtons from '../FormButtons'
import CheckoutFormWrapper from './CheckoutFormWrapper'

const ShippingAddressForm = ({
  checkoutData,
  changingForm,
  previouslyStep,
  onSubmit,
}) => {
  const form = useForm({
    defaultValues: {
      ...checkoutData,
      firstNameRecipient: checkoutData.firstName,
      lastNameRecipient: checkoutData.lastName,
    },
    mode: 'onBlur',
    resolver: yupResolver(ShippingAddressSchema),
  })

  return (
    <FormProvider {...form}>
      <CheckoutFormWrapper onSubmit={form.handleSubmit(onSubmit)}>
        <Grid gap={30}>
          <FormField name='firstNameRecipient' label='First name (recipient)' />
          <FormField name='lastNameRecipient' label='Last name (recipient)' />
        </Grid>
        <FormField name='company' label='Company (optional)' />
        <FormField name='address' label='Address' />
        <FormField name='apartment' label='Apartment, suit, etc (optional)' />
        <FormField name='city' label='City' />
        <Grid gap={20}>
          <FormField name='country' label='Country' />
          <FormField name='state' label='State (optional)' />
          <FormField name='zip' label='ZIP code' />
        </Grid>
        <FormButtons
          previouslyStep={previouslyStep}
          changingForm={changingForm}
        />
      </CheckoutFormWrapper>
    </FormProvider>
  )
}

export default ShippingAddressForm
