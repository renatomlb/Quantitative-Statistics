import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SectionPage from './components/SectionPage';
import BibliographyPage from './components/BibliographyPage';
import Footer from './components/Footer';
import FeedbackWidget from './components/FeedbackWidget';
import { SECTIONS } from './data/sections';
import './App.css';

export default function App() {
  const [activeSectionId, setActiveSectionId] = useState(null);

  const activeSection = SECTIONS.find((s) => s.id === activeSectionId) ?? null;

  function navigate(id) {
    setActiveSectionId(id);
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
            />
          )
        ) : (
          <Hero onNavigate={navigate} />
        )}
      </div>
      <Footer />
      <FeedbackWidget showExport={false} />
    </>
  );
}
