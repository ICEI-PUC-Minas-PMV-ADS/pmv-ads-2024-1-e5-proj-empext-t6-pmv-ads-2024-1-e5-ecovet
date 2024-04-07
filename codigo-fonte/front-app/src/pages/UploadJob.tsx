import { useEffect } from "react";
import PageContainerComponent from "../component/PageContainer";
import type { AppDispatch, RootState } from "../reducers/store";
import { useSelector, useDispatch } from "react-redux";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { setDialog, setDialogIdle } from "../reducers/dialogReducer";
import { title } from "process";
import DialogComponent from "../component/Dialog";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Box, styled } from "@mui/material";
import { Input } from "@mui/material";

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
  padding: "25px",
  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
  borderRadius: '10px'
});

const InputText = ({
  title,
  placeholder,
  margin,
  name,
}: {
  title: string;
  placeholder: string;
  name: string;
  margin?: boolean;
}) => {
  return (
    <>
      <TyphographyLabel variant="h6" mb={1} mt={margin ? "35px" : 2}>
        {title}
      </TyphographyLabel>
      <TextField placeholder={placeholder} fullWidth size="small" name={name} required/>
    </>
  );
};

const UploadJob = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <PageContainerComponent
      title=""
      style={{ marginLeft: isMobile ? 60 : 3000 }}
    >
      <Grid container spacing={3} mt={"15px"}>
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
            <form>
              <InputText
                title="Título da vaga"
                placeholder="Título"
                name="title"
              />

              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <InputText
                    title=" Tipo da vaga"
                    placeholder="tipo da vaga"
                    margin
                    name="type"
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <InputText
                    title=" Valor"
                    placeholder="Valor"
                    margin
                    name="value"
                  />
                </Grid>
              </Grid>

              <InputText
                title="Experência"
                placeholder="Experência"
                margin
                name="experience"
              />

              <TyphographyLabel variant="h6" mb={1} mt={"35px"}>
                Descrição da vaga
              </TyphographyLabel>
              <TextField rows={6} multiline maxRows={6} fullWidth name="description"/>

              <TyphographyLabel variant="h6" mb={1} mt={"35px"}>
                Responsabilidades
              </TyphographyLabel>
              <TextField multiline rows={6} maxRows={6} fullWidth name="responsabilits"/>

              <Button
              sx={{
                marginTop: '35px'
                ,padding: "8px 30px"
                
              }}
              variant="contained">Criar</Button>
            </form>
          </FormBox>
        </Grid>

        <Grid item xs={12} md={4} xl={6}>
          <TypographyForCardBox   ml={10} variant="h5" color={"#000"}>
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
