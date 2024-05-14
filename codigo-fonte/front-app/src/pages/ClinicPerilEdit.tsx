import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";

import {
  Box,
  CircularProgress,
  Container,
  Modal,
  Pagination,
  Stack,
  styled,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import EditNoteIcon from "@mui/icons-material/EditNote";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

import JobCard from "../component/JobCard";
import ClinicPerfilModal from "../component/ClinicPerfilModal";
import { getAllUserJobs } from "../services/agent";

// FAKE DATA
const fakeData = [
  {
    id: "1",
    title: "Enfermeiro para cirurgia",
    location: "São Paulo - SP",
    value: "a combinar",
    type: "urgent",
    experience: "2 years",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
    responsibilities:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
    data: "a 1 segundo atrás",
  },
  {
    id: "2",
    title: "Enfermeiro assistente",
    location: "Belo Horizonte MG",
    value: "a combinar",
    type: "urgent",
    experience: "2 years",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
    responsibilities:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
    data: "a 1 segundo atrás",
  },

  {
    id: "3",
    title: "Enfermeiro auxiliar",
    location: "Rio de Janeiro - RJ",
    value: "a combinar",
    type: "urgent",
    experience: "2 years",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
    responsibilities:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
    data: "a 1 segundo atrás",
  },
  {
    id: "4",
    title: "Enfermeiro cirurgião",
    location: "Belo Horizonte MG",
    value: "a combinar",
    type: "urgent",
    experience: "2 years",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
    responsibilities:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
    data: "a 1 segundo atrás",
  },
];
//////////

const fakeUser = {
  id: 1,
  name: "John Dove",
  location: "California",
  email: "email@example.com",
  contact: "99 9999 9999",
  jobs: fakeData,
};

const TypographyMold = styled(Typography)({
  fontFamily: "red-hat-display",
});

const EditButton = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    padding: "6px 12px",
  },
  [theme.breakpoints.up("sm")]: {
    padding: "6px 20px",
  },
  fontSize: "14px",
}));

const UploadButton = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    padding: "6px 12px",
  },
  [theme.breakpoints.up("md")]: {
    padding: "6px 20px",
  },
  fontSize: "14px",
  textTransform: "none",
  fontFamily: "red-hat-display",
  fontWeight: "normal",
}));

const InfoBox = styled(Box)({
  display: "flex",
  gap: "4px",
  alignItems: "center",
  padding: "4px 12px",
});

const JobsPostLenght = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  [theme.breakpoints.up("xs")]: {
    padding: "40px",
  },
  [theme.breakpoints.up("md")]: {
    padding: "0px",
  },
}));

const InfoTypography = styled(Typography)({
  fontSize: "14px",
  fontFamily: "red-hat-display",
});

const ClinicPerfilEdit = () => {
  const [isLoading, setIsloading] = useState<Boolean>(false);
  // tipagem improvisada
  const [data, setData] = useState<typeof fakeData>([]);

  const [open, setOpen] = React.useState(false);
  const [totalCount, setTotalCount] = useState(fakeData.length);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  //tipagem improvisada
  const handleDeleteJob = async (item: (typeof fakeData)[0]) => {};
  const handleEditJob = async (item: (typeof fakeData)[0]) => {
    navigate("/upload-job", { state: { job: item } });
  };
  //

  //// paginação
  const itemPerPage = 20;
  const startIndex = (currentPage - 1) * itemPerPage;
  const endIndex = Math.min(startIndex + itemPerPage, fakeData.length);
  const visibleData = data.slice(startIndex, endIndex);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };

  //////

  useEffect(() => {
    setIsloading(true);
    const fetchAllUserJobs = async () => {
      try {
        const response = await getAllUserJobs();
        setData(response);
        setIsloading(false);
      } catch (error) {
        console.log(error);
        setIsloading(false);
      }
    };
    fetchAllUserJobs();
  }, []);

  return (
    <Box bgcolor={"white"}>
      <React.Fragment>
        <CssBaseline />
        <Container className="container-flexgrow" fixed maxWidth={"xl"}>
          <Stack direction={"column"} paddingY={"20px"}>
            <Grid container flex={1}>
              <Grid
                item
                md={12}
                xs={12}
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  alignItems: { md: "center" },
                  width: "100%",
                }}
                gap={"12px"}
                justifyContent={"space-between"}
              >
                <TypographyMold
                  variant="h2"
                  fontSize={"20px"}
                  fontWeight={"600"}
                  color={"#4b5563"}
                >
                  Bem-vindo, clinica EcoVet
                </TypographyMold>

                <Box
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  sx={{ paddingY: { xs: "20px", md: "0px" } }}
                  gap={"20px"}
                >
                  <EditButton
                    variant="contained"
                    endIcon={<DriveFileRenameOutlineIcon />}
                    onClick={() => setOpen(true)}
                  />
                  <UploadButton
                    variant="outlined"
                    endIcon={<FileUploadOutlinedIcon />}
                    onClick={() => navigate("/upload-job")}
                  >
                    Upload vaga
                  </UploadButton>
                </Box>
              </Grid>
            </Grid>

            <Grid
              container
              flex={1}
              display={"flex"}
              flexDirection={"column"}
              gap={"6px"}
              marginTop={"80px"}
            >
              <Grid item md={12} xs={20} lg={12}>
                <TypographyMold fontSize={"16px"} variant="h6">
                  Vagas Criadas
                </TypographyMold>
              </Grid>

              {isLoading ? (
                <Box
                  flex={1}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  sx={{ marginY: "200px" }}
                >
                  <CircularProgress />
                </Box>
              ) : (
                <>
                  <Grid
                    item
                    md={12}
                    xs={20}
                    lg={12}
                    display={"flex"}
                    gap={"12px"}
                    flexWrap={"wrap"}
                  >
                    {visibleData && visibleData.length ? (
                      visibleData.map((item) => (
                        <Box>
                          {" "}
                          <JobCard job={item} />
                          <Box
                            display={"flex"}
                            justifyContent={"space-between"}
                            alignItems={"center"}
                            paddingX={"20px"}
                            marginTop={"10px"}
                          >
                            <Button
                              sx={{
                                fontSize: "14px",
                                textTransform: "none",
                                color: "#000",
                                fontFamily: "red-hat-display",
                                fontWeight: 400,
                              }}
                              startIcon={
                                <EditNoteIcon
                                  sx={{
                                    color: "#1E3A8A",
                                    width: "35px",
                                    height: "35px",
                                  }}
                                />
                              }
                              onClick={() => handleEditJob(item)}
                            >
                              Editar
                            </Button>

                            <Button
                              sx={{
                                fontSize: "14px",
                                textTransform: "none",
                                color: "#000",
                                fontFamily: "red-hat-display",
                                fontWeight: 400,
                              }}
                              startIcon={
                                <HighlightOffIcon
                                  sx={{
                                    color: "#991B1B",
                                    width: "35px",
                                    height: "35px",
                                  }}
                                />
                              }
                              onClick={() => handleDeleteJob(item)}
                            >
                              Apagar
                            </Button>
                          </Box>
                        </Box>
                      ))
                    ) : (
                      <TypographyMold>
                        Nao há vagas criadas ainda 😓{" "}
                      </TypographyMold>
                    )}
                  </Grid>

                  {totalCount > 0 && totalCount > itemPerPage && (
                    <Grid
                      item
                      md={12}
                      xs={20}
                      lg={12}
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"center"}
                      padding={5}
                    >
                      <Pagination
                        page={currentPage}
                        onChange={handlePageChange}
                        count={Math.ceil(totalCount / itemPerPage)}
                        color="primary"
                      />
                    </Grid>
                  )}
                </>
              )}
            </Grid>
          </Stack>
          <ClinicPerfilModal open={open} setOpen={setOpen} />
        </Container>
      </React.Fragment>
    </Box>
  );
};

export default ClinicPerfilEdit;
