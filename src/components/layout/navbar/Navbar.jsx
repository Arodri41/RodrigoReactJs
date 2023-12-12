import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";
import { Link } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

const pages = ["Products", "Pricing", "Blog"];

const Navbar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="l">
        <Toolbar disableGutters>
          <Box>
            <Link to="/">
              <img
                src="../../logo-premier-e1611612815797.png"
                style={{ maxWidth: "100px" }}
                show
              />
            </Link>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              marginLeft: "50px",
            }}
          >
            <Button
              variant="contained"
              sx={{
                my: 2,
                color: "white",
                display: "block",
                marginLeft: "10px",
              }}
              >
              <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
                Todos los productos
              </Link>
            </Button>
            <Button
              variant="contained"
              sx={{
                my: 2,
                color: "white",
                display: "block",
                marginLeft: "10px",
              }}
            >
              <Link
                to="/category/vehicular "
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Vehiculares
              </Link>
            </Button>
            <Button
              variant="contained"
              sx={{
                my: 2,
                color: "white",
                display: "block",
                marginLeft: "10px",
              }}
            >
              <Link
                to="/category/instalaciones"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Instalaciones
              </Link>
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <CartWidget></CartWidget>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
