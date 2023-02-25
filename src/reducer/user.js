import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    users:null,
  },
  reducers: {
     
    setEmployee: (state, action) =>{
      state.users = action.payload
     },
  },
})

// Action creators are generated for each case reducer function
export const { setEmployee } = userSlice.actions

export default userSlice.reducer