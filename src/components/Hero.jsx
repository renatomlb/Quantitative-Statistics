import { SECTIONS } from '../data/sections';
import './Hero.css';

export default function Hero({ onNavigate }) {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__inner">
        {/* Badge */}
        <div className="hero__badge">
          <span className="hero__badge-tag">BPTY12</span>
          Research and Evidence in Physiotherapy II
        </div>

        {/* Title */}
        <h1 className="hero__title" id="hero-title">
          Quantitative<br />
          <span className="hero__title-accent">Statistics</span>
        </h1>

        <p className="hero__subtitle">
          An interactive learning resource for Bachelor of Physiotherapy students.
          Explore key concepts, worked clinical examples, and self-assessment quizzes —
          all grounded in your assigned readings.
        </p>

        {/* Section cards grid */}
        <div className="hero__cards" role="list" aria-label="Course sections">
          {SECTIONS.filter((s) => s.id !== 'bibliography').map((s) => (
            <button
              key={s.id}
              className="hero__card"
              role="listitem"
              onClick={() => onNavigate(s.id)}
              aria-label={`Go to ${s.title}`}
            >
              <span className="hero__card-icon" aria-hidden="true">{s.icon}</span>
              <span className="hero__card-title">{s.title}</span>
              <span className="hero__card-desc">{s.description}</span>
              <span className="hero__card-arrow" aria-hidden="true">→</span>
            </button>
          ))}
        </div>

        {/* Exam note */}
        <p className="hero__general-note">
          This platform was created to support your learning throughout the module, with a particular focus on Quantitative Research. It is designed to make the course materials, key concepts, and learning resources easier to access and review. Please note that the content is intended for educational purposes and should be used alongside the lectures, practical sessions, and official course guidance. If you notice any issues, mistakes, or missing information, please feel free to contact me so that it can be corrected or improved.
        </p>
      </div>
    </section>
  );
}
