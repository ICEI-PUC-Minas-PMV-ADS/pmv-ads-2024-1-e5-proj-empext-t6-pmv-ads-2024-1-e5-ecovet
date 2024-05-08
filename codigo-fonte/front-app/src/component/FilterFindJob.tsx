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

interface ExperienceFilters {
  under1year: boolean;
  between1to2years: boolean;
  between2to6years: boolean;
  moreThan6years: boolean;
}

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
    // setExperience({
    //   ...experience,
    //   [event.target.name]: event.target.checked,
    // });

    const {name, checked} = event.target
    const newExperience: ExperienceFilters = {
      under1year: false,
    between1to2years: false,
    between2to6years: false,
    moreThan6years: false,
    }

    newExperience[name as keyof ExperienceFilters]  = checked
    setExperience(newExperience)
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
              marginBottom: "-8px",
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

export default FilterFindjob