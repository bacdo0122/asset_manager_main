import { createSlice } from '@reduxjs/toolkit'

export const notificationSlice = createSlice({
  name: 'notification',
  initialState: {
    notifications:null,
  },
  reducers: {
     
    setNotification: (state, action) =>{
      state.notifications = action.payload
     },
  },
})

// Action creators are generated for each case reducer function
export const { setNotification } = notificationSlice.actions

export default notificationSlice.reducer