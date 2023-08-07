import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Draft } from 'immer'
import { RootState } from '../store'
import { HYDRATE } from 'next-redux-wrapper'
import { ICartItem } from '../../types/CartItem'

const DEFAULT_STATE = { cartItems: [], cartCount: 0, cartPrice: 0 }

export interface CartState {
  cartItems: ICartItem[]
  cartCount: number
  cartPrice: number
}

const initialState: CartState = DEFAULT_STATE

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    resetCart: () => DEFAULT_STATE,
    setCartItems: (
      state: Draft<CartState>,
      action: PayloadAction<ICartItem[]>
    ) => {
      state.cartItems = action.payload
      state.cartCount = action.payload.length
      state.cartPrice = action.payload.reduce(
        (cartPrice, { product }) => cartPrice + +product.price,
        0
      )
    },
    addProductToCart: (
      state: Draft<CartState>,
      action: PayloadAction<{ addedCartItem: ICartItem; count: number }>
    ) => {
      const { addedCartItem, count } = action.payload

      state.cartCount += action.payload.count

      const rawCartPrice = addedCartItem.count * addedCartItem.product.price
      const cartPrice = +(state.cartPrice + rawCartPrice).toFixed(2)
      state.cartPrice = cartPrice

      let oldCartItemIndex: number
      const filterByCartItem = state.cartItems.filter((cartItem, index) => {
        oldCartItemIndex = index
        return (
          cartItem.id === addedCartItem.id &&
          cartItem.size.id === addedCartItem.size.id
        )
      })

      let isProductInCart = Boolean(filterByCartItem.length)

      if (isProductInCart) {
        state.cartItems[oldCartItemIndex].count += count
      }
      if (!isProductInCart) {
        state.cartItems.push(addedCartItem)
      }
    },
    deleteProductFromCart: (
      state: Draft<CartState>,
      action: PayloadAction<{
        deletedCartItem: ICartItem
        deleteProductsCounter: number
      }>
    ) => {
      const { deletedCartItem, deleteProductsCounter } = action.payload
      let newDeletedCartItemsCounter = 0

      const newCartItems = state.cartItems.flatMap((cartItem) => {
        if (cartItem.id === deletedCartItem.id) {
          newDeletedCartItemsCounter = cartItem.count - deleteProductsCounter
          if (newDeletedCartItemsCounter <= 0) {
            newDeletedCartItemsCounter = 1
            return []
          }
          cartItem.count = newDeletedCartItemsCounter
        }
        return cartItem
      })

      const deletedCartItemPrice = +(
        deletedCartItem.product.price * newDeletedCartItemsCounter
      ).toFixed(2)

      state.cartPrice -= deletedCartItemPrice
      state.cartCount -= newDeletedCartItemsCounter
      state.cartItems = newCartItems
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      state.cartItems = action.payload.cart.cartItems
    },
  },
})

export const {
  setCartItems,
  addProductToCart,
  resetCart,
  deleteProductFromCart,
} = cartSlice.actions

export const selectCartData = (state: RootState) => state.cart

export const cartReducer = cartSlice.reducer
