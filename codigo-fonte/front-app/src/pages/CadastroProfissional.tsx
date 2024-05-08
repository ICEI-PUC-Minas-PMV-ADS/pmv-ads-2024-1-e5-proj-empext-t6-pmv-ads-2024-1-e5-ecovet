import { useEffect } from 'react';
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
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { useState } from 'react';
import {post} from '../services/agent';

const CadastroProfissionalPage = () => {
  const isDialogOpen = useSelector((state: RootState) => state.dialog.isOpen)
  const dispatch = useDispatch<AppDispatch>();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [localizacao, setLocalizacao] = useState('');
  const [especialidade, setEspecialidade] = useState('');
  const [disponibilidade, setDisponibilidade] = useState('');
  const [senha, setSenha] = useState('');


  useEffect(() => {
    dispatch(setDialog({
      title: 'Cadastro Profissional',
      action: null
    }))
  },[])

  const handleSubmit = async () => {
    const profissionalData = {
      nome,
      email,
      telefone,
      localizacao,
      especialidade,
      disponibilidade,
      senha,
    };
  
    try {
      const response = await post('/ProfissionalVeterinario/cadastrarProfissionalVeterinario', profissionalData);
      if (response.ok) {
        // Tratamento de sucesso
        alert('Cadastro realizado com sucesso!');
      } else {
        // Tratamento de erro
        alert('Erro ao realizar o cadastro.');
      }
    } catch (error) {
      console.error("Erro ao cadastrar profissional veterinário:", error);
      alert('Erro ao conectar com o servidor.');
    }
  };
  
  return (
    <PageContainerComponent title="" style={{ marginLeft: isMobile ? 60 : 3000 }}>
      <DialogComponent open={isDialogOpen} handleClose={() => dispatch(setDialogIdle())} >
        
        {/*  mexer só daqui pra baixo */}

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography>Nome</Typography>
            <TextField id="filled-basic" style={{width: '100%'}} label="Digite seu nome" variant="outlined"   onChange={(e) => setNome(e.target.value)}/>
          </Grid>

          <Grid item xs={12}>
            <Typography>Email</Typography>
            <TextField id="filled-basic" style={{width: '100%'}} label="Digite seu e-mail" variant="outlined" onChange={(e) => setEmail(e.target.value)}/>
          </Grid>

          <Grid item xs={12}>
            <Typography>Telefone</Typography>
            <TextField id="filled-basic" style={{width: '100%'}} label="Digite seu telefone" variant="outlined" onChange={(e) => setTelefone(e.target.value)}/>
          </Grid>

          <Grid item xs={12}>
            <Typography>Localização</Typography>
            <TextField id="filled-basic" style={{width: '100%'}} label="Digite sua localização" variant="outlined" onChange={(e) => setLocalizacao(e.target.value)}/>
          </Grid>

          <Grid item xs={12}>
            <Typography>Especialidade</Typography>
            <TextField id="filled-basic" style={{width: '100%'}} label="Sua especialidade" variant="outlined" onChange={(e) => setEspecialidade(e.target.value)}/>
          </Grid>

          <Grid item xs={12}>
            <Typography>Disponibilidade</Typography>
            <TextField id="filled-basic" style={{width: '100%'}} label="Disponibilidade" variant="outlined" onChange={(e) => setDisponibilidade(e.target.value)}/>
          </Grid>

          <Grid item xs={12}>
            <Typography>Senha</Typography>
            <TextField id="filled-basic"  type='password'  style={{width: '100%'}} label="Digite sua senha" variant="outlined" onChange={(e) => setSenha(e.target.value)}/>
          </Grid>

          <Grid item xs={12}>
            <Button variant="contained" style={{width: '100%'}} onClick={handleSubmit}>ENVIAR CADASTRO</Button>
          </Grid>


          <Grid item xs={12}>
              <Typography>Para cancelar  <Link href="#">clique aqui</Link></Typography>
          </Grid>
        </Grid>


        {/*  mexer só daqui pra cima */}
      </DialogComponent>

    </PageContainerComponent>
  )
}

export default CadastroProfissionalPage