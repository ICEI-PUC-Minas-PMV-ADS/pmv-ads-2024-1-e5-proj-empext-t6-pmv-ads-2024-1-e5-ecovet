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


const EsqueciSenhaPage = () => {
  const isDialogOpen = useSelector((state: RootState) => state.dialog.isOpen)
  const dispatch = useDispatch<AppDispatch>();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
 
  useEffect(() => {
    dispatch(setDialog({
      title: 'Esqueceu a senha?',
      action: null
    }))
  },[])

  return (
    <PageContainerComponent title="" style={{ marginLeft: isMobile ? 60 : 3000 }}>
      <DialogComponent open={isDialogOpen} handleClose={() => dispatch(setDialogIdle())} >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography>E-mail</Typography>
            <TextField id="filled-basic" style={{width: '100%'}} label="Digite seu e-mail" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" style={{width: '100%'}} >Redefinir senha</Button>
          </Grid>
          <Grid item xs={12}>
              <Typography>Para retornar  <Link href="#">clique aqui</Link></Typography>
          </Grid>
        </Grid>

        {/*  mexer só daqui pra cima */}
      </DialogComponent>

    </PageContainerComponent>
  )
}

export default EsqueciSenhaPage