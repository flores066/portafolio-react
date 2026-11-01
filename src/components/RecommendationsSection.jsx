import React from 'react';
import { Container, Row } from 'react-bootstrap';
import RecommendationCard from './RecommendationCard';

const RecommendationsSection = ({ recommendations }) => {
  return (
    <section id="recommendations" className="py-4">
      <Container>
        <h2 className="section-title">Recommendations</h2>
        <Row className="mt-3">
          {recommendations.map((rec, index) => (
            <RecommendationCard key={index} text={rec} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default RecommendationsSection;