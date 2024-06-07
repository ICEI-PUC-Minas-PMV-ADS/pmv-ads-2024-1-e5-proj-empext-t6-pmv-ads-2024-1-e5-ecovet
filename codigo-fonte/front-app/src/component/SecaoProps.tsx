import React, { useEffect, useState } from "react";
import { Box, CircularProgress, Grid, Typography, styled } from "@mui/material";

import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import JobCard from "./JobCard";
import { fakeData } from "../services/dadosfake";

const TypographyModel = styled(Typography)({
  fontFamily: "red-hat-display",
});

type Secao = {
  clinica: {
    id: string;
    name: string;
    email: string;
    avatar: string;
    contact: string;
    about: string;
    experience: string;
    job: string;
  } | null;
};

const SecaoProps = ({ clinica }: Secao) => {
  const [clinicJobs, setClinicJobs] = useState<any[] | []>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const getClinicJobs = async () => {
      const responseDAta = fakeData;
      setClinicJobs(responseDAta);
      setLoading(false);
    };

    getClinicJobs();
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={3} md={3}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            padding: "10px 10px",
            border: "1px solid #E1E8ED",
            minHeight: { xs: "", sm: "200px" },
            borderRadius: "10px",
          }}
        >
          <Box display={"flex"} gap={1}>
            <CallOutlinedIcon />
            <TypographyModel>{clinica?.contact}</TypographyModel>
          </Box>

          <Box display={"flex"} gap={1}>
            <WorkOutlineOutlinedIcon />
            <TypographyModel>{clinica?.job}</TypographyModel>
          </Box>
        </Box>
      </Grid>

      <Grid item xs={12} sm={9} md={9}>
        <Box
          sx={{
            padding: "10px 10px",
            minHeight: { xs: "", sm: "200px" },
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
            sx={{}}
          >
            {clinica?.about}
          </TypographyModel>
        </Box>

        <Box
          sx={{
            marginTop: 5,
          }}
        >
          <TypographyModel sx={{}} fontSize={"16px"} fontWeight={800}>
            Vagas recentes dessa clinica
          </TypographyModel>

          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              flexWrap: "wrap",
              alignItems: "center",
              gap: 3,
              padding: "10px 0",
            }}
          >
            {loading ? (
              <Box
                width={"100%"}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CircularProgress />
              </Box>
            ) : clinicJobs && clinicJobs.length ? (
              clinicJobs
                .slice(0, 3)
                .map((item, index) => <JobCard job={item} key={index} />)
            ) : (
              <TypographyModel> Ainda não há vagas criadas 😓 </TypographyModel>
            )}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SecaoProps;
