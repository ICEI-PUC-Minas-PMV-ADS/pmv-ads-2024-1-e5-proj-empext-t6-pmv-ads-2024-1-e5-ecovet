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
import SnackbarContent from '@mui/material/SnackbarContent';



const CurriculoPage = () => {
  const isDialogOpen = useSelector((state: RootState) => state.dialog.isOpen)
  const dispatch = useDispatch<AppDispatch>();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
 
  useEffect(() => {
    dispatch(setDialog({
      title: 'Cadastrar currículo',
      action: null
    }))
  },[])

  return (
    <PageContainerComponent title="" style={{ marginLeft: isMobile ? 60 : 3000 }}>
      <DialogComponent open={isDialogOpen} handleClose={() => dispatch(setDialogIdle())}style={{width: '500px!important'}} >
        
        {/*  mexer só daqui pra baixo */}

        <Grid container spacing={3}style={{width: '100%'}}>
          <Grid item xs={6}>
            <Typography>Nome</Typography>
            <TextField id="filled-basic" style={{width: '100%'}} label="Seu nome" variant="outlined" />
          </Grid>
          <Grid item xs={3}>
            <Typography>Telefone</Typography>
            <TextField id="filled-basic" style={{width: '100%'}} label="Seu telefone" variant="outlined" />
          </Grid>
          <Grid item xs={3}>
            <Typography>Localização</Typography>
            <TextField id="filled-basic" style={{width: '100%'}} label="Sua cidade" variant="outlined" />
          </Grid>
          <Grid item xs={6}>
            <Typography>Graduação</Typography>
            <TextField id="filled-basic" style={{width: '100%'}} label="Sua graduação" variant="outlined" />
          </Grid>
          <Grid item xs={3}>
            <Typography>Especialidade</Typography>
            <TextField id="filled-basic" style={{width: '100%'}} label="Sua especialidade" variant="outlined" />
          </Grid>
          <Grid item xs={3}>
            <Typography>Tempo de experiência</Typography>
            <TextField id="filled-basic" style={{width: '100%'}} label="Sua esperiência" variant="outlined" />
          </Grid>
          <Grid item xs={6}>
            <Typography>Pretenção Salarial</Typography>
            <TextField id="filled-basic" style={{width: '100%'}} label="Valor" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <Typography>Cursos</Typography>
            <TextField id="filled-basic" style={{width: '100%'}} label="" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <Typography style={{height: '30%'}}>Principais atividades</Typography>
            <TextField id="filled-basic" style={{width: '100%'}} label="" variant="outlined" />
          </Grid>


          <Grid item xs={12}>
            <Button variant="contained" style={{width: '100%'}} >Cadastrar</Button>
          </Grid>
          
          <Grid item xs={12}>
              <Typography>Para cancelar o cadastro <Link href="#">clique aqui</Link></Typography>
          </Grid>
        </Grid>

        

        


        {/*  mexer só daqui pra cima */}
      </DialogComponent>

      

    </PageContainerComponent>
  )
}

export default CurriculoPage