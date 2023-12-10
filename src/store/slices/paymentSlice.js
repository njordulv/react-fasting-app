import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  plan1: false,
  plan2: true,
  plan3: false,
}

const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    setPlans: (state, action) => {
      state.plan1 = action.payload.plan1
      state.plan2 = action.payload.plan2
      state.plan3 = action.payload.plan3
    },
  },
})

export const { setPlans } = paymentSlice.actions

export const selectPlans = (state) => state.payment

export default paymentSlice.reducer
