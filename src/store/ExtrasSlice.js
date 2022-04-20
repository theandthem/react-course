import { createSlice } from '@reduxjs/toolkit'

export const extrasSlice = createSlice({
  name: 'extras',
  initialState: {
    supportVisibility: false,
  },
  reducers: {
    toggleSupportVisibility: (state) => {
      state.supportVisibility = state.supportVisibility ? false : true;
    },
  },
})

export const { toggleSupportVisibility } = extrasSlice.actions

export default extrasSlice.reducer