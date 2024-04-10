import React from "react";
import PageContainerComponent from "../component/PageContainer";
import useMediaQuery from "@mui/material/useMediaQuery";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { useTheme } from "@mui/material/styles";
import { Box, styled } from "@mui/material";

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
      <TyphographyLabel variant="h6"  mt={margin ? "10px" : 2}>
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
    <PageContainerComponent
      title=""
      style={{ marginLeft: isMobile ? 60 : 3000 }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} md={8} xl={6}>
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
                  error
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
                      error
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
                      error
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
                  error
                  required
                />
              </TextFieldLabel>

              <TextFieldLabel title="Descrição da vaga" margin>
                <TextFieldLabel.Field
                  rows={6}
                  maxRows={6}
                  name="description"
                  size="small"
                  fullWidth
                  multiline
                  error
                  required
                />
              </TextFieldLabel>

              <TextFieldLabel title="Responsabilidades" margin>
                <TextFieldLabel.Field
                  rows={6}
                  maxRows={6}
                  name="responsabilits"
                  size="small"
                  fullWidth
                  multiline
                  error
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

        <Grid item xs={12} md={4} xl={6}>
          <TypographyForCardBox ml={10} variant="h5" color={"#000"}>
            Postagens Recentes
          </TypographyForCardBox>

          <Box
            width={"288px"}
            height={"288px"}
            sx={{ border: "1px dashed gray", borderRadius: 4 }}
            ml={10}
          ></Box>
          <Box
            width={"288px"}
            height={"288px"}
            sx={{ border: "1px dashed gray", borderRadius: 4 }}
            ml={10}
          ></Box>
        </Grid>
      </Grid>
    </PageContainerComponent>
  );
};

export default UploadJob;
