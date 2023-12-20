import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  inputHeight: '',
  heightError: '',
  disabled: true,
  disabledWeight: true,
  disabledGoal: true,
  isMetric: true,
  inputWeight: '',
  weightImperial: '',
  weightError: '',
  heightImperial: { feet: '', inch: '' },
  totalCm: '',
  totalKg: '',
  goal: '',
  goalImperial: '',
  verdict: '',
  active: '',
}

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setInputHeight(state, action) {
      state.inputHeight = action.payload
    },
    setHeightError(state, action) {
      state.heightError = action.payload
    },
    setDisabled(state, action) {
      state.disabled = action.payload
    },
    setDisabledWeight(state, action) {
      state.disabledWeight = action.payload
    },
    setDisabledGoal(state, action) {
      state.disabledGoal = action.payload
    },
    setIsMetric(state, action) {
      state.isMetric = action.payload
    },
    setInputWeight(state, action) {
      state.inputWeight = action.payload
    },
    setWeightImperial(state, action) {
      state.weightImperial = action.payload
    },
    setWeightError(state, action) {
      state.weightError = action.payload
    },
    setHeightImperial(state, action) {
      state.heightImperial = action.payload
    },
    setFeet: (state, action) => {
      state.heightImperial.feet = action.payload
    },
    setInch: (state, action) => {
      state.heightImperial.inch = action.payload
    },
    setTotalCm(state, action) {
      state.totalCm = action.payload
    },
    setTotalKg(state, action) {
      state.totalKg = action.payload
    },
    setGoal(state, action) {
      state.goal = action.payload
    },
    setGoalImperial(state, action) {
      state.goalImperial = action.payload
    },
    setVerdict(state, action) {
      state.verdict = action.payload
    },
    setActive(state, action) {
      state.active = action.payload
    },
    resetForm() {
      return initialState
    },
  },
})

export const {
  setInputHeight,
  setHeightError,
  setDisabled,
  setDisabledWeight,
  setDisabledGoal,
  setIsMetric,
  setInputWeight,
  setWeightImperial,
  setWeightError,
  setHeightImperial,
  setFeet,
  setInch,
  setTotalCm,
  setTotalKg,
  setGoal,
  setGoalImperial,
  setVerdict,
  setActive,
  resetForm,
} = formSlice.actions

export const selectInputHeight = (state) => state.form.inputHeight
export const selectHeightError = (state) => state.form.heightError
export const selectDisabled = (state) => state.form.disabled
export const selectDisabledWeight = (state) => state.form.disabledWeight
export const selectDisabledGoal = (state) => state.form.disabledGoal
export const selectIsMetric = (state) => state.form.isMetric
export const selectInputWeight = (state) => state.form.inputWeight
export const selectWeightImperial = (state) => state.form.weightImperial
export const selectWeightError = (state) => state.form.weightError
export const selectHeightImperialFeet = (state) =>
  state.form.heightImperial.feet
export const selectHeightImperialInch = (state) =>
  state.form.heightImperial.inch
export const selectTotalCm = (state) => state.form.totalCm
export const selectTotalKg = (state) => state.form.totalKg
export const selectGoal = (state) => state.form.goal
export const selectGoalImperial = (state) => state.form.goalImperial
export const selectVerdict = (state) => state.form.verdict
export const selectActive = (state) => state.form.active

export default formSlice.reducer
