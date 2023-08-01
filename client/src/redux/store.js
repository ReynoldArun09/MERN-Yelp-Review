import { configureStore } from '@reduxjs/toolkit'
import RestSliceReducer from './feature/RestSlice'

export const store = configureStore({
  reducer: {
    rest: RestSliceReducer
  },
})