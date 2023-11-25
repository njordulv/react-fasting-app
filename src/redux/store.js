import { configureStore } from '@reduxjs/toolkit'
import switcherReducer from './slices/switcherSlice'

const store = configureStore({
  reducer: {
    switcher: switcherReducer,
  },
})

export default store
