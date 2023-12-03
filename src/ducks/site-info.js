import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  title: '',
  description: ''
}

export const siteInfoSlice = createSlice({
  name: 'siteInfo',
  initialState,
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload
    },
    setDescription: (state, action) => {
        state.description = action.payload
      }
  }
})

export const { setTitle, setDescription } = siteInfoSlice.actions

export default siteInfoSlice.reducer
