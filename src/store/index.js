import { configureStore } from '@reduxjs/toolkit'
import switcherReducer from './slices/switcherSlice'
import optionHistoryReducer from './slices/optionHistorySlice'
import formReducer from './slices/formSlice'
import emailReducer from './slices/emailSlice'

export default configureStore({
  reducer: {
    switcher: switcherReducer,
    optionHistory: optionHistoryReducer,
    form: formReducer,
    email: emailReducer,
  },
})
