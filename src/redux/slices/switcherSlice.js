import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  system: 'Metric',
  isMetric: true,
}

const switcherSlice = createSlice({
  name: 'switcher',
  initialState,
  reducers: {
    toggleSwitch: (state) => {
      return {
        ...state,
        system: state.system === 'Metric' ? 'Imperial' : 'Metric',
        isMetric: !state.isMetric,
      }
    },
  },
})

export const { toggleSwitch } = switcherSlice.actions

export const selectSwitcherSystem = (state) => state.switcher.system
export const selectSwitcherIsMetric = (state) => state.switcher.isMetric

export default switcherSlice.reducer
