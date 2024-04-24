import React, { useState } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";

import {
  Box,
  CircularProgress,
  Container,
  Modal,
  Stack,
  styled,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import EditNoteIcon from "@mui/icons-material/EditNote";
import PlaceIcon from "@mui/icons-material/Place";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

import JobCard from "../component/JobCard";
import ClinicPerfilModal from "../component/ClinicPerfilModal";

// FAKE DATA
const fakeData = [
  {
    id: "1",
    title: "Enfermeiro para cirurgia",
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
  const [open, setOpen] = React.useState(false);

  const theme = useTheme();
  const navigate = useNavigate();

  //tipagem improvisada
  const handleDeleteJob = async (item: (typeof fakeData)[0]) => {};
  const handleEditJob = async (item: (typeof fakeData)[0]) => {
    navigate("/upload-job", { state: { job: item } });
  };
  //

  if (isLoading) {
    return (
      <Box
        flex={1}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        sx={{ marginY: "200px" }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed maxWidth={"xl"}>
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

            {/* correção bug  */}
              <Grid
              flex={1}
              item
              md={12}
              xs={12}
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                justifyContent: { xs: "start", md: "space-between" },
                marginTop: { xs: "20px", md: "32px" },
              }}
            >
              <InfoBox>
                <PlaceIcon
                  sx={{ color: "#475569", width: "16px", height: "16px" }}
                />
                <InfoTypography>
                  {fakeUser.location || "No location"}
                </InfoTypography>
              </InfoBox>

              <InfoBox>
                <EmailOutlinedIcon
                  sx={{ color: "#475569", width: "16px", height: "16px" }}
                />
                <InfoTypography>
                  {fakeUser.email || "No email provide"}
                </InfoTypography>
              </InfoBox>

              <InfoBox>
                <CallOutlinedIcon
                  sx={{ color: "#475569", width: "16px", height: "16px" }}
                />
                <InfoTypography>
                  {fakeUser.contact || "No contact"}
                </InfoTypography>
              </InfoBox>

              <JobsPostLenght>
                <TypographyMold fontSize={"20px"}>
                  {fakeUser.jobs.length ? fakeUser.jobs.length : "0"}
                </TypographyMold>
                <TypographyMold color={"#2563eb"} fontSize={"14px"}>
                  Vagas postadas
                </TypographyMold>
              </JobsPostLenght>
            </Grid>
              {/* correção bug */}
              
          </Grid>
        </Stack>

        <ClinicPerfilModal open={open} setOpen={setOpen} />
      </Container>
    </React.Fragment>
  );
};

export default ClinicPerfilEdit;
