import React, { useEffect,useState } from "react";
import PageContainerComponent from "../component/PageContainer";
import useMediaQuery from "@mui/material/useMediaQuery";
import DialogComponent from "../component/Dialog";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { setDialog,setDialogIdle } from "../reducers/dialogReducer";
import { useSelector, useDispatch } from "react-redux";
import { styled, useTheme } from "@mui/material/styles";
import type { AppDispatch, RootState } from "../reducers/store";
import CadastroProfissionalPage from "./CadastroProfissional";
import { Link } from 'react-router-dom';
import CadastroClinicaPage from "./CadastroClinica";

const TyphographyLabel = styled(Typography)({
  fontSize: "14px",
  color: "#6B7280",
  fontFamily: "red-hat-display",
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
      <TyphographyLabel variant="h6" mb={1} mt={margin ? "35px" : 2}>
        {title}
      </TyphographyLabel>
      {children}
    </>
  );
};

TextFieldLabel.Field = TextField;

const LogUpCompany = () => {
  const isDialogOpen = useSelector((state: RootState) => state.dialog.isOpen);
  const dispatch = useDispatch<AppDispatch>();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [tipoContaCriar, setTipoContaCriar] =  useState<String>('Clinica')

  useEffect(() => {
    dispatch(
      setDialog({
        title: "Criar Conta",
        action: null,
      })
    );
  }, []);
  return (
    <PageContainerComponent
      title=""
      style={{ marginLeft: isMobile ? 60 : 3000 }}
    >
      <DialogComponent
        open={isDialogOpen}
        handleClose={() => dispatch(setDialogIdle())}
      >
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Button fullWidth style={{textWrap:'nowrap'}} type="button" variant="outlined" onClick={() => setTipoContaCriar('Clinica')}>
                Clínica
              </Button>
            </Grid>

            <Grid item xs={12} md={6}>
              <Button fullWidth style={{textWrap:'nowrap'}} type="button" variant="contained" onClick={() => setTipoContaCriar('Veterinario')}>
                Profissional Veterinário
              </Button>
            </Grid>
          </Grid>


        {tipoContaCriar == 'Clinica' ?
          (
             <CadastroClinicaPage></CadastroClinicaPage> 
          )
          :
          (
            <CadastroProfissionalPage></CadastroProfissionalPage>

          )

        }


        <Grid mt={5} item xs={12}>
            <Typography>Já possui conta?<Link to="/login"> Clique aqui</Link></Typography>
        </Grid>
      </DialogComponent>
    </PageContainerComponent>
  );
};

export default LogUpCompany;
