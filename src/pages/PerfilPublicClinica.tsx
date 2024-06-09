import React, { useEffect, useState } from "react";

import {
  Box,
  Container,
  CssBaseline,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import { useParams } from "react-router-dom";

import Perfil from "../component/PerfilOnlineClinica";
import PerfilComum from "../component/PrimeiraVersaoPerfil";
import ListaClinica from "../component/ListaClinica";

import BotaoClinica from "../component/BotaoClinica";
import Footer from "../component/Footer";

// deve ser MODIFACADO OU DELETADO apos back end //
const isThePerfilOnwerLogged = false;

interface Clinica {
  id: string;
  name: string;
  email: string;
  avatar: string;
  contact: string;
  about: string;
  experience: string;
  job: string;
}

const fakeClinica = {
  id: "1",
  name: "Clínica Pet",
  email: "email@example.com",
  avatar: "codigo-fonte\front-appsrcimgclinica.png",
  job: "São Paulo / SP",
  contact: "11 2222 2222",

  about:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus",
  experience:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis phaLorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncusLorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncusretra. Proin blandit ac massa sed rhoncus",
};
/////

const PerfilPublicClinica = () => {
  const [clinica, setClinica] = useState<Clinica | null>(null);

  const { idClinica } = useParams();

  useEffect(() => {
    const getClinicData = async () => {
      const response = fakeClinica;
      setClinica(response);
    };

    getClinicData();
  }, []);

  return (
    <div className="container-flexgrow" style={{ backgroundColor: "white" }}>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth={"xl"}>
          <Stack
            direction={"row"}
            sx={{
              marginTop: "20px",
              marginBottom: "100px",
            }}
            spacing={4}
          >
            <Box maxWidth={"770px"}>
              {/* {clinica ? (
                isThePerfilOnwerLogged ? (
                  <Perfil clinica={clinica} />
                ) : (
                  <PerfilComum clinica={clinica} />
                )
              ) : (
                <></>
              )} */}

              {clinica && <PerfilComum clinica={clinica} />}
            </Box>

            <ListaClinica />
          </Stack>
        </Container>
      </React.Fragment>
    </div>
  );
};

export default PerfilPublicClinica;
