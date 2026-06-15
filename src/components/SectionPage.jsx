import { useState, useEffect, useRef } from 'react';
import { VARIABLES_CONTENT } from '../data/variablesContent';
import { DESCRIPTIVE_CONTENT } from '../data/descriptiveContent';
import { CORRELATIONAL_CONTENT } from '../data/correlationalContent';
import { RELIABILITY_CONTENT } from '../data/reliabilityContent';
import { INFERENTIAL_CONTENT } from '../data/inferentialContent';
import { DIAGRAM_COMPONENTS } from './VariablesDiagrams';
import { DESCRIPTIVE_DIAGRAM_COMPONENTS } from './DescriptiveDiagrams';
import { CORRELATIONAL_DIAGRAM_COMPONENTS } from './CorrelationalDiagrams';
import { RELIABILITY_DIAGRAM_COMPONENTS } from './ReliabilityDiagrams';
import { INFERENTIAL_DIAGRAM_COMPONENTS } from './InferentialDiagrams';
import './SectionPage.css';

function flattenSubsections(subsections, depth = 0) {
  const result = [];
  for (const sub of subsections) {
    result.push({ ...sub, depth });
    if (sub.children) {
      result.push(...flattenSubsections(sub.children, depth + 1));
    }
  }
  return result;
}

// Registry: sectionId → content map
const CONTENT_REGISTRY = {
  variables:     VARIABLES_CONTENT,
  descriptive:   DESCRIPTIVE_CONTENT,
  correlational: CORRELATIONAL_CONTENT,
  reliability:   RELIABILITY_CONTENT,
  inferential:   INFERENTIAL_CONTENT,
};

const KATEX_OPTS = {
  delimiters: [
    { left: '\\(', right: '\\)', display: false },
    { left: '\\[', right: '\\]', display: true },
  ],
  throwOnError: false,
};

export default function SectionPage({ section, onBack }) {
  const flat = flattenSubsections(section.subsections);
  const [activeSubId, setActiveSubId] = useState(flat[0]?.id ?? null);
  const activeSub = flat.find((s) => s.id === activeSubId);

  useEffect(() => {
    if (typeof window.renderMathInElement === 'function') {
      window.renderMathInElement(document.body, KATEX_OPTS);
    }
  }, [activeSubId]);

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

      {/* ── Body ────────────────────────────────────────────────── */}
      <div className="section-page__body">
        <aside className="section-page__sidebar" aria-label="Subsection navigation">
          <nav>
            <ul role="list">
              {flat.map((sub) => (
                <li key={sub.id}>
                  <button
                    className={`sidebar-link sidebar-link--depth-${sub.depth}${activeSubId === sub.id ? ' sidebar-link--active' : ''}`}
                    onClick={() => setActiveSubId(sub.id)}
                    aria-current={activeSubId === sub.id ? 'true' : undefined}
                  >
                    <span className="sidebar-link__num">{sub.number}</span>
                    {sub.title}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <main className="section-page__content" aria-live="polite">
          {activeSub && (
            <SubsectionContent
              key={activeSub.id}
              subsection={activeSub}
              sectionId={section.id}
            />
          )}
        </main>
      </div>
    </div>
  );
}

/* ── Subsection content renderer ─────────────────────────────────────────── */
function SubsectionContent({ subsection, sectionId }) {
  const data = CONTENT_REGISTRY[sectionId]?.[subsection.id] ?? null;

  const definitions    = data?.definitions    ?? [];
  const plainTerms     = data?.plainTerms     ?? null;
  const clinicalExample = data?.clinicalExample ?? null;
  const diagramId      = data?.diagramId      ?? null;
  const quiz           = data?.quiz           ?? null;

  const ALL_DIAGRAMS = { ...DIAGRAM_COMPONENTS, ...DESCRIPTIVE_DIAGRAM_COMPONENTS, ...CORRELATIONAL_DIAGRAM_COMPONENTS, ...RELIABILITY_DIAGRAM_COMPONENTS, ...INFERENTIAL_DIAGRAM_COMPONENTS };
  const DiagramComp = diagramId ? ALL_DIAGRAMS[diagramId] : null;

  return (
    <div className="content-area">
      {/* Subsection title */}
      <header className="content-area__header">
        <span className="content-area__num">{subsection.number}</span>
        <h2 className="content-area__title">{subsection.title}</h2>
      </header>

      {/* ── Definition block (full width) ───── */}
      <ContentBlock label="Definition" icon="📖" filled={definitions.length > 0}>
        {definitions.length > 0 ? (
          <div className="def-cards">
            {definitions.map((def, i) => (
              <DefinitionCard key={i} term={def.term} text={def.text} citation={def.citation} />
            ))}
          </div>
        ) : (
          <PlaceholderBody text="Verbatim definition from the primary source will appear here." />
        )}
      </ContentBlock>

      {/* ── Three-column row ────────────────── */}
      <div className="content-three-col">
        {/* In plain terms */}
        <ContentBlock label="In plain terms" icon="💬" filled={!!plainTerms}>
          {plainTerms ? (
            <div className="plain-terms">
              {plainTerms.map((para, i) => (
                <p key={i} className="plain-terms__para">{para}</p>
              ))}
            </div>
          ) : (
            <PlaceholderBody text="Student-friendly explanation will appear here." />
          )}
        </ContentBlock>

        {/* Clinical example */}
        <ContentBlock label="Clinical example" icon="🩺" filled={!!clinicalExample}>
          {clinicalExample ? (
            <div className="clinical-example">
              <p className="clinical-example__intro">{clinicalExample.intro}</p>
              {clinicalExample.bullets && (
                <ul className="clinical-example__bullets">
                  {clinicalExample.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              )}
            </div>
          ) : (
            <PlaceholderBody text="A physiotherapy-relevant worked example will appear here." />
          )}
        </ContentBlock>

        {/* Visual diagram — omitted entirely if diagramId is null */}
        {DiagramComp ? (
          <ContentBlock label="Visual diagram" icon="📊" filled>
            <DiagramComp />
          </ContentBlock>
        ) : (
          <ContentBlock label="Visual diagram" icon="📊" filled={false}>
            <PlaceholderBody text="An interactive chart or diagram will appear here where appropriate." />
          </ContentBlock>
        )}
      </div>

      {/* ── Quiz (full width) ───────────────── */}
      <div className="content-quiz-row">
        <ContentBlock label="Self-assessment quiz" icon="✏️" filled={!!quiz}>
          {quiz ? (
            <QuizBlock intro={quiz.intro} items={quiz.items} />
          ) : (
            <PlaceholderBody text="Quiz questions with hidden answers (toggle to reveal) will appear here." />
          )}
        </ContentBlock>
      </div>
    </div>
  );
}

/* ── Generic labelled content block ─────────────────────────────────────── */
function ContentBlock({ label, icon, filled, children }) {
  return (
    <section className={`content-block${filled ? '' : ' content-block--placeholder'}`}>
      <div className="content-block__label">
        <span aria-hidden="true">{icon}</span> {label}
      </div>
      <div className="content-block__body">{children}</div>
    </section>
  );
}

/* ── Definition card ─────────────────────────────────────────────────────── */
function DefinitionCard({ term, text, citation }) {
  return (
    <div className="def-card">
      <div className="def-card__term">{term}</div>
      <blockquote className="def-card__quote">{text}</blockquote>
      <cite className="def-card__citation">{citation}</cite>
    </div>
  );
}

/* ── Quiz block with per-item toggle ────────────────────────────────────── */
function QuizBlock({ intro, items }) {
  return (
    <div className="quiz">
      {intro && <p className="quiz__intro">{intro}</p>}
      <ol className="quiz__list">
        {items.map((item, i) => (
          <QuizItem key={i} question={item.q} answer={item.a} index={i + 1} />
        ))}
      </ol>
    </div>
  );
}

function QuizItem({ question, answer, index }) {
  const [open, setOpen] = useState(false);
  const answerRef = useRef(null);

  useEffect(() => {
    if (open && answerRef.current && typeof window.renderMathInElement === 'function') {
      window.renderMathInElement(answerRef.current, KATEX_OPTS);
    }
  }, [open]);

  return (
    <li className="quiz-item">
      <div className="quiz-item__question">
        <span className="quiz-item__num">Q{index}.</span>
        <span style={{ whiteSpace: 'pre-line' }}>{question}</span>
      </div>
      <button
        className={`quiz-item__toggle${open ? ' quiz-item__toggle--open' : ''}`}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        {open ? 'Hide answer ▲' : 'Show answer ▼'}
      </button>
      {open && (
        <div className="quiz-item__answer" ref={answerRef} style={{ whiteSpace: 'pre-line' }}>
          {answer}
        </div>
      )}
    </li>
  );
}

/* ── Placeholder body text ───────────────────────────────────────────────── */
function PlaceholderBody({ text }) {
  return <p className="placeholder-body">{text}</p>;
}
