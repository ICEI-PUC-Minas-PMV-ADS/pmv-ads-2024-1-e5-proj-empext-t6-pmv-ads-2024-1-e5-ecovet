import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { useTheme } from "@mui/material/styles";
import { Box, Container, styled } from "@mui/material";

import JobCard from "../component/JobCard";

const fakeData = [
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

const sendForm = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const data = new FormData(e.currentTarget);

  const formValue = {
    title: data.get("title"),
    type: data.get("type"),
    value: data.get("value"),
    experience: data.get("experience"),
    description: data.get("description"),
    responsabilits: data.get("responsabilits"),
  };

  console.log(formValue);
};

const UploadJob = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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
                    placeholder="título"
                    name="title"
                    size="small"
                    fullWidth
                    required
                  />
                </TextFieldLabel>

                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <TextFieldLabel title="Tipo da vaga" margin>
                      <TextFieldLabel.Field
                        placeholder="Tipo da vaga"
                        name="type"
                        size="small"
                        fullWidth
                        required
                      />
                    </TextFieldLabel>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <TextFieldLabel title="Valor" margin>
                      <TextFieldLabel.Field
                        placeholder="Valor"
                        name="value"
                        size="small"
                        fullWidth
                        required
                      />
                    </TextFieldLabel>
                  </Grid>
                </Grid>

                <TextFieldLabel title="Experiencia" margin>
                  <TextFieldLabel.Field
                    placeholder="Experência"
                    name="experience"
                    size="small"
                    fullWidth
                    required
                  />
                </TextFieldLabel>

                <TextFieldLabel title="Descrição da vaga" margin>
                  <TextFieldLabel.Field
                    rows={6}
                    name="description"
                    size="small"
                    fullWidth
                    multiline
                    required
                  />
                </TextFieldLabel>

                <TextFieldLabel title="Responsabilidades" margin>
                  <TextFieldLabel.Field
                    rows={6}
                    name="responsabilits"
                    size="small"
                    fullWidth
                    multiline
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
            }}
            spacing={4}
          >
            <TypographyForCardBox mb={"10px"} variant="h5" color={"#000"}>
              Postagens Recentes
            </TypographyForCardBox>

            {fakeData.map((item, index) => (
              <Box key={item.id} sx={{ mt: index > 0 ? 2 : 0 }}>
                <JobCard job={item} />
              </Box>
            ))}
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default UploadJob;
