import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import { Box, Container, Stack } from "@mui/material";

const Root = () => {
  return (
    <Box>
      <Navbar />
      <Container maxWidth="lg">
        <Stack justifyContent="space-evenly" direction="row" spacing={2}>
          <Sidebar />
          <Feed />
          <Rightbar />
        </Stack>
      </Container>
    </Box>
  );
};

export default Root;
