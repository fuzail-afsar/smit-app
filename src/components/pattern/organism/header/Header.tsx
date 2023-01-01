import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { useState } from "react";
import NavButton from "components/pattern/molecules/nav/nav-button/NavButton";
import NavList from "components/pattern/molecules/nav/nav-list/NavList";
import { Grid } from "@mui/material";

type HeaderProps = {
  navItems: string[];
  logo: React.ReactNode;
  drawerWidth?: number;
};

const Header: React.FC<HeaderProps> = ({
  navItems,
  logo,
  drawerWidth = 240,
}) => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      {logo}
      <Divider />
      <NavList
        navItems={navItems}
        listItemProps={{ disablePadding: true }}
        listItemButtonProps={{ sx: { textAlign: "center" } }}
      />
    </Box>
  );

  return (
    <AppBar position="sticky" color="inherit">
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item width="20rem">
            {logo}
          </Grid>
          <Grid item xs sx={{ display: "flex", justifyContent: "flex-end" }}>
            <NavButton
              navItems={navItems}
              navProps={{
                component: "nav",
                sx: {
                  display: { xs: "none", sm: "block" },
                },
              }}
              buttonsProps={{ sx: { fontWeight: 600, color: "secondary" } }}
            />
            {/* Mobile Menu */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Box component="nav">
              <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                  display: { xs: "block", sm: "none" },
                  "& .MuiDrawer-paper": {
                    boxSizing: "border-box",
                    width: drawerWidth,
                  },
                }}
              >
                {drawer}
              </Drawer>
            </Box>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
