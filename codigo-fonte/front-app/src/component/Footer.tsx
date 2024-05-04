import { Box, Container, CssBaseline, Grid } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box bgcolor={"#4051A3"}>
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
            <Grid item md={4} sm={4} xs={12}>
              tempo
            </Grid>

            <Grid item md={4} sm={4} xs={12}>
              tempo2
            </Grid>

            <Grid item md={4} sm={4} xs={12}>
              tempo3
            </Grid>
          </Grid>
        </Container>
      </React.Fragment>
    </Box>
  );
};

export default Footer;
