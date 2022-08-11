import { Container, Grid, Typography, Button } from "@mui/material";
import React from "react";

const PracticeOne = () => {
  return (
    <>
      <Container>
        <Typography variant="h4">Hello</Typography>
      </Container>

      <Grid container>
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

      <Container maxWidth="lg">
        <Grid container>
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
      </Container>

      <Container maxWidth="md">
        <Grid container>
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
      </Container>

      <Container maxWidth="sm">
        <Grid container>
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
      </Container>

      <Container maxWidth="xs">
        <Grid container>
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
      </Container>

      <Container maxWidth="lg">
        <Grid container>
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
      </Container>

      <Container>
        <hr />
      </Container>

      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item>
            <Typography variant="h3">Bismillah</Typography>
            <Typography variant="h4" component="p">
              Alhamdulillah
            </Typography>
            <Typography variant="h5" color="primary">
              Subhanallah
            </Typography>
          </Grid>
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
      </Container>

      <Container>
        <hr />
      </Container>

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

            <Button></Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default PracticeOne;
