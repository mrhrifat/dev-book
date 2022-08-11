import React from "react";
import { AppBar, Toolbar, Container, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Container>
        <Typography variant="h5">Dev Book</Typography>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
