import React from "react";
import { Box, Grid, Typography, styled } from "@mui/material";

import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';

const TypographyModel = styled(Typography)({
  fontFamily: "red-hat-display",
});

type AboutSectionProps = {
  professional: {
    id: string;
    name: string;
    email: string;
    avatar: string;
    contact: string;
    about: string;
    experience: string;
    job: string
  } | null;
};

const AboutSection = ({ professional }: AboutSectionProps) => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={3} md={3}>
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
                minHeight: {xs: "", sm: "200px"}
              }}
            >
              {professional?.about}
            </TypographyModel>
          </Box>
        </Grid>

        <Grid item xs={12} sm={9} md={9}>
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
        </Grid>
      </Grid>

      <Box sx={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        padding: "10px 10px"
      }}>
        <Box display={"flex"}gap={1}>
          <CallOutlinedIcon />
          <TypographyModel>{professional?.contact}</TypographyModel>
        </Box>
        
        <Box display={"flex"}gap={1}>
          <WorkOutlineOutlinedIcon />
          <TypographyModel>{professional?.job}</TypographyModel>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutSection;
