import {
  Box,
  Container,
  CssBaseline,
  FormControl,
  Grid,
  IconButton,
  InputBase,
  InputLabel,
  MenuItem,
  Pagination,
  Paper,
  Select,
  SelectChangeEvent,
  Typography,
  styled,
} from "@mui/material";
import React, { KeyboardEvent, useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import { UsbTwoTone } from "@mui/icons-material";
import UserBox from "../component/UserBox";

const usersData = [
  {
    id: 1,
    name: "John Dove",
    location: "California",
    email: "email@example.com",
    role: 0,
    contact: "99 9999 9999",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
  },
  {
    id: 2,
    name: "John Dove",
    location: "California",
    email: "email@example.com",
    role: 1,
    contact: "99 9999 9999",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
  },
  {
    id: 3,
    name: "John Dove",
    location: "California",
    email: "email@example.com",
    contact: "99 9999 9999",
    role: 0,
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
  },

  {
    id: 1,
    name: "John Dove",
    location: "California",
    email: "email@example.com",
    role: 0,
    contact: "99 9999 9999",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
  },
  {
    id: 2,
    name: "John Dove",
    location: "California",
    email: "email@example.com",
    role: 1,
    contact: "99 9999 9999",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
  },
  {
    id: 3,
    name: "John Dove",
    location: "California",
    email: "email@example.com",
    contact: "99 9999 9999",
    role: 0,
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
  },
  {
    id: 1,
    name: "John Dove",
    location: "California",
    email: "email@example.com",
    role: 0,
    contact: "99 9999 9999",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
  },
  {
    id: 2,
    name: "John Dove",
    location: "California",
    email: "email@example.com",
    role: 1,
    contact: "99 9999 9999",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
  },
  {
    id: 3,
    name: "John Dove",
    location: "California",
    email: "email@example.com",
    contact: "99 9999 9999",
    role: 0,
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
  },

  {
    id: 1,
    name: "John Dove",
    location: "California",
    email: "email@example.com",
    role: 0,
    contact: "99 9999 9999",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
  },
  {
    id: 2,
    name: "John Dove",
    location: "California",
    email: "email@example.com",
    role: 1,
    contact: "99 9999 9999",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
  },
  {
    id: 3,
    name: "John Dove",
    location: "California",
    email: "email@example.com",
    contact: "99 9999 9999",
    role: 0,
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
  },
];
const TypographyModel = styled(Typography)({
  fontFamily: "red-hat-display",
});

function CustomizedInputBase() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      find();
    }
  };

  const find = () => {
    console.log("Search term:", searchTerm);

    setSearchTerm("");
  };

  return (
    <Paper
      component="form"
      sx={{
        p: "2px 2px",
        display: "flex",
        alignItems: "center",
        width: { xs: 150, sm: 300, md: 300 },
      }}
      onSubmit={(e) => e.preventDefault()}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Buscar aqui"
        inputProps={{ "aria-label": "search " }}
        onKeyDown={handleKeyPress}
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
      />
      <IconButton
        onClick={find}
        type="button"
        sx={{ p: "10px", opacity: 0.5 }}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
const itemPerPage = 8;

const Finduser = () => {
  const [tipo, setTipo] = React.useState("");
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [users, setUsers] = useState<any[] | null>(null);
  useEffect(() => {
    const getUsers = async () => {
      setUsers(usersData);
      setTotalCount(usersData.length);
    };

    getUsers();
  }, []);
  const startIndex = (currentPage - 1) * itemPerPage;
  const endIndex = Math.min(startIndex + itemPerPage, usersData.length);
  const visibleData = usersData.slice(startIndex, endIndex);
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };

  const handleChange = (event: SelectChangeEvent) => {
    setTipo(event.target.value as string);
  };

  return (
    <div className="container-flexgrow" style={{ backgroundColor: "white" }}>
      <React.Fragment>
        <CssBaseline />
        <Container
          maxWidth={"xl"}
          sx={{
            marginTop: 5,
          }}
        >
          <Grid container sx={{ padding: { md: "0 100px", lg: "0 200px" } }}>
            <Grid item xs={12} sm={12} md={12}>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <TypographyModel
                  sx={{
                    color: "#374151",
                    fontSize: "22px",
                    fontWeight: 800,
                  }}
                >
                  Buscar
                </TypographyModel>

                <Box sx={{}} display={"flex"} gap={2} alignItems={"center"}>
                  <CustomizedInputBase />

                  <Box
                    sx={{ width: 180, display: { xs: "none", sm: "block" } }}
                  >
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Tipo
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={tipo}
                        label="Tipo"
                        onChange={handleChange}
                      >
                        <MenuItem value={"clinica"}>Clinica</MenuItem>
                        <MenuItem value={"profissional"}>Profissional</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Box>
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: "20px",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "60px",
              }}
            >
              {visibleData &&
                visibleData.length &&
                visibleData.map((item, index) => (
                  <UserBox
                    nome={item.name}
                    profissao={item.role}
                    id={item.id}
                    key={index}
                  />
                ))}
            </Grid>
            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: 10,
              }}
              item
              xs={12}
              sm={12}
              md={12}
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
        </Container>
      </React.Fragment>
    </div>
  );
};
export default Finduser;
