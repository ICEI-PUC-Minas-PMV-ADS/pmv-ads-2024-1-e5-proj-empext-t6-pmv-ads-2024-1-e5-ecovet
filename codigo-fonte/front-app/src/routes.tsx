import React, { useState } from 'react';

import { createBrowserRouter } from "react-router-dom";

import AuthorizedPage from './component/AuthorizedPage'

import HomePage from './pages/Home'


const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthorizedPage children={<HomePage />} role='user'/>
  },
  {
    path: "/logado",
    element: <AuthorizedPage children={<HomePage />} role='user'/>
  }
]);

export default router;