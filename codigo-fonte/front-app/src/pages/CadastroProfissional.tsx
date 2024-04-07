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


const CadastroProfissionalPage = () => {
  const isDialogOpen = useSelector((state: RootState) => state.dialog.isOpen)
  const dispatch = useDispatch<AppDispatch>();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
 
  useEffect(() => {
    dispatch(setDialog({
      title: 'Cadastro Profissional',
      action: null
    }))
  },[])

  return (
    <PageContainerComponent title="" style={{ marginLeft: isMobile ? 60 : 3000 }}>
      <DialogComponent open={isDialogOpen} handleClose={() => dispatch(setDialogIdle())} >
        
        {/*  mexer só daqui pra baixo */}

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography>Nome</Typography>
            <TextField id="filled-basic" style={{width: '100%'}} label="Digite seu nome" variant="outlined" />
          </Grid>

          <Grid item xs={12}>
            <Typography>Email</Typography>
            <TextField id="filled-basic" style={{width: '100%'}} label="Digite seu e-mail" variant="outlined" />
          </Grid>

          <Grid item xs={12}>
            <Typography>Telefone</Typography>
            <TextField id="filled-basic" style={{width: '100%'}} label="Digite seu telefone" variant="outlined" />
          </Grid>

          <Grid item xs={12}>
            <Typography>Localização</Typography>
            <TextField id="filled-basic" style={{width: '100%'}} label="Digite sua localização" variant="outlined" />
          </Grid>

          <Grid item xs={12}>
            <Typography>Especialidade</Typography>
            <TextField id="filled-basic" style={{width: '100%'}} label="Sua especialidade" variant="outlined" />
          </Grid>

          <Grid item xs={12}>
            <Typography>Disponibilidade</Typography>
            <TextField id="filled-basic" style={{width: '100%'}} label="Disponibilidade" variant="outlined" />
          </Grid>

          <Grid item xs={12}>
            <Typography>Senha</Typography>
            <TextField id="filled-basic" style={{width: '100%'}} label="Digite sua senha" variant="outlined" />
          </Grid>

          <Grid item xs={12}>
            <Button variant="contained" style={{width: '100%'}} >ENVIAR CADASTRO</Button>
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