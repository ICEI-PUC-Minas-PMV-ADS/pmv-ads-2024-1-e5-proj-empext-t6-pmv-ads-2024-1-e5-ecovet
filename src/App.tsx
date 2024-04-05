import React, { useState } from 'react';
import { Provider } from 'react-redux'
import { ThemeProvider } from '@mui/material/styles';
import { RouterProvider } from "react-router-dom";

import './App.css';
import { store } from './reducers/store'
import router from './routes'
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
