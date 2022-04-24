import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const TovNav = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to="/" className="nav-link">
            Usha
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* <Nav className="ms-auto">
            <Nav.Link href="#skill">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#about">About Me</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav> */}
          <Nav className="ms-auto">
            <Link to="/skills" className="nav-link">
              Skills
            </Link>
            <Link to="/about-me" className="nav-link">
              About Me
            </Link>
            <Link to="/project" className="nav-link">
              Project
            </Link>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TovNav;
