import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TuneIcon from "@mui/icons-material/Tune";
import {
  Box,
  CircularProgress,
  Container,
  CssBaseline,
  Pagination,
  Stack,
  Tooltip,
  styled,
  useMediaQuery,
} from "@mui/material";
import { filtrarTrabalhos } from "../services/agent";

import ListBox from "../component/ListBox";
import JobCard from "../component/JobCard";
import FilterDrawer from "../component/FilterDrawer";
import FilterFindjob from "../component/FilterFindJob";

const TypographyMold = styled(Typography)({
  fontFamily: "red-hat-display",
});

const fakeData = [
  {
    id: "1",
    title: "Enfermeiro para cirurgia",
    location: "Belo Horizonte MG",
    value: "a combinar",
    type: "urgent",
    experience: "2 years",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
    responsibilities:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
    data: "a 1 segundo atrás",
  },
  {
    id: "2",
    title: "Enfermeiro para cirurgia",
    location: "Belo Horizonte MG",
    value: "a combinar",
    type: "urgent",
    experience: "2 years",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
    responsibilities:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
    data: "a 1 segundo atrás",
  },
];

const FindJob = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [jobLocation, setJobLocation] = useState("");
  const [data, setData] = useState<typeof fakeData>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalCount, setTotalCount] = useState(fakeData.length);
  const [currentPage, setCurrentPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [sort, setSort] = useState("Novo");
  const [state, setState] = React.useState({
    veterinario: false,
    auxiliar: false,
    anestesista: false,
    cirurgiao: false,
  });
  const [experience, setExperience] = useState({
    under1year: false,
    between1to2years: false,
    between2to6years: false,
    moreThan6years: false,
  });

  const sendSearch = () => {
    console.log("values", { searchQuery, jobLocation });
    if (searchQuery === "" || jobLocation === "") return;

    try {
    } catch (error) {
      console.log("error on shearcing: ", error);
    }
  };

  const smallScrell = useMediaQuery("(max-width: 900px)");

  useEffect(() => {
    if (!smallScrell) {
      setOpen(false);
    }
  }, [smallScrell]);

  useEffect(() => {
    setIsLoading(true);

    // função que filtra os resultados do back
    const fetchJobs = async () => {
      try {
        const response = await filtrarTrabalhos(state, experience);
        setData(response);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    fetchJobs();
  }, [state, experience]);

  const itemPerPage = 20;

  const startIndex = (currentPage - 1) * itemPerPage;
  const endIndex = Math.min(startIndex + itemPerPage, fakeData.length);
  const visibleData = data.slice(startIndex, endIndex);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };

  return (
    <React.Fragment>
      <CssBaseline />

      <Container className="container-flexgrow" maxWidth={"xl"}>
        <Stack
          direction={"row"}
          bgcolor={"#f7fdfd"}
          sx={{
            gap: { sm: "24px", md: "24px", xl: "40px" },
            padding: { sm: "24px 0px" },
          }}
        >
          <Box
            bgcolor={"white"}
            sx={{
              boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
              display: { xs: "none", md: "block" },
              flex: { md: 2, lg: 1 },
            }}
          >
            <FilterFindjob
              state={state}
              setState={setState}
              experience={experience}
              setExperience={setExperience}
            />
          </Box>

          <Box sx={{ flex: { md: 4, lg: 5 } }}>
            <Grid container>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                sx={{ padding: { xs: "20px", sm: "0px" } }}
              >
                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  marginBottom={"16px"}
                  alignItems={"center"}
                >
                  <TypographyMold
                    sx={{
                      fontSize: { xs: "14px", sm: "16px" },
                      display: { xs: "none", md: "block" },
                    }}
                  >
                    Mostrando{" "}
                    <span style={{ fontWeight: 600 }}>1.902 vagas</span>
                  </TypographyMold>

                  <Box sx={{ display: { xs: "block", md: "none" } }}>
                    <Tooltip onClick={() => setOpen(true)} title="filter">
                      <TuneIcon sx={{ opacity: 0.5, cursor: "pointer" }} />
                    </Tooltip>
                  </Box>

                  <FilterDrawer
                    open={open}
                    setOpen={setOpen}
                    state={state}
                    setState={setState}
                    experience={experience}
                    setExperience={setExperience}
                  />

                  <Box
                    display={"flex"}
                    sx={{
                      flexDirection: {
                        xs: "column",
                        sm: "row",
                      },
                      gap: { xs: "0", sm: "8px" },
                    }}
                    alignItems={"center"}
                  >
                    <TypographyMold
                      sx={{
                        fontSize: { sx: "14px", sm: "16px" },
                      }}
                    >
                      Mostrar por:{" "}
                    </TypographyMold>

                    <ListBox sort={sort} setSort={setSort} />
                  </Box>
                </Box>
              </Grid>

              <Grid item sx={{ display: { xs: "flex", md: "none" } }}>
                <TypographyMold
                  sx={{
                    fontSize: {
                      xs: "14px",
                      sm: "16px",
                      opacity: 0.5,
                      marginBottom: 10,
                    },
                  }}
                >
                  Mostrando <span style={{ fontWeight: 600 }}>1.902 vagas</span>
                </TypographyMold>
              </Grid>

              <Grid
                item
                flexWrap={"wrap"}
                display={"flex"}
                xs={12}
                sm={12}
                md={12}
                gap={"16px"}
              >
                {!isLoading ? (
                  visibleData && visibleData.length ? (
                    visibleData.map((item, index) => (
                      <JobCard job={item} key={index} />
                    ))
                  ) : (
                    <TypographyMold sx={{ flex: 1, textAlign: "center" }}>
                      No data 😓{" "}
                    </TypographyMold>
                  )
                ) : (
                  <Box
                    sx={{
                      marginTop: 20,
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <CircularProgress />
                  </Box>
                )}
              </Grid>

              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                padding={5}
              >
                {totalCount > 0 && totalCount > itemPerPage && (
                  <Pagination
                    page={currentPage}
                    onChange={handlePageChange}
                    count={Math.ceil(totalCount / itemPerPage)}
                    color="primary"
                  />
                )}
              </Grid>
            </Grid>
          </Box>
        </Stack>
      </Container>
    </React.Fragment>
  );
};

export default FindJob;
