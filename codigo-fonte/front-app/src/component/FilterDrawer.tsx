import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AutoAwesomeSharpIcon from "@mui/icons-material/AutoAwesomeSharp";

import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  Typography,
  styled,
} from "@mui/material";

type FilterDrawerProps = {
  open: boolean;
  setOpen: React.Dispatch<boolean>;
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

const FilterDrawer = ({
  open,
  setOpen,
  state,
  setState,
  experience,
  setExperience,
}: FilterDrawerProps) => {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
    event.stopPropagation()
  };

  const { between1to2years, moreThan6years, between2to6years, under1year } =
    experience;
  const error =
    [between1to2years, moreThan6years, between2to6years, under1year].filter(
      (v) => v
    ).length > 1;

  const handlechangeExpirience = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setExperience({
      ...experience,
      [event.target.name]: event.target.checked,
    });

    event.stopPropagation()
  };

  return (
    <div>
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          "& .MuiDrawer-paper": {
            marginLeft: 1,
            height: "700px",
            top: "calc(50% - 350px)",
            borderRadius: "20px",
            padding: 1,
          },
        }}
      
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
      
          display={"flex"}
          gap={"10px"}
        >
          <List
            sx={{
              width: "100%",
            }}
          >
            <Box textAlign={"center"} width={"100%"}>
              <Typography
                marginBottom={"8px"}
                color={"#1e293b"}
                fontFamily={"red-hat-display"}
                fontSize={"18px"}
                sx={{ opacity: 0.6 }}
                fontWeight={600}
                padding={2}
              >
                Filtrar resultados
              </Typography>
            </Box>

            <Box>
              <CheckboxLabel title="Profissional" />

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
            </Box>

            <Box>
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
            </Box>
          
          </List>
      
        </Box>
      </Drawer>
    </div>
  );
};

export default FilterDrawer;
