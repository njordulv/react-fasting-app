import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  plan1: false,
  plan2: true,
  plan3: false,
  currency: {
    name: 'dollar',
    abbr: 'USD',
    symbol: '$',
  },
  planOne: {
    status: false,
    name: '1-Month Plan',
    discountPrice: '0.77',
    oldPrice: '1.54',
    discountFullPrice: '23.10',
    monthPrice: '46.20',
    totalPrice: '46.20',
    totalDiscountPrice: '23.10',
  },
  planTwo: {
    status: true,
    name: '3-Month Plan',
    discountPrice: '0.54',
    oldPrice: '1.08',
    discountFullPrice: '16.20',
    monthPrice: '32.40',
    totalPrice: '97.20',
    totalDiscountPrice: '48.60',
  },
  planThree: {
    status: false,
    name: '6-Month Plan',
    discountPrice: '0.31',
    oldPrice: '0.62',
    discountFullPrice: '9.30',
    monthPrice: '18.65',
    totalPrice: '111.90',
    totalDiscountPrice: '55.80',
  },
  bestOffer: 'Best Offer',
  popular: '',
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
    setCurrency: (state, action) => {
      state.currency = { ...state.currency, ...action.payload }
    },
    setPlanOne: (state, action) => {
      state.planOne = { ...state.planOne, ...action.payload }
    },
    setPlanTwo: (state, action) => {
      state.planTwo = { ...state.planTwo, ...action.payload }
    },
    setPlanThree: (state, action) => {
      state.planThree = { ...state.planThree, ...action.payload }
    },
    setOffer: (state, action) => {
      state.bestOffer = action.payload
    },
    setPopular: (state, action) => {
      state.popular = action.payload
    },
    setDiscountFullPrice: (state, action) => {
      state.discountFullPrice = action.payload
    },
    setMonthPrice: (state, action) => {
      state.monthPrice = action.payload
    },
    setTotalPrice: (state, action) => {
      state.totalPrice = action.payload
    },
    setTotalDiscountPrice: (state, action) => {
      state.totalDiscountPrice = action.payload
    },
  },
})

export const {
  setPlans,
  setCurrency,
  setPlanOne,
  setPlanTwo,
  setPlanThree,
  setOffer,
  setPopular,
  setDiscountFullPrice,
  setMonthPrice,
  setTotalPrice,
  setTotalDiscountPrice,
} = paymentSlice.actions

export const selectPlans = (state) => state.payment
export const selectCurrency = (state) => state.payment.currency
export const selectPlanOne = (state) => state.payment.planOne
export const selectPlanTwo = (state) => state.payment.planTwo
export const selectPlanThree = (state) => state.payment.planThree
export const selectOffer = (state) => state.payment.bestOffer
export const selectPopular = (state) => state.payment.popular

export default paymentSlice.reducer
