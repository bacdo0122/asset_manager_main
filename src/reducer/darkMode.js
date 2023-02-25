import { createSlice } from '@reduxjs/toolkit'

export const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState: {
    darkMode: false
  },
  reducers: {
     
    setdarkMode: (state, action) =>{
      state.darkMode = action.payload
     },
  },
})

// Action creators are generated for each case reducer function
export const { setdarkMode } = darkModeSlice.actions

export default darkModeSlice.reducer