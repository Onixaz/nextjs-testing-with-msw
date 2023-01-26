import * as React from "react";
import { styled } from "@mui/material/styles";
import Box, { BoxProps } from "@mui/material/Box";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Redirecter from "@components/shared/utility/redirecter";

const Background = styled(Box)<BoxProps>(() => ({
  position: "relative",
  overflow: "auto",
  height: "100vh",
  flexGrow: 1,
}));

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Redirecter>
      <Box sx={{ display: "flex" }}>
        <MuiAppBar position="absolute">
          <Toolbar
            sx={{
              background: "#3d5afe",
            }}
          >
            <Typography component="h1" variant="h6" color="inherit" noWrap sx={{ flexGrow: 1, letterSpacing: "1px" }}>
              Fantastic Pokemon list and how to test it!!
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </MuiAppBar>
        <Background component="main">
          <Toolbar />
          <Container maxWidth="xl" sx={{ mt: 10, mb: 4 }}>
            {children}
          </Container>
        </Background>
      </Box>
    </Redirecter>
  );
};

export default Layout;
