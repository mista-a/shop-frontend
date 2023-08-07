import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ResponseUser } from '../../api/types'
import { Draft } from 'immer'
import { RootState } from '../store'
import { HYDRATE } from 'next-redux-wrapper'

export interface UserState {
  data: ResponseUser
}

const DEFAULT_STATE = {
  id: 0,
  email: '',
  name: '',
  token: '',
}

const initialState: UserState = {
  data: DEFAULT_STATE,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (
      state: Draft<UserState>,
      action: PayloadAction<ResponseUser>
    ) => {
      state.data = action.payload
    },
    setDefaultUserData: (state: Draft<UserState>) => {
      state.data = DEFAULT_STATE
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      state.data = action.payload.user.data
    },
  },
})

export const { setUserData, setDefaultUserData } = userSlice.actions

export const selectUserData = (state: RootState) => state.user.data

export const userReducer = userSlice.reducer
