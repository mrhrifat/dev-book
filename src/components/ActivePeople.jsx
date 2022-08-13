import React from "react";
import { Avatar, AvatarGroup, Typography } from "@mui/material";

const ActivePeople = () => {
  return (
    <>
      <Typography variant="h6" fontWeight={100}>
        Online Friends
      </Typography>
      <AvatarGroup total={24} sx={{ width: "100%", maxWidth: "350px" }}>
        <Avatar
          alt="Remy Sharp"
          src="https://material-ui.com/static/images/avatar/1.jpg"
        />
        <Avatar
          alt="Travis Howard"
          src="https://material-ui.com/static/images/avatar/2.jpg"
        />
        <Avatar
          alt="Agnes Walker"
          src="https://material-ui.com/static/images/avatar/4.jpg"
        />
        <Avatar alt="Agnes Walker" src="" />
        <Avatar
          alt="Trevor Henderson"
          src="https://material-ui.com/static/images/avatar/5.jpg"
        />
      </AvatarGroup>
    </>
  );
};

export default ActivePeople;
