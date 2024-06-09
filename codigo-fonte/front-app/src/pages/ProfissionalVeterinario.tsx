import React, { useEffect, useState } from "react";
import PageContainerComponent from "../component/PageContainer";
import type { AppDispatch, RootState } from "../reducers/store";
import { useSelector, useDispatch } from "react-redux";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { setDialog, setDialogIdle } from "../reducers/dialogReducer";
import { title } from "process";
import DialogComponent from "../component/Dialog";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AutoAwesomeSharpIcon from "@mui/icons-material/AutoAwesomeSharp";
import { get } from '../services/agent'
import JobCard from "../component/JobCard";
import {
  Box,
  Checkbox,
  CircularProgress,
  Container,
  CssBaseline,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  styled,
} from "@mui/material";

import { BlockLike } from "typescript";
import ListBox from "../component/ListBox";

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
    gilad: boolean;
    jason: boolean;
    antoine: boolean;
  };
  setExpirience: React.Dispatch<any>;
  expirience: {
    under1year: boolean;
    between1to2years: boolean;
    between2to6years: boolean;
    moreThan6years: boolean;
  };
};

function FilterFindjob({
  state,
  setState,
  expirience,
  setExpirience,
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
    setExpirience({
      ...expirience,
      [event.target.name]: event.target.checked,
    });
  };

  const { between1to2years, moreThan6years, between2to6years, under1year } =
    expirience;
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
                checked={state.gilad}
                onChange={handleChange}
                name="gilad"
              />
            }
            label="Gilad Gray"
          />
          <CssFormControlLabel
            control={
              <Checkbox
                checked={state.jason}
                onChange={handleChange}
                name="jason"
              />
            }
            label="Jason Killian"
          />
          <CssFormControlLabel
            control={
              <Checkbox
                checked={state.antoine}
                onChange={handleChange}
                name="antoine"
              />
            }
            label="Antoine Llorca"
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
                checked={expirience.under1year}
                onChange={handlechangeExpirience}
                name="under1year"
              />
            }
            label="Menos de 1 ano"
          />
          <CssFormControlLabel
            control={
              <Checkbox
                checked={expirience.between1to2years}
                onChange={handlechangeExpirience}
                name="between1to2years"
              />
            }
            label="Entre 1 à 2 anos"
          />
          <CssFormControlLabel
            control={
              <Checkbox
                checked={expirience.between2to6years}
                onChange={handlechangeExpirience}
                name="between2to6years"
              />
            }
            label="Entre 2 à 6 anos"
          />

          <CssFormControlLabel
            control={
              <Checkbox
                checked={expirience.moreThan6years}
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

const ProfissionalVeterinario = () => {
  const {isAuthorized, role, id} = useSelector((state: RootState) => state.user)
  const [searchQuery, setSearchQuery] = useState("");
  const [jobLocation, setJobLocation] = useState("");
  const [isLoading, setIsloading] = useState<Boolean>(false);
  const [countJobs, setCountJobs] = useState(0);
  const [jobs, setJobs] = useState([]);
  const [sort, setSort] = useState("Novo")
  const [state, setState] = React.useState({
    gilad: false,
    jason: false,
    antoine: false,
  });
  const [expirience, setExpirience] = useState({
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


  const getJobs = async() => {
    setIsloading(true)
    // const response = await get(`Candidatura/Veterinario/${id}`);
    const response = await get(`Vaga/obterVagas`);
    if(response.status = 200){
      setJobs(response)
      setCountJobs(response.length)
      // setJobs(response)
    }else{

    }
    setIsloading(false)
  }

  useEffect(() => {
    getJobs()
  },[isAuthorized]) 

  if (isLoading) {
    return (
      <Box
        flex={1}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        sx={{ marginY: "200px" }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <React.Fragment>
      <CssBaseline />


      <Container maxWidth={"xl"}>
        <Stack
          style={{marginTop:'10px'}}
          direction={"row"}
          bgcolor={"#ffffff"}
          sx={{
            gap: { sm: "24px", md: "24px", xl: "40px" },
            padding: { sm: "24px 0px" },
          }}
        >
          <Box
            bgcolor={"white"}
            
            sx={{
              boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
              display: {xs: "none", md: "block"},
              flex: {md: 2, lg: 1}
            }}
          >
            <FilterFindjob
              state={state}
              setState={setState}
              expirience={expirience}
              setExpirience={setExpirience}
            />
          </Box>

          <Box sx={{flex: { md:  4, lg: 5}}}>
            <Grid container>
              <Grid item xs={12} sm={12} md={12} sx={{ padding: { xs: "20px", sm: "0px" } }}>
                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  marginBottom={"16px"}
                  alignItems={"center"}
                  
                >
                  <TypographyMold sx={{ fontSize: { xs: "14px", sm: "16px" } }}>
                    Mostrando{" "}
                    <span style={{ fontWeight: 600 }}>{countJobs} vagas</span>
                  </TypographyMold>

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
                    <TypographyMold sx={{
                      fontSize: {sx: "14px", sm: "16px"}
                    }}>Filtrar por: </TypographyMold>

                      <ListBox sort={sort} setSort={setSort} />
                  </Box>
                </Box>
              </Grid>


              <Grid item container xs={12} sm={12} md={12} flex={1} spacing={8} style={{marginTop : '-2em'}}>
                {
                  jobs?.length != 0 ? 
                    jobs.map((job: any) =>
                      <Grid item style={{marginTop : '-2em'}} >          
                        <div>
                          <JobCard job={job} role={role} handleDeleteJob={() => {}}   />
                        </div>
                      </Grid >
                    )
                  :                      
                  <TypographyMold>
                    Nao há vagas criadas ainda 😓{" "}
                  </TypographyMold>
                }
              </Grid>

            </Grid>
          </Box>
        </Stack>
      </Container>
    </React.Fragment>
  );
};

export default ProfissionalVeterinario;