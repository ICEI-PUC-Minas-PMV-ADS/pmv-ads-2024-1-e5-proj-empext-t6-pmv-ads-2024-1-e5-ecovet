import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  CssBaseline,
  Grid,
  Stack,
  Typography,
  styled,
  useMediaQuery,
} from "@mui/material";
import { useParams } from "react-router-dom";

import PerfilOnwerVersion from "../component/PerfilOnwerVersion";
import PerfilCommonVersion from "../component/PerfilCommonVersion";
import MoreProfessionalList from "../component/MoreProfessionalList";

// deve ser MODIFACADO OU DELETADO apos back end //
const isThePerfilOnwerLogged = false;

interface Professional {
  id: string;
  name: string;
  email: string;
  avatar: string;
  contact: string;
  about: string;
  experience: string;
  job: string;
}

const fakeProfessional = {
  id: "1",
  name: "John Dove",
  email: "email@example.com",
  avatar: "/img/avatar.png",
  contact: "99 9999 9999",
  job: "Enfermeiro",
  about:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus",
  experience:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis phaLorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncusLorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncusretra. Proin blandit ac massa sed rhoncus",
};
/////

const ProfessionalPerfil = () => {
  const [professional, setProfessional] = useState<Professional | null>(null);

  const isTooSmallScrell = useMediaQuery("(max-width: 1000px)");

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const getClinicData = async () => {
      const response = fakeProfessional;
      setProfessional(response);
    };

    getClinicData();
  }, []);

  return (
    <div className="container-flexgrow" style={{ backgroundColor: "white" }}>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth={"xl"}>
          {/* <Stack
            direction={"row"}
            sx={{
              marginTop: "20px",
              marginBottom: "100px",
            }}
            spacing={4}
          >
            <Box maxWidth={"770px"}>
              {professional ? (
                isThePerfilOnwerLogged ? (
                  <PerfilOnwerVersion professional={professional} />
                ) : (
                  <PerfilCommonVersion professional={professional} />
                )
              ) : (
          <></>
              )}
            </Box>

            <MoreProfessionalList />
          </Stack> */}
          <Grid container>
            <Grid item sm={10} md={isTooSmallScrell ? 9 : 7}>
              <Box>
                {professional ? (
                  isThePerfilOnwerLogged ? (
                    <PerfilOnwerVersion professional={professional} />
                  ) : (
                    <PerfilCommonVersion professional={professional} />
                  )
                ) : (
                  <></>
                )}
              </Box>
            </Grid>

            <Grid item md={5}>
            <MoreProfessionalList />
            </Grid>
          </Grid>
        </Container>
      </React.Fragment>
    </div>
  );
};

export default ProfessionalPerfil;
