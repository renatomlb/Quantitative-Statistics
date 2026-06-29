import { SECTIONS } from '../data/sections';
import { flattenIds } from '../utils/progress';
import './Hero.css';

export default function Hero({ onNavigate, visited, onReset }) {
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
        <ul className="hero__cards" aria-label="Course sections">
          {SECTIONS.filter((s) => s.id !== 'bibliography').map((s) => {
            const allIds = flattenIds(s.subsections);
            const total = allIds.length;
            const done = allIds.filter(id => visited.has(id)).length;
            const pct = total > 0 ? (done / total) * 100 : 0;

            return (
              <li key={s.id}>
                <button
                  className="hero__card"
                  onClick={() => onNavigate(s.id)}
                  aria-label={`Go to ${s.title}`}
                >
                  <span className="hero__card-icon" aria-hidden="true">{s.icon}</span>
                  <span className="hero__card-title">{s.title}</span>
                  <span className="hero__card-desc">{s.description}</span>
                  {total > 0 && (
                    <div className="hero__card-progress">
                      <span className="hero__card-progress-text">{done} / {total} topics</span>
                      <div
                        className="hero__card-progress-bar"
                        role="progressbar"
                        aria-valuenow={done}
                        aria-valuemin={0}
                        aria-valuemax={total}
                        aria-label={`${done} of ${total} topics visited`}
                      >
                        <div className="hero__card-progress-fill" style={{ width: `${pct}%` }} />
                      </div>
                    </div>
                  )}
                  <span className="hero__card-arrow" aria-hidden="true">→</span>
                </button>
              </li>
            );
          })}
        </ul>

        {/* Exam note */}
        <p className="hero__general-note">
          This platform was created to support your learning throughout the module, with a particular focus on Quantitative Research. It is designed to make the course materials, key concepts, and learning resources easier to access and review. Please note that the content is intended for educational purposes and should be used alongside the lectures, practical sessions, and official course guidance. If you notice any issues, mistakes, or missing information, please feel free to contact me so that it can be corrected or improved.
        </p>

        {visited.size > 0 && (
          <button className="hero__reset-btn" onClick={onReset}>
            Reset my progress
          </button>
        )}
      </div>
    </section>
  );
}
