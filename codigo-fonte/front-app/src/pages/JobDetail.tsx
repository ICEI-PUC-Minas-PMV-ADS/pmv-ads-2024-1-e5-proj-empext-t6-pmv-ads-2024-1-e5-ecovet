import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  CssBaseline,
  Divider,
  Grid,
  Typography,
  styled,
  useMediaQuery,
} from "@mui/material";
import { useParams } from "react-router-dom";
import JobCard from "../component/JobCard";
import { get, post } from "../services/agent";
import Chip from "@mui/material/Chip";
import { useSelector, useDispatch } from "react-redux";
import type { AppDispatch, RootState } from "../reducers/store";

const TypographyMold = styled(Typography)({
  fontFamily: "red-hat-display",
});

const sqyareStyle = {
  minWidth: "160px",
  height: "70px",
  borderRadius: "8px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: 1,
};

const CssButton = styled(Button)({
  textTransform: "none",
  fontFamily: "red-hat-display",
  fontSize: "14px",
  borderRadius: "50px",
  padding: "12px 20px",
});

const buttonStyle1 = {
  backgroundColor: "black",
  color: "white",
  border: "1px solid #D1D5DB",
  "&:hover": {
    backgroundColor: "#333333",
    border: "1px solid #333333",
  },
  "&:active": {
    backgroundColor: "#333333",
  },
};

const buttonStyle2 = {
  boxShadow: "none",
  backgroundColor: "white",
  color: "black",
  border: "1px solid #D1D5DB",
  "&:hover": {
    backgroundColor: "#f0f0f0",
    border: "1px solid white",
  },
  "&:active": {
    backgroundColor: "white",
  },
};

const buttonStyle3 = {
  boxShadow: "none",
  backgroundColor: "#FF0000",
  color: "white",
  border: "1px solid #D1D5DB",
  "&:hover": {
    backgroundColor: "#CC0000",
    border: "1px solid #FF3333",
  },
  "&:active": {
    backgroundColor: "#660000",
  },
};

const isAplicatedOnJob = false;

const JobDetail = () => {
  const { isAuthorized, role, id } = useSelector(
    (state: RootState) => state.user
  );
  const [selected, setSelected] = useState("0");
  const [similarJobs, setSimilarJobs] = useState<any[] | null>(null);
  const [loadingSimilarJobs, setLoadingSimilarJobs] = useState(false);
  const [jobDetail, setJobDetail] = useState<any | null>(null);
  const [loadind, setLoading] = useState(false);

  const { idClinic, idJob } = useParams();

  const isSmallScreen = useMediaQuery("(max-width:800px)");

  const getJobFromClinic = async (idclinica: number) => {
    const response = await get(`ClinicaVeterinaria/${idclinica}/vagas`);
    if ((response.status = 200)) {
      setSimilarJobs(response);
    } else {
    }
  };

  const getJobDetail = async (idvaga: number) => {
    const response = await get(`Vaga/${idvaga}`);
    if ((response.status = 200)) {
      setJobDetail(response);
    } else {
    }
  };

  const jobApplication = async (jobDetail: any) => {
    const application = {
      status: "Aberto",
      idProfissionalVeterinario: id,
      idVaga: jobDetail.idVaga,
    };

    try {
      const response = await post("Candidatura", application);
      if (response.ok) {
        // Tratamento de sucesso
        alert("Cadastro realizado com sucesso!");
      } else {
        // Tratamento de erro
        alert("Erro ao realizar o cadastro.");
      }
    } catch (error) {
      console.error("Erro ao cadastrar profissional veterinário:", error);
      alert("Erro ao conectar com o servidor.");
    }
  };

  // carrega detalhe da vaga
  useEffect(() => {
    //@ts-ignore
    getJobDetail(parseInt(idJob));
    //@ts-ignore
    getJobFromClinic(parseInt(idClinic));
  }, []);

  const setAplication = async () => {
    // FAZER APLICAÇAO NA VAGA
  };

  const cancelAplication = async () => {
    // CANCELAR APLICAÇAO NA VAGA
  };

  const decisorExp = (exp: number) => {
    switch (exp) {
      case 0: {
        return "sem experiência";
      }
      case 1: {
        return "Menos de 1 ano de experiência";
      }
      case 2: {
        return "Entre 1 à 2 anos de experiência";
      }
      case 3: {
        return "Entre 2 à 6 anos de experiência";
      }
      default: {
        return "Mais de 6 anos de experiência";
      }
    }
  };

  return (
    <div className="container-flexgrow" style={{ backgroundColor: "white" }}>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth={"xl"}>
          <Grid container columnSpacing={"10px"}>
            <Grid
              item
              sm={12}
              md={6}
              sx={{
                padding: { xs: "40px 20px", sm: "40px 40px" },
              }}
            >
              {loadind ? (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "20px",
                    height: "100%",
                  }}
                >
                  <CircularProgress />
                </Box>
              ) : !jobDetail ? (
                <Box display={"flex"} justifyContent={"center"}>
                  <TypographyMold>Ops! Vaga não disponível 😓 </TypographyMold>
                </Box>
              ) : (
                <>
                  <Box display={"flex"} alignItems={"center"}>
                    <Box display={"flex"} gap={"8px"}>
                      <img
                        src="/img/job.png"
                        alt="logo"
                        style={{
                          width: "96px",
                          height: "96px",
                          borderRadius: "4px",
                          objectFit: "contain",
                        }}
                        loading="lazy"
                      />
                      <Box display={"flex"} flexDirection={"column"}>
                        <TypographyMold
                          sx={{ fontSize: "20px", fontWeight: 600 }}
                        >
                          {jobDetail.tituloVaga}
                        </TypographyMold>
                        <TypographyMold sx={{ fontSize: "16px" }}>
                          {jobDetail.clinicaVaga.endereco}
                        </TypographyMold>
                        <TypographyMold
                          sx={{ fontSize: "16px", color: "#2563eb" }}
                        >
                          {jobDetail.clinicaVaga.nome}
                        </TypographyMold>
                        <TypographyMold
                          sx={{ fontSize: "14px", color: "#6b7280" }}
                        >
                          {jobDetail.data}
                        </TypographyMold>
                      </Box>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: { md: "row" },
                      flexWrap: "wrap",
                      gap: "8px",
                      alignItems: "center",
                      marginY: "40px",
                    }}
                  >
                    <Box bgcolor={"#bdf4c8"} sx={sqyareStyle}>
                      <TypographyMold sx={{ fontSize: "14px" }}>
                        Valor
                      </TypographyMold>

                      <TypographyMold
                        sx={{
                          fontSize: "18px",
                          fontWeight: 600,
                          color: "#374151",
                        }}
                      >
                        A combinar
                      </TypographyMold>
                    </Box>

                    <Box bgcolor={"#fed0ab"} sx={sqyareStyle}>
                      <TypographyMold sx={{ fontSize: "14px" }}>
                        Período de disposição
                      </TypographyMold>

                      <TypographyMold
                        sx={{
                          fontSize: "18px",
                          fontWeight: 600,
                          color: "#374151",
                        }}
                      >
                        {jobDetail.periodoDeDisponibilidade}
                      </TypographyMold>
                    </Box>
                  </Box>

                  <Box display={"flex"} gap={"16px"} paddingY={"20px"}>
                    <CssButton
                      onClick={() => setSelected("0")}
                      variant="contained"
                      fullWidth
                      sx={selected === "1" ? buttonStyle2 : buttonStyle1}
                    >
                      Descrição da vaga
                    </CssButton>

                    <CssButton
                      onClick={() => setSelected("1")}
                      variant="contained"
                      fullWidth
                      sx={selected === "1" ? buttonStyle1 : buttonStyle2}
                    >
                      Clínica
                    </CssButton>
                  </Box>

                  <Box marginY={"24px"}>
                    {selected === "0" ? (
                      <>
                        <Box>
                          <TypographyMold fontSize={"20px"} fontWeight={600}>
                            Descrição da Vaga
                          </TypographyMold>
                          <TypographyMold
                            fontSize={"16px"}
                            textAlign={"justify"}
                          >
                            {jobDetail.descricao}
                          </TypographyMold>
                        </Box>

                        <Box>
                          <TypographyMold
                            fontSize={"20px"}
                            fontWeight={600}
                            marginTop={"32px"}
                          >
                            Requisitos
                          </TypographyMold>
                          <TypographyMold
                            textAlign={"justify"}
                            fontSize={"16px"}
                          >
                            {jobDetail.requisitos}
                          </TypographyMold>

                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <Chip
                              label={decisorExp(jobDetail.experiencia)}
                              color="success"
                              variant="outlined"
                              sx={{
                                fontFamily: "red-hat-family",
                                marginY: 2,
                                fontSize: "16px",
                              }}
                            />
                          </Box>
                        </Box>
                      </>
                    ) : (
                      <>
                        <Box
                          marginBottom={"24px"}
                          display={"flex"}
                          flexDirection={"column"}
                        >
                          <TypographyMold fontSize={"16px"}>
                            {jobDetail.clinicaVaga.nome}
                          </TypographyMold>
                          <TypographyMold>
                            {jobDetail.clinicaVaga.endereco}
                          </TypographyMold>
                          <TypographyMold>
                            {jobDetail.clinicaVaga.email}
                          </TypographyMold>
                        </Box>

                        <TypographyMold fontSize={"20px"} fontWeight={600}>
                          Sobre a clínica
                        </TypographyMold>
                        <TypographyMold>
                          {jobDetail.clinicaVaga.descricaoDosServicos}
                        </TypographyMold>
                      </>
                    )}
                  </Box>

                  <Box marginY={4}>
                    <CssButton
                      onClick={() => jobApplication(jobDetail)}
                      variant="contained"
                      fullWidth
                      sx={isAplicatedOnJob ? buttonStyle3 : buttonStyle1}
                    >
                      {" "}
                      {isAplicatedOnJob
                        ? "Cancerlar canditatura"
                        : "Aplicar Agora"}
                    </CssButton>
                  </Box>
                  <Divider />
                </>
              )}
            </Grid>

            <Grid
              sx={{
                marginTop: { xs: "80px", sm: "0px" },
              }}
              item
              sm={12}
              md={6}
            >
              <TypographyMold
                sx={{
                  color: "#6b7280",
                  fontWeight: 600,
                  opacity: 0.7,
                }}
              >
                Mais vagas da clínica
              </TypographyMold>

              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "20px",
                  justifyContent: "space-around",
                }}
              >
                {loadingSimilarJobs ? (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "20px",

                      width: "100%",
                    }}
                  >
                    <CircularProgress />
                  </Box>
                ) : similarJobs && similarJobs.length ? (
                  similarJobs.slice(0, 4).map((item) => (
                    <Box>
                      <JobCard job={item} role={role} key={item.id} />
                    </Box>
                  ))
                ) : (
                  <TypographyMold>
                    Ainda não foram criadas vagas 😓{" "}
                  </TypographyMold>
                )}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </React.Fragment>
    </div>
  );
};

export default JobDetail;
