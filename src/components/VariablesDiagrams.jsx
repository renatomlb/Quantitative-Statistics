import './VariablesDiagrams.css';

/* ── 1.0  Population → Sample → Observation ─────────────────────────────── */
export function PopSampleDiagram() {
  return (
    <div className="vd vd--pop-sample">
      <div className="vd-pop">
        <span className="vd-pop__label">{'Population (\\(\\Omega\\))'}</span>
        <p className="vd-pop__sub">All units of interest</p>
        <div className="vd-sample">
          <span className="vd-sample__label">{'Sample (\\(n\\) observations)'}</span>
          <p className="vd-sample__sub">Subset selected for study</p>
          <div className="vd-obs-row">
            {[1, 2, 3].map((n) => (
              <div key={n} className="vd-obs">{`\\(\\omega_${n}\\)`}</div>
            ))}
            <div key="dots" className="vd-obs">…</div>
            <div key="n" className="vd-obs">{'\\(\\omega_n\\)'}</div>
          </div>
        </div>
      </div>
      <p className="vd-caption">{'Each individual unit (\\(\\omega\\)) is one observation. The sample is always a subset of the population.'}</p>
    </div>
  );
}

/* ── 1.1  Qualitative — unordered categories ─────────────────────────────── */
export function QualitativeDiagram() {
  const cats = [
    { label: 'Knee', color: '#2e86ab' },
    { label: 'Ankle', color: '#e84855' },
    { label: 'Hip', color: '#3bb273' },
    { label: 'Back', color: '#f18f01' },
  ];
  return (
    <div className="vd vd--qualitative">
      <p className="vd-heading">Injury location — qualitative variable</p>
      <div className="vd-pills">
        {cats.map((c) => (
          <span key={c.label} className="vd-pill" style={{ background: c.color }}>
            {c.label}
          </span>
        ))}
      </div>
      <div className="vd-no-order">
        <span className="vd-no-order__icon">⇄</span>
        <span>No logical order between categories</span>
      </div>
      <p className="vd-caption">You can count frequencies (30 knee, 25 ankle, …) but ranking or averaging categories is not meaningful.</p>
    </div>
  );
}

/* ── 1.2  Quantitative — discrete vs continuous ──────────────────────────── */
export function QuantitativeDiagram() {
  return (
    <div className="vd vd--quantitative">
      {/* Discrete row */}
      <div className="vd-quant-row">
        <div className="vd-quant-row__label">
          <strong>Discrete</strong>
          <span>Counted — whole numbers only</span>
        </div>
        <div className="vd-discrete-line">
          {[0, 1, 2, 3, 4, 5].map((n) => (
            <div key={n} className="vd-discrete-point">
              <div className="vd-discrete-dot" />
              <span>{n}</span>
            </div>
          ))}
        </div>
        <span className="vd-quant-row__example">e.g., sessions / week</span>
      </div>

      <div className="vd-quant-divider" />

      {/* Continuous row */}
      <div className="vd-quant-row">
        <div className="vd-quant-row__label">
          <strong>Continuous</strong>
          <span>Measured — any value in range</span>
        </div>
        <div className="vd-continuous-line">
          <div className="vd-continuous-bar" />
          <div className="vd-continuous-ticks">
            {[0, 30, 60, 90, 120].map((n) => (
              <span key={n}>{`\\(${n}^\\circ\\)`}</span>
            ))}
          </div>
        </div>
        <span className="vd-quant-row__example">{'e.g., knee ROM (\\(^\\circ\\))'}</span>
      </div>
    </div>
  );
}

/* ── 1.3  Types of Scale — tree diagram (mirrors Slide 6) ───────────────── */
export function TypesOfScaleDiagram() {
  const types = [
    {
      name: 'Scale',
      color: '#2e86ab',
      desc: 'Systematic relation between levels.',
      example: 'E.g., height, weight, age.',
    },
    {
      name: 'Nominal',
      color: '#e84855',
      desc: 'Independent categories.',
      example: 'E.g., sex, diagnosis.',
    },
    {
      name: 'Ordinal',
      color: '#f18f01',
      desc: 'No systematic relation between levels.',
      example: 'E.g., pain: none / mild / moderate / severe.',
    },
  ];
  return (
    <div className="vd vd--scale-tree">
      <div className="vd-tree-root">Variable type (Measure)</div>
      <div className="vd-tree-branches">
        {types.map((t) => (
          <div key={t.name} className="vd-tree-branch">
            <div className="vd-tree-connector" />
            <div className="vd-tree-node" style={{ borderColor: t.color }}>
              <strong style={{ color: t.color }}>{t.name}</strong>
              <p>{t.desc}</p>
              <p className="vd-tree-node__example">{t.example}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── 1.3.1  Nominal — unordered grid ────────────────────────────────────── */
export function NominalDiagram() {
  const items = [
    { label: 'Knee', code: '1' },
    { label: 'Ankle', code: '2' },
    { label: 'Hip', code: '3' },
    { label: 'Back', code: '4' },
  ];
  return (
    <div className="vd vd--nominal">
      <p className="vd-heading">Injury location — nominal scale</p>
      <div className="vd-nominal-grid">
        {items.map((item) => (
          <div key={item.label} className="vd-nominal-cell">
            <span className="vd-nominal-cell__label">{item.label}</span>
            <span className="vd-nominal-cell__code">code = {item.code}</span>
          </div>
        ))}
      </div>
      <div className="vd-nominal-note">
        <span>No arrows — order between categories is arbitrary.</span>
        <br />
        <span>Codes (1, 2, 3, 4) are labels only, not quantities.</span>
      </div>
    </div>
  );
}

/* ── 1.3.2  Ordinal — ordered with unknown gaps ─────────────────────────── */
export function OrdinalDiagram() {
  const levels = ['None', 'Mild', 'Moderate', 'Severe'];
  return (
    <div className="vd vd--ordinal">
      <p className="vd-heading">Pain level — ordinal scale</p>
      <div className="vd-ordinal-row">
        {levels.map((level, i) => (
          <div key={level} className="vd-ordinal-item">
            <div className="vd-ordinal-box">{level}</div>
            {i < levels.length - 1 && (
              <div className="vd-ordinal-gap">
                <div className="vd-ordinal-arrow">→</div>
                <div className="vd-ordinal-question">?</div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="vd-ordinal-legend">
        <span>→ Order is meaningful</span>
        <span className="vd-ordinal-legend__gap">? Gap size between levels is unknown</span>
      </div>
    </div>
  );
}

/* ── 1.3.3  Scale — interval vs ratio ───────────────────────────────────── */
export function ScaleDiagram() {
  return (
    <div className="vd vd--scale-compare">
      {/* Interval panel */}
      <div className="vd-scale-panel vd-scale-panel--interval">
        <div className="vd-scale-panel__header">Interval</div>
        <div className="vd-scale-panel__example">{'e.g., Body temperature (\\(^\\circ\\text{C}\\))'}</div>
        <div className="vd-scale-axis">
          {[0, 10, 20, 30, 40].map((n) => (
            <div key={n} className="vd-scale-tick">
              <div className="vd-scale-tick__mark" />
              <span>{`\\(${n}^\\circ\\text{C}\\)`}</span>
            </div>
          ))}
        </div>
        <div className="vd-scale-zero vd-scale-zero--false">
          {'\\(0^\\circ\\text{C} \\neq\\) true zero'}
        </div>
        <div className="vd-scale-facts">
          <span className="vd-fact vd-fact--yes">✓ Differences meaningful</span>
          <span className="vd-fact vd-fact--no">✗ Ratios NOT meaningful</span>
        </div>
      </div>

      {/* Ratio panel */}
      <div className="vd-scale-panel vd-scale-panel--ratio">
        <div className="vd-scale-panel__header">Ratio</div>
        <div className="vd-scale-panel__example">e.g., Grip strength (kg)</div>
        <div className="vd-scale-axis">
          {[0, 10, 20, 30, 40].map((n) => (
            <div key={n} className="vd-scale-tick">
              <div className="vd-scale-tick__mark" />
              <span>{n} kg</span>
            </div>
          ))}
        </div>
        <div className="vd-scale-zero vd-scale-zero--true">
          0 kg = true zero (no force)
        </div>
        <div className="vd-scale-facts">
          <span className="vd-fact vd-fact--yes">✓ Differences meaningful</span>
          <span className="vd-fact vd-fact--yes">✓ Ratios meaningful</span>
        </div>
      </div>
    </div>
  );
}

/* ── Registry: map diagramId → component ───────────────────────────────── */
export const DIAGRAM_COMPONENTS = {
  'pop-sample':     PopSampleDiagram,
  'qualitative':    QualitativeDiagram,
  'quantitative':   QuantitativeDiagram,
  'types-of-scale': TypesOfScaleDiagram,
  'nominal':        NominalDiagram,
  'ordinal':        OrdinalDiagram,
  'scale':          ScaleDiagram,
};
