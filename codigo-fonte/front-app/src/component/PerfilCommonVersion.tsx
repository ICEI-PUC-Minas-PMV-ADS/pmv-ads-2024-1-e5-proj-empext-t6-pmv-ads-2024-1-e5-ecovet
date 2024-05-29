import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

import AboutSection from "./AboutSection";
import MoreProfessionalsBottonList from "./MoreProfessionalsButtonList";

type PerfilCommonVersionProps = {
  professional: {
    id: string;
    name: string;
    email: string;
    avatar: string;
    about: string;
    experience: string;
    contact: string;
    job: string;
  };
};

const BoxAvatar = styled(Box)({
  width: "100px",
  height: "100px",
  borderRadius: "50%",
  border: "5px solid white",
  position: "absolute",
  bottom: "-75px",
  left: "20px",
});

const TypographyModel = styled(Typography)({
  fontFamily: "red-hat-display",
});

const PerfilCommonVersion = ({ professional }: PerfilCommonVersionProps) => {
  return (
    <Box>
      <Box
        bgcolor={"#172554"}
        height={"150px"}
        borderRadius={"10px"}
        position={"relative"}
        marginBottom={"100px"}
        sx={{
          boxShadow: "0px 3px 15px rgba(34, 35, 58, 0.5)",
        }}
      >
        <BoxAvatar>
          <Box display={"flex"} gap={2}>
            <img
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
              }}
              src={professional.avatar}
              alt="perfil"
              loading="lazy"
            />
            <Box marginTop={4} display={"flex"} flexDirection={"column"}>
              <TypographyModel fontSize={"20px"} fontWeight={800}>
                {professional.name}
              </TypographyModel>
              <TypographyModel fontSize={"14px"} color={"#ADB5BD"}>
                {professional.email}
              </TypographyModel>
            </Box>
          </Box>
        </BoxAvatar>
      </Box>
      <AboutSection professional={professional} />

      <Box padding={"0 100px"} marginTop={"200px"}>
        <MoreProfessionalsBottonList />
      </Box>
    </Box>
  );
};

export default PerfilCommonVersion;
