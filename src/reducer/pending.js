import { createSlice } from '@reduxjs/toolkit'

export const pendingSlice = createSlice({
  name: 'pending',
  initialState: {
    pendings:null,
  },
  reducers: {
     
    setPending: (state, action) =>{
      state.pendings = action.payload
     },
  },
})

// Action creators are generated for each case reducer function
export const { setPending } = pendingSlice.actions

export default pendingSlice.reducer