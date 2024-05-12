import { useEffect } from 'react';
import PageContainerComponent from '../component/PageContainer';
import type { AppDispatch, RootState } from '../reducers/store'
import { useSelector, useDispatch } from 'react-redux'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  // const fields = useSelector((state: RootState) => state.preprojeto.pageFields);
  const isAuthorized = useSelector((state: RootState) => state.user.isAuthorized)
  const dispatch = useDispatch<AppDispatch>();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();
 

  return (
    <PageContainerComponent title="" style={{ marginLeft: isMobile ? 60 : 3000 }}>
    </PageContainerComponent>
  )
}

export default HomePage