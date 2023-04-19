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
import BarraSuperior from "./BarraSuperior";


function App() {
  return (
    <div className="App">
      
      <Container>
        <Router>
          <Switch>
            <Route path="/castaneda" exact>
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
              <h1>Welcome are in the Homepage</h1>
              <br />
              <Row>
                <Col>
                  <h1>Metodo render</h1>
                  técnica para compartir código entre componentes en React
                  utilizando una propiedad cuyo valor es una función
                </Col>
                <Col>
                  <h1>Metodo strict mode</h1>
                  simplifica el modo en que el nombre de una variable es
                  asignado a un variable particular en el código.
                </Col>
                <Col>
                  <h1>Metodo return</h1>
                  se emplea para salir de la secuencia de ejecución de las
                  sentencias de un método y, opcionalmente, devolver un valor.
                </Col>
              </Row>
              <Button
                variant="success"
                href="https://github.com/junior45263/Castaneda5.git"
              >
                GitHub
              </Button>{" "}
            
            </Route>

            <Route path="/alumno">
              <BarraSuperior/>
              <center>
                <h1>Bernardo Castañeda</h1>
              </center>
          
            </Route>

            <Route path="/carrera">
            <BarraSuperior/>
              <center>
                <h1>Desarrollo De Softawre Multiplataforma</h1>
              </center>
            </Route>

            <Route path="/universidad">
            <BarraSuperior/>
              <center>
                <h1>UTD</h1>
              </center>
            </Route>

            <Route path="/logo">
            <BarraSuperior/>
              <center>
                <h1>Logo De La univerdidad </h1>
              </center>

              <center>
                <img
                  src="https://www.seekpng.com/png/full/263-2635426_deportes-utd-universidad-tecnologica-de-durango-logo.png"
                  width="500"
                  height="400"
                  cen
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                />
              </center>
            </Route>

            <Route path="/foto">
            <BarraSuperior/>
              <center>
                <h1>Foto Profesional</h1>
              </center>
              <center>
                <img
                  src={yo}
                  width="500"
                  height="700"
                  cen
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                />
              </center>
            </Route>

            <Route path="/Carrusel">
            <BarraSuperior/>
              <center>
                <h1>Carrusel</h1>
              </center>
              <Carrusel />
            </Route>

            <Route path="/maps">
            <BarraSuperior/>
              <center>
                <h1>Maps</h1>
                <Maps />
              </center>
            </Route>

            <Route path="/curriculum">
            <BarraSuperior/>
              <center>
                <h1>Curriculum</h1>
              </center>

              <center>
                <img
                  src={curriculum}
                  width="500"
                  height="600"
                  cen
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                />
              </center>
            </Route>
            <Route path="/mockup">
            <BarraSuperior/>
              <center>
                <h1>Mockup</h1>
              </center>
              <center>
                <img
                  src={img1}
                  width="500"
                  height="600"
                  cen
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                />
              </center>

              <center>
                <img
                  src={img2}
                  width="500"
                  height="600"
                  cen
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                />
              </center>

              <center>
                <img
                  src={img3}
                  width="500"
                  height="600"
                  cen
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                />
              </center>
            </Route>

            <Route path="/CerrarSesion">
            <BarraSuperior/>
              <center>
                <h1>Cerrar Sesion</h1>
              </center>
              <Logout />
            </Route>

            <Route path="/Login_form">
            <BarraSuperior/>
              <center>
                <h1>Login_form</h1>
              </center>
              <Login_form />
              
            </Route>
            <Route path="/Login">
            <BarraSuperior/>
              <center>
                <h1>Login</h1>
              </center>
              <Login />
            </Route>
          </Switch>
        </Router>
      </Container>
    </div>
  );
}

export default App;
