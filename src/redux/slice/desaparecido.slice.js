import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: [],
  isLoading: true
}

export const desaparecidosSlice = createSlice({
  name: 'desaparecidos',
  initialState,
  reducers: {
    
    setData: (state, action) => {
      state.data = action.payload
      state.isLoading = false
    },
  },
})

// Action creators are generated for each case reducer function
export const { setData } = desaparecidosSlice.actions

export default desaparecidosSlice.reducer