import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import { Box, Container, CssBaseline, Stack } from "@mui/material";
import AddPost from "./components/AddPost";
import { createTheme, ThemeProvider } from "@mui/material";

const Root = () => {
  const [mode, setMode] = useState("light");

  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box bgcolor={"background.default"} color={"color.primary"}>
        <CssBaseline />
        <Navbar />
        <Container maxWidth="lg">
          <Stack direction="row" spacing={2} justifyContent="center">
            <Sidebar setMode={setMode} mode={mode} />
            <Feed />
            <Rightbar />
          </Stack>
        </Container>
        <AddPost />
      </Box>
    </ThemeProvider>
  );
};

export default Root;
