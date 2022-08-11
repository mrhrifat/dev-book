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
import { Home } from "@mui/icons-material";
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
          <ListItem>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <Home />
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
