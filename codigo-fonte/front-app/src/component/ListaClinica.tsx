import React, { useEffect, useState } from "react";
import { Box, Button, Typography, styled, useMediaQuery } from "@mui/material";
import { usersData } from "../services/dadosfake";
import { useNavigate } from "react-router-dom";

const TypographyModel = styled(Typography)({
  fontFamily: "red-hat-display",
});

const BoxAvatar = styled(Box)({
  width: "78px",
  height: "78px",
  borderRadius: "50%",
});

const ListaClinica = () => {
  const [usersList, setUsersList] = useState<any[] | null>(null);

  const isTooSmallScrell = useMediaQuery("(max-width: 1000px)");

  useEffect(() => {
    const getListaClinica = async () => {
      try {
        const response = usersData;
        setUsersList(response.slice(0, 6));
      } catch (error) {
        console.log(error);
      }
    };

    getListaClinica();
  }, []);

  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: isTooSmallScrell ? "none" : "block",
      }}
      width={"300px"}
      >

      <TypographyModel marginLeft={5}>Mais</TypographyModel>

      <Box
        display={"flex"}
        flexWrap={"wrap"}
        gap={5}
        alignItems={"center"}
        justifyContent={"center"}
        paddingY={"50px"}
      >
        {usersList && usersList.length ? (
          usersList.map((item, index) => (
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              flexDirection={"column"}
              key={index}
            >
              <BoxAvatar>
                <img
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                  }}
                  src={"/img/avatar.png "}
                  alt="vaga"
                  loading="lazy"
                />
              </BoxAvatar>

              <TypographyModel fontSize={"14px"} fontWeight={800}>
                {item.name}
              </TypographyModel>

              <TypographyModel fontSize={"13px"} fontWeight={100}>
                {item.role === 0 ? item.job : "clinica"}
              </TypographyModel>

              <Button
                variant="contained"
                onClick={() => navigate(`/perfilpublicclinica/${item.id}`)}
                sx={{
                  textTransform: "none",
                  backgroundColor: "#172554",
                  marginTop: 1,
                }}
              >
                Ver Clínica
              </Button>
            </Box>
          ))
        ) : (
          <TypographyModel fontWeight={100}>
            Não há informações !!!{" "}
          </TypographyModel>
        )}
      </Box>
    </Box>
  );
};

export default ListaClinica;