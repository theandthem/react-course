import { configureStore } from '@reduxjs/toolkit'
import extrasReducer from './ExtrasSlice'

export default configureStore({
  reducer: {
    extras: extrasReducer,
  },
})