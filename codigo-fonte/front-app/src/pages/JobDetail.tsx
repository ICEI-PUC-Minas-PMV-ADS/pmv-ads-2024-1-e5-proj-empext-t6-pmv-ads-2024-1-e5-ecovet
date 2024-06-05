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

// DELETAR FAKE DATA
const fakeClinicWithHisJob = {
  id: "2",
  title: "Enfermeiro para cirurgia",
  location: "Belo Horizonte MG",
  value: "a combinar",
  type: "urgent",
  experience: "2 years",
  description:
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
  responsibilities:
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
  clinic: {
    id: 1,
    name: "John Dove",
    location: "California",
    email: "email@example.com",
    contact: "99 9999 9999",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
  },
};

const fakeJobCardData = [
  {
    id: "2",
    tituloVaga: "Enfermeiro para cirurgia",
    nome: "Clinica Ecovet",
  location: "Belo Horizonte MG",
  value: "a combinar",
  type: "urgent",
  experience: "2 years",
  description:
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
  responsibilities:
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
  
    clinicaVaga: {
      
    }
  }
]

///////////////////////

const TypographyMold = styled(Typography)({
  fontFamily: "red-hat-display",
});

const sqyareStyle = {
  width: "160px",
  height: "70px",
  borderRadius: "8px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
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

const JobDetail = () => {
  const [selected, setSelected] = useState("0");
  const [similarJobs, setSimilarJobs] = useState<any[] | null>(null);
  const [loadingSimilarJobs, setLoadingSimilarJobs] = useState(false);
  const [jobDetail, setJobDetail] = useState<any | null>(null);
  const [loadind, setLoading] = useState(false);

  const { idJob } = useParams();

  const isSmallScreen = useMediaQuery("(max-width:800px)");

  // carregar vagas similares
  useEffect(() => {
    setLoadingSimilarJobs(true);

    const fetchSimilarJobs = async () => {
      try {
        // const jobsData = fakeData.slice(0, 6);
        // setSimilarJobs(jobsData);
        // setLoadingSimilarJobs(false);
      } catch (error) {
        console.log(error);
        setLoadingSimilarJobs(false);
      }
    };
    fetchSimilarJobs();
  }, []);

  // carrega detalhe da vaga
  useEffect(() => {
    setLoading(true);

    const getJobDetail = async () => {
      try {
        const JobDetailData = fakeClinicWithHisJob;
        setJobDetail(JobDetailData);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    getJobDetail();
  }, []);

  return (
    <div className="container-flexgrow" style={{ backgroundColor: "white" }}>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth={"xl"}>
          <Grid container columnSpacing={"40px"}>
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
                          {jobDetail.title}
                        </TypographyMold>
                        <TypographyMold sx={{ fontSize: "16px" }}>
                          {jobDetail.location}
                        </TypographyMold>
                        <TypographyMold
                          sx={{ fontSize: "16px", color: "#2563eb" }}
                        >
                          Nome clínica
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
                        Tipo
                      </TypographyMold>

                      <TypographyMold
                        sx={{
                          fontSize: "18px",
                          fontWeight: 600,
                          color: "#374151",
                        }}
                      >
                        Pra agora
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
                            {jobDetail.description}
                          </TypographyMold>
                        </Box>

                        <Box>
                          <TypographyMold
                            fontSize={"20px"}
                            fontWeight={600}
                            marginTop={"32px"}
                          >
                            Requerimentos
                          </TypographyMold>
                          <TypographyMold
                            textAlign={"justify"}
                            fontSize={"16px"}
                          >
                            {jobDetail.responsibilities}
                          </TypographyMold>
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
                            {jobDetail.clinic.name}
                          </TypographyMold>
                          <TypographyMold>
                            {jobDetail.clinic.location}
                          </TypographyMold>
                          <TypographyMold>
                            {jobDetail.clinic.email}
                          </TypographyMold>
                        </Box>

                        <TypographyMold fontSize={"20px"} fontWeight={600}>
                          Sobre a clínica
                        </TypographyMold>
                        <TypographyMold>
                          {jobDetail.clinic.description}
                        </TypographyMold>
                      </>
                    )}
                  </Box>
                  <Divider />
                </>
              )}
            </Grid>



          <Grid
            padding={"20px"}
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
              Vagas similares
            </TypographyMold>

            {loadingSimilarJobs ? (
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
            ) : similarJobs && similarJobs.length ? (
              <>
                <Box display={"flex"} flexWrap={"wrap"} gap={"16px"}>
                  {/* {similarJobs.map((item) => (
                    <JobCard job={item} key={item.id} />
                  ))} */}
                </Box>
              </>
            ) : (
              <TypographyMold>Ainda não foram criadas vagas 😓 </TypographyMold>
            )}
          </Grid>
          </Grid>
        </Container>
      </React.Fragment>
    </div>
  );
};

export default JobDetail;
