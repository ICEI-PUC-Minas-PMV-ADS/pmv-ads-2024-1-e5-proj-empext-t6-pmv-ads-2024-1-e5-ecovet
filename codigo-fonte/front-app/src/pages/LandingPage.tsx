import React, { useEffect,useState } from 'react';
import PageContainerComponent from '../component/PageContainer';
import type { AppDispatch, RootState } from '../reducers/store'
import { useSelector, useDispatch } from 'react-redux'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { setDialog, setDialogIdle } from '../reducers/dialogReducer'
import { title } from 'process';
import DialogComponent from  '../component/Dialog'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Link, Navigate } from 'react-router-dom';
import { post } from '../services/agent'
import { Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import { authorizeUser } from '../reducers/userReducer'
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const isDialogOpen = useSelector((state: RootState) => state.dialog.isOpen)
  const dispatch = useDispatch<AppDispatch>();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [tipoLogin, setTipoLogin] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setDialog({
      title: 'LandingPage',
      action: null
    }))
  },[])
  const handleSubmit = async () => {
    const userData = {
      Email: email,
      Senha: senha,
      TipoLogin: tipoLogin  
    };
  
    try {
    const response = await post("Auth/login",userData);
      if (response.ok) {
        const data = await response.json();
        console.log(data); 
        dispatch(authorizeUser({
          token: data.token,
          username: email,
          name: email,
          tipoLogin
        }))
        navigate('/')
      } else {
        alert('Falha no login');
      }
    } catch (error) {
      console.error("Erro no login:", error);
    }
  };
  return (
    <PageContainerComponent 
      title="" 
      style={{ 
        marginLeft: isMobile ? 60 : 3000, 
      }}>
      <DialogComponent open={isDialogOpen} handleClose={() => dispatch(setDialogIdle())} >
        {/*  mexer só daqui pra baixo */}

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography>Endereço de e-mail</Typography>
            
          </Grid>
          
                   
        </Grid>


        {/*  mexer só daqui pra cima */}
      </DialogComponent>

    </PageContainerComponent>
  )
}

export default LandingPage