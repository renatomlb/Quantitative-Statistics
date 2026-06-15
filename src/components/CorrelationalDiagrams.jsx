import './CorrelationalDiagrams.css';

/* ── 3.1  Correlation Definition: three scatter plots (vertical stack) ─── */
export function CorrDefinitionDiagram() {
  const panels = [
    {
      label: 'No correlation',
      r: 'r ≈ 0',
      color: '#9e9e9e',
      points: [
        [20,70],[35,30],[50,80],[65,20],[80,60],[25,50],[45,15],[70,75],[55,45],[40,85],
        [30,38],[60,55],[75,25],[15,65],[85,40],
      ],
    },
    {
      label: 'Positive correlation',
      r: 'r ≈ +0.85',
      color: '#2e86ab',
      points: [
        [15,20],[25,28],[30,35],[38,42],[45,50],[52,55],[58,60],[65,68],[72,74],[80,82],
        [20,25],[35,38],[48,52],[62,65],[75,78],
      ],
    },
    {
      label: 'Negative correlation',
      r: 'r ≈ −0.85',
      color: '#e84855',
      points: [
        [15,82],[25,74],[32,68],[40,60],[47,55],[55,50],[62,42],[70,35],[76,28],[83,20],
        [20,78],[36,62],[50,52],[65,38],[78,24],
      ],
    },
  ];

  const W = 200, H = 78, pad = 10;
  const toSvgX = (v) => pad + (v / 100) * (W - 2 * pad);
  const toSvgY = (v) => (H - pad) - (v / 100) * (H - 2 * pad);

  return (
    <div className="dd--corr-def">
      <p className="dd-heading">Types of Correlation</p>
      <div className="dd-corr-panels">
        {panels.map((p) => (
          <div key={p.label} className="dd-corr-panel">
            <div className="dd-corr-panel-meta">
              <span className="dd-corr-panel-label">{p.label}</span>
              <span className="dd-corr-panel-r" style={{ color: p.color }}>{p.r}</span>
            </div>
            <svg viewBox={`0 0 ${W} ${H}`} className="dd-corr-svg">
              <line x1={pad} y1={H - pad} x2={W - pad} y2={H - pad} stroke="#ccc" strokeWidth="1" />
              <line x1={pad} y1={pad} x2={pad} y2={H - pad} stroke="#ccc" strokeWidth="1" />
              {p.points.map(([x, y], i) => (
                <circle key={i} cx={toSvgX(x)} cy={toSvgY(y)} r="3" fill={p.color} opacity="0.72" />
              ))}
            </svg>
          </div>
        ))}
      </div>
      <p className="dd-caption">Each dot = one observation. The shape of the cloud reveals direction and strength.</p>
    </div>
  );
}

/* ── 3.2  r-Coefficient Scale (vertical) ────────────────────────────────── */
export function RCoefficientDiagram() {
  const W = 230, H = 300;
  const xMid = 80;           // centre of vertical axis
  const barW = 28;           // width of the colour bar
  const yTop = 16, yBot = 284;
  const toY = (r) => yTop + ((1 - r) / 2) * (yBot - yTop);  // r=+1 → top, r=−1 → bottom

  const zones = [
    { from:  0.7, to:  1.0, color: '#1a5276', label: 'Strong +',   opacity: 0.85 },
    { from:  0.3, to:  0.7, color: '#2e86ab', label: 'Moderate +', opacity: 0.70 },
    { from: -0.3, to:  0.3, color: '#bdbdbd', label: 'Weak / None', opacity: 0.70 },
    { from: -0.7, to: -0.3, color: '#e57373', label: 'Moderate −', opacity: 0.70 },
    { from: -1.0, to: -0.7, color: '#c0392b', label: 'Strong −',   opacity: 0.85 },
  ];

  const ticks = [1, 0.7, 0.3, 0, -0.3, -0.7, -1];

  const examples = [
    { r:  0.89, label: 'r = 0.89 (strong positive)', color: '#1a5276' },
    { r:  0,    label: 'r = 0 (no association)',       color: '#777' },
    { r: -0.89, label: 'r = −0.89 (strong negative)',  color: '#c0392b' },
  ];

  return (
    <div className="dd--r-coeff">
      <svg viewBox={`0 0 ${W} ${H}`} className="dd-r-svg">

        {/* coloured bar zones */}
        {zones.map((z) => (
          <rect
            key={z.from}
            x={xMid - barW / 2} y={toY(z.to)}
            width={barW} height={toY(z.from) - toY(z.to)}
            fill={z.color} opacity={z.opacity} rx="2"
          />
        ))}

        {/* axis line (on top of rects) */}
        <line x1={xMid} y1={yTop} x2={xMid} y2={yBot} stroke="#333" strokeWidth="1.2" />

        {/* ticks, r-values left, zone labels right */}
        {ticks.map((t) => {
          const y = toY(t);
          const isBoundary = Math.abs(t) === 0.3 || Math.abs(t) === 0.7;
          return (
            <g key={t}>
              <line x1={xMid - barW / 2 - 4} y1={y} x2={xMid - barW / 2} y2={y} stroke="#333" strokeWidth={isBoundary ? 0.8 : 1.2} strokeDasharray={isBoundary ? '2,2' : ''} />
              <text x={xMid - barW / 2 - 7} y={y + 3.5} textAnchor="end" fontSize="8.5" fill="#333" fontWeight={Math.abs(t) === 1 || t === 0 ? '700' : '400'}>
                {t === 1 ? '+1' : t === 0 ? '0' : t}
              </text>
            </g>
          );
        })}

        {/* zone labels on the right */}
        {zones.map((z) => {
          const yLabel = (toY(z.from) + toY(z.to)) / 2;
          return (
            <text key={z.label} x={xMid + barW / 2 + 8} y={yLabel + 3.5} fontSize="8" fill={z.color} fontWeight="600">
              {z.label}
            </text>
          );
        })}

        {/* top / bottom labels */}
        <text x={xMid} y={yTop - 4} textAnchor="middle" fontSize="8" fill="#1a5276" fontWeight="700">Perfect +</text>
        <text x={xMid} y={yBot + 11} textAnchor="middle" fontSize="8" fill="#c0392b" fontWeight="700">Perfect −</text>

        {/* example markers */}
        {examples.map(({ r, label, color }) => (
          <g key={r}>
            <line
              x1={xMid + barW / 2} y1={toY(r)}
              x2={xMid + barW / 2 + 4} y2={toY(r)}
              stroke={color} strokeWidth="1.5"
            />
            <circle cx={xMid} cy={toY(r)} r="3.5" fill={color} />
          </g>
        ))}

        {/* axis label */}
        <text
          x={12} y={(yTop + yBot) / 2}
          textAnchor="middle" fontSize="8" fill="#555" fontStyle="italic"
          transform={`rotate(-90, 12, ${(yTop + yBot) / 2})`}
        >
          Correlation coefficient r
        </text>
      </svg>

      {/* legend */}
      <div className="dd-r-legend">
        {examples.map(({ r, label, color }) => (
          <div key={r} className="dd-r-legend-row">
            <span className="dd-r-legend-dot" style={{ background: color }} />
            <span style={{ fontSize: '0.72rem', color: '#555' }}>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── 3.3  Scatter plot with trendline (Height vs Weight) ─────────────── */
export function CorrMathDiagram() {
  const W = 270, H = 175;
  const xL = 32, xR = 258, yBase = 150, yTop = 18;

  // Data from lecture slide 37 (23 participants)
  const data = [
    [158,48],[162,57],[163,57],[170,60],[154,45],[167,55],[177,62],[170,65],
    [179,70],[170,68],[180,80],[182,81],[155,60],[157,58],[166,63],[177,80],
    [174,79],[169,70],[188,88],[179,80],[172,77],[181,88],[190,90],
  ];

  const hMin = 150, hMax = 195, wMin = 40, wMax = 95;
  const toX = (h) => xL + ((h - hMin) / (hMax - hMin)) * (xR - xL);
  const toY = (w) => yBase - ((w - wMin) / (wMax - wMin)) * (yBase - yTop);

  // Least-squares trendline
  const n = data.length;
  const sumX = data.reduce((s, [h]) => s + h, 0);
  const sumY = data.reduce((s, [, w]) => s + w, 0);
  const sumXY = data.reduce((s, [h, w]) => s + h * w, 0);
  const sumX2 = data.reduce((s, [h]) => s + h * h, 0);
  const b = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
  const a = (sumY - b * sumX) / n;
  const predict = (h) => a + b * h;

  const xTicks = [155, 165, 175, 185, 195];
  const yTicks = [45, 55, 65, 75, 85];

  return (
    <div className="dd--corr-math">
      <p className="dd-heading">Height vs Weight — r² = 0.79, r = 0.89</p>
      <svg viewBox={`0 0 ${W} ${H}`} className="dd-corr-math-svg">
        {/* grid */}
        {xTicks.map((h) => (
          <line key={h} x1={toX(h)} y1={yTop} x2={toX(h)} y2={yBase} stroke="#e8e8e8" strokeWidth="0.8" />
        ))}
        {yTicks.map((w) => (
          <line key={w} x1={xL} y1={toY(w)} x2={xR} y2={toY(w)} stroke="#e8e8e8" strokeWidth="0.8" />
        ))}

        {/* axes */}
        <line x1={xL} y1={yBase} x2={xR} y2={yBase} stroke="#555" strokeWidth="1.2" />
        <line x1={xL} y1={yTop} x2={xL} y2={yBase} stroke="#555" strokeWidth="1.2" />

        {/* trendline */}
        <line
          x1={toX(hMin)} y1={toY(predict(hMin))}
          x2={toX(hMax)} y2={toY(predict(hMax))}
          stroke="#2e86ab" strokeWidth="1.5" strokeDasharray="5,3" opacity="0.8"
        />

        {/* data points */}
        {data.map(([h, w], i) => (
          <circle key={i} cx={toX(h)} cy={toY(w)} r="2.8" fill="#2e86ab" opacity="0.72" />
        ))}

        {/* x-axis ticks + labels */}
        {xTicks.map((h) => (
          <g key={h}>
            <line x1={toX(h)} y1={yBase} x2={toX(h)} y2={yBase + 4} stroke="#555" strokeWidth="1" />
            <text x={toX(h)} y={yBase + 12} textAnchor="middle" fontSize="7.5" fill="#555">{h}</text>
          </g>
        ))}

        {/* y-axis ticks + labels */}
        {yTicks.map((w) => (
          <g key={w}>
            <line x1={xL - 4} y1={toY(w)} x2={xL} y2={toY(w)} stroke="#555" strokeWidth="1" />
            <text x={xL - 6} y={toY(w) + 3} textAnchor="end" fontSize="7.5" fill="#555">{w}</text>
          </g>
        ))}

        {/* axis labels */}
        <text x={(xL + xR) / 2} y={H - 2} textAnchor="middle" fontSize="8" fill="#555">Height (cm)</text>
        <text x={8} y={(yTop + yBase) / 2} textAnchor="middle" fontSize="8" fill="#555" transform={`rotate(-90, 8, ${(yTop + yBase) / 2})`}>Weight (kg)</text>

        {/* r² annotation */}
        <text x={xR - 4} y={yTop + 12} textAnchor="end" fontSize="8.5" fill="#2e86ab" fontWeight="700">r² = 0.79</text>
        <text x={xR - 4} y={yTop + 23} textAnchor="end" fontSize="8.5" fill="#2e86ab" fontWeight="700">r = 0.89</text>
      </svg>
      <p className="dd-caption">Data from lecture slide 37. Dashed line = least-squares trendline.</p>
    </div>
  );
}

/* ── 3.4  Correlation vs Causation (confounding variable diagram) ───────── */
export function CorrVsCausationDiagram() {
  const W = 280, H = 160;

  return (
    <div className="dd--corr-cause">
      <p className="dd-heading">Correlation ≠ Causation</p>
      <svg viewBox={`0 0 ${W} ${H}`} className="dd-corr-cause-svg">

        {/* Confounder box — top centre */}
        <rect x={95} y={8} width={90} height={28} rx={5} fill="#fff3cd" stroke="#f0ad4e" strokeWidth="1.5" />
        <text x={140} y={22} textAnchor="middle" fontSize="8.5" fill="#856404" fontWeight="700">Confounding</text>
        <text x={140} y={32} textAnchor="middle" fontSize="8.5" fill="#856404" fontWeight="700">Variable</text>

        {/* Variable A box — bottom left */}
        <rect x={14} y={112} width={82} height={28} rx={5} fill="#e8f4f8" stroke="#2e86ab" strokeWidth="1.5" />
        <text x={55} y={126} textAnchor="middle" fontSize="8" fill="#1a3a5c" fontWeight="600">Variable A</text>
        <text x={55} y={136} textAnchor="middle" fontSize="7.5" fill="#1a3a5c">(e.g. Ice cream sales)</text>

        {/* Variable B box — bottom right */}
        <rect x={184} y={112} width={82} height={28} rx={5} fill="#fde8e8" stroke="#e84855" strokeWidth="1.5" />
        <text x={225} y={126} textAnchor="middle" fontSize="8" fill="#7b1d1d" fontWeight="600">Variable B</text>
        <text x={225} y={136} textAnchor="middle" fontSize="7.5" fill="#7b1d1d">(e.g. Drowning rate)</text>

        {/* Arrow: Confounder → A */}
        <line x1={110} y1={36} x2={70} y2={112} stroke="#f0ad4e" strokeWidth="1.5" markerEnd="url(#arrowOrange)" />
        <text x={72} y={82} textAnchor="middle" fontSize="7" fill="#856404" transform="rotate(-30, 72, 82)">causes</text>

        {/* Arrow: Confounder → B */}
        <line x1={170} y1={36} x2={210} y2={112} stroke="#f0ad4e" strokeWidth="1.5" markerEnd="url(#arrowOrange)" />
        <text x={208} y={82} textAnchor="middle" fontSize="7" fill="#856404" transform="rotate(30, 208, 82)">causes</text>

        {/* Correlation double-arrow A ↔ B */}
        <line x1={96} y1={126} x2={184} y2={126} stroke="#9e9e9e" strokeWidth="1.5" strokeDasharray="4,3"
          markerEnd="url(#arrowGrey)" markerStart="url(#arrowGreyStart)" />
        <text x={140} y={120} textAnchor="middle" fontSize="7.5" fill="#777" fontStyle="italic">correlation</text>
        <text x={140} y={146} textAnchor="middle" fontSize="7" fill="#e84855">(not causation)</text>

        {/* Example label */}
        <text x={140} y={158} textAnchor="middle" fontSize="7.5" fill="#555">e.g. Hot weather → more ice cream sales AND more swimming</text>

        <defs>
          <marker id="arrowOrange" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="#f0ad4e" />
          </marker>
          <marker id="arrowGrey" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="#9e9e9e" />
          </marker>
          <marker id="arrowGreyStart" markerWidth="6" markerHeight="6" refX="1" refY="3" orient="auto-start-reverse">
            <path d="M0,0 L6,3 L0,6 Z" fill="#9e9e9e" />
          </marker>
        </defs>
      </svg>
      <p className="dd-caption">The confounding variable causes both A and B independently, creating a spurious correlation between them.</p>
    </div>
  );
}

/* ── Registry ────────────────────────────────────────────────────────────── */
export const CORRELATIONAL_DIAGRAM_COMPONENTS = {
  'corr-definition':    CorrDefinitionDiagram,
  'r-coefficient':      RCoefficientDiagram,
  'corr-math':          CorrMathDiagram,
  'corr-vs-causation':  CorrVsCausationDiagram,
};
