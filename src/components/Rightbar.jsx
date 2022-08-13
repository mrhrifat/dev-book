import React from "react";
import { Box } from "@mui/material";
import ActivePeople from "./ActivePeople";
import LatestPost from "./LatestPost";
import LatestConversation from "./LatestConversation";

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { sm: "none", md: "block" } }}>
      <Box position="fixed">
        <ActivePeople />
        <LatestPost />
        <LatestConversation />
      </Box>
    </Box>
  );
};

export default Rightbar;
