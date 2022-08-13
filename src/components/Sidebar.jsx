import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  createTheme,
} from "@mui/material";
import {
  Home,
  Description,
  People,
  Storefront,
  Person,
  Settings,
  AccountBox,
  ModeNight,
} from "@mui/icons-material";
import { ThemeProvider } from "@mui/system";

const theme = createTheme({
  item: {
    padding: 0,
  },
});

const Sidebar = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <Description />
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <People />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <Storefront />
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <Person />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <AccountBox />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </ThemeProvider>
  );
};

export default Sidebar;
