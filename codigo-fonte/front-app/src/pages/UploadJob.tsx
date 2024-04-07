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


const UploadJob = () => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
 


  return (
    <PageContainerComponent title="" style={{ marginLeft: isMobile ? 60 : 3000 }}>
     <Typography variant='h4'>Upload Job</Typography>

    </PageContainerComponent>
  )
}

export default UploadJob