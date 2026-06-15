import { BIBLIOGRAPHY_REFERENCES } from '../data/bibliographyContent';
import './SectionPage.css';
import './BibliographyPage.css';

const TYPE_CLASS = {
  'Lecture Slides':  'bib-badge--slides',
  'Textbook':        'bib-badge--book',
  'Journal Article': 'bib-badge--article',
};

function renderApa(apa) {
  const parts = apa.split(/(https:\/\/doi\.org\/\S+)/);
  return parts.map((part, i) =>
    part.startsWith('https://doi.org/') ? (
      <a key={i} href={part} target="_blank" rel="noopener noreferrer" className="bib-doi-link">{part}</a>
    ) : part
  );
}

export default function BibliographyPage({ section, onBack }) {
  return (
    <div className="section-page">
      {/* ── Header ──────────────────────────────────────────────── */}
      <div className="section-page__header">
        <div className="section-page__header-inner">
          <button className="section-page__back" onClick={onBack} aria-label="Back to home">
            ← Back
          </button>
          <div className="section-page__meta">
            <span className="section-page__num">Section {section.number}</span>
            <h1 className="section-page__title">{section.title}</h1>
            <p className="section-page__desc">{section.description}</p>
          </div>
        </div>
      </div>

      {/* ── Content ─────────────────────────────────────────────── */}
      <div className="bib-body">
        <div className="content-block">
          <div className="content-block__label">
            <span aria-hidden="true">📖</span> References
          </div>
          <div className="content-block__body">
            <div className="def-cards">
              {BIBLIOGRAPHY_REFERENCES.map((ref, i) => (
                <div className="def-card" key={i}>
                  <div className="def-card__term">{ref.key}</div>
                  <blockquote className="def-card__quote">
                    {renderApa(ref.apa)}
                    {ref.canvasUrl && (
                      <> <a href={ref.canvasUrl} target="_blank" rel="noopener noreferrer" className="bib-doi-link">CANVAS MODULE ↗</a></>
                    )}
                  </blockquote>
                  <cite className="def-card__citation bib-citation-footer">
                    <span>Used in Section{ref.sections.length > 1 ? 's' : ''} {ref.sections.join(', ')}</span>
                    <span className={`bib-badge ${TYPE_CLASS[ref.type] ?? ''}`}>{ref.type}</span>
                  </cite>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
