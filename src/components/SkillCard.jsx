import React from 'react';
import { Card, Col } from 'react-bootstrap';

const SkillCard = ({ name, experience, iconClass }) => {
  return (
    <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
      <Card className="skill-card text-center h-100 py-3">
        <Card.Body className="d-flex flex-column align-items-center justify-content-center">
          <i className={`${iconClass} fs-1 mb-2 text-warning`}></i>
          <Card.Title className="fw-bold fs-6 mb-2">{name}</Card.Title>
          <Card.Text className="small text-muted mb-0">{experience}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SkillCard;