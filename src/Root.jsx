import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import { Box, Container, CssBaseline, Stack } from "@mui/material";
import AddPost from "./components/AddPost";

const Root = () => {
  return (
    <Box>
      <CssBaseline />
      <Navbar />
      <Container maxWidth="lg">
        <Stack direction="row" spacing={2} justifyContent="center">
          <Sidebar />
          <Feed />
          <Rightbar />
        </Stack>
      </Container>
      <AddPost />
    </Box>
  );
};

export default Root;
