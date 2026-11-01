import React from 'react';
import { Container, Row } from 'react-bootstrap';
import SkillCard from './SkillCard';

const SkillsSection = () => {
  const skills = [
    { name: 'HTML5', experience: '2 years experience', iconClass: 'bi bi-filetype-html' },
    { name: 'JavaScript', experience: '1.5 years experience', iconClass: 'bi bi-filetype-js' },
    { name: 'React.js', experience: '1 year experience', iconClass: 'bi bi-filetype-jsx' },
    { name: 'Node.js', experience: '1 year experience', iconClass: 'bi bi-node-plus' },
    { name: 'CSS3 / Bootstrap', experience: '2 years experience', iconClass: 'bi bi-bootstrap' },
    { name: 'SQL & NoSQL', experience: '1.5 years experience', iconClass: 'bi bi-database' },
  ];

  return (
    <section id="skills" className="py-4">
      <Container>
        <h2 className="section-title">Skills</h2>
        <Row>
          {skills.map((skill, index) => (
            <SkillCard 
              key={index} 
              name={skill.name} 
              experience={skill.experience} 
              iconClass={skill.iconClass}
            />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default SkillsSection;