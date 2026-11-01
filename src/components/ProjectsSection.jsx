import React from 'react';
import { Container } from 'react-bootstrap';
import ProjectItem from './ProjectItem';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Less Perfums',
      description: 'Developed a Full Stack inventory web application with real-time stock control, virtual catalog, and order management using React, Node.js, and SQL/MongoDB databases.'
    },
    {
      title: 'COPASST Incident Tracking Platform (SENA CTGI)',
      description: 'Built a digital reporting system for classroom equipment damage and occupational safety hazards for the SENA CTGI committee.'
    },
    {
      title: 'Interactive Web Application',
      description: 'Created a custom interactive web page with dynamic React components, smooth scroll navigation, and audio integration.'
    }
  ];

  return (
    <section id="projects" className="py-4">
      <Container>
        <h2 className="section-title">Projects</h2>
        <div className="mt-3">
          {projects.map((project, index) => (
            <ProjectItem key={index} title={project.title} description={project.description} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProjectsSection;