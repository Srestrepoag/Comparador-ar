import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";

function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">Comparador de entidades financieras</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/">
            <Nav.Link>Inicio</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/compara-creditos">
            <Nav.Link>Comparar</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/educate">
            <Nav.Link>Educate</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/preguntas-frecuentes">
            <Nav.Link>Preguntas</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
