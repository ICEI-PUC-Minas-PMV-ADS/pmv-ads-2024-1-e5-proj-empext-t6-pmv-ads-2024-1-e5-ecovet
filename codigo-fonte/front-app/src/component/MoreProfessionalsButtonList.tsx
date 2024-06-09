import React, { useEffect, useState } from "react";
import { Box, Button, Typography, styled, useMediaQuery } from "@mui/material";
import { usersData } from "../data";
import { useNavigate } from "react-router-dom";

const TypographyModel = styled(Typography)({
  fontFamily: "red-hat-display",
});

const MoreProfessionalsBottonList = () => {
  const [usersList, setUsersList] = useState<any[] | null>(null);

  const isTooSmallScrell = useMediaQuery("(max-width: 1000px)");

  useEffect(() => {
    const getProfessionalsList = async () => {
      try {
        const response = usersData;
        setUsersList(response.slice(0, 3));
      } catch (error) {
        console.log(error);
      }
    };

    getProfessionalsList();
  }, []);

  const navigate = useNavigate();

  return (
    <Box
      sx={{
        border: "1px solid #e1e8ed",
        padding: "30px 0px",
        display: isTooSmallScrell ? "flex" : "none",
        flexDirection: { xs: "column", sm: "row" },
      }}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-evenly"}
    >
      {usersList && usersList.length ? (
        usersList.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Box
              sx={{
                height: "80px",
                width: "80px",
                borderRadius: "10px",
                border: "2px solid #26ace2",
              }}
            >
              <img
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                }}
                src={item.avatar}
                alt="perfil"
                loading="lazy"
              />
            </Box>

            <TypographyModel fontSize={"14px"} fontWeight={800}>
              {item.name}
            </TypographyModel>

            <TypographyModel fontSize={"12px"} color={"#26ace2"}>
              {" "}
              {item.role === 0 ? item.job : "clinica"}
            </TypographyModel>

            <Button
              variant="contained"
              onClick={() => navigate(`/professionalperfil/${item.id}`)}
              sx={{
                textTransform: "none",
                backgroundColor: "#26ace2",
                marginTop: 1,
                borderRadius: "40px",
                marginBottom: { xs: "30px", sm: "0" },
              }}
              size="small"
            >
              Ver Perfil
            </Button>
          </Box>
        ))
      ) : (
        <TypographyModel fontWeight={100}>
          Ainda sem dados suficientes 😓{" "}
        </TypographyModel>
      )}
    </Box>
  );
};

export default MoreProfessionalsBottonList;
