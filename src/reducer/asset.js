import { createSlice } from '@reduxjs/toolkit'

export const assetSlice = createSlice({
  name: 'asset',
  initialState: {
    assets:null,
  },
  reducers: {
     
    setAsset: (state, action) =>{
      state.assets = action.payload
     },
  },
})

// Action creators are generated for each case reducer function
export const { setAsset } = assetSlice.actions

export default assetSlice.reducer