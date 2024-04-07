import { useEffect } from 'react';
import PageContainerComponent from '../component/PageContainer';
import type { AppDispatch, RootState } from '../reducers/store'
import { useSelector, useDispatch } from 'react-redux'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { setDialog, setDialogIdle } from '../reducers/dialogReducer'
import { title } from 'process';
import DialogComponent from  '../component/Dialog'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const AlertaSenhaPage = () => {
  const isDialogOpen = useSelector((state: RootState) => state.dialog.isOpen)
  const dispatch = useDispatch<AppDispatch>();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
 
  useEffect(() => {
    dispatch(setDialog({
      title: 'E-mail de redefinição de senha enviado',
      action: null
    }))
  },[])

  return (
    <PageContainerComponent title="" style={{ marginLeft: isMobile ? 60 : 3000 }}>
      <DialogComponent open={isDialogOpen} handleClose={() => dispatch(setDialogIdle())} >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography>Em breve, você vai receber
                 um e-mail para redefinir sua senha.
                  Se não conseguir encontrar o e-mail,
                   lembre-se de procurar na pasta de spam 
                   ou lixo eletrônico.
            </Typography>
          </Grid>
          <Grid item xs={12}>
              <Typography> <Link href="#">Fechar</Link></Typography>
          </Grid>
        </Grid>
      </DialogComponent>
    </PageContainerComponent>
  )
}

export default AlertaSenhaPage