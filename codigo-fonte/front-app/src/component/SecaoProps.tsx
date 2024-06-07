import React from "react";
import { Box, Grid, Typography, styled } from "@mui/material";

import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import JobCard from "./JobCard";
import { fakeData } from "../services/dadosfake";

const TypographyModel = styled(Typography)({
  fontFamily: "red-hat-display",
});

type SecaoProps = {
  clinica: {
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

const AboutSection = ({ clinica: clinica }: SecaoProps) => {
  return (
    <Box>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={3} md={3}>
          <Box sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            padding: "10px 10px"
          }}>
            <Box display={"flex"} gap={1}>
              <CallOutlinedIcon />
              <TypographyModel>{clinica?.contact}</TypographyModel>
            </Box>

            <Box display={"flex"} gap={1}>
              <WorkOutlineOutlinedIcon />
              <TypographyModel>{clinica?.job}</TypographyModel>
            </Box>
          </Box>

        </Grid >
        <Grid item xs={12} sm={6} md={9}>
          <Box
            sx={{
              padding: "10px 10px",
            }}
            border={"1px solid #E1E8ED"}
            borderRadius={"10px"}
          >
            <TypographyModel fontSize={"16px"} fontWeight={800}>
              Sobre há clínica
            </TypographyModel>
            <TypographyModel
              color={"#ADB5BD"}
              fontSize={"14px"}
              textAlign={"justify"}

              sx={{
                minHeight: { xs: "", sm: "200px" }
              }}
            >
              {clinica?.about}
            </TypographyModel>
          </Box>


          <Box >
            <TypographyModel sx={{
              padding: "20px 0px",
            }} fontSize={"16px"} fontWeight={800}>
              Vagas recentes dessa clinica
            </TypographyModel>


            <Box sx={{ padding: "0px" }}>
              <Box sx={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "20px" 
              }}>
                <Box sx={{ padding: "10px 0px" }}>
                  <JobCard job={fakeData[0]} />
                </Box>
                <Box sx={{ padding: "10px 0px" }}>
                  <JobCard job={fakeData[1]} />
                </Box>
              </Box>
              <Box sx={{
                display: "flex",
                justifyContent: "space-between"
              }}>
                <Box sx={{ padding: "10px 0px" }}>
                  <JobCard job={fakeData[2]} />
                </Box>
                <Box sx={{ padding: "10px 0px" }}>
                  <JobCard job={fakeData[3]} />
                </Box>
                
              </Box>
            </Box>



           

           



          </Box>




        </Grid>




      </Grid>


    </Box>
  );
};

export default AboutSection;