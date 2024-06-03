import React from "react";
import { Box, Grid, Typography, styled } from "@mui/material";

import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const TypographyModel = styled(Typography)({
  fontFamily: "red-hat-display",
});

type AboutSectionProps = {
  professional: {
    id: any;
    name: any;
    email: any;
    avatar: any;
    contact: any;
    about: any;
    experience: any;
    job: any,
    localizacao: any
  } | null;
};

const AboutSection = ({ professional }: AboutSectionProps) => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12}>
          <Box
            sx={{
              padding: "10px 10px",
            }}
            border={"1px solid #E1E8ED"}
            borderRadius={"10px"}
          >
            <TypographyModel fontSize={"16px"} fontWeight={800}>
              Sobre
            </TypographyModel>
            <TypographyModel
              color={"#ADB5BD"}
              fontSize={"14px"}
              textAlign={"justify"}
    
              sx={{
                minHeight: {xs: "", sm: "150px"}
              }}
            >
              {professional?.about}
            </TypographyModel>
          </Box>
        </Grid>

              {/* PARTE EXPERIÊNCIA */}
        {/* <Grid item xs={12} sm={9} md={9}>
          <Box
            sx={{
              padding: {xs: "10px 10px", sm : "10px 30px"}
            }}
            border={"1px solid #E1E8ED"}
            borderRadius={"10px"}
          >
            <TypographyModel
              minHeight={"30px"}
              fontSize={"16px"}
              fontWeight={800}
            >
              Experiência
            </TypographyModel>
            <TypographyModel
              color={"#ADB5BD"}
              fontSize={"14px"}
              textAlign={"justify"}
    
              sx={{
                minHeight: {xs: "", sm: "200px"}
              }}
            >
              {professional?.experience}
            </TypographyModel>
          </Box>
        </Grid> */}
      </Grid>

      <Box sx={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        padding: "10px 10px"
      }}>
         <Box display={"flex"} gap={1} flexDirection={"column"}>
          <Box display={"flex"} gap={1}>
            <CallOutlinedIcon />
            <TypographyModel>{professional?.contact}</TypographyModel>
          </Box>
          <Box display={"flex"} gap={1}>
            <WorkOutlineOutlinedIcon />
            <TypographyModel>{professional?.job}</TypographyModel>
          </Box>

          <Box display={"flex"} gap={1}>
            <LocationOnIcon />
            <TypographyModel>{professional?.localizacao}</TypographyModel>
          </Box>
        </Box>
    
      </Box>
    </Box>
  );
};

export default AboutSection;
