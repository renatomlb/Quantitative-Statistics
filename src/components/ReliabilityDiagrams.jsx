import './ReliabilityDiagrams.css';

/* ── 4.1  Reliability Types (2×2 grid) ──────────────────────────────────── */
export function ReliabilityTypesDiagram() {
  const types = [
    {
      label: 'Intra-rater',
      sub: 'Same rater · Different times',
      color: '#1a5276',
      icon: '👤',
    },
    {
      label: 'Inter-rater',
      sub: 'Different raters · Same time',
      color: '#2e86ab',
      icon: '👥',
    },
    {
      label: 'Intra-session',
      sub: 'Same session · Same rater',
      color: '#117a65',
      icon: '⏱',
    },
    {
      label: 'Inter-session',
      sub: 'Different sessions · Same rater',
      color: '#1e8449',
      icon: '📅',
    },
  ];
  return (
    <div className="dd--rel-types">
      <p className="dd-heading">Types of Reliability</p>
      <div className="dd-rel-types-grid">
        {types.map((t) => (
          <div key={t.label} className="dd-rel-type-card" style={{ borderColor: t.color }}>
            <span className="dd-rel-type-icon" aria-hidden="true">{t.icon}</span>
            <span className="dd-rel-type-label" style={{ color: t.color }}>{t.label}</span>
            <span className="dd-rel-type-sub">{t.sub}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── 4.2  Kappa Overview (4-step flowchart) ──────────────────────────────── */
export function KappaOverviewDiagram() {
  const steps = [
    { num: '1', label: 'Crosstab Table', sub: 'Arrange ratings' },
    { num: '2', label: 'Raw Agreement', sub: 'Po = agreed / n' },
    { num: '3', label: 'Expected Agreement', sub: 'Pe from marginals' },
    { num: '4', label: 'Kappa (κ)', sub: '\\( \\kappa = \\dfrac{P_o - P_e}{1 - P_e} \\)' },
  ];
  return (
    <div className="dd--kappa-overview">
      <p className="dd-heading">Kappa Workflow</p>
      <div className="dd-kappa-steps">
        {steps.map((s, i) => (
          <div key={s.num} className="dd-kappa-step-wrap">
            <div className="dd-kappa-step">
              <span className="dd-kappa-step-num">{s.num}</span>
              <span className="dd-kappa-step-label">{s.label}</span>
              <span className="dd-kappa-step-sub">{s.sub}</span>
            </div>
            {i < steps.length - 1 && (
              <span className="dd-kappa-arrow" aria-hidden="true">→</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Shared crosstab table component ─────────────────────────────────────── */
function CrosstabTable({ highlightDiag = false, highlightMarg = false }) {
  const dc = highlightDiag ? 'dd-ct-agree' : '';
  const mc = highlightMarg ? 'dd-ct-marg-hi' : '';
  return (
    <table className="dd-ct-tbl">
      <thead>
        <tr>
          <th className="dd-ct-blank" />
          <th colSpan={2} className="dd-ct-header">Rater 1</th>
          <th className={`dd-ct-marg-head ${mc}`}>Total</th>
        </tr>
        <tr>
          <th className="dd-ct-row-head">Rater 2</th>
          <th className="dd-ct-col-head">Normal</th>
          <th className="dd-ct-col-head">Abnormal</th>
          <th className={`dd-ct-marg-head ${mc}`} />
        </tr>
      </thead>
      <tbody>
        <tr>
          <th className="dd-ct-row-head">Normal</th>
          <td className={`dd-ct-cell ${dc}`}>147</td>
          <td className="dd-ct-cell">3</td>
          <td className={`dd-ct-marg ${mc}`}>150 <span className="dd-ct-tag">rm₁</span></td>
        </tr>
        <tr>
          <th className="dd-ct-row-head">Abnormal</th>
          <td className="dd-ct-cell">10</td>
          <td className={`dd-ct-cell ${dc}`}>62</td>
          <td className={`dd-ct-marg ${mc}`}>72 <span className="dd-ct-tag">rm₂</span></td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th className="dd-ct-row-head">Total</th>
          <td className={`dd-ct-marg ${mc}`}>157 <span className="dd-ct-tag">cm₁</span></td>
          <td className={`dd-ct-marg ${mc}`}>65 <span className="dd-ct-tag">cm₂</span></td>
          <td className="dd-ct-total">222 <span className="dd-ct-tag">n</span></td>
        </tr>
      </tfoot>
    </table>
  );
}

/* ── 4.2.1  Crosstab Table ───────────────────────────────────────────────── */
export function CrosstabTableDiagram() {
  return (
    <div className="dd--crosstab">
      <p className="dd-heading">2×2 Contingency Table</p>
      <CrosstabTable />
    </div>
  );
}

/* ── 4.2.2  Raw Agreement (diagonal highlighted) ─────────────────────────── */
export function RawAgreementDiagram() {
  return (
    <div className="dd--crosstab">
      <p className="dd-heading">Observed Agreement</p>
      <CrosstabTable highlightDiag />
      <div className="dd-ct-formula">
        {'\\( P_o = \\dfrac{147 + 62}{222} = 0.94 \\)'}
      </div>
    </div>
  );
}

/* ── 4.2.3  Expected Agreement (marginals highlighted) ───────────────────── */
export function ExpectedAgreeDiagram() {
  return (
    <div className="dd--crosstab">
      <p className="dd-heading">Expected Agreement (chance)</p>
      <CrosstabTable highlightMarg />
      <div className="dd-ct-formula dd-ct-formula--pe">
        {'\\( P_e = \\dfrac{(157 \\times 150) + (65 \\times 72)}{222^2} \\approx 0.57 \\)'}
      </div>
    </div>
  );
}

/* ── 4.2.4  Kappa Interpretation Scale (vertical) ───────────────────────── */
export function KappaScaleDiagram() {
  const W = 265, H = 340;
  const xMid = 82, barW = 34, yTop = 22, yBot = 254;
  // k=1 maps to yTop, k=0 maps to yBot (positive range only in main bar)
  const toY = (k) => yTop + (1 - k) * (yBot - yTop);

  const zones = [
    { from: 0.90, to: 1.00, color: '#1a5276', label: 'Almost Perfect' },
    { from: 0.80, to: 0.90, color: '#2471a3', label: 'Strong' },
    { from: 0.60, to: 0.80, color: '#2e86c1', label: 'Moderate' },
    { from: 0.40, to: 0.60, color: '#85c1e9', label: 'Weak' },
    { from: 0.21, to: 0.40, color: '#f0a500', label: 'Minimal' },
    { from: 0.00, to: 0.21, color: '#e74c3c', label: 'None' },
  ];

  const ticks = [1.0, 0.90, 0.80, 0.60, 0.40, 0.21, 0.00];
  const fmt = (k) => k === 0 ? '0' : k === 1 ? '1' : '.' + String(Math.round(k * 100)).padStart(2, '0');

  const negY = yBot + 16, negH = 38;

  return (
    <div className="dd--kappa-scale">
      <p className="dd-heading">κ Interpretation Scale</p>
      <svg viewBox={`0 0 ${W} ${H}`} className="dd-kappa-svg" role="img" aria-label="κ interpretation scale: None (below 0.21), Minimal (0.21–0.40), Weak (0.40–0.60), Moderate (0.60–0.80), Strong (0.80–0.90), Almost Perfect (0.90–1.0)">
        {/* Main colour zones (k = 0 to 1) */}
        {zones.map((z) => {
          const y1 = toY(z.to), y2 = toY(z.from);
          return (
            <rect key={z.label} x={xMid - barW / 2} y={y1} width={barW} height={y2 - y1} fill={z.color} opacity={0.88} />
          );
        })}

        {/* Axis */}
        <line x1={xMid} y1={yTop} x2={xMid} y2={yBot} stroke="#333" strokeWidth={0.5} />

        {/* Ticks + left labels */}
        {ticks.map((k) => {
          const y = toY(k);
          return (
            <g key={k}>
              <line x1={xMid - barW / 2 - 5} y1={y} x2={xMid - barW / 2} y2={y} stroke="#555" strokeWidth={1} />
              <text x={xMid - barW / 2 - 8} y={y + 4} textAnchor="end" fontSize={10} fill="#444">{fmt(k)}</text>
            </g>
          );
        })}

        {/* Zone labels on right */}
        {zones.map((z) => {
          const yMid = (toY(z.to) + toY(z.from)) / 2;
          return (
            <text key={z.label + '-lbl'} x={xMid + barW / 2 + 8} y={yMid + 4} fontSize={10} fill={z.color} fontWeight="600">
              {z.label}
            </text>
          );
        })}

        {/* Negative zone indicator (below main bar) */}
        <line x1={xMid - barW / 2 - 2} y1={negY} x2={xMid + barW / 2 + 2} y2={negY} stroke="#bbb" strokeWidth={0.5} strokeDasharray="3 2" />
        <rect x={xMid - barW / 2} y={negY} width={barW} height={negH} fill="#c0392b" opacity={0.7} rx={2} />
        <text x={xMid - barW / 2 - 8} y={negY + negH / 2 + 4} textAnchor="end" fontSize={10} fill="#444">{'< 0'}</text>
        <text x={xMid + barW / 2 + 8} y={negY + negH / 2 + 4} fontSize={10} fill="#c0392b" fontWeight="600">No agreement</text>

        {/* Example marker κ = 0.86 (falls in Strong zone) */}
        <circle cx={xMid} cy={toY(0.86)} r={6} fill="#fff" stroke="#1a5276" strokeWidth={2.5} />
        <text x={xMid - barW / 2 - 8} y={toY(0.86) + 4} textAnchor="end" fontSize={9} fill="#1a5276" fontWeight="700">
          ★ .86
        </text>

        {/* Note */}
        <text x={W / 2} y={H - 8} textAnchor="middle" fontSize={8.5} fill="#888">
          ★ Worked example (shoulder study, κ = 0.86)
        </text>
      </svg>
    </div>
  );
}

/* ── 4.3  CV Diagram (dot-plot number line) ──────────────────────────────── */
export function CVDiagram() {
  const W = 260, H = 160;
  const xL = 38, xR = 230;          // x-axis extents (5–30 cm)
  const toX = (v) => xL + (v - 5) / 25 * (xR - xL);
  const axY = 132;                   // x-axis y position

  const rows = [
    { label: 'Low CV', y: 50,  color: '#1e8449', s1: 15, s2: 17, cv: '9%',  sdLabel: 'SD≈1.4, x̄=16' },
    { label: 'High CV', y: 96, color: '#c0392b', s1: 9,  s2: 22, cv: '59%', sdLabel: 'SD≈9.2, x̄=15.5' },
  ];

  const ticks = [5, 10, 15, 20, 25, 30];

  return (
    <div className="dd--cv">
      <p className="dd-heading">CV = (SD / Mean) × 100</p>
      <svg viewBox={`0 0 ${W} ${H}`} className="dd-cv-svg" role="img" aria-label="Number line comparing low CV of 9% versus high CV of 59% across two measurement scenarios">
        {/* x-axis */}
        <line x1={xL} y1={axY} x2={xR} y2={axY} stroke="#888" strokeWidth={1} />
        {ticks.map((t) => (
          <g key={t}>
            <line x1={toX(t)} y1={axY} x2={toX(t)} y2={axY + 4} stroke="#888" strokeWidth={1} />
            <text x={toX(t)} y={axY + 13} textAnchor="middle" fontSize={8.5} fill="#666">{t}</text>
          </g>
        ))}
        <text x={(xL + xR) / 2} y={H - 3} textAnchor="middle" fontSize={8} fill="#888">cm</text>

        {/* rows */}
        {rows.map((r) => {
          const xS1 = toX(r.s1), xS2 = toX(r.s2);
          const xMean = (xS1 + xS2) / 2;
          return (
            <g key={r.label}>
              {/* connector line */}
              <line x1={xS1} y1={r.y} x2={xS2} y2={r.y} stroke={r.color} strokeWidth={1.5} strokeDasharray="4 2" opacity={0.6} />
              {/* dots */}
              <circle cx={xS1} cy={r.y} r={6} fill={r.color} opacity={0.85} />
              <circle cx={xS2} cy={r.y} r={6} fill={r.color} opacity={0.85} />
              {/* dot labels */}
              <text x={xS1} y={r.y - 10} textAnchor="middle" fontSize={8.5} fill={r.color} fontWeight="600">S1</text>
              <text x={xS2} y={r.y - 10} textAnchor="middle" fontSize={8.5} fill={r.color} fontWeight="600">S2</text>
              {/* row label on left */}
              <text x={xL - 4} y={r.y + 4} textAnchor="end" fontSize={9.5} fill={r.color} fontWeight="700">{r.label}</text>
              {/* CV badge */}
              <rect x={xMean - 18} y={r.y + 12} width={36} height={14} rx={3} fill={r.color} opacity={0.15} />
              <text x={xMean} y={r.y + 22} textAnchor="middle" fontSize={9} fill={r.color} fontWeight="700">CV≈{r.cv}</text>
              {/* SD/mean info */}
              <text x={xMean} y={r.y + 36} textAnchor="middle" fontSize={7.5} fill="#888">{r.sdLabel}</text>
            </g>
          );
        })}

        {/* vertical grid lines at tick positions (subtle) */}
        {ticks.map((t) => (
          <line key={'g' + t} x1={toX(t)} y1={22} x2={toX(t)} y2={axY} stroke="#eee" strokeWidth={1} />
        ))}
      </svg>
    </div>
  );
}

/* ── 4.4  SEM Diagram ────────────────────────────────────────────────────── */
export function SEMDiagram() {
  const W = 300, H = 175;
  const cx = 150, cy = 82, barH = 28;
  const trueScore = cx;
  const semPx = 78;

  return (
    <div className="dd--sem">
      <p className="dd-heading">SEM = SD × √(1 − ICC)</p>
      <svg viewBox={`0 0 ${W} ${H}`} className="dd-sem-svg" role="img" aria-label="Horizontal band showing SEM range around the true score with observed measurement dots within plus or minus SEM">
        {/* SEM band */}
        <rect x={trueScore - semPx} y={cy - barH / 2} width={semPx * 2} height={barH} fill="#aed6f1" opacity={0.7} rx={4} />
        <text x={cx} y={cy + 5} textAnchor="middle" fontSize={10} fill="#1a5276" fontWeight="600">± SEM range</text>

        {/* True score marker */}
        <line x1={trueScore} y1={cy - barH / 2 - 12} x2={trueScore} y2={cy + barH / 2 + 12} stroke="#1a5276" strokeWidth={2.5} />
        <text x={trueScore} y={cy - barH / 2 - 16} textAnchor="middle" fontSize={9.5} fill="#1a5276" fontWeight="600">True score (T)</text>

        {/* Left boundary */}
        <line x1={trueScore - semPx} y1={cy - barH / 2 - 8} x2={trueScore - semPx} y2={cy + barH / 2 + 8} stroke="#2471a3" strokeWidth={2} />
        <text x={trueScore - semPx} y={cy + barH / 2 + 20} textAnchor="middle" fontSize={9.5} fill="#2471a3">T − SEM</text>

        {/* Right boundary */}
        <line x1={trueScore + semPx} y1={cy - barH / 2 - 8} x2={trueScore + semPx} y2={cy + barH / 2 + 8} stroke="#2471a3" strokeWidth={2} />
        <text x={trueScore + semPx} y={cy + barH / 2 + 20} textAnchor="middle" fontSize={9.5} fill="#2471a3">T + SEM</text>

        {/* Observed score dots */}
        {[trueScore - 28, trueScore + 48, trueScore + 14, trueScore - 58].map((x, i) => (
          <circle key={i} cx={x} cy={cy} r={5} fill="#e74c3c" opacity={0.8} />
        ))}
        <text x={W / 2} y={H - 10} textAnchor="middle" fontSize={9} fill="#888">
          Red dots = observed scores; all within ±SEM of true score
        </text>
      </svg>
    </div>
  );
}

/* ── 4.5  MDD Diagram (threshold bands) ─────────────────────────────────── */
export function MDDDiagram() {
  const W = 290, H = 280;
  const cx = 50, cw = 190;
  const midY = 140;
  const semPx = 30, mddPx = 88;

  const zones = [
    { y: midY - mddPx, h: mddPx - semPx, fill: '#fdebd0' },
    { y: midY + semPx, h: mddPx - semPx, fill: '#fdebd0' },
    { y: midY - semPx, h: semPx * 2,     fill: '#fadbd8' },
  ];

  const lblX = cx + cw + 4;

  return (
    <div className="dd--mdd">
      <p className="dd-heading">MDD Threshold Interpretation</p>
      <svg viewBox={`0 0 ${W} ${H}`} className="dd-mdd-svg" role="img" aria-label="MDD threshold diagram with zones: real change above MDD95, possibly real between SEM and MDD, and random measurement error within SEM">
        <defs>
          <marker id="arr-mdd" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
            <path d="M0,0 L0,6 L6,3 z" fill="#555" />
          </marker>
        </defs>

        {/* y-axis */}
        <line x1={cx} y1={16} x2={cx} y2={H - 24} stroke="#555" strokeWidth={1.5} markerEnd="url(#arr-mdd)" />
        <text x={cx - 8} y={H / 2} textAnchor="middle" fontSize={8.5} fill="#555"
              transform={`rotate(-90, ${cx - 8}, ${H / 2})`}>
          Change in score
        </text>

        {/* Coloured zones */}
        {zones.map((z, i) => (
          <rect key={i} x={cx + 2} y={z.y} width={cw - 4} height={z.h} fill={z.fill} />
        ))}

        {/* ±MDD lines (solid) */}
        <line x1={cx} y1={midY - mddPx} x2={cx + cw} y2={midY - mddPx} stroke="#2e86ab" strokeWidth={2.5} />
        <line x1={cx} y1={midY + mddPx} x2={cx + cw} y2={midY + mddPx} stroke="#2e86ab" strokeWidth={2.5} />

        {/* ±SEM lines (dashed) */}
        <line x1={cx} y1={midY - semPx} x2={cx + cw} y2={midY - semPx} stroke="#e74c3c" strokeWidth={2} strokeDasharray="5 3" />
        <line x1={cx} y1={midY + semPx} x2={cx + cw} y2={midY + semPx} stroke="#e74c3c" strokeWidth={2} strokeDasharray="5 3" />

        {/* Zero line */}
        <line x1={cx} y1={midY} x2={cx + cw} y2={midY} stroke="#555" strokeWidth={1} strokeDasharray="2 2" />

        {/* Line labels (right side) */}
        <text x={lblX} y={midY - mddPx + 5} fontSize={9} fill="#2e86ab" fontWeight="700">+MDD₉₅</text>
        <text x={lblX} y={midY + mddPx + 5} fontSize={9} fill="#2e86ab" fontWeight="700">−MDD₉₅</text>
        <text x={lblX} y={midY - semPx + 5} fontSize={9} fill="#e74c3c">+SEM</text>
        <text x={lblX} y={midY + semPx + 5} fontSize={9} fill="#e74c3c">−SEM</text>
        <text x={lblX} y={midY + 5} fontSize={9} fill="#555">0</text>

        {/* X marker: real change (above +MDD) */}
        <text x={cx + 38} y={midY - mddPx - 16} fontSize={16} fill="#1e8449" fontWeight="700" textAnchor="middle">✕</text>
        <text x={cx + 70} y={midY - mddPx - 20} fontSize={8.5} fill="#1e8449" fontWeight="600">Real change</text>
        <text x={cx + 70} y={midY - mddPx - 10} fontSize={8.5} fill="#1e8449">(95% confidence)</text>

        {/* X marker: possibly real (between SEM and MDD) */}
        <text x={cx + 38} y={midY - (semPx + mddPx) / 2 + 6} fontSize={16} fill="#e67e22" fontWeight="700" textAnchor="middle">✕</text>
        <text x={cx + 70} y={midY - (semPx + mddPx) / 2 + 2} fontSize={8.5} fill="#e67e22">Possibly real —</text>
        <text x={cx + 70} y={midY - (semPx + mddPx) / 2 + 13} fontSize={8.5} fill="#e67e22">high chance of error</text>

        {/* Error zone label */}
        <text x={cx + cw / 2 + 10} y={midY + 5} fontSize={8.5} fill="#c0392b" textAnchor="middle">Random measurement error</text>
      </svg>
    </div>
  );
}

/* ── Registry ────────────────────────────────────────────────────────────── */
export const RELIABILITY_DIAGRAM_COMPONENTS = {
  'reliability-types':      ReliabilityTypesDiagram,
  'kappa-overview':         KappaOverviewDiagram,
  'crosstab-table':         CrosstabTableDiagram,
  'raw-agreement-diagram':  RawAgreementDiagram,
  'expected-agree-diagram': ExpectedAgreeDiagram,
  'kappa-scale':            KappaScaleDiagram,
  'cv-diagram':             CVDiagram,
  'sem-diagram':            SEMDiagram,
  'mdd-diagram':            MDDDiagram,
};
