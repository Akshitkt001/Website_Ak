import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import AdminLayout from './components/admin/AdminLayout';
import SkillsForm from './components/admin/SkillsForm';
import ExperienceForm from './components/admin/ExperienceForm';
import ProjectsForm from './components/admin/ProjectsForm';
import CertificationsForm from './components/admin/CertificationsForm';
import AboutForm from './components/admin/AboutForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="bg-black min-h-screen">
            <Hero />
            <About />
            <Experience />
            <Skills />
            <Projects />
            <Certifications />
            <Contact />
          </div>
        } />
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="skills" element={<SkillsForm />} />
          <Route path="experience" element={<ExperienceForm />} />
          <Route path="projects" element={<ProjectsForm />} />
          <Route path="certifications" element={<CertificationsForm />} />
          <Route path="about" element={<AboutForm />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;