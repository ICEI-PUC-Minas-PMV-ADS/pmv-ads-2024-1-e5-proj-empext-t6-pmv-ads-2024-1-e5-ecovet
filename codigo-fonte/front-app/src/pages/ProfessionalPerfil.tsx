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
import { get } from "../services/agent";
import type { AppDispatch, RootState } from '../reducers/store'
import { useSelector } from 'react-redux'


interface Professional {
  id: any;
  name: any;
  email: any;
  avatar: any;
  contact: any;
  about: any;
  experience: any; 
  job: any;
  localizacao: any
}

const ProfessionalPerfil = () => {
  const [profissional, setProfissional] = useState<Professional>();

  const isTooSmallScreen = useMediaQuery("(max-width: 1000px)");
  const { name, id, userName, role } = useSelector((state: RootState) => state.user)
  const { idVeterinario } = useParams();
  
  console.log('id logado', id);
  useEffect(() => {
    const fetchVeterinario = async () => {
      try {
        const response = await get(
          `ProfissionalVeterinario/obterProfissionalVeterinarioPorId/${idVeterinario}`
        );
        if (response) {
          const professionalResponse: Professional = {
            id: response.idProfissional,
            name: response.nome,
            email: response.email,
            contact: response.telefone,
            about: response.disponibilidade,
            job: response.especialidade,
            avatar: "/img/avatar.png",
            experience: response.experiencia || "", 
            localizacao: "aqui" // MUDAR
          };

          console.log(id)
          console.log(response.idProfissional)
          setProfissional(professionalResponse);
        } else {
          console.error("Erro ao obter dados do veterinário");
        }
      } catch (error) {
        console.error("Erro ao buscar veterinário:", error);
      }
    };

    fetchVeterinario();
  }, [idVeterinario]);


  return (
    <div className="container-flexgrow" style={{ backgroundColor: "white" }}>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth={"xl"}>
          <Grid container>
            <Grid item sm={10} md={isTooSmallScreen ? 9 : 7}>
              {
                profissional &&
                <Box>
                    {
                        role === "Clínica" ? <PerfilCommonVersion professional={profissional} /> : 
                        id == profissional.id ? <PerfilOnwerVersion professional={profissional} /> : 
                        <PerfilCommonVersion professional={profissional} />
                    }
                  </Box>
              }
            </Grid>

            <Grid item md={5}>
              {/* MENU DIREITO QUE MOSTRA MAIS VETERINÁRIOS */}
            {/* <MoreProfessionalList /> */}
            </Grid>
          </Grid>
        </Container>
      </React.Fragment>
    </div>
  );
};

export default ProfessionalPerfil;
