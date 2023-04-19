import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import Carrusel from "./pages/carrusel";
import Maps from "./pages/mapas";
import curriculum from "./public/curriculum.png";
import yo from "./public/yo.jpg";
import img1 from "./public/img1.png";
import img2 from "./public/img2.png";
import img3 from "./public/img3.png";
import Login from "./Login";
import Logout from "./LoginLogout";
import Login_form from "./Login_from";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";


function BarraSuperior() {
  return (
    <div className="BarraSuperior">
      
      <Container>
      <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
                <Container>
                  <Navbar.Brand href="/castaneda">Homepage</Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                      <Nav.Link as={Link} to="/Carrusel">
                        Carrusel
                      </Nav.Link>
                      <Nav.Link as={Link} to="/curriculum">Curriculum</Nav.Link>
                      <Nav.Link as={Link} to="/maps">Maps</Nav.Link>
                      <Nav.Link as={Link} to="/alumno">Alumno</Nav.Link>
                      <Nav.Link as={Link} to="/carrera">Carrera</Nav.Link>
                      <Nav.Link as={Link} to="/universidad">Universidad</Nav.Link>
                      <Nav.Link as={Link} to="/logo">Logo</Nav.Link>
                      <Nav.Link as={Link} to="/foto">
                        Foto
                      </Nav.Link>
                      <Nav.Link as={Link} to="/mockup">Mockup</Nav.Link>
                      <Nav.Link as={Link} to="/Login_form">Login</Nav.Link>
                      <Nav.Link  as={Link} to="/CerrarSesion">Cerrar Sesion</Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
      </Container>
    </div>
  );
}

export default BarraSuperior;
