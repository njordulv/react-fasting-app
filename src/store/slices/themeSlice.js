import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  darkTheme: true,
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setThemeMode: (state, action) => {
      state.darkTheme = action.payload.darkTheme
    },
  },
})

export const { setThemeMode } = themeSlice.actions

export const selectThemeMode = (state) => state.theme

export default themeSlice.reducer
