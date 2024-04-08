import React, { useEffect } from "react";
import PageContainerComponent from "../component/PageContainer";
import useMediaQuery from "@mui/material/useMediaQuery";
import DialogComponent from "../component/Dialog";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { setDialog, setDialogIdle } from "../reducers/dialogReducer";
import { useSelector, useDispatch } from "react-redux";
import { styled, useTheme } from "@mui/material/styles";
import { IconButton, InputAdornment } from "@mui/material";
import type { AppDispatch, RootState } from "../reducers/store";

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

  useEffect(() => {
    dispatch(
      setDialog({
        title: "Criar Conta",
        action: null,
      })
    );
  }, []);

  const sendForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    const formValue = {
      email: data.get("email"),
      companyName: data.get("companyName"),
      addres: data.get("endereco"),
      phone: data.get("telephone"),
      description: data.get("description"),
      password: data.get("password"),
      ConfirmPass: data.get("ConfirmPass"),
    };

    console.log(formValue);
  };

  const [showPassword, setShowPassword] = React.useState<Boolean>(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <PageContainerComponent
      title=""
      style={{ marginLeft: isMobile ? 60 : 3000 }}
    >
      <DialogComponent
        open={isDialogOpen}
        handleClose={() => dispatch(setDialogIdle())}
      >
        <form onSubmit={sendForm}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Button fullWidth type="button" variant="contained">
                Clínica
              </Button>
            </Grid>

            <Grid item xs={12} md={6}>
              <Button fullWidth type="button" variant="contained">
                Profissional
              </Button>
            </Grid>
          </Grid>

          <TextFieldLabel title="Endereço de e-mail">
            <TextFieldLabel.Field
              placeholder="email@example.com"
              name="email"
              size="small"
              fullWidth
            />
          </TextFieldLabel>

          <TextFieldLabel title="Nome de empresa">
            <TextFieldLabel.Field
              placeholder="nome de empresa"
              name="companyName"
              size="small"
              fullWidth
            />
          </TextFieldLabel>

          <TextFieldLabel title="Endereço">
            <TextFieldLabel.Field
              placeholder="Endereço"
              name="endereco"
              size="small"
              fullWidth
            />
          </TextFieldLabel>

          <TextFieldLabel title="Telefone">
            <TextFieldLabel.Field
              placeholder="Telefone"
              name="telephone"
              size="small"
              fullWidth
            />
          </TextFieldLabel>

          <TextFieldLabel title="Descrição dos Serviços" margin>
                <TextFieldLabel.Field
                  rows={6}
                  maxRows={6}
                  name="description"
                  size="small"
                  fullWidth
                  multiline
                />
              </TextFieldLabel>

          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextFieldLabel title="Password" margin>
                <TextFieldLabel.Field
                  placeholder="Password"
                  name="password"
                  size="small"
                  fullWidth
                  type="password"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </TextFieldLabel>
            </Grid>

            <Grid item xs={12} md={6}>
              <TextFieldLabel title="Confirmar password" margin>
                <TextFieldLabel.Field
                  placeholder="Confirma password"
                  name="ConfirmPass"
                  size="small"
                  fullWidth
                  type="password"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </TextFieldLabel>
            </Grid>
          </Grid>

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

        <Grid mt={5} item xs={12}>
          <Typography>
            Não tem conta?
            <Link sx={{ color: "blue" }} href="#">
              Clique aqui
            </Link>
          </Typography>
        </Grid>
      </DialogComponent>
    </PageContainerComponent>
  );
};

export default LogUpCompany;
