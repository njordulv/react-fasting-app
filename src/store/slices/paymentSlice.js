import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  plan1: '1 month',
  plan2: '3 months',
  plan3: '6 months',
}

const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    setPlan1: (state, action) => {
      state.plan1 = action.payload
    },
    setPlan2: (state, action) => {
      state.plan2 = action.payload
    },
    setPlan3: (state, action) => {
      state.plan3 = action.payload
    },
  },
})

export const { setPlan1, setPlan2, setPlan3 } = paymentSlice.actions

export const selectPlan1 = (state) => state.payment.plan1
export const selectPlan2 = (state) => state.payment.plan2
export const selectPlan3 = (state) => state.payment.plan3

export default paymentSlice.reducer
