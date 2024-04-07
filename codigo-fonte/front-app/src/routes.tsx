import React, { useState } from 'react';

import { createBrowserRouter } from "react-router-dom";

import AuthorizedPage from './component/AuthorizedPage'
import CurriculoPage from './pages/CadastroCurriculo';

import HomePage from './pages/Home'
import LoginPage from './pages/Login'


const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthorizedPage children={<HomePage />} role='user'/>
  },
  {
    path: "/cadastrarcurriculo",
    element: <AuthorizedPage children={<CurriculoPage />} role='user'/>
  }
]);

export default router;