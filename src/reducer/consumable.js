import { createSlice } from '@reduxjs/toolkit'

export const consumableSlice = createSlice({
  name: 'consumable',
  initialState: {
    consumables:null,
  },
  reducers: {
     
    setConsumable: (state, action) =>{
      state.consumables = action.payload
     },
  },
})

// Action creators are generated for each case reducer function
export const { setConsumable } = consumableSlice.actions

export default consumableSlice.reducer