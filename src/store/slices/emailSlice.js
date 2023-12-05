import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  loading: false,
  success: '',
  networkError: '',
}

// export const submitEmail = createAsyncThunk(
//   'email/submitEmail',
//   async (dataWithTime) => {
//     try {
//       const response = await axios.post(API_URL, dataWithTime)
//       return response.data
//     } catch (error) {
//       throw new Error(error.message)
//     }
//   }
// )

export const submitEmail = createAsyncThunk(
  'email/submitEmail',
  async (url, thunkAPI) => {
    try {
      const response = await axios.post(url)
      return response.data
    } catch (error) {
      throw new Error(error.message)
    }
  }
)

const emailSlice = createSlice({
  name: 'email',
  initialState,
  reducers: {
    clearSuccess: (state) => {
      state.success = ''
    },
    clearNetworkError: (state) => {
      state.networkError = ''
    },
  },
  extraReducers: (builder) => {
    builder.addCase(submitEmail.pending, (state) => {
      state.loading = true
      state.success = ''
      state.networkError = ''
    })
    builder.addCase(submitEmail.fulfilled, (state, action) => {
      state.loading = false
      state.success = 'Data was sent successfully'
    })
    builder.addCase(submitEmail.rejected, (state, action) => {
      state.loading = false
      state.networkError = action.error.message
    })
  },
})

export const { clearNetworkError, clearSuccess } = emailSlice.actions

export const selectLoading = (state) => state.email.loading

export default emailSlice.reducer
