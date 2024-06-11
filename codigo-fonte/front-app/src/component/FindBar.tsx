import React, { ChangeEvent, useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import {
  Box,
  Container,
  CssBaseline,
  InputAdornment,
  Stack,
  styled,
} from "@mui/material";

import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import SearchIcon from "@mui/icons-material/Search";

const TypographyMold = styled(Typography)({
  fontFamily: "red-hat-display",
});

const CssTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "none",
    },
    "&:hover fieldset": {
      border: "none",
    },
    "&.Mui-focused fieldset": {
      border: "none",
    },
  },
  "& .MuiOutlinedInput-input::placeholder": {
    fontFamily: "red-hat-display",
  },
  [theme.breakpoints.up("xl")]: {
    width: "30%",
  },

  [theme.breakpoints.down("xl")]: {
    width: "30%",
  },
  [theme.breakpoints.down("lg")]: {
    width: "35%",
  },
  [theme.breakpoints.down("md")]: {
    width: "60%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "70%",
  },
}));

type SearchInputProps = {
  placeholder: string;
  name: string;
  value: string;
  setValue: React.Dispatch<string>;
};

function SearchInput({ placeholder, name, value, setValue }: SearchInputProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const clearField = () => {
    setValue(""); // Usando a função set para atualizar o estado com uma string vazia
  };

  return (
    <CssTextField
      placeholder={placeholder}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon fontSize="small" />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="start" onClick={clearField}>
            <HighlightOffOutlinedIcon
              fontSize="small"
              sx={{
                cursor: "pointer",
              }}
            />
          </InputAdornment>
        ),
      }}
      variant="outlined"
      size="small"
      type="text"
      name={name}
      value={value}
      onChange={handleChange}
    />
  );
}

type FindBarProps = {
  sendSearch: () => void;
  searchQuery: string;
  setSearchQuery: React.Dispatch<string>;
  jobLocation: string;
  setJobLocation: React.Dispatch<string>;
};

const FindBar = ({
  sendSearch,
  searchQuery,
  setSearchQuery,
  jobLocation,
  setJobLocation,
}: FindBarProps) => {

  const isSmallScreen = useMediaQuery("(max-width:760px)");
  const isMediumScreen = useMediaQuery("(max-width: 1340px)");
  const isTooSmallScrell = useMediaQuery("(max-width: 450px)");

  const changeImg = useMediaQuery("(max-width: 900px)")
  const changeImgToSnallScrenn = useMediaQuery("(max-width: 500px)")
  return (
   
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth={"xl"}
      >
        <Stack
          direction={"column"}
          height={"500px"}
          display={"flex"}
          justifyContent={"center"}
        
        >
          <Box>
            <TypographyMold
              fontWeight={700}
              color={"#1e293b"}
              fontSize={"36px"}
              marginBottom={"32px"}
            >
              Encontre vagas com facilidade
            </TypographyMold>
          </Box>

          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-around"}
            bgcolor={"#ffffff"}
            sx={{
              padding: { xs: "10px 8px", sm: "24px 20px", md: "24px 20px" },
              boxShadow: "0 25px 50px -12px rgb( 0 0 0 / 0.25)",
              borderRadius: "9999px",
              zIndex: 20,
            }}
          >
            <SearchInput
              setValue={setSearchQuery}
              value={searchQuery}
              placeholder={
                isMediumScreen
                  ? "Título da vaga"
                  : "Título da vaga ou palavra-chave"
              }
              name="job"
            />

            {!isSmallScreen && (
              <SearchInput
                setValue={setJobLocation}
                value={jobLocation}
                placeholder="Localização"
                name="location"
              />
            )}

            <Button
              sx={{
                padding: { xs: "8px 12px", sm: "12px 40px" },
                textTransform: "none",
                fontFamily: "red-hat-display",
                fontSize: { xs: "12px", sm: "16px" },
                fontWeight: "regular",
              }}
              onClick={sendSearch}
              variant="contained"
            >
              Buscar
            </Button>
          </Box>

          <Box
            position={"absolute"}
            sx={{
              height: "100%",
              right: { xs: 20, sm: 20, md: 100, lg: 70, xl: 400 },
              zIndex: -10,
              top: { xs: 200, sm: 100, md: 50, lg: 50, },
            }}
          >
            <img
              style={{
                objectFit: "contain",
                display: isTooSmallScrell ? "none" : "block",
                width: changeImgToSnallScrenn ? "200px" : "600px"
              }}
              src={changeImg ? "/vet2.png" : "/vet1.png"}
              alt="veterinario-img"
            />
          </Box>
        </Stack>
      </Container>
    </React.Fragment>

  );
};

export default FindBar;
