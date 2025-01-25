import { createSlice } from '@reduxjs/toolkit'

export const manageRelatedNewsSlice = createSlice({
    name: 'manageModel',
    initialState: {
      isOpen: false,
    },
    reducers: {
      openModel: (state) => {
        state.isOpen = true
      },
      closeModel: (state) => {
        state.isOpen = false
      }
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { openModel, closeModel } = manageRelatedNewsSlice.actions
  
  export default manageRelatedNewsSlice.reducer