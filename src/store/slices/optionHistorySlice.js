import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

const optionHistorySlice = createSlice({
  name: 'optionHistory',
  initialState,
  reducers: {
    setOptionHistory: (state, action) => {
      const { pathname, option } = action.payload
      state[pathname] = option
    },
  },
})

export const { setOptionHistory } = optionHistorySlice.actions

export default optionHistorySlice.reducer
