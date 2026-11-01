import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar expand="lg" className="custom-navbar sticky-top">
      <Container>
        <div>
          <Navbar.Brand href="#about" className="fw-bold fs-4 d-block mb-0">
            Ender Flores
          </Navbar.Brand>
          <div className="text-white-50 small">
            <div><i className="bi bi-envelope-fill me-1"></i> enderflores.dev@gmail.com</div>
            <div><i className="bi bi-telephone-fill me-1"></i> +57 300 000 0000</div>
          </div>
        </div>
        <Navbar.Toggle aria-controls="navbar-nav" className="border-0 text-white" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto align-items-center gap-3 mt-3 mt-lg-0">
            <Nav.Link href="#about">About Me</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#recommendations">Recommendations</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;