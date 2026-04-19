import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';


import Services from './pages/Services';
import About from './pages/About';
import Fleet from './pages/Fleet';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Careers from './pages/Careers';
import SpecSheet from './pages/SpecSheet';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import PlanYourLiftModal from './components/PlanYourLiftModal';
import FloatingCTA from './components/FloatingCTA';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen w-full overflow-x-clip bg-steel-grey font-sans text-dark-slate antialiased selection:bg-brand-red selection:text-white">
        <Navbar onOpenModal={() => setIsModalOpen(true)} />
        <Routes>
          <Route path="/" element={<Home onOpenModal={() => setIsModalOpen(true)} />} />
          <Route path="/about" element={<About onOpenModal={() => setIsModalOpen(true)} />} />
          <Route path="/services" element={<Services />} />
          <Route path="/fleet" element={<Fleet />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDetail onOpenModal={() => setIsModalOpen(true)} />} />
          <Route path="/careers" element={<Careers />} />

          <Route path="/resources" element={<Resources />} />
          <Route path="/specs" element={<SpecSheet />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <FloatingCTA onOpenModal={() => setIsModalOpen(true)} />
        <PlanYourLiftModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </Router>
  );
}

export default App;
