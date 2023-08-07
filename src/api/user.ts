import { AxiosInstance } from 'axios'
import {
  AddProductToCartDto,
  CreateUserDto,
  DeleteProductDto,
  LoginDto,
  ResponseCartItem,
  ResponseUser,
} from './types'
import { ICartItem } from '../types/CartItem'

export const UserApi = (instance: AxiosInstance) => ({
  async register(dto: CreateUserDto) {
    const { data } = await instance.post<CreateUserDto, { data: ResponseUser }>(
      '/auth/register',
      dto
    )
    return data
  },

  async login(dto: LoginDto) {
    const { data } = await instance.post<LoginDto, { data: ResponseUser }>(
      '/auth/login',
      dto
    )
    return data
  },

  async getMe() {
    const { data } = await instance.get<ResponseUser>('/users/me')
    return data
  },

  async getCart() {
    const { data } = await instance.get<ICartItem[]>(`/users/cart`)
    return data
  },

  async addToCart({ count, productId, sizeId }: AddProductToCartDto) {
    const { data } = await instance.post<
      AddProductToCartDto,
      { data: ResponseCartItem }
    >(`/users/cart`, {
      productId,
      count,
      sizeId,
    })
    return data
  },

  async deleteFromCart({
    cartItemId,
    deleteProductsCounter,
  }: DeleteProductDto) {
    await instance.delete<DeleteProductDto, { data: ResponseCartItem }>(
      `/users/cart`,
      { data: { cartItemId, deleteProductsCounter } }
    )
  },

  async toggleFavorite(productId: number) {
    await instance.post(`/users/favorites/`, { productId })
  },

  async getFavorites() {
    const { data } = await instance.get(`/users/favorites`)
    return data
  },

  async getCartPrice() {
    const { data } = await instance.get(`/users/cart/price`)
    return data
  },

  async postOrderData(orderData) {
    await instance.post(`/users/order`, orderData)
  },

  async getLastOrderData() {
    const { data } = await instance.get(`/users/order`)
    return data
  },
})
