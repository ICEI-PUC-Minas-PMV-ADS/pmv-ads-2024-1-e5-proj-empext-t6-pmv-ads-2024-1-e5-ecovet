import { createSlice } from '@reduxjs/toolkit'
import { LoadingState } from '../types'

const initialState: LoadingState = {
  isLoading: false,
}

export const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setLoading: (state) => {
      state.isLoading = true
    },
    setIdle: (state) => {
      state.isLoading = false
    }
  },
})

export const { setLoading, setIdle } = loadingSlice.actions

export default loadingSlice.reducer

