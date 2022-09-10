import "./App.css";
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import { isLogin } from "./utils/index";
const pages = [
  { url: "/", name: "Home" },
  { url: "/classcomponent", name: "UsingClassComponent" },
  { url: "/Multiplevaluecheckbox", name: "Multiplevaluecheckbox" },
  { url: "/Changekeyvalue", name: "Changekeyvalue" },
  { url: "/slickslider", name: "Slickslider" },
  { url: "/axiosapi", name: "Axiosapi" },
  { url: "/axiosrestful", name: "Axiosrestful" },
  { url: "/datetimepicker", name: "Datetimepicker" },
  { url: "/stepperform", name: "Stepperform" },
];
const selectPages = [
  { url: "/quiz", name: "Quiz" },
  { url: "/dropzone", name: "Dropzone" },
  { url: "/formikform", name: "Formikform" },
  { url: "/locationsearchinput", name: "LocationSearchInput" },
  { url: "/arraytable", name: "Arraytable" },
  { url: "/localstorage", name: "Localstorage" },
];
function App() {
  let location = useLocation();
  useEffect(() => {
    console.log(location);
  }, [location]);
  const Navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    localStorage.clear();
    Navigate("/login");
  };
  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleClick}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page.name} onClick={handleClose}>
                    <Typography textAlign="center">
                      <Link to={page.url}>{page.name}</Link>
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page.name}
                  onClick={handleClose}
                  className="nav-list"
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {/* {page.name} */}
                  <Link to={page.url}>{page.name}</Link>
                </Button>
              ))}
            </Box>
            <div>
              {isLogin() ? (
                <button onClick={() => handleLogout()}>log out</button>
              ) : (
                <Link to="/login">Go to Login page</Link>
              )}
            </div>
            <div>
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                MORE
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                {selectPages.map((pages) => (
                  <div key={pages.name}>
                    <MenuItem onClick={handleClose}>
                      <Typography textAlign="center">
                        <Link className="menu-select-option" to={pages.url}>
                          {pages.name}
                        </Link>
                      </Typography>
                    </MenuItem>
                  </div>
                ))}
              </Menu>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
      <nav>
        <ul>
          {pages.map((page) => (
            <li key={page.name}>
              <Link to={page.url}>{page.name}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <Outlet />
    </>
  );
}
export default App;
