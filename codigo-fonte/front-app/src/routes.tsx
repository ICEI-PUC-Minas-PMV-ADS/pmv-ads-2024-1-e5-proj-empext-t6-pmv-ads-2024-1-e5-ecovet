import React, { useState } from 'react';

import { createBrowserRouter } from "react-router-dom";

import AuthorizedPage from './component/AuthorizedPage'

import HomePage from './pages/Home'
import LoginPage from './pages/Login'
import UploadJob from './pages/UploadJob';


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
  }
]);

export default router;