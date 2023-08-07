import { IProduct } from '../types/Product'
import { ISize } from '../types/Size'

export type LoginDto = {
  email: string
  password: string
}

export type CreateUserDto = {
  name: string
} & LoginDto

export type ResponseUser = {
  id: number
  email: string
  name: string
  token: string
}

export type GetProductsParams = {
  page?: number
  limit?: number
  colors?: string | string[]
  sort?: string
  min?: number
  max?: number
  name?: string
}

export type AddProductToCartDto = {
  productId: number
  count: number
  sizeId: number
}

export type DeleteProductDto = {
  cartItemId: number
  deleteProductsCounter: number
}

export type ResponseCartItem = {
  id: number
  count: number
  size: ISize
  product: IProduct
}
