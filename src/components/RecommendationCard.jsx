import React from 'react';
import { Card, Col } from 'react-bootstrap';

const RecommendationCard = ({ text }) => {
  return (
    <Col md={4} className="mb-4">
      <Card className="recommendation-card h-100 p-3">
        <Card.Body className="p-2">
          <p className="fst-italic text-secondary small mb-0">"{text}"</p>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default RecommendationCard;