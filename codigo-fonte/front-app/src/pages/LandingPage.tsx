import React from "react";
import Typography from "@mui/material/Typography";
import { Container, CssBaseline, Box, Stack, styled } from "@mui/material";

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

const LandingPage = () => {
  return (
    <React.Fragment>
      <CssBaseline />

      <Container maxWidth={"xl"}>
        <Stack direction={"column"} spacing={10}>
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
    </React.Fragment>
  );
};

export default LandingPage;