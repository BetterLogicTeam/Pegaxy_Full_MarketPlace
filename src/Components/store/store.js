import { configureStore } from '@reduxjs/toolkit'
import Totalitemsslice from '../feature/total_items/Totelitemsslice'
export const store = configureStore({
  reducer: {
    Totalitemsslice: Totalitemsslice,
  },
})