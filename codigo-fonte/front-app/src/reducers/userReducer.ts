import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { UserState } from '../types'
import { setUserToken } from "../services/agent"

const initialState: UserState = { isAuthorized: false}

const getToken = createAsyncThunk(
  'token/get',
  async ({ instance, accounts }: any, { dispatch }) => {
    console.log("Getting token ...")
    console.log(instance)
  },
)

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    authorizeUser: (state, { payload }) => {
      console.log(">>> authorizeUser")
      console.log(payload)
      state.isAuthorized = true
      state.token = payload.token
      state.name = payload.name
      state.userName = payload.username
      state.role = payload.tipoLogin === 1 ? 'Clínica' : 'Profissional'
      console.log(">>> state")
      console.log(state)
      // state.userRegistrationId = data.localAccountId
    },
    logout: (state) => {
      state = initialState
    },
    getUser: (state) => {
      return state
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getToken.fulfilled, (state, { payload }: any) => {
        console.log("getToken.fulfilled")
        state.token = payload
        setUserToken(payload)
        console.log("state")
        console.log(state)
      })
  },
})

export { getToken }

export const { logout, getUser, authorizeUser } = userSlice.actions

export default userSlice.reducer