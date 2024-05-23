import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { UserState } from '../types'
import { setUserToken } from "../services/agent"
var ls = require('local-storage');

const initialState: UserState = { isAuthorized: false}

export const clinicSlice = createSlice({
  name: 'clinic',
  initialState,
  reducers: {
    authorizeUser: (state, { payload }) => {
      state.isAuthorized = true
      state.token = payload.token
      state.name = payload.name
      state.id = payload.id
      state.userName = payload.userName
      state.role = payload.tipoLogin
      setUserToken(payload.token)
      ls('user', state);
    },
    logout: (state) => {
      state.isAuthorized = false
      ls('user', null);
    },
    getUser: (state) => {
      return state
    }
  },
  extraReducers: (builder) => {
  },
})


export const { logout, getUser, authorizeUser } = clinicSlice.actions

export default clinicSlice.reducer