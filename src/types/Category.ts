import { ISubcategory } from './Subcategory'

export interface ICategory {
  id: number
  name: string
  subcategories: ISubcategory[]
}
