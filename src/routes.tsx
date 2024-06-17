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
import VetClinicInitialPage from './pages/ClinicPerilEdit';
import ProfissionalVeterinario from './pages/ProfissionalVeterinario';
import PerfilPublicClinica from './pages/PerfilPublicClinica';
import ProfessionalPerfil from './pages/ProfessionalPerfil';
import VerCandidaturas from './pages/VerCandidaturas';
import JobDetail from './pages/JobDetail';

const router = createBrowserRouter([ 
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/clinica",
    element: <AuthorizedPage children={<VetClinicInitialPage />}/>
  },  // estamos aqui
  {
    path: "/upload-job",
    element: <AuthorizedPage children={<UploadJob />} />
  },
  {
    path: "/cadastro/base",
    element: <LogUpCompany />
  },
  {
    path: "/login",
    element: <AuthorizedPage children={<LoginPage />} role='user'/>
  }, 
  {
    path: "/cadastrarcurriculo", //passo 2 de cadastro de usuario
    element: <AuthorizedPage children={<CurriculoPage />} role='user'/>
  }, 
  {
    path: "/esquecisenha",
    element: <EsqueciSenhaPage />
  },  
  {
    path: "/alertaredefinirsenha",
    element: <AuthorizedPage children={<AlertaSenhaPage />} role='user'/>
  },
  {
    path: "/cadastroveterinario",//passo 1 de cadastro de usuario
    element: <AuthorizedPage children={<CadastroProfissionalPage />} role='user'/>,
  },
  {
    path: "/veterinario",
    element: <AuthorizedPage children={<ProfissionalVeterinario />} role='user'/>
  },
  {
    path: "/perfilpublicclinica/:idClinica",
    element: <AuthorizedPage children={<PerfilPublicClinica />} role='user'/>
  },
  {
    path: "/perfilprofessional/publico/:idVeterinario",
    element: <AuthorizedPage children={<ProfessionalPerfil />} />,
  },
  {
    path: "/candidaturas/:idVaga",
    element: <AuthorizedPage children={<VerCandidaturas />}/> 
  },
  {
    path: "clinica/:idClinic/vaga/:idJob",
    element: <AuthorizedPage children={<JobDetail />}/> 
  }

]);

export default router;