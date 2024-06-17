import { createSlice } from '@reduxjs/toolkit'
import { DialogState } from '../types'

const initialState: DialogState = {
  isOpen: false,
  title: '',
  action: '',
  message: ''
}

export const dialogSlice = createSlice({
  name: 'dialog',
  initialState,
  reducers: {
    setDialog: (state, { payload }) => {
      console.log(">>>>>>>>>>>>>>>>>> setDialog")
      state.isOpen = true
      state.title = payload.title
      state.action = payload.action
      state.message = payload.message
      state.messageArray = payload.messageArray
      state.redirect = payload.redirect
    },
    setDialogIdle: (state) => {
      console.log(">>>>>>>>>>>>>>>>>> setDialogIdle")
      state.isOpen = false
      state.title = ''
      state.action = ''
      state.message = ''
      state.messageArray = []
    }
  },
})

export const { setDialog, setDialogIdle } = dialogSlice.actions

export default dialogSlice.reducer