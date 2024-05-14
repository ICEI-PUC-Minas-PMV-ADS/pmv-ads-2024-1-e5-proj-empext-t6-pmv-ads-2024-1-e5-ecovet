import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import type { AppDispatch, RootState } from '../reducers/store'
import { useSelector, useDispatch } from 'react-redux'

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
import { get } from '../services/agent'

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


const VetClinicInitialPage = () => {
  const {isAuthorized, role} = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch<AppDispatch>();
  const { name } = useSelector((state: RootState) => state.user)
  const [isLoading, setIsloading] = useState<Boolean>(false);
  const [jobs, setJobs] = useState([]);
  const [open, setOpen] = React.useState(false);

  const navigate = useNavigate();

  const getJobs = async() => {
    setIsloading(true)
    const response = await get("Vaga/obterVagasClinica");
    console.log("response")
    console.log(response)
    if(response.status = 200){
      setJobs(response)
    }else{

    }
    setIsloading(false)
  }

  useEffect(() => {
    getJobs()
  },[isAuthorized]) 

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
                Bem-vindo, { name }
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
          <Grid container flex={1} style={{marginTop : '3em'}}>
          <Grid item>
            <Typography variant="subtitle1">Minhas Vagas Cadastradas</Typography>
          </Grid>
          </Grid>
          <Grid container flex={1} spacing={8} style={{marginTop : '-2em'}}>
          {
              jobs?.length != 0 ? 
                jobs.map((job) =>
                  <Grid item>
                    <JobCard job={{
                      //@ts-ignore
                      id: job.idVaga,
                      //@ts-ignore
                      title: job.tituloVaga,
                      location: "localizaçao",
                      //@ts-ignore
                      description: job.descricao,
                      //@ts-ignore
                      data: job.periodoDeDisponibilidade,
                    }} />
                  </Grid >
                )
              : null
            }
          </Grid>
          
        </Stack>

        <ClinicPerfilModal open={open} setOpen={setOpen} />
      </Container>
    </React.Fragment>
  );
};

export default VetClinicInitialPage;
