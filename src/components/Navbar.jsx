import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  List,
  ListItem,
  styled,
  ListItemButton,
  ListItemText,
} from "@mui/material";
// menu
import DrawerItem from "./DrawerItem";
// routes
import { Link } from "react-router-dom";
// logo
import logo from "../assets/SLT.png";
// style
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const ListMenu = styled(List)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

//routes
const itemList = [
  {
    text: "Home",
    to: "/",
  },
  {
    text: "Contact",
    to: "/contact",
  },
];

const Navbar = () => {
  return (
    <AppBar
      component="nav"
      position="sticky"
      sx={{
        backgroundColor: "lightblue",
      }}
      elevation={0}
    >
      <StyledToolbar>
        <Box component="img" src={logo} alt="Logo" sx={{ height: 30 }} />
        <Box sx={{ display: { xs: "block", sm: "none" } }}>
          <DrawerItem />
        </Box>
        <ListMenu>
          {itemList.map((item) => {
            const { text } = item;
            return (
              <ListItem key={text}>
                <ListItemButton
                  component={Link}
                  to={item.to}
                  sx={{
                    color: "#fff",
                    fontWeight: "bold",
                    padding: "8px 16px",
                    "&:hover": {
                      backgroundColor: "transparent",
                      color: "#1e2a5a",
                    },
                  }}
                >
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </ListMenu>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
