import { useEffect } from 'react';
import PageContainerComponent from '../component/PageContainer';
import type { AppDispatch, RootState } from '../reducers/store'
import { useSelector, useDispatch } from 'react-redux'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const HomePage = () => {
  // const fields = useSelector((state: RootState) => state.preprojeto.pageFields);
  const dispatch = useDispatch<AppDispatch>();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
 

  return (
    <PageContainerComponent title="Area logada" style={{ marginLeft: isMobile ? 60 : 3000 }}>
      <div>Estamos em desenvolvimento ...</div>
    </PageContainerComponent>
  )
}

export default HomePage