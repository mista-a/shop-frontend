import * as yup from 'yup'

export const number = yup.number().typeError('Number only')
export const numberLength = (length: number) => {
  return number.test(
    'length',
    `Must be exactly ${length} characters`,
    (value) => value.toString().length === length
  )
}

export const lettersOnly = yup.string().matches(/^[aA-zZ\s]+$/, 'Letters only')
export const email = yup.string().email('Incorrect email')

export const required = (field) => field.required('Required field')
export const condition = (
  conditonField,
  conditionFieldName: string,
  condition: string,
  field
) => {
  return conditonField.when(conditionFieldName, (value) => {
    if (value === condition) return field
  })
}
