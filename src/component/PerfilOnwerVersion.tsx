import React from "react";
import { Box, Typography, styled } from "@mui/material";

import TabMenu from "./TabMenu";
import AboutSection from "./AboutSection";
import CheckedJobsList from "./CheckedJobsList";
import MoreProfessionalsBottonList from "./MoreProfessionalsButtonList";

const BoxAvatar = styled(Box)({
  width: "100px",
  height: "100px",
  borderRadius: "50%",
  border: "2px solid white",
});

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ padding: "30px 0" }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const TypographyModel = styled(Typography)({
  fontFamily: "red-hat-display",
});

type PerfilOnwerVersionProps = {
  professional: {
    id: any;
    name: any;
    email: any;
    avatar: any;
    about: any;
    experience: any;
    contact: any;
    job: any;
    localizacao: any
  } | null;
};

const PerfilOnwerVersion = ({ professional }: PerfilOnwerVersionProps) => {
  const [tabIndex, setTabIndex] = React.useState(0);
  return (
    <Box>
      <Box>
        <Box
          bgcolor={"#172554"}
          borderRadius={"10px 10px 0 0"}
          sx={{
            height: { xs: "250px", sm: "150px" },
            padding: "10px 40px",
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: "center", sm: "space-between" },
            position: "relative",
            boxShadow: "0px 3px 15px rgba(34, 35, 58, 0.5)",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: {
                xs: "space-evenly",
                sm: "space-between",
              },
              alignItems: "center",
              gap: 3,
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <BoxAvatar>
              <img
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                }}
                src={professional?.avatar}
                alt="perfil"
              />
            </BoxAvatar>

            <Box>
              <TypographyModel
                fontSize={"25px"}
                fontWeight={600}
                color={"white"}
              >
                {professional?.name}
              </TypographyModel>
              <TypographyModel
                fontSize={"13px"}
                color={"white"}
                textAlign={"center"}
                marginTop={-1}
              >
                {professional?.email}
              </TypographyModel>
            </Box>
          </Box>
        </Box>

        <Box>
          <TabMenu tabIndex={tabIndex} setTabIndex={setTabIndex} />
          <CustomTabPanel value={tabIndex} index={0}>
            <AboutSection professional={professional} />
          </CustomTabPanel>

          <CustomTabPanel value={tabIndex} index={1}>
            <CheckedJobsList />
          </CustomTabPanel>
        </Box>


      {/* SECCTION DE BAIXO QUE MOSTRA MAIS VETERINÁRIOS, DISPOSITÍVEIS PEQUENOS */}
        {/* <Box padding={"0 100px"} marginTop={"200px"}>
          <MoreProfessionalsBottonList />
        </Box> */}
      </Box>
    </Box>
  );
};

export default PerfilOnwerVersion;
