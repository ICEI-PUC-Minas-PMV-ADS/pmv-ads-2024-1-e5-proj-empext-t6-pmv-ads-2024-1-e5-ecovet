import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import type { AppDispatch, RootState } from '../reducers/store'
import { useSelector, useDispatch } from 'react-redux'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import {
  Box,
  CircularProgress,
  Container,
  Modal,
  Stack,
  styled,
  Pagination
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
import { get, del } from '../services/agent'

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
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const { name } = useSelector((state: RootState) => state.user)
  const [isLoading, setIsloading] = useState<Boolean>(false);
  const [currentJob, setCurrentJob] = useState({ idVaga: 0, tituloVaga: ''});
  const [jobs, setJobs] = useState([]);
  const [totalCount, setTotalCount] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const itemPerPage = 20;
  const startIndex = (currentPage - 1) * itemPerPage;
  const endIndex = Math.min(startIndex + itemPerPage, itemPerPage);
  const visibleData = data.slice(startIndex, endIndex);
  const navigate = useNavigate();


  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };

  const getJobs = async() => {
    setIsloading(true)
    const response = await get("Vaga/obterVagasClinica");
    if(response.status = 200){
      setJobs(response)
    }else{

    }
    setIsloading(false)
  }

  const handleSetModalIsOpen = async () => {
    setModalIsOpen(!modalIsOpen)
  };


  const deleteJob = async () => {
    console.log(currentJob.idVaga)
    handleSetModalIsOpen()
    try {
      const response = await del(`Vaga/${currentJob.idVaga}`);
      if (response.status === 200) {
        console.log('Vaga deletada com sucesso:', response);
        navigate('/')
      }
    } catch (error) {
      console.error('Erro ao deletar a conta:', error);
    }
  };

  const handleDeleteJob = async (idVaga: number, tituloVaga: string) => {
    handleSetModalIsOpen()
    setCurrentJob({
      idVaga, tituloVaga
    })
  };

  
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
  const clickCandidaturasVaga = (idVaga : number) => {
    navigate(`/candidaturas/${idVaga}`);
  };
  return (
      <Container fixed maxWidth={"xl"}>

        <Modal
            open={modalIsOpen}
            onClose={() => handleSetModalIsOpen}
            aria-labelledby="delete-modal-title"
            aria-describedby="delete-modal-description"
          >
            <Box
              sx={{
                position: "absolute" as "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: { xs: "95%", sm: "450px", md: "450px" },
                backgroundColor: "white",
                padding: "20px",
                border: "none",
                borderRadius: "20px",
              }}
            >
              <TypographyMold fontSize={"18px"} id="delete-modal-title" variant="h6">
                Confirmar Deleção da Vaga
              </TypographyMold>
              <TypographyMold id="delete-modal-description">
                Você tem certeza que deseja deletar: {currentJob.tituloVaga}? Esta ação não pode ser desfeita.
              </TypographyMold>
              <Button
                sx={{
                  marginTop: "20px",
                  padding: "8px 30px",
                  backgroundColor: "red",
                }}
                variant="contained"
                onClick={() => deleteJob()}
              >
                Confirmar
              </Button>
              <Button
                sx={{
                  marginTop: "20px",
                  padding: "8px 30px",
                  marginLeft: "10px",
                }}
                variant="contained"
                onClick={() => handleSetModalIsOpen()}
              >
                Cancelar
              </Button>
            </Box>
          </Modal>

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
                jobs.map((job: any) =>
                  <Grid item style={{marginTop : '-2em'}} >          
                    {/* <div style={{cursor:'pointer'}} onClick={() => clickCandidaturasVaga(job.idVaga)}> */}
                    <div>
                      <JobCard job={job} role={role} handleDeleteJob={handleDeleteJob}   />
                    </div>
                  </Grid >
                )
              :                      
            <TypographyMold>
              Nao há vagas criadas ainda 😓{" "}
            </TypographyMold>
            }
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
          </Grid>
          
        </Stack>

      </Container>
  );
};

export default VetClinicInitialPage;
