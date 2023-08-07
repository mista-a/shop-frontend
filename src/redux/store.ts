import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import { userReducer } from './slices/user'
import { categoriesReducer } from './slices/categories'
import { authDialogReducer } from './slices/authDialog'
import { cartReducer } from './slices/cart'

export function makeStore() {
  return configureStore({
    reducer: {
      user: userReducer,
      categories: categoriesReducer,
      authDialog: authDialogReducer,
      cart: cartReducer,
    },
  })
}

export const store = makeStore()

export type RootStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<RootStore['getState']>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

export const wrapper = createWrapper<RootStore>(makeStore)
