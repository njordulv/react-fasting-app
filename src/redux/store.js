import { configureStore } from '@reduxjs/toolkit'
import switcherReducer from './slices/switcherSlice'
import optionHistoryReducer from './slices/optionHistorySlice'
import formReducer from './slices/formSlice'

const store = configureStore({
  reducer: {
    switcher: switcherReducer,
    optionHistory: optionHistoryReducer,
    form: formReducer,
  },
})

export default store
