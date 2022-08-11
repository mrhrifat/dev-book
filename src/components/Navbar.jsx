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
  Menu,
  MenuItem,
} from "@mui/material";
import { LogoDev, Mail, Notifications } from "@mui/icons-material";
import { useState } from "react";

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
  display: "none",
  gap: "15px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox2 = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "15px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);
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
            onClick={(e) => setOpen(true)}
          />
        </UserBox>
        <UserBox2 onClick={(e) => setOpen(true)}>
          <Typography variant="span">Jhon Doe</Typography>
          <Avatar
            alt="Jhon Doe"
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
            sx={{ width: 25, height: 25 }}
          />
        </UserBox2>
      </CustomToolbar>
      <Menu
        open={open}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        onClose={(e) => setOpen(false)}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>Settings</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
