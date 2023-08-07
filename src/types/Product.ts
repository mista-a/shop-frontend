import { IColor } from './Color'
import { ISize } from './Size'

export interface IProduct {
  id: number
  name: string
  price: number
  previewImg: string
  imgs: string[]
  colors: IColor[]
  inFavorite: boolean
  sizes: ISize[]
  description: string
  simularProducts: IProduct[]
}
