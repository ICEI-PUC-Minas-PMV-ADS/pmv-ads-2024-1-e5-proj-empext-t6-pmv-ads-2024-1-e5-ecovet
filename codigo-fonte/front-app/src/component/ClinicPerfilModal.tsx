import React, { useState, useEffect } from 'react';
import Button from "@mui/material/Button";
import {
  Alert,
  Box,
  Grid,
  Modal,
  Typography,
  TextField,
  styled,
} from "@mui/material";
import { get, put, del } from '../services/agent';
import { useNavigate } from "react-router-dom";
import { logout } from '../reducers/userReducer';
import type { AppDispatch, RootState } from '../reducers/store'
import { useSelector, useDispatch } from 'react-redux'

var ls = require('local-storage');

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
  Field: React.FC<any>;
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

interface ClinicaVeterinariaModel {
  IDClinica: number;
  Nome: string;
  Endereco: string;
  Senha: string;
  Telefone: string;
  Email: string;
  DescricaoDosServicos: string;
}

const initialValues: ClinicaVeterinariaModel = {
  IDClinica: 0,
  Nome: "",
  Endereco: "",
  Senha: "",
  Telefone: "",
  Email: "",
  DescricaoDosServicos: "",
};

const ClinicPerfilModal: React.FC<Props> = ({ open, setOpen }) => {
  const [formValues, setFormValues] = useState<ClinicaVeterinariaModel>(initialValues);
  const [alert, setAlert] = useState<boolean>(false);
  const [userLogado, setUserLogado] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);
  const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>()


  useEffect(() => {
    const userFromStorage = ls.get('user');
    setUserLogado(userFromStorage);
  }, []);

  useEffect(() => {
    if (open && userLogado) {
      getUser();
    }
  }, [open, userLogado]);

  const getUser = async () => {
    if (userLogado && userLogado.id) {
      setLoading(true);
      const response = await get(`ClinicaVeterinaria/obterClinicaVeterinariaPorId/${userLogado.id}`);
      if (response != null) {
        const clinicaData = {
          IDClinica: response.idClinica,
          Nome: response.nome,
          Endereco: response.endereco,
          Senha: response.senha,
          Telefone: response.telefone,
          Email: response.email,
          DescricaoDosServicos: response.descricaoDosServicos,
        };
        setFormValues(clinicaData);
        setLoading(false);
      } else {
        console.error('Erro ao obter dados da clínica');
        setLoading(false);
      }
    }
  };

  const sendForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await put(`ClinicaVeterinaria/atualizarClinicaVeterinaria/${formValues.IDClinica}`, formValues);
      if (response.status === 200) {
        setAlert(true);
        console.log('Clínica atualizada com sucesso:', response);
        navigate('/clinica')
      }
    } catch (error) {
      console.error('Erro ao atualizar a clínica:', error);
    }
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDeleteAccount = async () => {
    try {
      const response = await del(`ClinicaVeterinaria/excluirClinicaVeterinaria/${formValues.IDClinica}`);
      if (response.status === 200) {
        setAlert(true);
        setDeleteModalOpen(false);
        console.log('Conta deletada com sucesso:', response);
        dispatch(logout())
        navigate('/')
      }
    } catch (error) {
      console.error('Erro ao deletar a conta:', error);
    }
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
        {loading ? (
        <Typography>Carregando...</Typography>
      ) : (
        <form onSubmit={sendForm}>
          <TextFieldLabel title="Nome da clínica">
            <TextFieldLabel.Field
              placeholder="nome"
              name="Nome"
              size="small"
              fullWidth
              value={formValues.Nome}
              onChange={handleChange}
              required
            />
          </TextFieldLabel>

          <TextFieldLabel title="Endereço">
            <TextFieldLabel.Field
              placeholder="endereço"
              name="Endereco"
              size="small"
              fullWidth
              value={formValues.Endereco}
              onChange={handleChange}
              required
            />
          </TextFieldLabel>

          <Grid container spacing={1}>
            <Grid xs={12} md={6} xl={6} sm={6} item>
              <TextFieldLabel title="Telefone">
                <TextFieldLabel.Field
                  placeholder="telefone"
                  name="Telefone"
                  size="small"
                  fullWidth
                  value={formValues.Telefone}
                  onChange={handleChange}
                  required
                  type="tel"
                />
              </TextFieldLabel>
            </Grid>

            <Grid xs={12} sm={6} md={6} xl={6} item>
              <TextFieldLabel title="Email">
                <TextFieldLabel.Field
                  placeholder="email"
                  name="Email"
                  size="small"
                  fullWidth
                  value={formValues.Email}
                  onChange={handleChange}
                  required
                  type="email"
                />
              </TextFieldLabel>
            </Grid>
          </Grid>

          <TextFieldLabel title="Descrição dos Serviços" margin>
            <TextFieldLabel.Field
              rows={6}
              name="DescricaoDosServicos"
              size="small"
              value={formValues.DescricaoDosServicos}
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
      )}
        {!loading && (
          <Button
          sx={{
            marginTop: "20px",
            padding: "8px 30px",
            backgroundColor: "red",
          }}
          variant="contained"
          onClick={() => setDeleteModalOpen(true)}
        >
          Deletar minha conta
        </Button>
        )}

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
          <TypographyMold fontSize={"18px"} id="delete-modal-title" variant="h6">
            Confirmar Deleção de Conta
          </TypographyMold>
          <TypographyMold id="delete-modal-description">
            Você tem certeza que deseja deletar sua conta? Esta ação não pode ser desfeita.
          </TypographyMold>
          <Button
            sx={{
              marginTop: "20px",
              padding: "8px 30px",
              backgroundColor: "red",
            }}
            variant="contained"
            onClick={handleDeleteAccount}
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
      </Box>
    </Modal>
  );
};

export default ClinicPerfilModal;
