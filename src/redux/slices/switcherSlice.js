import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  system: 'Metric',
  status: true,
}

const switcherSlice = createSlice({
  name: 'switcher',
  initialState,
  reducers: {
    toggleSwitch: (state) => {
      return {
        ...state,
        system: state.system === 'Metric' ? 'Imperial' : 'Metric',
        status: !state.status,
      }
    },
  },
})

export const { toggleSwitch } = switcherSlice.actions

export const selectSwitcherSystem = (state) => state.switcher.system
export const selectSwitcherStatus = (state) => state.switcher.status

export default switcherSlice.reducer
