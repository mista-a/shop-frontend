import { AxiosInstance } from 'axios'
import {
  CreateUserDto,
  GetProductsParams,
  LoginDto,
  ResponseUser,
} from './types'
import { ICategory } from '../types/Category'
import { ParsedUrlQuery } from 'querystring'
import { IColor } from '../types/Color'
import { IProduct } from '../types/Product'

type CreateProductDto = {
  name: string
  img: string
  price: string
  colors: IColor[]
  showcase: any[]
}

export const ProductApi = (instance: AxiosInstance) => ({
  async get(params?: GetProductsParams) {
    const { data } = await instance.get(`/products`, { params })
    return data
  },

  async getById(id: number) {
    const { data } = await instance.get(`products/${id}`)
    return data
  },

  async create(dto: CreateProductDto) {
    await instance.post<CreateProductDto>('/products', dto)
  },

  async getCategories() {
    const { data } = await instance.get<ICategory[]>('/products/categories')
    return data
  },

  async getBySubcategory(
    category: string,
    subcategory: string,
    params: GetProductsParams
  ) {
    const { data } = await instance.get(
      `/products/${category}/${subcategory}`,
      {
        params,
      }
    )
    return data
  },

  async checkInFavorite(productId: number) {
    const { data } = await instance.get(`/products/favorite/${productId}`)
    return data
  },

  async getByCategory(category: string) {
    const { data } = await instance.get(`/products/category/${category}`)
    return data
  },
})
