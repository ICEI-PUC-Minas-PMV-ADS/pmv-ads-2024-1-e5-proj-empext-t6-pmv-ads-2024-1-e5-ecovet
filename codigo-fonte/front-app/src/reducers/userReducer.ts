import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { UserState } from '../types'
import { setUserToken } from "../services/agent"
var ls = require('local-storage');

const initialState: UserState = { isAuthorized: false}

const getToken = createAsyncThunk(
  'token/get',
  async ({ instance, accounts }: any, { dispatch }) => {
    console.log("Getting token ...")
    console.log(instance)
  },
)

// const getUserFromStorage = createAsyncThunk(
//   'get/user/storage',
//   async () => {
//     return ls.get('user');
//   },
// )

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    authorizeUser: (state, { payload }) => {
      console.log(">>>>>>>>>>>>> authorizeUser")
      state.isAuthorized = true
      state.token = payload.token
      state.name = payload.name
      state.id = payload.id
      state.userName = payload.userName
      state.role = payload.tipoLogin === 1 ? 'Clínica' : 'Profissional'
      setUserToken(payload.token)
      ls('user', state);
    },
    logout: (state) => {
      console.log("logout")
      state.isAuthorized = false
      ls('user', null);
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
      // .addCase(getUserFromStorage.fulfilled, (state, { payload }: any) => {
      //   let preState = payload != null ? payload : initialState
      //   // authorizeUser(preState)
      //   console.log("state")
      //   console.log(state)
      // })
  },
})

export { getToken }

export const { logout, getUser, authorizeUser } = userSlice.actions

export default userSlice.reducer