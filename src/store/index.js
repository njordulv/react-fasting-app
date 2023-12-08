import { configureStore } from '@reduxjs/toolkit'
import switcherReducer from './slices/switcherSlice'
import optionHistoryReducer from './slices/optionHistorySlice'
import formReducer from './slices/formSlice'
import emailReducer from './slices/emailSlice'
import paymentReducer from './slices/paymentSlice'
import checkboxReducer from './slices/checkboxSlice'

export default configureStore({
  reducer: {
    switcher: switcherReducer,
    optionHistory: optionHistoryReducer,
    form: formReducer,
    email: emailReducer,
    payment: paymentReducer,
    checkbox: checkboxReducer,
  },
})
