import React, { useState } from 'react';

import { createBrowserRouter } from "react-router-dom";

import AuthorizedPage from './component/AuthorizedPage'
import CadastroProfissionalPage from './pages/CadastroProfissional';

import HomePage from './pages/Home'
import LoginPage from './pages/Login'


const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthorizedPage children={<HomePage />} role='user'/>
  },
  {
    path: "/login",
    element: <AuthorizedPage children={<LoginPage />} role='user'/>
  },
  {
    path: "/cadastroveterinario",
    element: <AuthorizedPage children={<CadastroProfissionalPage />} role='user'/>
  }


]);

export default router;