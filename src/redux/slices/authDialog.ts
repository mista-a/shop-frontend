import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Draft } from 'immer'
import { RootState } from '../store'

type ButtonState = 'Sign in' | 'Sign up'

export interface authDialogState {
  isOpen: boolean
  buttonState: ButtonState
}

const initialState: authDialogState = {
  isOpen: false,
  buttonState: 'Sign in',
}

export const authDialogSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    toggleAuthDialog: (state: Draft<authDialogState>) => {
      state.isOpen = !state.isOpen
    },
    setButtonState: (
      state: Draft<authDialogState>,
      action: PayloadAction<ButtonState>
    ) => {
      state.buttonState = action.payload
    },
  },
})

export const { toggleAuthDialog, setButtonState } = authDialogSlice.actions

export const selectAuthDialog = (state: RootState) => state.authDialog

export const authDialogReducer = authDialogSlice.reducer
