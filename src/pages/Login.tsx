import React, { useEffect,useState } from 'react';
import PageContainerComponent from '../component/PageContainer';
import type { AppDispatch, RootState } from '../reducers/store'
import { useSelector, useDispatch } from 'react-redux'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { setDialog, setDialogIdle } from '../reducers/dialogReducer'
import { title } from 'process';
import { Box } from "@mui/material";
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
import { jwtDecode } from "jwt-decode";
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import HeaderComponent from '../component/Header';
import { styled } from '@mui/material/styles';

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(12px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
    boxSizing: 'border-box',
  },
}));

const LoginPage = () => {
  const isDialogOpen = useSelector((state: RootState) => state.dialog.isOpen)
  const dispatch = useDispatch<AppDispatch>();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [tipoLogin, setTipoLogin] = useState(true);
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
      TipoLogin: tipoLogin ? 1 : 0
    };
  
    try {
    const response = await post("Auth/login",userData);
      if (response.ok) {
        const data = await response.json();
        console.log("Auth/login"); 
        console.log(data); 
        const decoded = jwtDecode(data.token);
        console.log("decoded"); 
        console.log(decoded); 

        dispatch(authorizeUser({
          token: data.token,
          userName: email,
          //@ts-ignore
          name: decoded.NomeUsuario,
          //@ts-ignore
          id: decoded.IdUsuario,
          tipoLogin: tipoLogin ? 1 : 0
        }))
        tipoLogin ? navigate('/clinica') : navigate('/veterinario')
      } else {
        alert('Falha no login');
      }
    } catch (error) {
      console.error("Erro no login:", error);
    }
  };
  return (
    <Box
    style={{ 
      backgroundImage: `url("img/bg.jpg")`,
      backgroundColor: 'red !important',
      height: '100vh',
    }}>
      <HeaderComponent  />
      <PageContainerComponent 
        title="" 
        style={{ 
          marginLeft: isMobile ? 60 : 3000, 
        }}>
        <DialogComponent open={isDialogOpen} handleClose={() => dispatch(setDialogIdle())} >
          {/*  mexer só daqui pra baixo */}

          <Grid container spacing={2}>
            <Grid item xs={12}>
              {/* <InputLabel id="tipo-login-label" style={{marginBottom:'10px'}}>Tipo de Login</InputLabel> */}
              <FormControl fullWidth>
                
                <Stack direction="row" spacing={1} alignItems="center">
                  <Typography>Profissional</Typography>
                  <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} onChange={(e) => setTipoLogin(!tipoLogin)} />
                  <Typography>Clínica</Typography>
                </Stack>
                {/* <Select
                  labelId="tipo-login-label"
                  id="tipo-login-select"
                  value={tipoLogin}
                  label="Tipo de Login"
                  onChange={(e) => setTipoLogin(Number(e.target.value))}
                >
                  <MenuItem value={0}>Veterinário</MenuItem>
                  <MenuItem value={1}>Clínica</MenuItem>
                </Select> */}
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField id="filled-basic" style={{width: '100%'}} label="Endereço de e-mail" variant="outlined"  value={email} onChange={(e) => setEmail(e.target.value)}/>
            </Grid>
            <Grid item xs={12}>
              <TextField id="filled-basic" style={{width: '100%'}} label="Senha" variant="outlined"  value={senha} onChange={(e) => setSenha(e.target.value)} />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" style={{width: '100%'}}   onClick={handleSubmit} >Entrar</Button>
            </Grid>
            <Grid item xs={12}>
                <Typography>Esqueceu a senha?<Link to="/">Clique aqui</Link></Typography>
                <Typography>Não tem conta?<Link to="/cadastro/base">Clique aqui</Link></Typography>
            </Grid>
          </Grid>


          {/*  mexer só daqui pra cima */}
        </DialogComponent>

      </PageContainerComponent>
    </Box>
  )
}

export default LoginPage