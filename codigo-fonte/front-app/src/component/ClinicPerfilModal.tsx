import * as React from "react";
import Button from "@mui/material/Button";
import {
  Alert,
  Box,
  Grid,
  Modal,
  Stack,
  TextField,
  TextFieldProps,
  Typography,
  styled,
} from "@mui/material";

// FAKE DATA
const fakeUser = {
  id: 1,
  name: "John Dove",
  address: "California",
  email: "email@example.com",
  contact: "99 9999 9999",
  perfil:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
  jobs: [],
};

////////

const TypographyMold = styled(Typography)({
  fontFamily: "red-hat-display",
});

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
      <TyphographyLabel variant="h6" mt={margin ? "10px" : 2}>
        {title}
      </TyphographyLabel>
      {children}
    </>
  );
};

TextFieldLabel.Field = TextField;

type Props = {
  open: boolean;
  setOpen(bool: boolean): void;
};

const initialValues = {
  name: "",
  address: "",
  email: "",
  contact: "",
  perfil: "",
};

const ClinicPerfilModal = ({ open, setOpen }: Props) => {
  const [formValues, setFormValues] = React.useState(initialValues);
  const [alert, setAlert] = React.useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sendForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setAlert(true);
    console.log(formValues);
    setFormValues(initialValues);
  };

  return (
    <Modal
      open={open}
      onClose={() => {
        setOpen(false);
        setAlert(false);
      }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
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
        {alert && (
          <Alert
            severity="success"
            onClose={() => setAlert(false)}
            sx={{
              position: "absolute",
              top: "-80px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "100%",
            }}
          >
            Perfil editado com sucesso!
          </Alert>
        )}
        <TypographyMold fontSize={"18px"} id="modal-modal-title" variant="h6">
          Editar perfil da clínica
        </TypographyMold>

        <form onSubmit={sendForm}>
          <TextFieldLabel title="Nome da clínica">
            <TextFieldLabel.Field
              placeholder="nome"
              name="name"
              size="small"
              fullWidth
              value={formValues.name}
              onChange={handleChange}
              required
            />
          </TextFieldLabel>

          <TextFieldLabel title="Endereço">
            <TextFieldLabel.Field
              placeholder="endereço"
              name="address"
              size="small"
              fullWidth
              value={formValues.address}
              onChange={handleChange}
              required
            />
          </TextFieldLabel>

          <Grid container spacing={1}>
            <Grid xs={12} md={6} xl={6} sm={6} item>
              <TextFieldLabel title="Contato">
                <TextFieldLabel.Field
                  placeholder="contato"
                  name="contact"
                  size="small"
                  fullWidth
                  value={formValues.contact}
                  onChange={handleChange}
                  required
                  type="tel"
                />
              </TextFieldLabel>
            </Grid>

            <Grid xs={12} sm={6} md={6} xl={6} item>
              <TextFieldLabel title="Contato">
                <TextFieldLabel.Field
                  placeholder="contato"
                  name="contact"
                  size="small"
                  fullWidth
                  value={formValues.contact}
                  onChange={handleChange}
                  required
                  type="tel"
                />
              </TextFieldLabel>
            </Grid>
          </Grid>

          <TextFieldLabel title="Sobre a clínica" margin>
            <TextFieldLabel.Field
              rows={6}
              name="perfil"
              size="small"
              value={formValues.perfil}
              onChange={handleChange}
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
            Salvar
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default ClinicPerfilModal;
