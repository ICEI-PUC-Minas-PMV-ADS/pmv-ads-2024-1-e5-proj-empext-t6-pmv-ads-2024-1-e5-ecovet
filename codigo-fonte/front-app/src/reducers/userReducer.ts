import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { UserState } from '../types'
import { setUserToken } from "../services/agent"

const initialState: UserState = { name: "Usuário", email: "user@gmail.com", isAuthorized: true}

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
      if(payload.accounts.length == 0){
        // payload.instance?.loginRedirect(loginRequest)
        // .catch((e: any) => {
        //   console.log(e);
        // });
      }else{
        const data = payload.accounts[0];
        state.isAuthorized = true
        state.name = data.name
        state.userName = data.username
        state.userRegistrationId = data.localAccountId
      }
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