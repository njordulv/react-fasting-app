import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  conditions: false,
  terms: false,
}

const checkboxSlice = createSlice({
  name: 'checkbox',
  initialState,
  reducers: {
    setCheckbox: (state, action) => {
      state.conditions = action.payload.conditions
      state.terms = action.payload.terms
    },
  },
})

export const { setCheckbox } = checkboxSlice.actions

export const selectCheckbox = (state) => state.checkbox

export default checkboxSlice.reducer
