import React from "react";
import { Container, Grid, Typography, Button } from "@mui/material";

const PracticeTwo = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={6}>
        <Grid item>
          <Typography variant="h3">Bismillah</Typography>
          <Typography variant="h4" component="p">
            Alhamdulillah
          </Typography>
          <Typography variant="h5" color="primary">
            Subhanallah
          </Typography>
        </Grid>
      </Grid>
      <hr />

      <div>
        <Button variant="contained">Click Me</Button>
        <Button variant="outlined">Click Me</Button>
        <Button variant="contained" sx={{ color: "black", margin: "5px" }}>
          Click Me
        </Button>
        <Button variant="outlined" color="secondary">
          Click Me
        </Button>
      </div>
    </Container>
  );
};

export default PracticeTwo;
