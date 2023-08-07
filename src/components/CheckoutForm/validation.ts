import * as yup from 'yup'
import {
  condition,
  email,
  lettersOnly,
  number,
  numberLength,
  required,
} from '../../utils/yup'
import 'yup-phone'

//fix порядок ошибок

export const ContactInformationSchema = yup.object().shape({
  firstName: required(yup.string()),
  lastName: required(yup.string()),
  phoneNumber: required(
    yup.string().phone(null, false, 'Invalide phone number')
  ),
  email: required(email),
})

export const ShippingAddressSchema = yup.object().shape({
  firstNameRecipient: required(yup.string()),
  lastNameRecipient: required(yup.string()),
  company: yup.string(),
  address: required(yup.string()),
  apartment: yup.string(),
  city: required(yup.string()),
  country: required(yup.string()),
  state: yup.string(),
  zip: required(number),
})

export const ShippingMethodSchema = yup.object().shape({
  shippingMethod: required(yup.string()),
})

const paymentMethodCondition = (method: 'Credit card' | 'Paypal', field) => {
  return condition(yup.string(), 'paymentMethod', method, field)
}

export const PaymentMethodSchema = yup.object().shape({
  paymentMethod: required(yup.string()),
  cardNumber: paymentMethodCondition(
    'Credit card',
    required(yup.string().length(19, 'Card number should be 16 characters'))
  ),
  nameOnCard: paymentMethodCondition('Credit card', required(lettersOnly)),
  exparationDate: paymentMethodCondition(
    'Credit card',
    required(yup.string().length(5, 'Exparation date should be 4 characters'))
  ),
  securityCode: paymentMethodCondition(
    'Credit card',
    required(numberLength(4))
  ),
  payPalName: paymentMethodCondition('Paypal', required(yup.string())),
  payPalEmail: paymentMethodCondition('Paypal', required(email)),
  payPalPassword: paymentMethodCondition('Paypal', required(yup.string())),
})
