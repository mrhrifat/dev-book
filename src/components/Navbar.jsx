import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  styled,
  Badge,
  InputBase,
  Box,
  Avatar,
} from "@mui/material";
import { LogoDev, Mail, Notifications } from "@mui/icons-material";

const CustomToolbar = styled(Toolbar)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "#fff",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: "20px",
  //   justifyContent: "space-evenly",
}));

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <CustomToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", md: "block" } }}>
          Dev Book
        </Typography>
        <LogoDev sx={{ display: { xs: "block", md: "none" } }} />
        <Search>
          <InputBase placeholder="Search..." />
        </Search>
        <UserBox>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={3} color="error">
            <Notifications />
          </Badge>
          <Avatar
            alt="Jhon Doe"
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
            sx={{ width: 25, height: 25 }}
          />
        </UserBox>
      </CustomToolbar>
    </AppBar>
  );
};

export default Navbar;
