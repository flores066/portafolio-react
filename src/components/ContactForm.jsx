import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

const ContactForm = ({ onAddRecommendation }) => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Formatear el comentario con el nombre (si lo escribió) o como anónimo
    const formattedComment = name.trim() 
      ? `${message} — ${name}` 
      : message;

    // Enviar el comentario al estado principal
    onAddRecommendation(formattedComment);

    alert('¡Gracias! Tu recomendación ha sido agregada.');
    
    // Limpiar campos
    setName('');
    setMessage('');
  };

  return (
    <section id="contact" className="py-4 mb-5">
      <Container>
        <h3 className="fw-bold text-center mb-4" style={{ color: '#333' }}>
          Leave a Recommendation
        </h3>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Control 
                  type="text" 
                  placeholder="Name (Optional)" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Control 
                  as="textarea" 
                  rows={4} 
                  placeholder="Message" 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required 
                />
              </Form.Group>
              <div className="text-center">
                <Button type="submit" className="btn-purple px-4 py-2">
                  Submit
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactForm;