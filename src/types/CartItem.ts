import { IProduct } from './Product'
import { ISize } from './Size'

export interface ICartItem {
  id: number
  size: ISize
  count: number
  product: IProduct
}
