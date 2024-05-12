import React, { ChangeEvent, useEffect, useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { useTheme } from "@mui/material/styles";
import { Box, Container, styled } from "@mui/material";
import { useLocation } from "react-router-dom";
import { post } from "../services/agent";
import JobCard from "../component/JobCard";
import { useSelector, useDispatch } from "react-redux";
import type { AppDispatch, RootState } from "../reducers/store";
import { setDialog, setDialogIdle } from "../reducers/dialogReducer";
import { useNavigate } from "react-router-dom";

type Jobs = {
  id: string;
  title: string;
  location: string;
  description: string;
  data: string;
}[];

const jobs: Jobs | null = [
  {
    id: "1",
    title: "Enfermeiro para cirurgia",
    location: "Belo Horizonte MG",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
    data: "a 1 segundo atrás",
  },
  {
    id: "2",
    title: "Enfermeiro para cirurgia",
    location: "Belo Horizonte MG",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
    data: "a 1 segundo atrás",
  },
];

const TypographyForCardBox = styled(Typography)({
  fontFamily: "red-hat-display",
  fontSize: "16px",
});

const TyphographyLabel = styled(Typography)({
  fontSize: "14px",
  color: "#6B7280",
  fontFamily: "red-hat-display",
});

const FormBox = styled(Box)({
  backgroundColor: "#fff",
  padding: "25px 35px",
  boxShadow:
    "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
  borderRadius: "10px",
});

type TextinputTestProps = {
  children: React.ReactNode;
  title: string;
  margin?: boolean;
};

const TextFieldLabel: React.FC<TextinputTestProps> & {
  Field: React.FC<TextFieldProps>;
} = ({ children, title, margin }) => {
  return (
    <>
      <TyphographyLabel variant="h6" mt={margin ? "10px" : 2}>
        {title}
      </TyphographyLabel>
      {children}
    </>
  );
};

TextFieldLabel.Field = TextField;

const initialValues = {
  TituloVaga: "",
  Descricao: "",
  Requisitos: "",
  PeriodoDeDisponibilidade: "",
};

const UploadJob = () => {
  const [formValues, setFormValues] = useState(initialValues);
  const navigate = useNavigate();

  const theme = useTheme();

  const location = useLocation();
  const job = location.state ? location.state.job : null;

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log({ formValues });
  };

  const sendForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await post("Vaga/cadastrarVaga", formValues);
      if (response.ok) {
        const data = await response.json();
        alert("Vaga criada com sucesso!");
        navigate("/perfil/clinic");
      } else {
        alert("Falha ao criar a vaga. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro na criação da vaga:", error);
      alert("Erro no servidor. Por favor, tente mais tarde.");
    }
  };

  useEffect(() => {
    if (job) {
      setFormValues(job);
    }
  }, [job]);
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Grid mt={4} container>
          <Grid xs={12} md={8} xl={6} item>
            <FormBox>
              <Typography
                fontSize={"24px"}
                sx={{ fontFamily: "red-hat-display", fontWeight: 600 }}
                variant="h4"
                color="#6B7280"
              >
                Criar Vaga
              </Typography>
              <form onSubmit={sendForm}>
                <TextFieldLabel title="Título da vaga">
                  <TextFieldLabel.Field
                    placeholder="Título da vaga"
                    name="TituloVaga"
                    size="small"
                    fullWidth
                    value={formValues.TituloVaga}
                    onChange={handleChange}
                    required
                  />
                </TextFieldLabel>

                <TextFieldLabel title="Requisitos" margin>
                  <TextFieldLabel.Field
                    placeholder="Requisitos"
                    name="Requisitos"
                    size="small"
                    value={formValues.Requisitos}
                    onChange={handleChange}
                    fullWidth
                    required
                  />
                </TextFieldLabel>

                <TextFieldLabel title="Descrição da vaga" margin>
                  <TextFieldLabel.Field
                    rows={6}
                    name="Descricao"
                    size="small"
                    value={formValues.Descricao}
                    onChange={handleChange}
                    fullWidth
                    multiline
                    required
                  />
                </TextFieldLabel>

                <TextFieldLabel title="Periodo De Disponibilidade" margin>
                  <TextFieldLabel.Field
                    placeholder="Periodo De Disponibilidade"
                    name="PeriodoDeDisponibilidade"
                    size="small"
                    value={formValues.PeriodoDeDisponibilidade}
                    onChange={handleChange}
                    fullWidth
                    required
                  />
                </TextFieldLabel>

                <Button
                  sx={{
                    marginTop: "35px",
                    padding: "8px 30px",
                  }}
                  type="submit"
                  variant="contained"
                >
                  Criar
                </Button>
              </form>
            </FormBox>
          </Grid>

          <Grid
            item
            xs={12}
            md={4}
            xl={6}
            sx={{
              paddingTop: { md: "30px" },
              paddingLeft: { md: "10px" },
            }}
            spacing={4}
          >
            <TypographyForCardBox mb={"10px"} variant="h5" color={"#000"}>
              Postagens Recentes
            </TypographyForCardBox>

            {jobs && jobs.length ? (
              jobs.map((item, index) => (
                <Box key={item.id} sx={{ mt: index > 0 ? 2 : 0 }}>
                  <JobCard job={item} />
                </Box>
              ))
            ) : (
              <Typography
                variant="body2"
                sx={{
                  fontFamily: "red-hat-display",
                  opacity: "50%",
                }}
              >
                Não há vagas criadas
              </Typography>
            )}
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default UploadJob;
