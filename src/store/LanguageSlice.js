import { createSlice } from '@reduxjs/toolkit'

export const languageSlice = createSlice({
  name: 'language',
  initialState: {
    activeLanguage: 'engb',
  },
  reducers: {
    changeLanguage: (state, action) => {
      state.activeLanguage = action.payload.langCode;
    },
  },
})

export const { changeLanguage } = languageSlice.actions

export default languageSlice.reducer