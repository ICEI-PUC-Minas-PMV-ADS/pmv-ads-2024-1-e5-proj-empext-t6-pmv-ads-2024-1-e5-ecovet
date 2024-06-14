import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  IconButton,
  Paper,
  Grid,
  Modal,
  Box,
  styled,
  CssBaseline,
  Container,
  CircularProgress,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import JobCard from "../component/JobCard";
import { useParams } from "react-router-dom";
import { del, get } from "../services/agent";
import { useNavigate } from "react-router-dom";

type Candidatura = {
  idCandidatura: number;
  status: string;
  dataDaCandidatura: string;
  idProfissionalVeterinario: number;
  idVaga: number;
};

type ProfissionalVeterinario = {
  idProfissional: number;
  nome: string;
  especialidade: string;
  senha: string;
  telefone: string;
  email: string;
  disponibilidade: string;
  localizacao: string;
};

type Vaga = {
  idVaga: number;
  tituloVaga: string;
  descricao: string;
  requisitos: string;
  periodoDeDisponibilidade: string;
  idClinicaVeterinaria: number;
};

type ClinicaVeterinaria = {
  idClinica: number;
  nome: string;
  endereco: string;
  senha: string;
  telefone: string;
  email: string;
  descricaoDosServicos: string;
};

type ObterCandidaturasComVagaEVeterinario = {
  candidatura: Candidatura;
  profissionalVeterinario: ProfissionalVeterinario;
  vaga: Vaga;
  clinicaVeterinaria: ClinicaVeterinaria;
};

type JobData = {
  idVaga: number;
  descricao: string;
  clinicaVaga: {
    nome: string;
    endereco: string;
  };
  requisitos: string
};

const VerCandidaturas = () => {
  const { idVaga } = useParams();

  const [candidaturas, setCandidaturas] = useState<
    ObterCandidaturasComVagaEVeterinario[]
  >([]);
  const [job, setJob] = useState<JobData | null>(null);
  const [loading, setLoading] = useState(true);
  const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);
  const [selectedCandidaturaId, setSelectedCandidaturaId] = useState<
    number | null
  >(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCandidaturas = async () => {
      try {
        const response = await get(`Candidatura/Vaga/${idVaga}`);
        if (response && response.length > 0) {
          const jobData: JobData = {
            idVaga: response[0].vaga.idVaga,
            descricao: response[0].vaga.descricao,
            clinicaVaga: {
              nome: response[0].clinicaVeterinaria.nome,
              endereco: response[0].clinicaVeterinaria.endereco,
            },
            requisitos: response[0].vaga.requisitos
          };
          console.log("----------", response)
          setJob(jobData);
          setCandidaturas(response);
        } else {
          console.error("Erro ao obter dados da clínica");
        }
      } catch (error) {
        console.error("Erro ao buscar candidaturas:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCandidaturas();
  }, [idVaga]);

  const handleDeleteCandidatura = async () => {
    if (selectedCandidaturaId !== null) {
      try {
        const response = await del(`Candidatura/${selectedCandidaturaId}`);
        if (response.status === 200) {
          console.log("Candidatura deletada com sucesso:", response);
          setCandidaturas(
            candidaturas.filter(
              (c) => c.candidatura.idCandidatura !== selectedCandidaturaId
            )
          );
          setDeleteModalOpen(false);
        }
      } catch (error) {
        console.error("Erro ao deletar a candidatura:", error);
      }
    }
  };

  const TypographyMold = styled(Typography)({
    fontFamily: "red-hat-display",
  });

  const CandidateTable = () => (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell>Profissão</TableCell>
            <TableCell>Experiência</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {candidaturas.map((candidatura) => (
            <TableRow key={candidatura.candidatura.idCandidatura}>
              <TableCell component="th" scope="row">
                {candidatura.profissionalVeterinario?.nome ||
                  "Nome não disponível"}
                <TypographyMold variant="body2" color="textSecondary">
                  {new Date(
                    candidatura.candidatura.dataDaCandidatura
                  ).toLocaleDateString()}
                </TypographyMold>
              </TableCell>
              <TableCell>
                {candidatura.profissionalVeterinario?.especialidade ||
                  "Especialidade não disponível"}
              </TableCell>
              <TableCell>
                {candidatura.profissionalVeterinario?.disponibilidade ||
                  "Disponibilidade não disponível"}
              </TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ marginRight: "10px" }}
                  onClick={() => {
                    navigate(
                      `/perfilprofessional/publico/${candidatura.profissionalVeterinario?.idProfissional}`
                    );
                  }}
                >
                  Ver Perfil
                </Button>
                <IconButton
                  aria-label="delete"
                  color="error"
                  onClick={() => {
                    setSelectedCandidaturaId(
                      candidatura.candidatura.idCandidatura
                    );
                    setDeleteModalOpen(true);
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

  if (loading) {
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
      <Container className="container-flexgrow" maxWidth={"xl"}>
        <Grid className="container-flexgrow" container spacing={2} mt={4}>
          <Grid item xs={12}>
            <TypographyMold variant="h6" sx={{ ml: 2 }}>
              Profissionais que candidataram na vaga "{job ? job.descricao : ""}
              ":
            </TypographyMold>
          </Grid>
          <Grid item container spacing={2}>
            <Grid item xs={12} md={4} xl={3} sx={{ ml: 2 }}>
              {job && <JobCard job={job} />}
            </Grid>
            <Grid item xs={12} md={7} xl={8}>
              <CandidateTable />
            </Grid>
          </Grid>

          <Modal
            open={deleteModalOpen}
            onClose={() => setDeleteModalOpen(false)}
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
              <TypographyMold
                fontSize={"18px"}
                id="delete-modal-title"
                variant="h6"
              >
                Confirmar Deleção de Candidatura
              </TypographyMold>
              <TypographyMold id="delete-modal-description">
                Você tem certeza que deseja deletar essa candidatura? Esta ação
                não pode ser desfeita.
              </TypographyMold>
              <Button
                sx={{
                  marginTop: "20px",
                  padding: "8px 30px",
                  backgroundColor: "red",
                }}
                variant="contained"
                onClick={handleDeleteCandidatura}
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
                onClick={() => setDeleteModalOpen(false)}
              >
                Cancelar
              </Button>
            </Box>
          </Modal>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default VerCandidaturas;
