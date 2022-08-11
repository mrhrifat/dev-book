import React from "react";
import { Box } from "@mui/material";

const Sidebar = () => {
  return (
    <Box
      flex={1}
      bgcolor="coral"
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      Sidebar
    </Box>
  );
};

export default Sidebar;
