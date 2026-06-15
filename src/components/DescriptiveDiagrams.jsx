import './DescriptiveDiagrams.css';

/* ── 2.1  Central Tendency — dot-plot comparison ─────────────────────────── */
export function CentralTendencyDiagram() {
  const balanced  = [72, 75, 78, 81, 84];
  const withOutlier = [72, 75, 78, 81, 130];

  const mean = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;
  const median = (arr) => {
    const s = [...arr].sort((a, b) => a - b);
    const m = Math.floor(s.length / 2);
    return s.length % 2 === 0 ? (s[m - 1] + s[m]) / 2 : s[m];
  };

  const bMean   = mean(balanced);      // 78
  const bMedian = median(balanced);    // 78
  const oMean   = mean(withOutlier);   // 87.2
  const oMedian = median(withOutlier); // 78

  // Map a value to a % position across the axis (domain 65–140)
  const MIN = 65, MAX = 140;
  const pct = (v) => ((v - MIN) / (MAX - MIN)) * 100;

  const Panel = ({ title, values, meanVal, medianVal, sameLabel }) => (
    <div className="ctd-panel">
      <div className="ctd-panel__title">{title}</div>
      <div className="ctd-track">
        {/* axis */}
        <div className="ctd-axis-line" />
        {/* dots */}
        {values.map((v, i) => (
          <div
            key={i}
            className={`ctd-dot${v === 130 ? ' ctd-dot--outlier' : ''}`}
            style={{ left: `${pct(v)}%` }}
            title={`${v} kg`}
          />
        ))}
        {/* mean: label at top, line descends to axis */}
        <span className="ctd-mean-label" style={{ left: `${pct(meanVal)}%` }}>
          {`x̄ = ${meanVal % 1 === 0 ? meanVal : meanVal.toFixed(1)} kg`}
        </span>
        <div className="ctd-mean-line" style={{ left: `${pct(meanVal)}%` }} />
        {/* median: line descends from axis, label below */}
        <div className="ctd-median-line" style={{ left: `${pct(medianVal)}%` }} />
        <span className="ctd-median-label" style={{ left: `${pct(medianVal)}%` }}>
          {`M = ${medianVal} kg`}
        </span>
        {/* axis ticks */}
        <div className="ctd-ticks">
          {[70, 80, 90, 100, 110, 120, 130].map((t) => (
            <span key={t} style={{ left: `${pct(t)}%` }}>{t}</span>
          ))}
        </div>
      </div>
      <div className={`ctd-verdict${sameLabel ? ' ctd-verdict--same' : ' ctd-verdict--diff'}`}>
        {sameLabel
          ? '✓ Mean and median coincide — the distribution is balanced'
          : '⚠ Outlier pulls the mean up; median stays at the true centre'}
      </div>
    </div>
  );

  return (
    <div className="dd ctd">
      <p className="dd-heading">Body mass (kg) — 5 patients</p>
      <Panel
        title="Without outlier"
        values={balanced}
        meanVal={bMean}
        medianVal={bMedian}
        sameLabel
      />
      <Panel
        title="With outlier (★ 130 kg)"
        values={withOutlier}
        meanVal={oMean}
        medianVal={oMedian}
        sameLabel={false}
      />
      <div className="ctd-legend">
        <span className="ctd-legend__item ctd-legend__item--mean">— x̄ mean</span>
        <span className="ctd-legend__item ctd-legend__item--median">— M median</span>
        <span className="ctd-legend__item ctd-legend__item--outlier">★ outlier</span>
      </div>
    </div>
  );
}

/* ── 2.1.1  Mean ─────────────────────────────────────────────────────────── */
export function MeanDiagram() {
  const values = [95, 100, 88, 110, 105, 102];
  const sum = values.reduce((a, b) => a + b, 0);
  const mean = sum / values.length;

  return (
    <div className="dd dd--mean">
      <p className="dd-heading">Knee flexion ROM — 6 patients</p>

      <div className="dd-value-row">
        {values.map((v, i) => (
          <div key={i} className="dd-value-box">
            {`\\(x_${i + 1}\\)`}
            <span className="dd-value-box__num">{v}°</span>
          </div>
        ))}
      </div>

      <div className="dd-formula-block">
        <span className="dd-formula-text">
          {'\\[\\bar{x} = \\frac{\\sum_{i=1}^{n} x_i}{n} = \\frac{600}{6} = 100^\\circ\\]'}
        </span>
      </div>

      <div className="dd-mean-result">
        <span className="dd-mean-chip">{'\\(\\bar{x} = 100^\\circ\\)'}</span>
        <span className="dd-mean-label">sample mean</span>
      </div>

      <div className="dd-symbol-key">
        <span>{'\\(\\bar{x}\\) = sample mean'}</span>
        <span>{'\\(\\mu\\) = population mean'}</span>
        <span>{'\\(n\\) = sample size'}</span>
      </div>
    </div>
  );
}

/* ── 2.1.2  Median ───────────────────────────────────────────────────────── */
export function MedianDiagram() {
  const values = [0.42, 0.55, 0.68, 0.71, 0.89, 0.92, 1.05];

  return (
    <div className="dd dd--median">
      <p className="dd-heading">Gait speed (m/s) — 7 stroke patients</p>
      <p className="dd-subheading">Step 1 — order values from smallest to largest:</p>

      <div className="dd-ordered-row">
        {values.map((v, i) => (
          <div
            key={i}
            className={`dd-ordered-box${i === 3 ? ' dd-ordered-box--median' : ''}`}
          >
            <span className="dd-ordered-pos">{i + 1}</span>
            <span className="dd-ordered-val">{v}</span>
          </div>
        ))}
      </div>

      <div className="dd-median-arrow">
        <div className="dd-median-arrow__line" />
        <span>{'\\(M = 0.71\\) m/s'}</span>
        <div className="dd-median-arrow__label">{'position \\(\\frac{n+1}{2} = 4^{\\text{th}}\\)'}</div>
      </div>

      <p className="dd-caption">
        {'With \\(n = 7\\) (odd), the median is the 4th value. Exactly half the patients walk faster, half walk slower.'}
      </p>
    </div>
  );
}

/* ── 2.1.3  Variance ─────────────────────────────────────────────────────── */
export function VarianceDiagram() {
  const values = [120, 135, 142, 128, 115];
  const mean = 128;
  const rows = values.map((v, i) => ({
    patient: `P${i + 1}`,
    value: v,
    dev: v - mean,
    sq: (v - mean) ** 2,
  }));
  const sumSq = rows.reduce((a, r) => a + r.sq, 0); // 478

  return (
    <div className="dd dd--variance">
      <p className="dd-heading">Shoulder strength (N) — variance step by step</p>

      <div className="var-table">
        <div className="var-table__head">
          <span>Patient</span>
          <span>xᵢ (N)</span>
          <span>xᵢ − x̄</span>
          <span>(xᵢ − x̄)²</span>
        </div>
        {rows.map((r) => (
          <div key={r.patient} className="var-table__row">
            <span className="var-table__patient">{r.patient}</span>
            <span>{r.value}</span>
            <span className={r.dev >= 0 ? 'var-dev--pos' : 'var-dev--neg'}>
              {r.dev > 0 ? `+${r.dev}` : r.dev}
            </span>
            <span className="var-sq">{r.sq}</span>
          </div>
        ))}
        <div className="var-table__footer">
          <span className="var-table__sigma">Σ</span>
          <span></span>
          <span className="var-table__sigma">0</span>
          <span className="var-table__sigma">{sumSq}</span>
        </div>
      </div>

      <div className="dd-formula-block">
        <span className="dd-formula-text">
          {'\\[s^2 = \\frac{\\sum(x_i - \\bar{x})^2}{n-1} = \\frac{478}{4} = 119.5 \\text{ N}^2\\]'}
        </span>
      </div>

      <p className="dd-caption">
        x̄ = 128 N · Deviations always sum to zero · s² = 119.5 N²
      </p>
    </div>
  );
}

/* ── 2.1.4  Standard Deviation ───────────────────────────────────────────── */
export function StdDeviationDiagram() {
  const values = [115, 120, 128, 135, 142];
  const mean = 128, sd = 10.9;
  const W = 280, H = 72;
  const xL = 24, xR = 258;
  const MIN = 103, MAX = 155;
  const toX = (v) => xL + ((v - MIN) / (MAX - MIN)) * (xR - xL);
  const axY = 38;
  const bL = toX(mean - sd);
  const bR = toX(mean + sd);
  const mX = toX(mean);

  return (
    <div className="dd dd--sd">
      <p className="dd-heading">Shoulder strength (N) — spread around mean</p>
      <svg viewBox={`0 0 ${W} ${H}`} className="dd-sd-svg" role="img"
        aria-label="Number line showing 5 patient values with mean and plus-minus 1 SD band highlighted">
        {/* ±1 SD shaded band */}
        <rect x={bL} y={axY - 10} width={bR - bL} height={20} fill="#2471a3" opacity={0.15} rx={2} />
        {/* axis */}
        <line x1={xL} y1={axY} x2={xR} y2={axY} stroke="#b0bec5" strokeWidth={1.5} />
        {/* band bracket edges */}
        <line x1={bL} y1={axY - 14} x2={bL} y2={axY + 14} stroke="#2471a3" strokeWidth={1} strokeDasharray="3 2" />
        <line x1={bR} y1={axY - 14} x2={bR} y2={axY + 14} stroke="#2471a3" strokeWidth={1} strokeDasharray="3 2" />
        {/* mean line */}
        <line x1={mX} y1={6} x2={mX} y2={axY + 10} stroke="#1a3a5c" strokeWidth={2} />
        <text x={mX} y={5} textAnchor="middle" fontSize={7.5} fontWeight={700} fill="#1a3a5c">
          x̄ = 128 N
        </text>
        {/* data dots */}
        {values.map((v, i) => (
          <circle key={i} cx={toX(v)} cy={axY} r={4.5} fill="#e67e22" stroke="#fff" strokeWidth={1.5} />
        ))}
        {/* tick marks + labels */}
        {[110, 120, 130, 140].map((t) => (
          <g key={t}>
            <line x1={toX(t)} y1={axY - 2} x2={toX(t)} y2={axY + 5} stroke="#ccc" strokeWidth={1} />
            <text x={toX(t)} y={axY + 17} textAnchor="middle" fontSize={6.5} fill="#999">{t}</text>
          </g>
        ))}
      </svg>
      <div className="dd-formula-block">
        <span className="dd-formula-text">
          {'\\[s = \\sqrt{s^2} = \\sqrt{119.5} \\approx 10.9 \\text{ N}\\]'}
        </span>
      </div>
      <p className="dd-caption">
        Shaded band = x̄ ± 1 SD (117.1 – 138.9 N) · ≈68% of values if normally distributed · Orange dots: 5 patients
      </p>
    </div>
  );
}

/* ── 2.1.5  Standard Error ───────────────────────────────────────────────── */
export function StdErrorDiagram() {
  return (
    <div className="dd dd--sem">
      <p className="dd-heading">SD vs. Standard Error of the Mean</p>

      <div className="sem-compare">
        <div className="sem-card sem-card--sd">
          <div className="sem-card__title">Standard Deviation (s)</div>
          <div className="sem-card__formula">
            {'\\(s = \\sqrt{\\frac{\\sum(x_i-\\bar{x})^2}{n-1}}\\)'}
          </div>
          <div className="sem-card__what">Spread of <strong>individuals</strong></div>
          <div className="sem-card__desc">How variable are the patients in this sample?</div>
          <div className="sem-card__rule">Stable — does not shrink with larger n</div>
        </div>
        <div className="sem-card sem-card--sem">
          <div className="sem-card__title">Standard Error (SEM)</div>
          <div className="sem-card__formula">
            {'\\(\\text{SEM} = \\frac{s}{\\sqrt{n}}\\)'}
          </div>
          <div className="sem-card__what">Precision of the <strong>mean</strong></div>
          <div className="sem-card__desc">How precisely does x̄ estimate the true μ?</div>
          <div className="sem-card__rule">Shrinks as n increases (÷ √n)</div>
        </div>
      </div>

      <div className="dd-formula-block">
        <span className="dd-formula-text">
          {'\\[\\text{SEM} = \\frac{s}{\\sqrt{n}} = \\frac{10.9}{\\sqrt{5}} \\approx 4.9 \\text{ N}\\]'}
        </span>
      </div>

      <p className="dd-caption">
        Shoulder strength · s = 10.9 N · n = 5 · SEM = 4.9 N<br />
        Use SD to describe patient variability — use SEM for confidence intervals and hypothesis tests.
      </p>
    </div>
  );
}

/* ── 2.2  Graph Selector (Types of Graphs parent) ────────────────────────── */
export function GraphSelectorDiagram() {
  const types = [
    {
      name: 'Bar Chart',
      color: '#2e86ab',
      when: 'Comparing groups or categories',
      icon: (
        <svg viewBox="0 0 50 36" width="50" height="36" aria-hidden="true">
          <rect x="3"  y="10" width="8" height="26" fill="#2e86ab" rx="1" />
          <rect x="14" y="4"  width="8" height="32" fill="#2e86ab" rx="1" />
          <rect x="25" y="16" width="8" height="20" fill="#2e86ab" rx="1" />
          <rect x="36" y="8"  width="8" height="28" fill="#2e86ab" rx="1" />
        </svg>
      ),
    },
    {
      name: 'Line Graph',
      color: '#e84855',
      when: 'Change over time',
      icon: (
        <svg viewBox="0 0 50 36" width="50" height="36" aria-hidden="true">
          <polyline points="2,30 12,20 24,12 36,18 48,6" fill="none" stroke="#e84855" strokeWidth="2.5" strokeLinejoin="round" />
          {[2, 12, 24, 36, 48].map((x, i) => (
            <circle key={i} cx={x} cy={[30, 20, 12, 18, 6][i]} r="3" fill="#e84855" />
          ))}
        </svg>
      ),
    },
    {
      name: 'Pie Chart',
      color: '#3bb273',
      when: 'Proportions of a whole',
      icon: (
        <svg viewBox="0 0 36 36" width="36" height="36" aria-hidden="true">
          <circle cx="18" cy="18" r="16" fill="#e8f5ed" />
          <path d="M18,18 L18,2 A16,16 0 0,1 34,18 Z" fill="#3bb273" />
          <path d="M18,18 L34,18 A16,16 0 0,1 9,32 Z" fill="#2e86ab" />
          <path d="M18,18 L9,32 A16,16 0 0,1 18,2 Z" fill="#f18f01" />
        </svg>
      ),
    },
    {
      name: 'Scatter Plot',
      color: '#f18f01',
      when: 'Relationship between two variables',
      icon: (
        <svg viewBox="0 0 50 36" width="50" height="36" aria-hidden="true">
          {[[6,30],[14,22],[20,26],[28,14],[34,18],[40,8],[46,12]].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="3" fill="#f18f01" />
          ))}
          <line x1="4" y1="33" x2="48" y2="5" stroke="#f18f01" strokeWidth="1" strokeDasharray="3,3" opacity="0.5" />
        </svg>
      ),
    },
  ];

  return (
    <div className="dd dd--graph-selector">
      {types.map((t) => (
        <div key={t.name} className="dd-graph-card" style={{ borderTopColor: t.color }}>
          <div className="dd-graph-card__icon">{t.icon}</div>
          <div className="dd-graph-card__name" style={{ color: t.color }}>{t.name}</div>
          <div className="dd-graph-card__when">{t.when}</div>
        </div>
      ))}
    </div>
  );
}

/* ── 2.2.1  Bar Chart ────────────────────────────────────────────────────── */
export function BarChartDiagram() {
  const data = [
    { label: 'Knee',     value: 42, color: '#2e86ab' },
    { label: 'Ankle',    value: 28, color: '#e84855' },
    { label: 'Shoulder', value: 20, color: '#3bb273' },
    { label: 'Back',     value: 18, color: '#f18f01' },
    { label: 'Hip',      value: 12, color: '#9b5de5' },
  ];
  const max = 42;

  return (
    <div className="dd dd--bar-chart">
      <p className="dd-heading">Injury location — 120 athletes</p>
      <div className="dd-bar-chart">
        {data.map((d) => (
          <div key={d.label} className="dd-bar-col">
            <span className="dd-bar-count">{d.value}</span>
            <div
              className="dd-bar"
              style={{
                height: `${(d.value / max) * 110}px`,
                background: d.color,
              }}
            />
            <span className="dd-bar-label">{d.label}</span>
          </div>
        ))}
      </div>
      <div className="dd-axis-label">Number of athletes</div>
      <p className="dd-caption">
        Gaps between bars signal discrete, unordered categories — the defining feature of a bar chart vs. a histogram.
      </p>
    </div>
  );
}

/* ── 2.2.2  Pie Chart ────────────────────────────────────────────────────── */
export function PieChartDiagram() {
  const slices = [
    { label: 'LBP',          pct: 40, color: '#2e86ab' },
    { label: 'Knee OA',      pct: 25, color: '#e84855' },
    { label: 'Stroke',       pct: 20, color: '#3bb273' },
    { label: 'Hip fracture', pct: 10, color: '#f18f01' },
    { label: 'Other',        pct:  5, color: '#9b5de5' },
  ];

  const gradient = slices.reduce((acc, s, i) => {
    const prev = slices.slice(0, i).reduce((s, x) => s + x.pct, 0);
    return `${acc}, ${s.color} ${prev}% ${prev + s.pct}%`;
  }, 'conic-gradient(from 0deg');

  return (
    <div className="dd dd--pie-chart">
      <p className="dd-heading">Primary diagnoses — 200 patients</p>
      <div className="dd-pie-wrap">
        <div className="dd-pie" style={{ background: `${gradient})` }} aria-hidden="true" />
        <ul className="dd-pie-legend">
          {slices.map((s) => (
            <li key={s.label} className="dd-pie-legend-item">
              <span className="dd-pie-swatch" style={{ background: s.color }} />
              <span>{s.label}</span>
              <span className="dd-pie-pct">{s.pct}%</span>
            </li>
          ))}
        </ul>
      </div>
      <p className="dd-caption">
        LBP + Knee OA = 65% of admissions. Best suited to ≤ 5 categories with clearly different proportions.
      </p>
    </div>
  );
}

/* ── 2.2.3  Histogram ────────────────────────────────────────────────────── */
export function HistogramDiagram() {
  const bins = [
    { label: '[60, 70)',  freq: 3  },
    { label: '[70, 80)',  freq: 8  },
    { label: '[80, 90)',  freq: 15 },
    { label: '[90, 100)', freq: 14 },
    { label: '[100, 110)',freq: 7  },
    { label: '[110, 120)',freq: 3  },
  ];
  const max = 15;

  const W = 300, H = 152;
  const xL = 30, xR = 290;
  const yBase = 100, yTop = 12;
  const barW = (xR - xL) / bins.length;

  return (
    <div className="dd dd--histogram">
      <p className="dd-heading">Knee flexion ROM (°) at baseline — 50 patients</p>
      <svg viewBox={`0 0 ${W} ${H}`} className="dd-hist-svg" style={{ overflow: 'visible' }}
        role="img" aria-label="Histogram of knee flexion ROM at baseline">
        <defs>
          <linearGradient id="dd-hist-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2e86ab" />
            <stop offset="100%" stopColor="#1a3a5c" />
          </linearGradient>
        </defs>

        {/* Bars */}
        {bins.map((b, i) => {
          const barH = (b.freq / max) * (yBase - yTop);
          const x = xL + i * barW;
          const cx = x + barW / 2;
          return (
            <g key={b.label}>
              <rect x={x} y={yBase - barH} width={barW} height={barH}
                fill="url(#dd-hist-grad)" stroke="white" strokeWidth="0.5" />
              <text x={cx} y={yBase - barH - 3}
                textAnchor="middle" fontSize="8" fill="#64748b">{b.freq}</text>
              <text
                transform={`translate(${cx.toFixed(1)},${yBase + 5}) rotate(-40)`}
                textAnchor="end" fontSize="7.5" fill="#64748b">
                {b.label}
              </text>
            </g>
          );
        })}

        {/* Axes */}
        <line x1={xL} y1={yBase} x2={xR} y2={yBase} stroke="#94a3b8" strokeWidth="1.5" />
        <line x1={xL} y1={yTop} x2={xL} y2={yBase} stroke="#94a3b8" strokeWidth="1.5" />

        {/* y-axis ticks and labels */}
        {[0, 5, 10, 15].map(v => {
          const y = yBase - (v / max) * (yBase - yTop);
          return (
            <g key={v}>
              <line x1={xL - 3} y1={y} x2={xL} y2={y} stroke="#94a3b8" strokeWidth="1" />
              <text x={xL - 5} y={y + 3} textAnchor="end" fontSize="8" fill="#64748b">{v}</text>
            </g>
          );
        })}

        {/* Axis titles */}
        <text x={(xL + xR) / 2} y={H - 2}
          textAnchor="middle" fontSize="7.5" fill="#64748b">ROM interval (°)</text>
        <text transform={`rotate(-90 9 ${(yTop + yBase) / 2})`}
          x="9" y={(yTop + yBase) / 2 + 3}
          textAnchor="middle" fontSize="7.5" fill="#64748b">Frequency</text>
      </svg>
      <p className="dd-caption">
        No gaps between bars — the variable is continuous. Distribution is approximately symmetric and bell-shaped.
      </p>
    </div>
  );
}

/* ── 2.2.3.1  Normal Distribution ───────────────────────────────────────── */
export function NormalDistributionDiagram() {
  const pdf = (z) => Math.exp(-0.5 * z * z) / Math.sqrt(2 * Math.PI);
  const pdfMax = pdf(0);

  const W = 320, H = 148;
  const xL = 18, xR = 302;
  const yBase = 122, yTop = 24;
  const scale = yBase - yTop;

  const toX = (z) => xL + ((z + 3.5) / 7) * (xR - xL);
  const toY = (z) => yBase - (pdf(z) / pdfMax) * scale;

  const regionPath = (z1, z2) => {
    const n = 40;
    const pts = Array.from({ length: n + 1 }, (_, i) => {
      const z = z1 + (i / n) * (z2 - z1);
      return `${toX(z).toFixed(1)},${toY(z).toFixed(1)}`;
    }).join(' ');
    return `M ${toX(z1).toFixed(1)},${yBase} L ${pts} L ${toX(z2).toFixed(1)},${yBase} Z`;
  };

  const curvePoints = Array.from({ length: 141 }, (_, i) => {
    const z = -3.5 + (i / 140) * 7;
    return `${toX(z).toFixed(1)},${toY(z).toFixed(1)}`;
  }).join(' ');

  const sigmas = [-3, -2, -1, 0, 1, 2, 3];
  const sigmaLabels = ['-3σ', '-2σ', '-1σ', 'μ', '+1σ', '+2σ', '+3σ'];

  const pctLabels = [
    { z: -2.3, pct: '2.1%',  y: 117, size: 6   },
    { z: -1.5, pct: '13.6%', y: 98,  size: 7   },
    { z: -0.5, pct: '34.1%', y: 75,  size: 7.5 },
    { z:  0.5, pct: '34.1%', y: 75,  size: 7.5 },
    { z:  1.5, pct: '13.6%', y: 98,  size: 7   },
    { z:  2.3, pct: '2.1%',  y: 117, size: 6   },
  ];

  return (
    <div className="dd dd--normal">
      <p className="dd-heading">Normal Distribution — Bell Curve</p>
      <svg viewBox={`0 0 ${W} ${H}`} className="dd-normal-svg" role="img"
        aria-label="Bell curve with 68-95-99.7 empirical rule regions">

        {/* Shaded regions — back to front */}
        <path d={regionPath(-3, -2)} fill="#b8d9ec" />
        <path d={regionPath( 2,  3)} fill="#b8d9ec" />
        <path d={regionPath(-2, -1)} fill="#6fb0d1" />
        <path d={regionPath( 1,  2)} fill="#6fb0d1" />
        <path d={regionPath(-1,  0)} fill="#2e86ab" />
        <path d={regionPath( 0,  1)} fill="#2e86ab" />

        {/* Sigma vertical guide lines */}
        {sigmas.filter(s => s !== 0).map(s => (
          <line key={s}
            x1={toX(s).toFixed(1)} y1={toY(s).toFixed(1)}
            x2={toX(s).toFixed(1)} y2={yBase}
            stroke="rgba(255,255,255,0.55)" strokeWidth="1" strokeDasharray="3,2" />
        ))}
        <line x1={toX(0).toFixed(1)} y1={yTop}
              x2={toX(0).toFixed(1)} y2={yBase}
          stroke="rgba(255,255,255,0.75)" strokeWidth="1.5" />

        {/* Bell curve outline */}
        <polyline points={curvePoints} fill="none" stroke="#1a3a5c" strokeWidth="1.5" />

        {/* Baseline */}
        <line x1={xL} y1={yBase} x2={xR} y2={yBase} stroke="#64748b" strokeWidth="1" />

        {/* Percentage labels inside regions */}
        {pctLabels.map(({ z, pct, y, size }) => (
          <text key={z} x={toX(z).toFixed(1)} y={y}
            textAnchor="middle" fontSize={size} fontWeight="600" fill="white">
            {pct}
          </text>
        ))}

        {/* Mean = Median = Mode annotation above peak */}
        <text x={toX(0).toFixed(1)} y={yTop - 7}
          textAnchor="middle" fontSize="7" fill="#1a3a5c" fontWeight="600">
          mean = median = mode
        </text>

        {/* Sigma axis labels */}
        {sigmas.map((s, i) => (
          <text key={s} x={toX(s).toFixed(1)} y={H - 4}
            textAnchor="middle" fontSize="8" fill="#334155">
            {sigmaLabels[i]}
          </text>
        ))}
      </svg>

      {/* Empirical rule legend */}
      <div className="dd-normal-rule">
        <div className="dd-rule-row">
          <span className="dd-rule-swatch" style={{ background: '#2e86ab' }} />
          <span>{'\\(\\pm 1\\sigma\\): 68%'}</span>
        </div>
        <div className="dd-rule-row">
          <span className="dd-rule-swatch" style={{ background: '#6fb0d1' }} />
          <span>{'\\(\\pm 2\\sigma\\): 95%'}</span>
        </div>
        <div className="dd-rule-row">
          <span className="dd-rule-swatch" style={{ background: '#b8d9ec' }} />
          <span>{'\\(\\pm 3\\sigma\\): 99.7%'}</span>
        </div>
      </div>
    </div>
  );
}

/* ── 2.2.4  Line Graph ───────────────────────────────────────────────────── */
export function LineGraphDiagram() {
  const weeks = [0, 2, 4, 6, 8];
  const xPos  = [50, 100, 150, 200, 250];

  const intervention = [7.5, 5.8, 4.2, 3.0, 2.0];
  const control      = [7.3, 6.5, 5.8, 5.2, 4.8];

  const toY = (nprs) => 120 - nprs * 10;

  const intPts  = xPos.map((x, i) => `${x},${toY(intervention[i])}`).join(' ');
  const ctrlPts = xPos.map((x, i) => `${x},${toY(control[i])}`).join(' ');

  return (
    <div className="dd dd--line-graph">
      <p className="dd-heading">NPRS (0–10) over 8 weeks of treatment</p>
      <svg viewBox="0 0 290 145" className="dd-line-svg" role="img" aria-label="Line graph comparing NPRS scores over time between manual therapy and control groups">

        {/* Grid lines */}
        {[0, 2, 4, 6, 8, 10].map((v) => (
          <line key={v} x1="40" x2="270" y1={toY(v)} y2={toY(v)}
            stroke="#e2e8f0" strokeWidth="1" />
        ))}

        {/* y-axis */}
        <line x1="40" y1="20" x2="40" y2="122" stroke="#94a3b8" strokeWidth="1.5" />
        {/* x-axis */}
        <line x1="40" y1="122" x2="270" y2="122" stroke="#94a3b8" strokeWidth="1.5" />

        {/* y-axis labels */}
        {[0, 2, 4, 6, 8, 10].map((v) => (
          <text key={v} x="34" y={toY(v) + 4} textAnchor="end" fontSize="9" fill="#64748b">{v}</text>
        ))}

        {/* x-axis labels */}
        {weeks.map((w, i) => (
          <text key={w} x={xPos[i]} y="134" textAnchor="middle" fontSize="9" fill="#64748b">{`Wk ${w}`}</text>
        ))}

        {/* Axis titles */}
        <text x="10" y="75" textAnchor="middle" fontSize="8" fill="#64748b" transform="rotate(-90 10 75)">NPRS score</text>
        <text x="155" y="143" textAnchor="middle" fontSize="8" fill="#64748b">Week</text>

        {/* Control line */}
        <polyline points={ctrlPts} fill="none" stroke="#94a3b8" strokeWidth="2" strokeDasharray="5,3" strokeLinejoin="round" />
        {xPos.map((x, i) => (
          <circle key={i} cx={x} cy={toY(control[i])} r="3.5" fill="#94a3b8" />
        ))}

        {/* Intervention line */}
        <polyline points={intPts} fill="none" stroke="#2e86ab" strokeWidth="2.5" strokeLinejoin="round" />
        {xPos.map((x, i) => (
          <circle key={i} cx={x} cy={toY(intervention[i])} r="3.5" fill="#2e86ab" />
        ))}

        {/* Legend */}
        <rect x="155" y="22" width="110" height="34" fill="white" fillOpacity="0.9" rx="4" />
        <line x1="160" y1="33" x2="178" y2="33" stroke="#2e86ab" strokeWidth="2.5" />
        <circle cx="169" cy="33" r="3" fill="#2e86ab" />
        <text x="182" y="37" fontSize="8.5" fill="#334155">Manual therapy</text>
        <line x1="160" y1="47" x2="178" y2="47" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4,2" />
        <circle cx="169" cy="47" r="3" fill="#94a3b8" />
        <text x="182" y="51" fontSize="8.5" fill="#334155">Control</text>
      </svg>
      <p className="dd-caption">
        Both groups show a downward trend; the steeper slope in the manual therapy group suggests faster pain reduction.
      </p>
    </div>
  );
}

/* ── 2.2.5  Scatter Plot ─────────────────────────────────────────────────── */
export function ScatterDiagram() {
  const points = [
    [21, 520], [22, 490], [23, 480], [24, 460], [25, 440],
    [26, 420], [27, 410], [28, 380], [29, 360], [30, 340],
    [31, 310], [32, 280], [33, 260], [34, 240],
  ];

  const toX = (bmi)  => 40 + ((bmi - 20) / 15) * 200;
  const toY = (dist) => 120 - ((dist - 200) / 350) * 105;

  return (
    <div className="dd dd--scatter">
      <p className="dd-heading">BMI vs. 6MWT distance — 14 patients with heart failure</p>
      <svg viewBox="0 0 270 150" className="dd-scatter-svg" role="img" aria-label="Scatter plot showing negative association between BMI and 6-minute walk test distance">

        {/* Grid */}
        {[200, 300, 400, 500].map((d) => (
          <line key={d} x1="40" x2="248" y1={toY(d)} y2={toY(d)} stroke="#e2e8f0" strokeWidth="1" />
        ))}
        {[20, 25, 30, 35].map((b) => (
          <line key={b} x1={toX(b)} x2={toX(b)} y1="15" y2="122" stroke="#e2e8f0" strokeWidth="1" />
        ))}

        {/* Axes */}
        <line x1="40" y1="15" x2="40" y2="122" stroke="#94a3b8" strokeWidth="1.5" />
        <line x1="40" y1="122" x2="250" y2="122" stroke="#94a3b8" strokeWidth="1.5" />

        {/* Trend line */}
        <line x1={toX(20)} y1={toY(530)} x2={toX(35)} y2={toY(215)} stroke="#2e86ab" strokeWidth="1.5" strokeDasharray="4,3" opacity="0.5" />

        {/* y-axis labels */}
        {[200, 300, 400, 500].map((d) => (
          <text key={d} x="35" y={toY(d) + 4} textAnchor="end" fontSize="8" fill="#64748b">{d}</text>
        ))}

        {/* x-axis labels */}
        {[20, 25, 30, 35].map((b) => (
          <text key={b} x={toX(b)} y="132" textAnchor="middle" fontSize="8" fill="#64748b">{b}</text>
        ))}

        {/* Axis titles */}
        <text x="10" y="72" textAnchor="middle" fontSize="8" fill="#64748b" transform="rotate(-90 10 72)">6MWT (m)</text>
        <text x="145" y="143" textAnchor="middle" fontSize="8" fill="#64748b">{'BMI (kg/m²)'}</text>

        {/* Data points */}
        {points.map(([bmi, dist], i) => (
          <circle key={i} cx={toX(bmi)} cy={toY(dist)} r="4" fill="#2e86ab" fillOpacity="0.75" />
        ))}
      </svg>
      <p className="dd-caption">
        Each dot = one patient. The downward trend (negative association) suggests higher BMI is linked to shorter walk distance.
      </p>
    </div>
  );
}

/* ── 2.2.6  Boxplot ──────────────────────────────────────────────────────── */
export function BoxplotDiagram() {
  // Knee extension torque: Min=95, Q1=115, Med=128, Q3=142, Max=165
  const range = { min: 80, max: 185 };
  const toX = (v) => 20 + ((v - range.min) / (range.max - range.min)) * 215;

  const stats = { min: 95, q1: 115, med: 128, q3: 142, max: 165 };
  const boxTop = 28, boxBot = 52, midY = 40;

  return (
    <div className="dd dd--boxplot">
      <p className="dd-heading">Knee extension torque (N·m) — pre-rehabilitation</p>
      <svg viewBox="0 0 255 90" className="dd-boxplot-svg" role="img" aria-label="Horizontal boxplot of knee extension torque">

        {/* Whisker left */}
        <line x1={toX(stats.min)} y1={midY} x2={toX(stats.q1)} y2={midY} stroke="#2e86ab" strokeWidth="2" />
        <line x1={toX(stats.min)} y1={boxTop + 4} x2={toX(stats.min)} y2={boxBot - 4} stroke="#2e86ab" strokeWidth="2" />

        {/* Box */}
        <rect x={toX(stats.q1)} y={boxTop} width={toX(stats.q3) - toX(stats.q1)} height={boxBot - boxTop}
          fill="rgba(46,134,171,0.12)" stroke="#2e86ab" strokeWidth="2" rx="2" />

        {/* Median line */}
        <line x1={toX(stats.med)} y1={boxTop} x2={toX(stats.med)} y2={boxBot} stroke="#1a3a5c" strokeWidth="2.5" />

        {/* Whisker right */}
        <line x1={toX(stats.q3)} y1={midY} x2={toX(stats.max)} y2={midY} stroke="#2e86ab" strokeWidth="2" />
        <line x1={toX(stats.max)} y1={boxTop + 4} x2={toX(stats.max)} y2={boxBot - 4} stroke="#2e86ab" strokeWidth="2" />

        {/* Axis */}
        <line x1="18" y1="60" x2="238" y2="60" stroke="#e2e8f0" strokeWidth="1" />

        {/* Labels above */}
        {[
          { v: stats.min, label: 'Min\n95' },
          { v: stats.q1,  label: 'Q₁\n115' },
          { v: stats.med, label: 'Med\n128' },
          { v: stats.q3,  label: 'Q₃\n142' },
          { v: stats.max, label: 'Max\n165' },
        ].map(({ v, label }) => {
          const [top, bot] = label.split('\n');
          return (
            <g key={v}>
              <text x={toX(v)} y={boxTop - 10} textAnchor="middle" fontSize="7.5" fill="#64748b">{top}</text>
              <text x={toX(v)} y={boxTop - 2}  textAnchor="middle" fontSize="8.5" fontWeight="600" fill="#1a3a5c">{bot}</text>
            </g>
          );
        })}

        {/* IQR brace label */}
        <text x={(toX(stats.q1) + toX(stats.q3)) / 2} y={boxBot + 14} textAnchor="middle" fontSize="8" fill="#2e86ab">
          {'IQR = 27 N·m'}
        </text>
        <line x1={toX(stats.q1)} y1={boxBot + 6} x2={toX(stats.q3)} y2={boxBot + 6} stroke="#2e86ab" strokeWidth="1" />

        <text x="128" y="86" textAnchor="middle" fontSize="8" fill="#64748b">{'Torque (N·m)'}</text>
      </svg>
      <p className="dd-caption">
        The box contains the middle 50% of values (IQR). Whiskers extend to the minimum and maximum. The median line is slightly left of centre — a mild right skew.
      </p>
    </div>
  );
}

/* ── 2.4  Outliers ───────────────────────────────────────────────────────── */
export function OutliersDiagram() {
  // Grip strength (kg): Min=22, Q1=29, Med=34, Q3=40, Max(non-outlier)=42, Outlier=85
  // Upper fence = 40 + 1.5*11 = 56.5
  const rangeMin = 10, rangeMax = 95;
  const toX = (v) => 15 + ((v - rangeMin) / (rangeMax - rangeMin)) * 200;

  const stats = { min: 22, q1: 29, med: 34, q3: 40, whiskerMax: 42, fence: 56.5, outlier: 85 };
  const boxTop = 28, boxBot = 52, midY = 40;

  return (
    <div className="dd dd--outliers">
      <p className="dd-heading">Grip strength (kg) — 9 patients</p>
      <svg viewBox="0 0 230 115" className="dd-boxplot-svg" style={{ overflow: 'visible' }} role="img" aria-label="Horizontal boxplot of grip strength with outlier marked">

        {/* Upper fence (dashed) */}
        <line x1={toX(stats.fence)} y1={boxTop - 6} x2={toX(stats.fence)} y2={boxBot + 6}
          stroke="#e84855" strokeWidth="1.5" strokeDasharray="3,2" />
        <text x={toX(stats.fence)} y={boxTop - 9} textAnchor="middle" fontSize="7" fill="#e84855">fence 56.5</text>

        {/* Whisker left */}
        <line x1={toX(stats.min)} y1={midY} x2={toX(stats.q1)} y2={midY} stroke="#2e86ab" strokeWidth="2" />
        <line x1={toX(stats.min)} y1={boxTop + 4} x2={toX(stats.min)} y2={boxBot - 4} stroke="#2e86ab" strokeWidth="2" />

        {/* Box */}
        <rect x={toX(stats.q1)} y={boxTop} width={toX(stats.q3) - toX(stats.q1)} height={boxBot - boxTop}
          fill="rgba(46,134,171,0.12)" stroke="#2e86ab" strokeWidth="2" rx="2" />

        {/* Median line */}
        <line x1={toX(stats.med)} y1={boxTop} x2={toX(stats.med)} y2={boxBot} stroke="#1a3a5c" strokeWidth="2.5" />

        {/* Whisker right — extends only to last non-outlier (42) */}
        <line x1={toX(stats.q3)} y1={midY} x2={toX(stats.whiskerMax)} y2={midY} stroke="#2e86ab" strokeWidth="2" />
        <line x1={toX(stats.whiskerMax)} y1={boxTop + 4} x2={toX(stats.whiskerMax)} y2={boxBot - 4} stroke="#2e86ab" strokeWidth="2" />

        {/* Outlier dot */}
        <circle cx={toX(stats.outlier)} cy={midY} r="5" fill="#e84855" fillOpacity="0.85" />
        <text x={toX(stats.outlier)} y={boxTop - 2} textAnchor="middle" fontSize="8.5" fontWeight="700" fill="#e84855">85</text>
        <text x={toX(stats.outlier)} y={boxTop - 11} textAnchor="middle" fontSize="7" fill="#e84855">outlier</text>

        {/* Axis */}
        <line x1="13" y1="60" x2="220" y2="60" stroke="#e2e8f0" strokeWidth="1" />

        {/* Key value labels — rotated for readability */}
        {[
          { v: stats.min,        label: '22'    },
          { v: stats.q1,         label: 'Q₁=29' },
          { v: stats.med,        label: 'M=34'  },
          { v: stats.q3,         label: 'Q₃=40' },
          { v: stats.whiskerMax, label: '42'    },
        ].map(({ v, label }) => (
          <text key={v}
            transform={`translate(${toX(v).toFixed(1)},${boxBot + 6}) rotate(-40)`}
            textAnchor="end" fontSize="7.5" fill="#64748b">
            {label}
          </text>
        ))}

        <text x="115" y="108" textAnchor="middle" fontSize="8" fill="#64748b">Grip strength (kg)</text>
      </svg>

      <div className="dd-fence-calc">
        <span>{'\\(\\text{IQR} = 40 - 29 = 11\\) kg'}</span>
        <span>{'Upper fence = \\(40 + 1.5 \\times 11 = 56.5\\) kg'}</span>
        <span className="dd-fence-flag">{'85 kg > 56.5 kg → flagged as potential outlier'}</span>
      </div>
    </div>
  );
}

/* ── 2.2.3.2  Central Limit Theorem ─────────────────────────────────────── */
export function CLTDiagram() {
  const W = 300, H = 155;
  const xL = 20, xR = 280, yBase = 128, yTop = 18;
  const xCenter = (xL + xR) / 2;
  const xScale = (xR - xL) / 8; // px per abstract unit, ±4 units shown

  const pdf = (v, se) => Math.exp(-0.5 * (v / se) ** 2) / (se * Math.sqrt(2 * Math.PI));
  const refMax = pdf(0, 0.45); // narrowest curve peak sets scale

  const curves = [
    { se: 1.3, color: '#b8d9ec', label: 'n = 5',  labelY: yBase - 16 },
    { se: 0.8, color: '#6fb0d1', label: 'n = 15', labelY: yBase - 32 },
    { se: 0.45, color: '#2e86ab', label: 'n = 30', labelY: yBase - 78 },
  ];

  const points = (se) =>
    Array.from({ length: 161 }, (_, i) => {
      const v = -4 + i * 0.05;
      const x = xCenter + v * xScale;
      const y = yBase - (pdf(v, se) / refMax) * (yBase - yTop);
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    }).join(' ');

  return (
    <div className="dd dd--clt">
      <p className="dd-heading">Sampling distribution of the mean</p>
      <svg viewBox={`0 0 ${W} ${H}`} className="dd-clt-svg" style={{ overflow: 'visible' }}
        role="img" aria-label="Three overlapping bell curves showing CLT convergence">
        {/* X axis */}
        <line x1={xL} y1={yBase} x2={xR} y2={yBase} stroke="#94a3b8" strokeWidth="1.5" />
        {/* μ vertical */}
        <line x1={xCenter} y1={yTop - 4} x2={xCenter} y2={yBase} stroke="#94a3b8" strokeWidth="1" strokeDasharray="3,2" />
        <text x={xCenter} y={yBase + 11} textAnchor="middle" fontSize="8" fill="#64748b">μ</text>

        {/* Curves — draw wide ones first so narrow sits on top */}
        {curves.map(({ se, color }) => (
          <polyline key={se} points={points(se)}
            fill="none" stroke={color} strokeWidth="2" strokeLinejoin="round" />
        ))}

        {/* Labels at each curve's right side */}
        {curves.map(({ se, color, label }) => {
          const labelX = xCenter + 2.5 * xScale;
          const labelY = yBase - (pdf(2.5, se) / refMax) * (yBase - yTop) - 4;
          return (
            <text key={label} x={labelX.toFixed(1)} y={labelY.toFixed(1)}
              fontSize="8" fill={color} fontWeight="600">{label}</text>
          );
        })}

        <text x={(xL + xR) / 2} y={H - 2} textAnchor="middle" fontSize="7.5" fill="#64748b">Sample mean (x̄)</text>
      </svg>
      <div className="dd-clt-legend">
        <div className="dd-rule-row"><span className="dd-rule-swatch" style={{ background: '#b8d9ec' }} />n = 5: wide spread (large SEM)</div>
        <div className="dd-rule-row"><span className="dd-rule-swatch" style={{ background: '#6fb0d1' }} />n = 15: narrowing</div>
        <div className="dd-rule-row"><span className="dd-rule-swatch" style={{ background: '#2e86ab' }} />n = 30: narrow bell ≈ Normal</div>
      </div>
    </div>
  );
}

/* ── 2.2.3.3  Confidence Intervals ──────────────────────────────────────── */
export function ConfidenceIntervalsDiagram() {
  const W = 310, H = 162;
  const xL = 18, xR = 292, yBase = 118, yTop = 30;
  const xCenter = (xL + xR) / 2;
  const pdfMax = 1 / Math.sqrt(2 * Math.PI);
  const scale = yBase - yTop;

  const toX = (z) => xL + ((z + 3.5) / 7) * (xR - xL);
  const toY = (z) => {
    const p = Math.exp(-0.5 * z * z) / Math.sqrt(2 * Math.PI);
    return yBase - (p / pdfMax) * scale;
  };

  const z95 = 1.96;
  const nPts = 141;
  const zPts = Array.from({ length: nPts }, (_, i) => -3.5 + i * (7 / (nPts - 1)));

  const regionPath = (z1, z2) => {
    const pts = zPts.filter((z) => z >= z1 && z <= z2);
    if (pts.length < 2) return '';
    const top = pts.map((z) => `${toX(z).toFixed(1)},${toY(z).toFixed(1)}`).join(' ');
    return `M ${toX(z1).toFixed(1)},${yBase} L ${top} L ${toX(z2).toFixed(1)},${yBase} Z`;
  };

  const curvePts = zPts.map((z) => `${toX(z).toFixed(1)},${toY(z).toFixed(1)}`).join(' ');

  const bY = 8;            // bracket y-position (top of chart)
  const lx = toX(-z95);
  const rx = toX(z95);

  return (
    <div className="dd dd--ci">
      <p className="dd-heading">95% Confidence Interval</p>
      <svg viewBox={`0 0 ${W} ${H}`} className="dd-ci-svg" style={{ overflow: 'visible' }}
        role="img" aria-label="Bell curve showing 95% confidence interval with alpha regions in each tail">

        {/* Tail regions (α/2 each) */}
        <path d={regionPath(-3.5, -z95)} fill="#e84855" fillOpacity="0.25" />
        <path d={regionPath(z95, 3.5)}  fill="#e84855" fillOpacity="0.25" />

        {/* Central 95% region */}
        <path d={regionPath(-z95, z95)} fill="#2e86ab" fillOpacity="0.18" />

        {/* Bell curve */}
        <polyline points={curvePts} fill="none" stroke="#1a3a5c" strokeWidth="2" strokeLinejoin="round" />

        {/* Axis */}
        <line x1={xL} y1={yBase} x2={xR} y2={yBase} stroke="#94a3b8" strokeWidth="1.5" />

        {/* z boundary dashed lines — run from bracket all the way to axis */}
        <line x1={lx.toFixed(1)} y1={bY} x2={lx.toFixed(1)} y2={yBase}
          stroke="#2e86ab" strokeWidth="1" strokeDasharray="3,2" />
        <line x1={rx.toFixed(1)} y1={bY} x2={rx.toFixed(1)} y2={yBase}
          stroke="#2e86ab" strokeWidth="1" strokeDasharray="3,2" />

        {/* CI bracket — at the TOP of the chart */}
        <line x1={lx.toFixed(1)} y1={bY} x2={rx.toFixed(1)} y2={bY} stroke="#2e86ab" strokeWidth="2" />
        <line x1={lx.toFixed(1)} y1={bY - 4} x2={lx.toFixed(1)} y2={bY + 4} stroke="#2e86ab" strokeWidth="2" />
        <line x1={rx.toFixed(1)} y1={bY - 4} x2={rx.toFixed(1)} y2={bY + 4} stroke="#2e86ab" strokeWidth="2" />
        <text x={xCenter} y={bY + 20} textAnchor="middle" fontSize="9" fill="#2e86ab" fontWeight="700">95% CI</text>

        {/* Central label */}
        <text x={xCenter} y={(yTop + yBase) / 2 + 4} textAnchor="middle" fontSize="9" fill="#2e86ab" fontWeight="600">CL = 95%</text>

        {/* Tail labels */}
        <text x={toX(-2.8).toFixed(1)} y={yBase - 6} textAnchor="middle" fontSize="7" fill="#e84855">α/2</text>
        <text x={toX(2.8).toFixed(1)}  y={yBase - 6} textAnchor="middle" fontSize="7" fill="#e84855">α/2</text>

        {/* z-score labels — below axis */}
        <text x={lx.toFixed(1)} y={yBase + 11} textAnchor="middle" fontSize="7.5" fill="#64748b">−1.96</text>
        <text x={xCenter}       y={yBase + 11} textAnchor="middle" fontSize="7.5" fill="#1a3a5c">0</text>
        <text x={rx.toFixed(1)} y={yBase + 11} textAnchor="middle" fontSize="7.5" fill="#64748b">+1.96</text>

        {/* x̄ ± EBM labels — below z-scores */}
        <text x={lx.toFixed(1)} y={yBase + 22} textAnchor="middle" fontSize="7.5" fill="#64748b">x̄ − EBM</text>
        <text x={xCenter}       y={yBase + 22} textAnchor="middle" fontSize="8.5" fontWeight="700" fill="#1a3a5c">x̄</text>
        <text x={rx.toFixed(1)} y={yBase + 22} textAnchor="middle" fontSize="7.5" fill="#64748b">x̄ + EBM</text>
      </svg>
      <p className="dd-caption">
        The shaded central region captures 95% of all sample means. The two red tails each hold α/2 = 2.5%.
      </p>
    </div>
  );
}

/* ── 2.3  Data Presentation — Table or Graph? decision guide ─────────────── */
export function DataPresentationDiagram() {
  const rows = [
    { graph: 'Trend or change over time',                      table: 'Exact values need to be read or compared' },
    { graph: 'Distribution or spread within a group',           table: 'Multiple variables reported simultaneously' },
    { graph: 'Relationship between two quantitative variables', table: 'Participant baseline characteristics (Table 1)' },
    { graph: 'Quick visual comparison between groups',          table: 'p-values, CIs, and effect sizes together' },
  ];
  return (
    <div className="dd dpd">
      <p className="dd-heading">Table or Graph?</p>
      <div className="dpd-grid">
        <div className="dpd-head dpd-head--graph">📊 Graph when…</div>
        <div className="dpd-head dpd-head--table">📋 Table when…</div>
        {rows.flatMap((r, i) => [
          <div key={`g${i}`} className="dpd-cell dpd-cell--graph">{r.graph}</div>,
          <div key={`t${i}`} className="dpd-cell dpd-cell--table">{r.table}</div>,
        ])}
      </div>
    </div>
  );
}

/* ── 2.3.1  Graphs in papers — annotated bar chart ───────────────────────── */
export function GraphsPapersDiagram() {
  const W = 310, H = 194;
  const chartX1 = 52, chartX2 = 298, chartY1 = 20, chartY2 = 140;
  const yMax = 130;
  const toY = (v) => chartY2 - (v / yMax) * (chartY2 - chartY1);
  const ticks = [0, 40, 80, 120];
  const bars = [
    { label: 'Control',   val: 72,  err: 10, cx: 126, fill: '#b8d9ec', stroke: '#64a8c8' },
    { label: 'Treatment', val: 106, err: 8,  cx: 224, fill: '#2e86ab', stroke: '#1a5276' },
  ];
  const bw = 44;
  const badges = [
    { x: 8,   y: 65,  n: '①', color: '#2e86ab' },
    { x: 29,  y: 104, n: '②', color: '#2e86ab' },
    { x: 126, y: 107, n: '③', color: '#3bb273' },
    { x: 250, y: 28,  n: '④', color: '#e84855' },
    { x: 293, y: 168, n: '⑤', color: '#f18f01' },
  ];

  return (
    <div className="dd gpd">
      <p className="dd-heading">Anatomy of a scientific figure</p>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Annotated bar chart showing anatomy of a scientific figure">
        {/* Axes */}
        <line x1={chartX1} y1={chartY1} x2={chartX1} y2={chartY2} stroke="#94a3b8" strokeWidth="1.5" />
        <line x1={chartX1} y1={chartY2} x2={chartX2} y2={chartY2} stroke="#94a3b8" strokeWidth="1.5" />
        {/* Y-axis title */}
        <text x={11} y={chartY1 + (chartY2 - chartY1) / 2} fontSize="8" fill="#1a3a5c" fontWeight="700"
              textAnchor="middle" transform={`rotate(-90, 11, ${chartY1 + (chartY2 - chartY1) / 2})`}>ROM (°)</text>
        {/* Y ticks */}
        {ticks.map((t) => (
          <g key={t}>
            <line x1={chartX1 - 4} y1={toY(t)} x2={chartX1} y2={toY(t)} stroke="#94a3b8" strokeWidth="1" />
            <text x={chartX1 - 6} y={toY(t)} fontSize="7.5" fill="#64748b" textAnchor="end" dominantBaseline="middle">{t}</text>
          </g>
        ))}
        {/* Bars + error bars + x-labels */}
        {bars.map((b) => {
          const bx = b.cx - bw / 2;
          const by = toY(b.val);
          return (
            <g key={b.label}>
              <rect x={bx} y={by} width={bw} height={chartY2 - by} fill={b.fill} stroke={b.stroke} strokeWidth="1" rx="2" />
              <line x1={b.cx}     y1={by - b.err} x2={b.cx}     y2={by + b.err} stroke="#1a3a5c" strokeWidth="1.5" />
              <line x1={b.cx - 5} y1={by - b.err} x2={b.cx + 5} y2={by - b.err} stroke="#1a3a5c" strokeWidth="1.5" />
              <line x1={b.cx - 5} y1={by + b.err} x2={b.cx + 5} y2={by + b.err} stroke="#1a3a5c" strokeWidth="1.5" />
              <text x={b.cx} y={chartY2 + 13} fontSize="8" fill="#1a3a5c" textAnchor="middle">{b.label}</text>
            </g>
          );
        })}
        {/* Caption */}
        <text x={chartX1} y={chartY2 + 28} fontSize="7.5" fill="#1a3a5c">
          <tspan fontWeight="700">Figure 1.</tspan>{' '}Mean knee ROM at 6-week follow-up.
        </text>
        <text x={chartX1} y={chartY2 + 40} fontSize="7" fill="#64748b" fontStyle="italic">
          Note. Error bars = SD. * p &lt; .05.
        </text>
        {/* Annotation badges */}
        {badges.map(({ x, y, n, color }) => (
          <g key={n}>
            <circle cx={x} cy={y} r={7} fill={color} />
            <text x={x} y={y} textAnchor="middle" dominantBaseline="middle" fontSize="7" fill="#fff" fontWeight="800">{n}</text>
          </g>
        ))}
      </svg>
      <div className="gpd-key">
        {[
          ['①', '#2e86ab', 'Y-axis title — variable name and units'],
          ['②', '#2e86ab', 'Tick labels — define the numeric scale'],
          ['③', '#3bb273', 'Bars — one per group, height = mean'],
          ['④', '#e84855', 'Error bars — always state the type (SD, SEM, or 95% CI)'],
          ['⑤', '#f18f01', 'Figure number and caption — always below the figure'],
        ].map(([n, c, label]) => (
          <div key={n} className="gpd-key-row">
            <span className="gpd-badge" style={{ background: c }}>{n}</span>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── 2.3.2  Tables — annotated anatomy ───────────────────────────────────── */
export function TablesDiagram() {
  return (
    <div className="dd tbd">
      <p className="dd-heading">Anatomy of an APA table</p>
      <div className="tbd-anatomy">
        <div className="tbd-row tbd-row--number">
          <span className="tbd-tag" style={{ background: '#2e86ab' }}>①</span>
          <span className="tbd-content"><strong>Table 1</strong></span>
        </div>
        <div className="tbd-row tbd-row--title">
          <span className="tbd-tag" style={{ background: '#3bb273' }}>②</span>
          <span className="tbd-content" style={{ fontStyle: 'italic' }}>Knee ROM (°) at Baseline and 6-Week Follow-Up</span>
        </div>
        <div className="tbd-row tbd-row--header">
          <span className="tbd-tag" style={{ background: '#f18f01' }}>③</span>
          <div className="tbd-cols tbd-content">
            <span>Variable</span><span>Week 0</span><span>Week 6</span><span>p</span>
          </div>
        </div>
        <div className="tbd-row tbd-row--data">
          <span className="tbd-tag" style={{ background: '#9c6ef7' }}>④</span>
          <div className="tbd-data-rows tbd-content">
            <div className="tbd-data-row">
              <span className="tbd-stub-cell">Knee ROM</span>
              <span>85.2 ± 12.4</span><span>114.7 ± 9.8 *</span><span>&lt;.001</span>
            </div>
            <div className="tbd-data-row">
              <span className="tbd-stub-cell">Pain VAS</span>
              <span>6.1 ± 1.8</span><span>2.3 ± 1.4 *</span><span>&lt;.001</span>
            </div>
          </div>
        </div>
        <div className="tbd-row tbd-row--note">
          <span className="tbd-tag" style={{ background: '#64748b' }}>⑥</span>
          <span className="tbd-content"><em>Note.</em> ROM = range of motion; VAS = visual analogue scale. * p &lt; .05.</span>
        </div>
      </div>
      <div className="tbd-key">
        {[
          ['①', '#2e86ab', 'Table number — bold, above the title'],
          ['②', '#3bb273', 'Title — plain text, briefly describe the data'],
          ['③', '#f18f01', 'Column headers — label what each column contains'],
          ['④', '#9c6ef7', 'Stub — row labels (outcome variable names)'],
          ['⑤', '#e84855', 'Data cells — typically mean ± SD; * marks p < .05'],
          ['⑥', '#64748b', 'Note — defines abbreviations and the significance threshold'],
        ].map(([n, c, label]) => (
          <div key={n} className="tbd-key-row">
            <span className="tbd-badge" style={{ background: c }}>{n}</span>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Registry ────────────────────────────────────────────────────────────── */
export const DESCRIPTIVE_DIAGRAM_COMPONENTS = {
  'central-tendency':    CentralTendencyDiagram,
  'mean':                MeanDiagram,
  'median':              MedianDiagram,
  'desc-variance':       VarianceDiagram,
  'desc-sd':             StdDeviationDiagram,
  'desc-sem':            StdErrorDiagram,
  'graph-selector':      GraphSelectorDiagram,
  'bar-chart':           BarChartDiagram,
  'pie-chart':           PieChartDiagram,
  'histogram':           HistogramDiagram,
  'normal-distribution':   NormalDistributionDiagram,
  'central-limit-theorem': CLTDiagram,
  'confidence-intervals':  ConfidenceIntervalsDiagram,
  'line-graph':            LineGraphDiagram,
  'scatter':             ScatterDiagram,
  'boxplot':             BoxplotDiagram,
  'outliers':            OutliersDiagram,
  'data-presentation':   DataPresentationDiagram,
  'graphs-papers':       GraphsPapersDiagram,
  'tables-diagram':      TablesDiagram,
};
