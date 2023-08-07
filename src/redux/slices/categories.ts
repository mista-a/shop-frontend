import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Draft } from 'immer'
import { RootState } from '../store'
import { HYDRATE } from 'next-redux-wrapper'
import { ICategory } from '../../types/Category'

export interface CategoriesState {
  categories: ICategory[]
}

const initialState: CategoriesState = {
  categories: [{ id: null, name: '', subcategories: [{ id: null, name: '' }] }],
}

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategories: (
      state: Draft<CategoriesState>,
      action: PayloadAction<ICategory[]>
    ) => {
      state.categories = action.payload
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      state.categories = action.payload.categories.categories
    },
  },
})

export const { setCategories } = categoriesSlice.actions

export const selectCategoriesData = (state: RootState) => state.categories

export const categoriesReducer = categoriesSlice.reducer
