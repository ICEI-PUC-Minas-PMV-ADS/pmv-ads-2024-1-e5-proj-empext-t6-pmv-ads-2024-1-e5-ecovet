import React, { useState } from 'react';

import { createBrowserRouter } from "react-router-dom";

import AuthorizedPage from './component/AuthorizedPage'
import CadastroProfissionalPage from './pages/CadastroProfissional';

import HomePage from './pages/Home'
import LoginPage from './pages/Login'
import UploadJob from './pages/UploadJob';
import LogUpCompany from './pages/LogUpCompany';
import FindJob from './pages/FindJob';


const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthorizedPage children={<HomePage />} role='user'/>
  },
  {
    path: "/login",
    element: <AuthorizedPage children={<LoginPage />} role='user'/>
  },{
    path: "upload-job",
    element: <AuthorizedPage children={<UploadJob />} />
  },
  {
    path: "/cadastro/base",
    element: <AuthorizedPage><LogUpCompany /></AuthorizedPage>
  },
  {
    path: "/cadastroveterinario",
    element: <AuthorizedPage children={<CadastroProfissionalPage />} role='user'/>
  },

  {
    path: "/encontaremprego",
    element: <AuthorizedPage children={<FindJob />} role='user'/>
  }


]);

export default router;