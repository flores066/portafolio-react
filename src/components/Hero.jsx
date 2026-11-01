import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const Hero = () => {
  return (
    <section id="about" className="py-5">
      <Container>
        <Row className="align-items-center">
          <Col md={4} className="text-center mb-4 mb-md-0">
            <Image 
              src="https://cdn-icons-png.flaticon.com/512/6997/6997662.png" 
              alt="Ender Flores Avatar" 
              fluid 
              style={{ maxWidth: '240px' }}
            />
          </Col>
          <Col md={8}>
            <h1 className="section-title display-5 mb-3">
              Hi, I'm Ender Flores! 👋
            </h1>
            <p className="lead text-secondary fs-6" style={{ lineHeight: '1.7' }}>
              I am a full stack developer and ADSO software student at SENA CTGI with experience in building web applications, databases, and interactive user interfaces. I specialize in HTML5, CSS3, JavaScript, React.js, Node.js, and SQL/NoSQL architectures, delivering clean and scalable digital solutions.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;