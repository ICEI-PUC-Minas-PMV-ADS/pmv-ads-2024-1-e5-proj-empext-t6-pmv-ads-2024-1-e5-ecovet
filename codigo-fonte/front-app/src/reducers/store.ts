import { configureStore } from '@reduxjs/toolkit';

import loadingSlice from './loadingReducer';
import dialogSlice from './dialogReducer'
import userSlice from './userReducer'
import loadingMiddleware from './loadingMiddleware'


export const store = configureStore({
    reducer: {
      user: userSlice,
      dialog: dialogSlice,
      loading: loadingSlice
    },
    middleware: (getDefaultMiddleware) => 
      getDefaultMiddleware({
        serializableCheck: {
          ignoredPaths: ['preprojeto.pageFields'],
        },
      }).prepend(loadingMiddleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch