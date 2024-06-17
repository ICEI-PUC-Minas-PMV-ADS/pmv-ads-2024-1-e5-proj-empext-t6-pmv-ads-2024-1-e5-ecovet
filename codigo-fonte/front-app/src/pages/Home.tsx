import { useEffect } from 'react';
import PageContainerComponent from '../component/PageContainer';
import type { AppDispatch, RootState } from '../reducers/store'
import { useSelector, useDispatch } from 'react-redux'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import HeaderComponent from '../component/Header';
import { authorizeUser } from '../reducers/userReducer'

import { Container, CssBaseline, Box, Stack, styled } from "@mui/material";
import Typography from "@mui/material/Typography";
import Footer from '../component/Footer';

var ls = require('local-storage');

const TypographyMold = styled(Typography)({
  fontFamily: "red-hat-display",
});

const ValuesBox = ({ title, text }: { title: string; text: string }) => {
  return (
    <Box
      display={"flex"}
      gap={1}
      justifyContent={"center"}
      flexDirection={"column"}
      padding={2}
      width={"400px"}
      height={"200px"}
      bgcolor={"white"}
      borderRadius={5}
      boxShadow={
        "0 10px 15px -1px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)"
      }
    >
      <TypographyMold fontSize={"20px"} fontWeight={600}>
        {title}
      </TypographyMold>
      <TypographyMold fontSize={"20px"}>{text}</TypographyMold>
    </Box>
  );
};

const HomePage = () => {
  // const fields = useSelector((state: RootState) => state.preprojeto.pageFields);
  const isAuthorized = useSelector((state: RootState) => state.user.isAuthorized)
  const dispatch = useDispatch<AppDispatch>();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();
 
  useEffect(() => {
    let user = ls.get('user')
    if(user != null&& user.isAuthorized != false){
      dispatch(authorizeUser(user))
    }
  }, []) 


  return (
    <Box
    style={{ 
      backgroundImage: `url("img/bg.jpg")`,
      backgroundColor: 'red !important',
      height: '100vh',
    }}>
      <HeaderComponent  />
      <PageContainerComponent title="" style={{ marginLeft: isMobile ? 60 : 3000 }}>


        <Container maxWidth={"xl"}>
          <Stack 
          style={{
            marginTop: '8em'
          }}
          direction={"row"} 
          spacing={10}>
            <ValuesBox
              title="  Missão"
              text="     Um hub de negócios onde a clínica pode encontrar o profissional
            que deseja e o profissional pode encontrar a vaga que tanto
            procura."
            />

            <ValuesBox
              title="Visão"
              text=" A EcoVet é o ecossistema que pensa em conectar especialistas nas
            diversas áreas da veterinária ao seu pet, oferecendo agilidade e
            qualidade no atendimento."
            />

            <ValuesBox
              title="  Valores"
              text="Transparência e solução de negócios de clínicas e profissionais
            autônomos, democratizando o ambiente da medicina veterinária."
            />
          </Stack>
        </Container>
      </PageContainerComponent>
    </Box>
    
  )
}

export default HomePage