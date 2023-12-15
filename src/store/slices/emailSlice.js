import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  networkError: null,
  emailValue: '',
  success: '',
}

export const submitEmail = createAsyncThunk(
  'email/submitEmail',
  async (dataWithTime, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        'http://localhost:4000/submit-email',
        dataWithTime
      )
      return response.data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

const emailSlice = createSlice({
  name: 'email',
  initialState,
  reducers: {
    clearNetworkError: (state) => {
      state.networkError = null
    },
    setEmailValue: (state, action) => {
      state.emailValue = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(submitEmail.pending, (state) => {
      state.networkError = null
      state.success = ''
    })
    builder.addCase(submitEmail.fulfilled, (state) => {
      state.networkError = ''
      state.success = true
    })
    builder.addCase(submitEmail.rejected, (state, action) => {
      state.networkError = action.payload ? action.payload : 'Unknown error'
    })
  },
})

export const { clearNetworkError, setEmailValue } = emailSlice.actions

export const selectNetworkError = (state) => state.email.networkError
export const selectEmailValue = (state) => state.email.emailValue

export default emailSlice.reducer
