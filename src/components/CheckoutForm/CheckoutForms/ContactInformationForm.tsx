import FormField from '../../common/FormField'
import Grid from '../../common/Grid/Grid'
import { ContactInformationSchema } from '../validation'
import { yupResolver } from '@hookform/resolvers/yup'
import { Controller, FormProvider, useForm } from 'react-hook-form'
import FormButtons from '../FormButtons'
import { useAppSelector } from '../../../redux/hooks'
import { selectUserData } from '../../../redux/slices/user'
import PhoneField from '../../UI/PhoneField/PhoneField'
import CheckoutFormWrapper from './CheckoutFormWrapper'

const ContactInformationForm = ({
  checkoutData,
  changingForm,
  previouslyStep,
  onSubmit,
}) => {
  const { email } = useAppSelector(selectUserData)
  const form = useForm({
    defaultValues: {
      email,
      phoneNumber: '+',
      ...checkoutData,
    },
    mode: 'onBlur',
    resolver: yupResolver(ContactInformationSchema),
  })

  return (
    <FormProvider {...form}>
      <CheckoutFormWrapper onSubmit={form.handleSubmit(onSubmit)}>
        <Grid gap={30}>
          <FormField name='firstName' label='First name' />
          <FormField name='lastName' label='Last name' />
        </Grid>
        <FormField name='email' label='Email' />
        <Controller
          name='phoneNumber'
          control={form.control}
          render={({ field: { onChange }, fieldState: { error } }) => (
            <PhoneField
              error={!!error?.message}
              errorMessage={error?.message}
              onChange={(value) => onChange(`+${value}`)}
              placeholder='Phone number'
              disableDropdown
              enableTerritories
            />
          )}
        />
        <FormButtons
          changingForm={changingForm}
          previouslyStep={previouslyStep}
        />
      </CheckoutFormWrapper>
    </FormProvider>
  )
}

export default ContactInformationForm
