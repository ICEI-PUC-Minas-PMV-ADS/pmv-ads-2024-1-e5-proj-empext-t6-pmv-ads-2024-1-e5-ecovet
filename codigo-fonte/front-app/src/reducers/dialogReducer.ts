import { createSlice } from '@reduxjs/toolkit'
import { DialogState } from '../types'

const initialState: DialogState = {
  isOpen: false,
  title: '',
  message: ''
}

export const dialogSlice = createSlice({
  name: 'dialog',
  initialState,
  reducers: {
    setDialog: (state, { payload }) => {
      state.isOpen = true
      state.title = payload.title
      state.message = payload.message
      state.messageArray = payload.messageArray
      state.redirect = payload.redirect
    },
    setDialogIdle: (state) => {
      state.isOpen = false
      state.title = ''
      state.message = ''
      state.messageArray = []
    }
  },
})

export const { setDialog, setDialogIdle } = dialogSlice.actions

export default dialogSlice.reducer