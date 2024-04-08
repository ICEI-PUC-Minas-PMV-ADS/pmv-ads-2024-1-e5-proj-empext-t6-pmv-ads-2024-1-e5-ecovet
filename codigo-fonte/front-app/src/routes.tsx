import React, { useState } from 'react';

import { createBrowserRouter } from "react-router-dom";

import AuthorizedPage from './component/AuthorizedPage'
import CurriculoPage from './pages/CadastroCurriculo';
import EsqueciSenhaPage from './pages/EsqueciASenha';
import HomePage from './pages/Home'
import LoginPage from './pages/Login'
import AlertaSenhaPage from './pages/AlertaRedefinirSenha';

import CadastroProfissionalPage from './pages/CadastroProfissional';

import UploadJob from './pages/UploadJob';
import LogUpCompany from './pages/LogUpCompany';



const router = createBrowserRouter([ 
  {
    path: "/",
    element: <AuthorizedPage children={<HomePage />} role='user'/>
  },
  {
    path: "/cadastrarcurriculo",
    element: <AuthorizedPage children={<CurriculoPage />} role='user'/>
  },
  {
    path: "/login",
    element: <AuthorizedPage children={<LoginPage />} role='user'/>
  },  
  {
    path: "/esquecisenha",
    element: <AuthorizedPage children={<EsqueciSenhaPage />} role='user'/>
  },  
  {
    path: "/alertaredefinirsenha",
    element: <AuthorizedPage children={<AlertaSenhaPage />} role='user'/>
  },
  {
    path: "upload-job",
    element: <AuthorizedPage children={<UploadJob />} />
  },
  {
    path: "logup-company",
    element: <AuthorizedPage><LogUpCompany /></AuthorizedPage>
  },
  {
    path: "/cadastroveterinario",
    element: <AuthorizedPage children={<CadastroProfissionalPage />} role='user'/>
  }


]);

export default router;