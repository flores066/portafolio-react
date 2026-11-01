import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

import Header from './components/Header';
import Hero from './components/Hero';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import RecommendationsSection from './components/RecommendationsSection';
import ContactForm from './components/ContactForm';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';

function App() {
  // Estado con la lista de recomendaciones iniciales
  const [recommendations, setRecommendations] = useState([
    "Ender is a fast learner and quickly grasps key software development concepts. He has a great attitude and is an excellent team player with strong initiative.",
    "Working with Ender has been a great experience. He is highly knowledgeable, dedicated to clean code, and always goes the extra mile to deliver reliable applications.",
    "I worked alongside Ender during backend and frontend development tasks. He is a committed resource with in-depth technical knowledge and an asset to any project."
  ]);

  // Función para agregar una nueva recomendación
  const addRecommendation = (newRec) => {
    setRecommendations((prevRecs) => [...prevRecs, newRec]);
  };

  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <SkillsSection />
        <ProjectsSection />
        {/* Pasamos las recomendaciones actuales al componente */}
        <RecommendationsSection recommendations={recommendations} />
        {/* Pasamos la función de agregar recomendación al formulario */}
        <ContactForm onAddRecommendation={addRecommendation} />
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;