import { useState, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SectionPage from './components/SectionPage';
import BibliographyPage from './components/BibliographyPage';
import Footer from './components/Footer';
import FeedbackWidget from './components/FeedbackWidget';
import BackToTop from './components/BackToTop';
import { SECTIONS } from './data/sections';
import { loadVisited, saveVisited, clearVisited } from './utils/progress';
import './App.css';

export default function App() {
  const reactNavigate = useNavigate();
  const location = useLocation();

  const [visited, setVisited] = useState(loadVisited);

  const markVisited = useCallback((id) => {
    setVisited(prev => {
      if (prev.has(id)) return prev;
      const next = new Set(prev);
      next.add(id);
      saveVisited(next);
      return next;
    });
  }, []);

  const resetProgress = useCallback(() => {
    clearVisited();
    setVisited(new Set());
  }, []);

  const match = location.pathname.match(/^\/section\/(.+)$/);
  const activeSectionId = match ? match[1] : null;
  const activeSection = SECTIONS.find((s) => s.id === activeSectionId) ?? null;

  function navigate(id) {
    reactNavigate(id ? `/section/${id}` : '/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <>
      <Navbar activeSection={activeSectionId} onNavigate={navigate} />
      <div className="app-body">
        {activeSection ? (
          activeSection.id === 'bibliography' ? (
            <BibliographyPage
              key={activeSection.id}
              section={activeSection}
              onBack={() => navigate(null)}
            />
          ) : (
            <SectionPage
              key={activeSection.id}
              section={activeSection}
              onBack={() => navigate(null)}
              visited={visited}
              onVisit={markVisited}
            />
          )
        ) : (
          <Hero onNavigate={navigate} visited={visited} onReset={resetProgress} />
        )}
      </div>
      <Footer />
      <FeedbackWidget showExport={false} />
      <BackToTop />
    </>
  );
}
