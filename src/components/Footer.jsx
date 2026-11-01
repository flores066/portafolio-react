import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="custom-footer py-3 text-center text-white">
      <Container>
        <p className="mb-0 small fw-medium">
          © {new Date().getFullYear()} Ender José Flores Ramos — Todos los derechos reservados.
        </p>
        <p className="mb-0 small opacity-75">
          Análisis y Desarrollo de Software (ADSO) — SENA CTGI
        </p>
      </Container>
    </footer>
  );
};

export default Footer;