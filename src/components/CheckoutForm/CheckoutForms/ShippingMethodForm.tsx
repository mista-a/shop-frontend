import { FormProvider, useForm } from 'react-hook-form'
import FormButtons from '../FormButtons'
import { yupResolver } from '@hookform/resolvers/yup'
import { ShippingMethodSchema } from '../validation'
import CheckoutFormWrapper from './CheckoutFormWrapper'
import ShippingMethod from '../../Checkout/Checkout/ShippingMethod'
import { ICheckoutData } from '../../../types/CheckoutData'

interface ShippingMethodFormProps {
  checkoutData: ICheckoutData
  previouslyStep: () => void
  changingForm
  onSubmit
}

const ShippingMethodForm = ({
  checkoutData,
  previouslyStep,
  changingForm,
  onSubmit,
}) => {
  const form = useForm({
    defaultValues: { ...checkoutData },
    mode: 'onBlur',
    resolver: yupResolver(ShippingMethodSchema),
  })

  const options = [
    {
      id: 1,
      logo: 'www.ups.com/assets/resources/images/UPS_logo.svg',
      name: 'UPS Ground',
      deliveryTime: 2,
      price: 123,
    },
    {
      id: 2,
      logo: 'www.ups.com/assets/resources/images/UPS_logo.svg',
      name: 'UPS Next Day Air',
      deliveryTime: 3,
      price: 312,
    },
    {
      id: 3,
      logo: 'www.ups.com/assets/resources/images/UPS_logo.svg',
      name: 'UPS Next Day Air123',
      deliveryTime: 3,
      price: 312,
    },
  ]

  const onSubmitShippingForm = (values) => {
    const shippingMethod = options.filter(
      (option) => option.name === values.shippingMethod
    )
    values.shippingMethodPrice = shippingMethod[0].price
    onSubmit(values)
  }

  return (
    <FormProvider {...form}>
      <CheckoutFormWrapper onSubmit={form.handleSubmit(onSubmitShippingForm)}>
        {options.map(({ id, deliveryTime, logo, name, price }) => (
          <label key={id}>
            <input
              value={name}
              style={{ width: 0, height: 0, margin: 0, display: 'flex' }}
              type='radio'
              {...form.register('shippingMethod')}
            />
            <ShippingMethod
              deliveryTime={deliveryTime}
              logo={`//${logo}`}
              name={name}
              price={price}
              active={form.watch('shippingMethod') === name}
            />
          </label>
        ))}
        <FormButtons
          changingForm={changingForm}
          previouslyStep={previouslyStep}
        />
      </CheckoutFormWrapper>
    </FormProvider>
  )
}

export default ShippingMethodForm
