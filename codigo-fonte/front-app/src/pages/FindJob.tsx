import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AutoAwesomeSharpIcon from "@mui/icons-material/AutoAwesomeSharp";
import TuneIcon from "@mui/icons-material/Tune";
import {
  Box,
  Checkbox,
  CircularProgress,
  Container,
  CssBaseline,
  Fab,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  Stack,
  Tooltip,
  styled,
  useMediaQuery,
} from "@mui/material";

import ListBox from "../component/ListBox";
import JobCard from "../component/JobCard";
import FilterDrawer from "../component/FilterDrawer";

const CheckboxLabel = ({
  title,
  experienceFilter,
}: {
  title: string;
  experienceFilter?: boolean;
}) => {
  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Box gap={"8px"} display={"flex"}>
        {!experienceFilter ? (
          <WorkOutlineIcon fontSize="small" />
        ) : (
          <AutoAwesomeSharpIcon fontSize="small" />
        )}
        <Typography
          fontFamily={"red-hat-display"}
          fontSize={"16px"}
          fontWeight={800}
        >
          {title}
        </Typography>
      </Box>

      <ExpandMoreIcon fontSize="small" />
    </Box>
  );
};

const CssFormControlLabel = styled(FormControlLabel)({
  "& .MuiTypography-root": {
    fontFamily: "red-hat-display",
  },
});

const TypographyMold = styled(Typography)({
  fontFamily: "red-hat-display",
});

type FilterFindjobProps = {
  setState: React.Dispatch<any>;
  state: {
    veterinario: boolean;
    auxiliar: boolean;
    anestesista: boolean;
    cirurgiao: boolean;
  };
  setExperience: React.Dispatch<any>;
  experience: {
    under1year: boolean;
    between1to2years: boolean;
    between2to6years: boolean;
    moreThan6years: boolean;
  };
};

function FilterFindjob({
  state,
  setState,
  experience,
  setExperience,
}: FilterFindjobProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const handlechangeExpirience = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setExperience({
      ...experience,
      [event.target.name]: event.target.checked,
    });
  };

  const { between1to2years, moreThan6years, between2to6years, under1year } =
    experience;
  const error =
    [between1to2years, moreThan6years, between2to6years, under1year].filter(
      (v) => v
    ).length > 1;
  return (
    <>
      <Typography
        marginBottom={"8px"}
        color={"#1e293b"}
        fontFamily={"red-hat-display"}
        fontSize={"18px"}
        fontWeight={600}
      >
        Filtros de busca
      </Typography>

      <CheckboxLabel title="Job Types" />

      <FormControl
        sx={{ marginBottom: "40px" }}
        component="fieldset"
        variant="standard"
      >
        <FormGroup
          sx={{
            "& .MuiFormControlLabel-root": {
              marginBottom: "-8px",
            },
          }}
        >
          <CssFormControlLabel
            control={
              <Checkbox
                checked={state.veterinario}
                onChange={handleChange}
                name="veterinario"
              />
            }
            label="Veterinário Geral"
          />
          <CssFormControlLabel
            control={
              <Checkbox
                checked={state.auxiliar}
                onChange={handleChange}
                name="auxiliar"
              />
            }
            label="Auxiliar Cirúrgico"
          />
          <CssFormControlLabel
            control={
              <Checkbox
                checked={state.anestesista}
                onChange={handleChange}
                name="anestesista"
              />
            }
            label="Técnico anestesista"
          />

          <CssFormControlLabel
            control={
              <Checkbox
                checked={state.cirurgiao}
                onChange={handleChange}
                name="cirurgiao"
              />
            }
            label="Cirurgião"
          />
        </FormGroup>
      </FormControl>

      <CheckboxLabel title="Experiência" experienceFilter />
      <FormControl component="fieldset" variant="standard" error={error}>
        <FormGroup
          sx={{
            "& .MuiFormControlLabel-root": {
              marginBottom: "-12px",
            },
          }}
        >
          <CssFormControlLabel
            control={
              <Checkbox
                checked={experience.under1year}
                onChange={handlechangeExpirience}
                name="under1year"
              />
            }
            label="Menos de 1 ano"
          />
          <CssFormControlLabel
            control={
              <Checkbox
                checked={experience.between1to2years}
                onChange={handlechangeExpirience}
                name="between1to2years"
              />
            }
            label="Entre 1 à 2 anos"
          />
          <CssFormControlLabel
            control={
              <Checkbox
                checked={experience.between2to6years}
                onChange={handlechangeExpirience}
                name="between2to6years"
              />
            }
            label="Entre 2 à 6 anos"
          />

          <CssFormControlLabel
            control={
              <Checkbox
                checked={experience.moreThan6years}
                onChange={handlechangeExpirience}
                name="moreThan6years"
              />
            }
            label="Mais de 6 anos"
          />
          {error && (
            <FormHelperText>
              Você deve selecionar apenas uma opção.
            </FormHelperText>
          )}
        </FormGroup>
      </FormControl>
    </>
  );
}

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
  const [isLoading, setEsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [sort, setSort] = useState("Novo");
  const [state, setState] = React.useState({
    veterinario: false,
    auxiliar: false,
    anestesista: false,
    cirurgiao: false
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

  return (
    <React.Fragment>
      <CssBaseline />

      <Container maxWidth={"xl"}>
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
                  fakeData && fakeData.length ? (
                    fakeData.map((item, index) => (
                      <JobCard job={item} key={index} />
                    ))
                  ) : (
                    <TypographyMold sx={{ flex: 1, textAlign: "center" }}>
                      No data yet 😓{" "}
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
            </Grid>
          </Box>
        </Stack>
      </Container>
    </React.Fragment>
  );
};

export default FindJob;
