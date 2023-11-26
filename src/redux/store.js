import { configureStore } from '@reduxjs/toolkit'
import switcherReducer from './slices/switcherSlice'
import optionHistoryReducer from './slices/optionHistorySlice'

const store = configureStore({
  reducer: {
    switcher: switcherReducer,
    optionHistory: optionHistoryReducer,
  },
})

export default store
