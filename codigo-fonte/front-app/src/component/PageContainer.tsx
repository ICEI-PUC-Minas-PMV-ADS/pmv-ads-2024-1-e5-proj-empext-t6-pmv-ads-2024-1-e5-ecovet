import * as React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';


const PageContainerComponent = ({ title, children }: any) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container
      fixed
      maxWidth="xl">
      <Grid
        style={{ marginTop: "1em", paddingLeft: isMobile ? 50 : 50 }}
        direction="row"
        // sx={{sx: {
        //   mr: 20
        // }}}
        alignItems="center"
        justifyContent="flex-start"
        container
        spacing={0}>
        <Grid
          item
          xs={9}>
          <Typography variant="h4" gutterBottom>{title}</Typography>
        </Grid>
        <Grid
          item
          container
          justifyContent="flex-end"
          xs={3}>
          {/* {!isMobile && <BreadcrumbComponent />} */}
        </Grid>
        <Grid
          item
          xs={12}>
          {children}
        </Grid>
      </Grid>
    </Container>
  );
}

export default PageContainerComponent