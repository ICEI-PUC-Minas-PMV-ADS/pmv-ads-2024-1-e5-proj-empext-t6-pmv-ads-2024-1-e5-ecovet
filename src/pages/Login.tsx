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

const LoginPage = () => {
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
      title: 'Fazer login',
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
            <TextField id="filled-basic" style={{width: '100%'}} label="Endereço de e-mail" variant="outlined"  value={email} onChange={(e) => setEmail(e.target.value)}/>
          </Grid>
          <Grid item xs={12}>
            <Typography>Senha</Typography>
            <TextField id="filled-basic" style={{width: '100%'}} label="Senha" variant="outlined"  value={senha} onChange={(e) => setSenha(e.target.value)} />
          </Grid>
          <Grid item xs={12}>
            <InputLabel id="tipo-login-label" style={{marginBottom:'10px'}}>Tipo de Login</InputLabel>
            <FormControl fullWidth>
              <Select
                labelId="tipo-login-label"
                id="tipo-login-select"
                value={tipoLogin}
                label="Tipo de Login"
                onChange={(e) => setTipoLogin(Number(e.target.value))}
              >
                <MenuItem value={0}>Veterinário</MenuItem>
                <MenuItem value={1}>Clínica</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" style={{width: '100%'}}   onClick={handleSubmit} >Entrar</Button>
          </Grid>
          <Grid item xs={12}>
              <Typography>Esqueceu a senha?<Link to="/">Clique aqui</Link></Typography>
              <Typography>Não tem conta?<Link to="/cadastroveterinario">Clique aqui</Link></Typography>
          </Grid>
        </Grid>


        {/*  mexer só daqui pra cima */}
      </DialogComponent>

    </PageContainerComponent>
  )
}

export default LoginPage