import React from "react"
import { Box, Container, CssBaseline } from "@mui/material"
import { useParams } from "react-router-dom";

const JobDetail = () => {
  const { idJob } = useParams();


  return (
    <div className="container-flexgrow" style={{ backgroundColor: "white" }}>
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth={"xl"}>

      </Container>

    </React.Fragment>
    </div>
  )
}

export default JobDetail