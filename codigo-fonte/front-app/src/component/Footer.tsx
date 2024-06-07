import {
  Box,
  Container,
  CssBaseline,
  Grid,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import { clinicFooterLinks, professionalFooterLinks } from "../services/utils";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";


const isUserLogged = true;
const whoIsLogged: string = "clinic";

const TypographyModel = styled(Typography)({
  fontFamily: "red-hat-display",
});

const CssTypography = styled(Typography)({
  fontFamily: "red-hat-display",
  color: "#EDEDED",
  fontSize: "16px",
  opacity: 0.7,
});

const iconStyle = {
  fill: "white",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "scale(1.2)",
  },
};

const Footer = () => {
  return (
    <div style={{marginTop:'250px'}}>
    <Box bgcolor={"#4051A3"}  >
      <Box overflow={"hidden"} bgcolor={"#4051A3"}>
        <svg
          className="waves"
          style={{
            fill: "#4051A3",
            width: "125%",
            height: 112,
            transform: "rotate(180deg)",
          }}
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
          >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
          </defs>
          <g className="parallax">
            <use
              href="#gentle-wave"
              x="48"
              y="0"
              fill="rgba(255,255,255,0.7)"
              />
            <use
              href="#gentle-wave"
              x="48"
              y="3"
              fill="rgba(255,255,255,0.5)"
              />
            <use
              href="#gentle-wave"
              x="48"
              y="5"
              fill="rgba(255,255,255,0.3)"
              />
            <use href="#gentle-wave" x="48" y="7" fill="#fff" />
          </g>
        </svg>
      </Box>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth={"xl"}>
          <Grid
            container
            sx={{
              padding: "80px 20px",
              marginX: "auto",
            }}
            >
            <Grid padding={"10px"} item md={4} sm={4} xs={12}>
              <Box
                sx={{
                  paddingRight: { sm: "30%" },
                }}
                >
                <TypographyModel
                  sx={{
                    fontSize: "32px",
                    fontWeight: 900,
                    color: "white",
                    textAlign: { xs: "center", sm: "initial" },
                    width: "100%",
                  }}
                  >
                  Eco<span style={{ color: "#BAB6B6" }}>Vet</span>
                </TypographyModel>

                <CssTypography
                  sx={{
                    color: "#EDEDED",
                    fontSize: "16px",
                    
                    opacity: 0.7,
                  }}
                  >
                  Unindo veterinários e clínicas para cuidar dos animais.
                  Juntos, transformamos vidas na EcoVet: a ponte da saúde
                  animal.
                </CssTypography>
              </Box>
            </Grid>

            <Grid
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              padding={"10px"}
              item
              md={4}
              sm={4}
              xs={12}
            >
              <Box>
                <TypographyModel
                  fontSize={"16px"}
                  fontWeight={800}
                  color={"white"}
                >
                  Links Rápidos
                </TypographyModel>
                <Box paddingY={3}>
                  {isUserLogged ? (
                    whoIsLogged === "clinic" ? (
                      clinicFooterLinks.map((item) => (
                        <Link
                          style={{ textDecoration: "none" }}
                          to={item.path}
                          key={item.path}
                        >
                          <CssTypography
                            sx={{
                              color: "#EDEDED",
                              fontSize: "16px",
                              opacity: 0.7,
                              transition: "all 0.3s ease",
                              "&:hover": {
                                opacity: 1,
                                transform: "scale(1.1)",
                              },
                            }}
                          >
                            {item.link}
                          </CssTypography>
                        </Link>
                      ))
                    ) : (
                      professionalFooterLinks.map((item) => (
                        <Link
                          style={{ textDecoration: "none" }}
                          to={item.path}
                          key={item.path}
                        >
                          <CssTypography
                            sx={{
                              color: "#EDEDED",
                              fontSize: "16px",
                              opacity: 0.7,
                              transition: "all 0.3s ease",
                              "&:hover": {
                                opacity: 1,
                                transform: "scale(1.1)",
                              },
                            }}
                          >
                            {item.link}
                          </CssTypography>
                        </Link>
                      ))
                    )
                  ) : (
                    <>
                      {/* Links para quando o usuário não está logado */}
                      {/* Exemplo: */}
                      <Link style={{ textDecoration: "none" }} to="/login">
                        <CssTypography
                          sx={{
                            color: "#EDEDED",
                            fontSize: "16px",
                            opacity: 0.7,
                            transition: "all 0.3s ease",
                            "&:hover": {
                              opacity: 1,
                              transform: "scale(1.1)",
                            },
                          }}
                        >
                          Login
                        </CssTypography>
                      </Link>
                    </>
                  )}
                </Box>
              </Box>
            </Grid>

            <Grid
              display={"flex"}
              sx={{
                justifyContent: { xs: "center", sm: "flex-end" },
              }}
              padding={"10px"}
              item
              md={4}
              sm={4}
              xs={12}
            >
              <Box display={"flex"} gap={2} flexDirection={"column"}>
                <TypographyModel
                  fontSize={"16px"}
                  fontWeight={800}
                  color={"white"}
                >
                  Informações Para Contato
                </TypographyModel>

                <Box>
                  <CssTypography>Email: polly_m.s@hotmail.com</CssTypography>

                  <a href="https://api.whatsapp.com/send?phone=5531992080297">
                    <CssTypography
                      sx={{
                        "&:hover": {
                          color: "white",
                        },
                      }}
                    >
                      Contato: (31) 99208-0297
                    </CssTypography>
                  </a>
                </Box>
                <Box
                  display={"flex"}
                  gap={1}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <a
                    href="https://www.instagram.com/pollymxavier?igsh=MWwwNzl5ZGhxMmxsbQ=="
                    target="_blank"
                    rel="noreferrer"
                  >
                    <InstagramIcon sx={iconStyle} />
                  </a>
                </Box>
              </Box>
            </Grid>

            <Grid padding={"10px"} item xs={12} sm={12} md={12}>
              <Box
                sx={{
                  height: "80px",
                  backgroundColor: "rgba(0, 26, 54, 0.5)",
                  borderRadius: "20px",
                  padding: "20px 20px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <TypographyModel
                  sx={{
                    color: "#BAB6B6",
                    fontSize: "16px",
                  }}
                >
                  <span style={{ fontWeight: 800, color: "#fff" }}>
                    2024&#174;{" "}
                    <span style={{ fontWeight: 800, color: "#fff" }}>Eco</span>
                    <span style={{ fontWeight: 800, color: "#BAB6B6" }}>
                      Vet.
                    </span>
                  </span>{" "}
                  Todos os direitos reservados
                </TypographyModel>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </React.Fragment>
    </Box>
    </div>
  );
};

export default Footer;