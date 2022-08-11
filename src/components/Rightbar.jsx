import React from "react";
import { Box } from "@mui/material";

const Rightbar = () => {
  return (
    <Box
      flex={2}
      bgcolor="lavender"
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      Rightbar
    </Box>
  );
};

export default Rightbar;
