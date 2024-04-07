import React, { useState } from 'react';

import { createBrowserRouter } from "react-router-dom";

import AuthorizedPage from './component/AuthorizedPage'

import HomePage from './pages/Home'
import LoginPage from './pages/Login'
import UploadJob from './pages/UploadJob';
import LogUpCompany from './pages/LogUpCompany';


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
    path: "logup-company",
    element: <AuthorizedPage><LogUpCompany /></AuthorizedPage>
  }
]);

export default router;