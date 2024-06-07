import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";

const BoxAvatar = styled(Box)({
  width: "78px",
  height: "78px",
  borderRadius: "50%",
});

const TypographyModel = styled(Typography)({
  fontFamily: "red-hat-display",
});

const UserBox = ({
  nome,
  profissao,
  id,
}: {
  nome: string;
  profissao: number;
  id: number;
}) => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        width: "220px",
        height: "220px",
        borderRadius: "10px",
        border: "1px solid rgba(0, 0, 0, .06)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <BoxAvatar>
        <img
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
          }}
          src="/img/avatar.png"
          alt="perfil"
          loading="lazy"
        />
      </BoxAvatar>

      <TypographyModel fontSize={"14px"} fontWeight={600}>
        {nome}
      </TypographyModel>
      <TypographyModel fontSize={"13px"} fontWeight={100}>
        {profissao === 0 ? "Profissional" : "Clínica"}
      </TypographyModel>

      <Button
        variant="contained"
        sx={{
          textTransform: "none",
          backgroundColor: "#10D876",
          fontWeight: 600,
        }}
        onClick={() => navigate(`/professionalperfil/${id}`)}
      >
        Ver Perfil
      </Button>
    </Box>
  );
};
export default UserBox;
