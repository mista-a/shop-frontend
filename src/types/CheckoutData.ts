export interface ICheckoutData {
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  firstNameRecipient: string
  lastNameRecipient: string
  company?: string
  address: string
  appartment?: string
  city: string
  state?: string
  zip: number
  country: string
  shippingMethod: string
  shippingMethodPrice: number
}
