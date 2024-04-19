import React, { useEffect, useState } from "react";
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
      <TyphographyLabel variant="h6" mb={"1px"} mt={"15px"}>
        {title}
      </TyphographyLabel>
      {children}
    </>
  );
};

TextFieldLabel.Field = TextField;

const style1 = {
  backgroundColor: "#1D4FD8",
  opacity: "60%",
  textTransform: "none",
  color: "white",
  fontFamily: "red-hat-display",
};

const style2 = {
  textTransform: "none",
  color: "#1E3A8A",
  fontFamily: "red-hat-display",
  borderColor: "#60A5FA",
};

interface FormValues {
  email: string | null;
  companyName?: string | null;
  address: string | null;
  phone: string | null;
  perfil: string | null;
  password: string | null;
  confirmPass: string | null;
  name?: string | null;
  especiality?: string | null;
  disponibility?: string | null;
}

const initialValues = {
  email: "",
  companyName: "",
  address: "",
  phone: "",
  perfil: "",
  password: "",
  confirmPass: "",
  name: "",
  especiality: "",
  disponibility: "",
};

const LogUpCompany = () => {
  const [showPassword, setShowPassword] = React.useState<Boolean>(false);
  const [isClinic, setIsClinic] = useState<Boolean>(false);
  const [checkPassword, setCheckPassword] = useState<Boolean>(false);
  const [formValue, setFormValue] = useState<FormValues>(initialValues);

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sendForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    if (isClinic) {
      console.log("clinic");

    } else {
      console.log("professional");
    }

    // if(formValue.password !== formValue.confirmPass) return

    console.log(formValue);
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  useEffect(() => {
    if(formValue.password !== formValue.confirmPass || formValue.confirmPass === "" || formValue.password === ""){
      setCheckPassword(true)
    } else {
      setCheckPassword(false)
    }
  }, [
    formValue.confirmPass, formValue.password
  ])

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
              <Button
                onClick={() => {setIsClinic(true); setFormValue(initialValues)}}
                fullWidth
                type="button"
                variant={isClinic ? "contained" : "outlined"}
                sx={isClinic ? style1 : style2}
              >
                Clínica
              </Button>
            </Grid>

            <Grid item xs={12} md={6}>
              <Button
                onClick={() => {setIsClinic(false); setFormValue(initialValues)}}
                fullWidth
                type="button"
                variant={!isClinic ? "contained" : "outlined"}
                sx={isClinic ? style2 : style1}
              >
                Profissional
              </Button>
            </Grid>
          </Grid>

          {isClinic ? (
            <TextFieldLabel title="Nome de empresa">
              <TextFieldLabel.Field
                placeholder="nome de empresa"
                name="companyName"
                size="small"
                fullWidth
                type="text"
                value={formValue.companyName}
                onChange={handleChange}
                required
              />
            </TextFieldLabel>
          ) : (
            <TextFieldLabel title="Nome ">
              <TextFieldLabel.Field
                placeholder="nome"
                name="name"
                size="small"
                fullWidth
                required
                onChange={handleChange}
                value={formValue.name}
                type="text"
              />
            </TextFieldLabel>
          )}

          <TextFieldLabel title="Endereço de e-mail">
            <TextFieldLabel.Field
              placeholder="email@example.com"
              name="email"
              size="small"
              type="email"
              value={formValue.email}
              onChange={handleChange}
              fullWidth
              required
            />
          </TextFieldLabel>

          <TextFieldLabel title="Endereço">
            <TextFieldLabel.Field
              placeholder="Endereço"
              name="address"
              size="small"
              type="text"
              value={formValue.address}
              onChange={handleChange}
              fullWidth
              required
            />
          </TextFieldLabel>

          <TextFieldLabel title="Telefone">
            <TextFieldLabel.Field
              placeholder="Telefone"
              name="phone"
              size="small"
              type="tel"
              value={formValue.phone}
              onChange={handleChange}
              required
            />
          </TextFieldLabel>

          {isClinic && (
            <TextFieldLabel title="Sobre a clínica" margin>
              <TextFieldLabel.Field
                rows={6}
                name="perfil"
                size="small"
                fullWidth
                multiline
                value={formValue.perfil}
                onChange={handleChange}
                required
              />
            </TextFieldLabel>
          )}

          {!isClinic && (
            <>
              <TextFieldLabel title="Especialidade">
                <TextFieldLabel.Field
                  placeholder="Especialidade"
                  name="especiality"
                  size="small"
                  type="text"
                  value={formValue.especiality}
                  onChange={handleChange}
                  required
                  fullWidth
                />
              </TextFieldLabel>

              <TextFieldLabel title="Disponibilidade">
                <TextFieldLabel.Field
                  placeholder="disponibilidade"
                  name="disponibility"
                  size="small"
                  type="text"
                  value={formValue.disponibility}
                  onChange={handleChange}
                  required
                  fullWidth
                />
              </TextFieldLabel>
            </>
          )}

          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextFieldLabel title="Password" margin>
                <TextFieldLabel.Field
                  placeholder="Password"
                  name="password"
                  size="small"
                  fullWidth
                  required
                  value={formValue.password}
                  onChange={handleChange}
                  type={showPassword ? "text" : "password"}
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
                  name="confirmPass"
                  size="small"
                  fullWidth
                  required
                  value={formValue.confirmPass}
                  onChange={handleChange}
                  type={showPassword ? "text" : "password"}
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
              marginTop: "25px",
              padding: "8px 32px",
              fontWeight: 500,
              textTransform: "none",
            
            }}
            disabled={checkPassword ? true : false}
            type="submit"
            variant="contained"
          >
            Criar
          </Button>
        </form>

        <Grid mt={"16px"} item xs={12}>
          <Typography
            sx={{
              fontFamily: "red-hat-display",
              fontSize: "14px",
            }}
          >
            Já tem uma conta?
            <Link sx={{ color: "blue", marginLeft: "5px" }} href="/login">
              Clique aqui
            </Link>
          </Typography>
        </Grid>
      </DialogComponent>
    </PageContainerComponent>
  );
};

export default LogUpCompany;
