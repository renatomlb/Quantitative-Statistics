import './InferentialDiagrams.css';

export const INFERENTIAL_DIAGRAM_COMPONENTS = {
  'inf-population-sample':  PopulationSampleDiagram,
  'inf-hypothesis-cards':   HypothesisCardsDiagram,
  'inf-p-value-line':       PValueLineDiagram,
  'inf-type-errors-matrix': TypeErrorsMatrixDiagram,
  'inf-decision-flow':      DecisionFlowDiagram,
  'inf-between-groups':     BetweenGroupsDiagram,
  'inf-within-groups':      WithinGroupsDiagram,
  'inf-independent-t':      IndependentTDiagram,
  'inf-paired-t':           PairedTDiagram,
  'inf-t-signal-noise':     TSignalNoiseDiagram,
  'inf-critical-t':         CriticalTDiagram,
  'inf-chi-square':         ChiSquareDiagram,
  'inf-hyp-steps':          HypTestingStepsDiagram,
  'inf-design-decision':    DesignDecisionDiagram,
  'inf-t-vs-normal':        TvsNormalDiagram,
};

/* ── Helpers ──────────────────────────────────────────────────────────────── */
function Arrow({ x1, y1, x2, y2, color = '#555', dashed = false }) {
  const dx = x2 - x1, dy = y2 - y1;
  const len = Math.sqrt(dx * dx + dy * dy);
  const ux = dx / len, uy = dy / len;
  const ax = x2 - ux * 8, ay = y2 - uy * 8;
  const perpX = -uy, perpY = ux;
  return (
    <g>
      <line x1={x1} y1={y1} x2={ax} y2={ay} stroke={color} strokeWidth={1.5}
        strokeDasharray={dashed ? '4 3' : undefined} />
      <polygon
        points={`${x2},${y2} ${ax + perpX * 4},${ay + perpY * 4} ${ax - perpX * 4},${ay - perpY * 4}`}
        fill={color} />
    </g>
  );
}

function PCircle({ cx, cy, label, color = '#2471a3', r = 10 }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} fill={color} stroke="#fff" strokeWidth={1.5} />
      <text x={cx} y={cy + 3.5} textAnchor="middle" fontSize={7.5} fontWeight={700} fill="#fff">{label}</text>
    </g>
  );
}

function gaussPath(cx, sd, axY, scale) {
  const pts = Array.from({ length: 81 }, (_, i) => {
    const z = -3 + 6 * (i / 80);
    return `${(cx + z * sd).toFixed(1)},${(axY - Math.exp(-0.5 * z * z) * scale).toFixed(1)}`;
  });
  return `M${pts.join(' L')}`;
}

function gaussFill(cx, sd, axY, scale) {
  const pts = Array.from({ length: 81 }, (_, i) => {
    const z = -3 + 6 * (i / 80);
    return `${(cx + z * sd).toFixed(1)},${(axY - Math.exp(-0.5 * z * z) * scale).toFixed(1)}`;
  });
  return `M${(cx - 3 * sd).toFixed(1)},${axY} L${pts.join(' L')} L${(cx + 3 * sd).toFixed(1)},${axY} Z`;
}

/* ── 5.1  Population → Sample → Inference (VERTICAL) ────────────────────── */
export function PopulationSampleDiagram() {
  return (
    <div className="dd--inf-pop">
      <svg viewBox="0 0 210 282" className="dd-inf-svg" role="img"
        aria-label="Inferential statistics process — population to sample to conclusion">
        {/* Population */}
        <ellipse cx={105} cy={50} rx={82} ry={42} fill="#d6eaf8" stroke="#2471a3" strokeWidth={1.5} />
        <text x={105} y={36} textAnchor="middle" fontSize={9} fontWeight={700} fill="#1a5276">POPULATION</text>
        <text x={105} y={49} textAnchor="middle" fontSize={8} fill="#1a5276">All patients in the target group</text>
        <text x={105} y={62} textAnchor="middle" fontSize={8} fill="#555">μ = unknown  |  σ = unknown</text>
        <text x={105} y={73} textAnchor="middle" fontSize={7.5} fill="#888" fontStyle="italic">N = usually very large</text>

        <Arrow x1={105} y1={94} x2={105} y2={118} color="#2471a3" />
        <text x={134} y={107} fontSize={8} fill="#2471a3">Random</text>
        <text x={134} y={117} fontSize={8} fill="#2471a3">sample</text>

        {/* Sample */}
        <ellipse cx={105} cy={153} rx={62} ry={34} fill="#d5f5e3" stroke="#1e8449" strokeWidth={1.5} />
        <text x={105} y={140} textAnchor="middle" fontSize={9} fontWeight={700} fill="#145a32">SAMPLE</text>
        <text x={105} y={153} textAnchor="middle" fontSize={8} fill="#145a32">Selected participants</text>
        <text x={105} y={165} textAnchor="middle" fontSize={8} fill="#555">x̄ = measured  |  s = measured</text>
        <text x={105} y={176} textAnchor="middle" fontSize={7.5} fill="#888" fontStyle="italic">n = typically 20–100</text>

        <Arrow x1={105} y1={189} x2={105} y2={213} color="#1e8449" />
        <text x={134} y={202} fontSize={8} fill="#1e8449">Statistical</text>
        <text x={134} y={212} fontSize={8} fill="#1e8449">inference</text>

        {/* Conclusion */}
        <rect x={16} y={215} width={178} height={60} rx={6} fill="#fef9e7" stroke="#f0a500" strokeWidth={1.5} />
        <text x={105} y={231} textAnchor="middle" fontSize={9} fontWeight={700} fill="#7d6608">CONCLUSION</text>
        <text x={105} y={244} textAnchor="middle" fontSize={8} fill="#555">Estimate about the population</text>
        <text x={105} y={256} textAnchor="middle" fontSize={8} fill="#555">parameter (e.g. μ, proportion)</text>
        <text x={105} y={268} textAnchor="middle" fontSize={8} fill="#555">with known uncertainty (p-value)</text>
      </svg>
    </div>
  );
}

/* ── 5.2.1  H₀ vs Hₐ Cards (VERTICAL STACK) ─────────────────────────────── */
export function HypothesisCardsDiagram() {
  return (
    <div className="dd--inf-hyp">
      <svg viewBox="0 0 240 316" className="dd-inf-svg" role="img"
        aria-label="Null vs alternative hypothesis vertical comparison">
        {/* H₀ card */}
        <rect x={4} y={4} width={232} height={140} rx={7} fill="#eaf0fb" stroke="#2471a3" strokeWidth={2} />
        <rect x={4} y={4} width={232} height={36} rx={7} fill="#2471a3" />
        <rect x={4} y={28} width={232} height={12} fill="#2471a3" />
        <text x={120} y={28} textAnchor="middle" fontSize={19} fontWeight={700} fill="#fff">H₀</text>
        <text x={120} y={52} textAnchor="middle" fontSize={10} fontWeight={700} fill="#1a5276" letterSpacing={1}>NULL HYPOTHESIS</text>
        <line x1={16} y1={60} x2={224} y2={60} stroke="#2471a3" strokeWidth={0.6} />
        <text x={120} y={76} textAnchor="middle" fontSize={9} fill="#333">No difference between groups</text>
        <text x={120} y={89} textAnchor="middle" fontSize={9} fill="#333">No effect of the intervention</text>
        <text x={120} y={102} textAnchor="middle" fontSize={9} fill="#333">The status quo — default position</text>
        <line x1={16} y1={112} x2={224} y2={112} stroke="#2471a3" strokeWidth={0.6} />
        <text x={120} y={126} textAnchor="middle" fontSize={8.5} fill="#555" fontStyle="italic">Always contains = (or ≤ or ≥)</text>
        <text x={120} y={139} textAnchor="middle" fontSize={9} fontWeight={600} fill="#1a5276">e.g.  H₀: μ_A = μ_B</text>

        {/* VS separator */}
        <text x={120} y={162} textAnchor="middle" fontSize={12} fontWeight={700} fill="#bbb">— vs —</text>

        {/* Hₐ card */}
        <rect x={4} y={170} width={232} height={142} rx={7} fill="#eafaf1" stroke="#1e8449" strokeWidth={2} />
        <rect x={4} y={170} width={232} height={36} rx={7} fill="#1e8449" />
        <rect x={4} y={194} width={232} height={12} fill="#1e8449" />
        <text x={120} y={194} textAnchor="middle" fontSize={19} fontWeight={700} fill="#fff">Hₐ</text>
        <text x={120} y={220} textAnchor="middle" fontSize={9.5} fontWeight={700} fill="#145a32" letterSpacing={1}>ALTERNATIVE HYPOTHESIS</text>
        <line x1={16} y1={228} x2={224} y2={228} stroke="#1e8449" strokeWidth={0.6} />
        <text x={120} y={244} textAnchor="middle" fontSize={9} fill="#333">A real difference exists</text>
        <text x={120} y={257} textAnchor="middle" fontSize={9} fill="#333">Evidence of a treatment effect</text>
        <text x={120} y={270} textAnchor="middle" fontSize={9} fill="#333">Challenges the null / status quo</text>
        <line x1={16} y1={280} x2={224} y2={280} stroke="#1e8449" strokeWidth={0.6} />
        <text x={120} y={294} textAnchor="middle" fontSize={8.5} fill="#555" fontStyle="italic">{'Never contains = — uses ≠, <, or >'}</text>
        <text x={120} y={307} textAnchor="middle" fontSize={9} fontWeight={600} fill="#145a32">{'e.g.  Hₐ: μ_A ≠ μ_B  or  μ_A < μ_B'}</text>
      </svg>
    </div>
  );
}

/* ── 5.2.2  p-Value Decision Zones (VERTICAL BANDS) ─────────────────────── */
export function PValueLineDiagram() {
  return (
    <div className="dd--inf-pval">
      <svg viewBox="0 0 228 268" className="dd-inf-svg" role="img"
        aria-label="p-value decision zones — do not reject vs reject regions">
        <text x={114} y={12} textAnchor="middle" fontSize={9} fontWeight={700} fill="#333">p-Value Decision Zones</text>

        {/* DO NOT REJECT — blue band */}
        <rect x={4} y={16} width={220} height={118} rx={5} fill="#eaf0fb" stroke="#2471a3" strokeWidth={1.5} />
        <text x={114} y={40} textAnchor="middle" fontSize={18} fontWeight={700} fill="#2471a3">{'p > 0.05'}</text>
        <text x={114} y={57} textAnchor="middle" fontSize={10} fontWeight={700} fill="#1a5276">Do NOT Reject H₀</text>
        <text x={114} y={74} textAnchor="middle" fontSize={8.5} fill="#555">Difference may be due to chance</text>
        <text x={114} y={87} textAnchor="middle" fontSize={8.5} fill="#555">Not statistically significant</text>
        <circle cx={30} cy={105} r={5} fill="#2471a3" />
        <text x={40} y={109} fontSize={8.5} fill="#2471a3" fontWeight={600}>p = 0.42 — not significant</text>
        <circle cx={30} cy={122} r={5} fill="#2471a3" />
        <text x={40} y={126} fontSize={8.5} fill="#2471a3" fontWeight={600}>p = 0.18 — not significant</text>

        {/* THRESHOLD */}
        <rect x={4} y={134} width={220} height={22} fill="#f0a500" />
        <text x={114} y={149} textAnchor="middle" fontSize={9.5} fontWeight={700} fill="#fff">α = 0.05  —  significance threshold</text>

        {/* REJECT — red band */}
        <rect x={4} y={156} width={220} height={102} rx={5} fill="#fdedec" stroke="#c0392b" strokeWidth={1.5} />
        <text x={114} y={180} textAnchor="middle" fontSize={18} fontWeight={700} fill="#c0392b">p ≤ 0.05</text>
        <text x={114} y={197} textAnchor="middle" fontSize={10} fontWeight={700} fill="#922b21">Reject H₀  ★</text>
        <text x={114} y={214} textAnchor="middle" fontSize={8.5} fill="#555">Statistically significant result</text>
        <text x={114} y={227} textAnchor="middle" fontSize={8.5} fill="#555">Unlikely to be due to chance alone</text>
        <circle cx={30} cy={244} r={5} fill="#c0392b" />
        <text x={40} y={248} fontSize={8.5} fill="#c0392b" fontWeight={600}>p = 0.03 — significant ✓</text>

        <text x={114} y={265} textAnchor="middle" fontSize={7.5} fill="#888" fontStyle="italic">α = significance level, conventionally 0.05</text>
      </svg>
    </div>
  );
}

/* ── 5.2.3  Type I & II Errors Matrix (UNCHANGED) ───────────────────────── */
export function TypeErrorsMatrixDiagram() {
  return (
    <div className="dd--inf-errors">
      <svg viewBox="0 0 270 188" className="dd-inf-svg" role="img"
        aria-label="Type I and Type II errors decision matrix">
        <rect x={70} y={4} width={94} height={30} rx={3} fill="#d6eaf8" />
        <text x={117} y={15} textAnchor="middle" fontSize={8} fontWeight={700} fill="#1a5276">H₀ is TRUE</text>
        <text x={117} y={27} textAnchor="middle" fontSize={8} fill="#1a5276">(no real effect)</text>
        <rect x={168} y={4} width={98} height={30} rx={3} fill="#d5f5e3" />
        <text x={217} y={15} textAnchor="middle" fontSize={8} fontWeight={700} fill="#1a5276">H₀ is FALSE</text>
        <text x={217} y={27} textAnchor="middle" fontSize={8} fill="#1a5276">(real effect exists)</text>
        <text x={35} y={8} textAnchor="middle" fontSize={7.5} fill="#888">Your</text>
        <text x={35} y={18} textAnchor="middle" fontSize={7.5} fill="#888">Decision</text>
        <rect x={4} y={38} width={62} height={44} rx={3} fill="#f4f6f7" stroke="#ccc" strokeWidth={1} />
        <text x={35} y={56} textAnchor="middle" fontSize={8} fontWeight={700} fill="#333">Reject</text>
        <text x={35} y={68} textAnchor="middle" fontSize={8} fontWeight={700} fill="#333">H₀</text>
        <rect x={4} y={86} width={62} height={44} rx={3} fill="#f4f6f7" stroke="#ccc" strokeWidth={1} />
        <text x={35} y={104} textAnchor="middle" fontSize={8} fontWeight={700} fill="#333">Do not</text>
        <text x={35} y={116} textAnchor="middle" fontSize={8} fontWeight={700} fill="#333">reject H₀</text>
        <rect x={70} y={38} width={94} height={44} rx={3} fill="#fadbd8" stroke="#e74c3c" strokeWidth={1.5} />
        <text x={117} y={56} textAnchor="middle" fontSize={9} fontWeight={700} fill="#922b21">TYPE I ERROR</text>
        <text x={117} y={68} textAnchor="middle" fontSize={8} fill="#922b21">False Positive</text>
        <text x={117} y={78} textAnchor="middle" fontSize={7} fill="#922b21">α probability</text>
        <rect x={168} y={38} width={98} height={44} rx={3} fill="#d5f5e3" stroke="#1e8449" strokeWidth={1.5} />
        <text x={217} y={56} textAnchor="middle" fontSize={9} fontWeight={700} fill="#1e8449">CORRECT ✓</text>
        <text x={217} y={68} textAnchor="middle" fontSize={8} fill="#1e8449">True Positive</text>
        <text x={217} y={78} textAnchor="middle" fontSize={7} fill="#1e8449">Power = 1 − β</text>
        <rect x={70} y={86} width={94} height={44} rx={3} fill="#d5f5e3" stroke="#1e8449" strokeWidth={1.5} />
        <text x={117} y={104} textAnchor="middle" fontSize={9} fontWeight={700} fill="#1e8449">CORRECT ✓</text>
        <text x={117} y={116} textAnchor="middle" fontSize={8} fill="#1e8449">True Negative</text>
        <text x={117} y={126} textAnchor="middle" fontSize={7} fill="#1e8449">1 − α probability</text>
        <rect x={168} y={86} width={98} height={44} rx={3} fill="#fdebd0" stroke="#e67e22" strokeWidth={1.5} />
        <text x={217} y={104} textAnchor="middle" fontSize={9} fontWeight={700} fill="#935116">TYPE II ERROR</text>
        <text x={217} y={116} textAnchor="middle" fontSize={8} fill="#935116">False Negative</text>
        <text x={217} y={126} textAnchor="middle" fontSize={7} fill="#935116">β probability</text>
        <rect x={4} y={138} width={10} height={10} fill="#fadbd8" stroke="#e74c3c" strokeWidth={1} />
        <text x={17} y={147} fontSize={7.5} fill="#555">Type I (α): reject H₀ when true</text>
        <rect x={4} y={153} width={10} height={10} fill="#fdebd0" stroke="#e67e22" strokeWidth={1} />
        <text x={17} y={162} fontSize={7.5} fill="#555">Type II (β): retain H₀ when false</text>
        <rect x={136} y={138} width={10} height={10} fill="#d5f5e3" stroke="#1e8449" strokeWidth={1} />
        <text x={149} y={147} fontSize={7.5} fill="#555">Correct decisions</text>
      </svg>
    </div>
  );
}

/* ── 5.2.4  Decision Logic Flowchart (UNCHANGED) ─────────────────────────── */
export function DecisionFlowDiagram() {
  const bx = 28, bw = 200;
  return (
    <div className="dd--inf-decision">
      <svg viewBox="0 0 256 210" className="dd-inf-svg" role="img"
        aria-label="Hypothesis testing decision flowchart">
        <rect x={bx} y={4} width={bw} height={32} rx={5} fill="#d6eaf8" stroke="#2471a3" strokeWidth={1.5} />
        <text x={128} y={17} textAnchor="middle" fontSize={8.5} fontWeight={700} fill="#1a5276">Run statistical test</text>
        <text x={128} y={29} textAnchor="middle" fontSize={8} fill="#1a5276">Obtain the test statistic &amp; p-value</text>
        <Arrow x1={128} y1={36} x2={128} y2={50} color="#555" />
        <polygon points="128,50 200,74 128,98 56,74" fill="#fef9e7" stroke="#f0a500" strokeWidth={1.5} />
        <text x={128} y={70} textAnchor="middle" fontSize={9} fontWeight={700} fill="#7d6608">p ≤ 0.05?</text>
        <text x={128} y={82} textAnchor="middle" fontSize={8} fill="#7d6608">{'(i.e. α > p)'}</text>
        <Arrow x1={56} y1={74} x2={28} y2={74} color="#c0392b" />
        <text x={42} y={68} textAnchor="middle" fontSize={9} fontWeight={700} fill="#c0392b">YES</text>
        <rect x={0} y={104} width={90} height={52} rx={5} fill="#fadbd8" stroke="#c0392b" strokeWidth={1.5} />
        <Arrow x1={28} y1={74} x2={45} y2={104} color="#c0392b" />
        <text x={45} y={122} textAnchor="middle" fontSize={9} fontWeight={700} fill="#922b21">Reject H₀</text>
        <text x={45} y={135} textAnchor="middle" fontSize={8} fill="#922b21">Support Hₐ</text>
        <text x={45} y={148} textAnchor="middle" fontSize={7.5} fill="#922b21">Significant result</text>
        <Arrow x1={200} y1={74} x2={228} y2={74} color="#2471a3" />
        <text x={215} y={68} textAnchor="middle" fontSize={9} fontWeight={700} fill="#2471a3">NO</text>
        <rect x={168} y={104} width={86} height={52} rx={5} fill="#eaf0fb" stroke="#2471a3" strokeWidth={1.5} />
        <Arrow x1={228} y1={74} x2={211} y2={104} color="#2471a3" />
        <text x={211} y={122} textAnchor="middle" fontSize={9} fontWeight={700} fill="#1a5276">Do not reject H₀</text>
        <text x={211} y={135} textAnchor="middle" fontSize={8} fill="#1a5276">Insufficient evidence</text>
        <text x={211} y={148} textAnchor="middle" fontSize={7.5} fill="#1a5276">for Hₐ</text>
        <rect x={12} y={166} width={232} height={38} rx={4} fill="#f8f9fa" stroke="#dee2e6" strokeWidth={1} />
        <text x={128} y={181} textAnchor="middle" fontSize={8.5} fill="#555" fontStyle="italic">"If the p is low, the null must go.</text>
        <text x={128} y={196} textAnchor="middle" fontSize={8.5} fill="#555" fontStyle="italic">If the p is high, the null must fly."</text>
      </svg>
    </div>
  );
}

/* ── 5.3.1  Between-Groups (FIXED — participant circles, no overlap) ──────── */
export function BetweenGroupsDiagram() {
  return (
    <div className="dd--inf-between">
      <svg viewBox="0 0 270 214" className="dd-inf-svg" role="img"
        aria-label="Between-groups independent design — different participants in each group">
        <text x={135} y={13} textAnchor="middle" fontSize={8.5} fontWeight={700} fill="#555">BETWEEN-GROUPS (INDEPENDENT) DESIGN</text>

        {/* Group A */}
        <rect x={4} y={20} width={116} height={108} rx={5} fill="#d6eaf8" stroke="#2471a3" strokeWidth={1.5} />
        <text x={62} y={36} textAnchor="middle" fontSize={9} fontWeight={700} fill="#1a5276">Group A</text>
        <text x={62} y={48} textAnchor="middle" fontSize={8} fill="#1a5276">Intervention (n=20)</text>
        <PCircle cx={27} cy={72} label="P1" color="#2471a3" />
        <PCircle cx={54} cy={72} label="P2" color="#2471a3" />
        <PCircle cx={81} cy={72} label="P3" color="#2471a3" />
        <PCircle cx={40} cy={102} label="P4" color="#2471a3" />
        <PCircle cx={67} cy={102} label="P5" color="#2471a3" />
        <text x={62} y={122} textAnchor="middle" fontSize={8.5} fontWeight={600} fill="#1a5276">x̄_A</text>

        {/* ≠ gap */}
        <text x={135} y={76} textAnchor="middle" fontSize={16} fontWeight={700} fill="#aaa">≠</text>
        <text x={135} y={91} textAnchor="middle" fontSize={6.5} fill="#aaa">diff.</text>
        <text x={135} y={100} textAnchor="middle" fontSize={6.5} fill="#aaa">ppts.</text>

        {/* Group B */}
        <rect x={150} y={20} width={116} height={108} rx={5} fill="#fdebd0" stroke="#e67e22" strokeWidth={1.5} />
        <text x={208} y={36} textAnchor="middle" fontSize={9} fontWeight={700} fill="#935116">Group B</text>
        <text x={208} y={48} textAnchor="middle" fontSize={8} fill="#935116">Control (n=20)</text>
        <PCircle cx={177} cy={72} label="P6"  color="#e67e22" />
        <PCircle cx={204} cy={72} label="P7"  color="#e67e22" />
        <PCircle cx={231} cy={72} label="P8"  color="#e67e22" />
        <PCircle cx={190} cy={102} label="P9"  color="#e67e22" />
        <PCircle cx={217} cy={102} label="P10" color="#e67e22" r={9} />
        <text x={208} y={122} textAnchor="middle" fontSize={8.5} fontWeight={600} fill="#935116">x̄_B</text>

        <text x={135} y={140} textAnchor="middle" fontSize={8} fill="#666" fontStyle="italic">← Different participants in each group →</text>

        {/* Arrows to comparison */}
        <Arrow x1={62}  y1={140} x2={108} y2={158} color="#555" />
        <Arrow x1={208} y1={140} x2={162} y2={158} color="#555" />

        {/* Comparison box */}
        <rect x={72} y={158} width={126} height={50} rx={5} fill="#eafaf1" stroke="#1e8449" strokeWidth={1.5} />
        <text x={135} y={172} textAnchor="middle" fontSize={8.5} fontWeight={700} fill="#1e8449">Compare: x̄_A vs x̄_B</text>
        <text x={135} y={185} textAnchor="middle" fontSize={8} fill="#1e8449">Independent-samples t-test</text>
        <text x={135} y={198} textAnchor="middle" fontSize={7.5} fill="#888" fontStyle="italic">Groups are independent</text>
      </svg>
    </div>
  );
}

/* ── 5.3.2  Within-Groups (mirrors BetweenGroups layout) ─────────────────── */
export function WithinGroupsDiagram() {
  // Individual-specific colors — same color = same person in both boxes
  const pColors = ['#2471a3', '#1e8449', '#e67e22', '#8e44ad', '#c0392b'];
  const labels  = ['P1', 'P2', 'P3', 'P4', 'P5'];
  // Pre-box circle positions (same offsets as BetweenGroupsDiagram Group A)
  const prePos  = [[27,72],[54,72],[81,72],[40,102],[67,102]];
  // Post-box circle positions (x offset +146 from pre)
  const postPos = prePos.map(([x,y]) => [x + 146, y]);
  return (
    <div className="dd--inf-within">
      <svg viewBox="0 0 270 222" className="dd-inf-svg" role="img"
        aria-label="Within-groups repeated measures design — same participants measured twice">
        <text x={135} y={13} textAnchor="middle" fontSize={8.5} fontWeight={700} fill="#555">WITHIN-GROUPS (REPEATED MEASURES) DESIGN</text>

        {/* Time 1 (Pre) box */}
        <rect x={4} y={20} width={116} height={108} rx={5} fill="#d6eaf8" stroke="#2471a3" strokeWidth={1.5} />
        <text x={62} y={36} textAnchor="middle" fontSize={9} fontWeight={700} fill="#1a5276">Time 1 (Pre)</text>
        <text x={62} y={48} textAnchor="middle" fontSize={8} fill="#1a5276">Measure outcome (n=20)</text>
        {prePos.map(([cx,cy],i) => (
          <PCircle key={i} cx={cx} cy={cy} label={labels[i]} color={pColors[i]} />
        ))}
        <text x={62} y={122} textAnchor="middle" fontSize={8.5} fontWeight={600} fill="#1a5276">x̄_pre</text>

        {/* = gap — same participants */}
        <text x={135} y={76} textAnchor="middle" fontSize={16} fontWeight={700} fill="#1e8449">=</text>
        <text x={135} y={91} textAnchor="middle" fontSize={6.5} fill="#1e8449">same</text>
        <text x={135} y={100} textAnchor="middle" fontSize={6.5} fill="#1e8449">ppts.</text>

        {/* Time 2 (Post) box */}
        <rect x={150} y={20} width={116} height={108} rx={5} fill="#d5f5e3" stroke="#1e8449" strokeWidth={1.5} />
        <text x={208} y={36} textAnchor="middle" fontSize={9} fontWeight={700} fill="#145a32">Time 2 (Post)</text>
        <text x={208} y={48} textAnchor="middle" fontSize={8} fill="#145a32">Measure outcome (n=20)</text>
        {postPos.map(([cx,cy],i) => (
          <PCircle key={i} cx={cx} cy={cy} label={labels[i]} color={pColors[i]} />
        ))}
        <text x={208} y={122} textAnchor="middle" fontSize={8.5} fontWeight={600} fill="#145a32">x̄_post</text>

        <text x={135} y={140} textAnchor="middle" fontSize={8} fill="#666" fontStyle="italic">← Same participants measured twice (colour = person) →</text>

        {/* Arrows to result box */}
        <Arrow x1={62}  y1={140} x2={108} y2={158} color="#555" />
        <Arrow x1={208} y1={140} x2={162} y2={158} color="#555" />

        {/* Result box */}
        <rect x={36} y={158} width={198} height={58} rx={5} fill="#eafaf1" stroke="#1e8449" strokeWidth={1.5} />
        <text x={135} y={173} textAnchor="middle" fontSize={8.5} fontWeight={700} fill="#1e8449">d = x̄_post − x̄_pre (each person)</text>
        <text x={135} y={187} textAnchor="middle" fontSize={8} fill="#1e8449">Paired (dependent-samples) t-test</text>
        <text x={135} y={200} textAnchor="middle" fontSize={7.5} fill="#888" fontStyle="italic">Controls for between-person variability</text>
      </svg>
    </div>
  );
}

/* ── 5.4.1  Independent t-Test (IMPROVED — smooth Gaussian curves) ────────── */
export function IndependentTDiagram() {
  const axY = 122, scaleH = 66, sdPx = 26, cxA = 88, cxB = 178;
  const fA = gaussFill(cxA, sdPx, axY, scaleH);
  const fB = gaussFill(cxB, sdPx, axY, scaleH);
  const lA = gaussPath(cxA, sdPx, axY, scaleH);
  const lB = gaussPath(cxB, sdPx, axY, scaleH);
  return (
    <div className="dd--inf-indt">
      <svg viewBox="0 0 270 210" className="dd-inf-svg" role="img"
        aria-label="Independent samples t-test — two group distributions and signal to noise concept">
        <text x={135} y={11} textAnchor="middle" fontSize={8.5} fontWeight={700} fill="#555">Independent-Samples t-Test</text>

        <path d={fA} fill="#d6eaf8" opacity={0.75} />
        <path d={fB} fill="#fdebd0" opacity={0.75} />
        <path d={lA} fill="none" stroke="#2471a3" strokeWidth={2} />
        <path d={lB} fill="none" stroke="#e67e22" strokeWidth={2} />

        <line x1={8} y1={axY} x2={262} y2={axY} stroke="#999" strokeWidth={1} />

        {/* Mean dashed lines */}
        <line x1={cxA} y1={axY - scaleH - 2} x2={cxA} y2={axY + 4}
          stroke="#2471a3" strokeWidth={1.2} strokeDasharray="3 2" />
        <line x1={cxB} y1={axY - scaleH - 2} x2={cxB} y2={axY + 4}
          stroke="#e67e22" strokeWidth={1.2} strokeDasharray="3 2" />

        <text x={cxA} y={axY + 14} textAnchor="middle" fontSize={9} fontWeight={700} fill="#1a5276">x̄_A</text>
        <text x={cxA} y={axY + 24} textAnchor="middle" fontSize={8} fill="#1a5276">Group A</text>
        <text x={cxB} y={axY + 14} textAnchor="middle" fontSize={9} fontWeight={700} fill="#935116">x̄_B</text>
        <text x={cxB} y={axY + 24} textAnchor="middle" fontSize={8} fill="#935116">Group B</text>

        {/* Signal arrow */}
        <Arrow x1={cxA + 2} y1={76} x2={cxB - 2} y2={76} color="#c0392b" />
        <Arrow x1={cxB - 2} y1={76} x2={cxA + 2} y2={76} color="#c0392b" />
        <text x={133} y={69} textAnchor="middle" fontSize={9} fontWeight={700} fill="#c0392b">Signal = |x̄_A − x̄_B|</text>

        {/* SD brackets */}
        <line x1={cxA - sdPx} y1={97} x2={cxA + sdPx} y2={97} stroke="#2471a3" strokeWidth={1} />
        <line x1={cxA - sdPx} y1={94} x2={cxA - sdPx} y2={100} stroke="#2471a3" strokeWidth={1} />
        <line x1={cxA + sdPx} y1={94} x2={cxA + sdPx} y2={100} stroke="#2471a3" strokeWidth={1} />
        <text x={cxA} y={109} textAnchor="middle" fontSize={7.5} fill="#2471a3">s_A (noise)</text>
        <line x1={cxB - sdPx} y1={97} x2={cxB + sdPx} y2={97} stroke="#e67e22" strokeWidth={1} />
        <line x1={cxB - sdPx} y1={94} x2={cxB - sdPx} y2={100} stroke="#e67e22" strokeWidth={1} />
        <line x1={cxB + sdPx} y1={94} x2={cxB + sdPx} y2={100} stroke="#e67e22" strokeWidth={1} />
        <text x={cxB} y={109} textAnchor="middle" fontSize={7.5} fill="#e67e22">s_B (noise)</text>

        {/* Formula box */}
        <rect x={6} y={150} width={258} height={56} rx={4} fill="#f4f6f7" stroke="#ccc" strokeWidth={1} />
        <text x={135} y={164} textAnchor="middle" fontSize={9} fontWeight={700} fill="#333">t  =  Signal  ÷  Noise</text>
        <text x={135} y={178} textAnchor="middle" fontSize={8.5} fill="#555">t = |x̄_A − x̄_B| / √(s²_A/n_A + s²_B/n_B)</text>
        <text x={135} y={192} textAnchor="middle" fontSize={8} fill="#888">Larger t → smaller p → more evidence against H₀</text>
        <text x={135} y={203} textAnchor="middle" fontSize={8} fill="#888">df = n_A + n_B − 2</text>
      </svg>
    </div>
  );
}

/* ── 5.4.2  Paired t-Test (slopegraph — larger, overlap-free) ───────────── */
export function PairedTDiagram() {
  const W = 320, H = 262;
  const preX = 90, postX = 230;
  const centerX = (preX + postX) / 2;
  const colTop = 46, colBot = 196;

  // Scale with padding above/below the actual data range (95–148°)
  const toY = (v) => colBot - (v - 85) * 2.3;

  // Precomputed y-values (all well within colTop–colBot):
  //   P1 pre≈130  post≈77   midY≈104
  //   P2 pre≈169  post≈123  midY≈146
  //   P3 pre≈89   post≈47   midY≈68
  // Minimum separation between circle edges: >12 px — no overlap
  const pts = [
    { label: 'P1', pre: 112, post: 135, color: '#2471a3' },
    { label: 'P2', pre: 95,  post: 115, color: '#8e44ad' },
    { label: 'P3', pre: 130, post: 148, color: '#e67e22' },
  ];

  return (
    <div className="dd--inf-paired">
      <svg viewBox={`0 0 ${W} ${H}`} className="dd-inf-svg" role="img"
        aria-label="Paired t-test slopegraph showing individual pre-post changes and difference scores">

        {/* Title */}
        <text x={centerX} y={14} textAnchor="middle" fontSize={9} fontWeight={700} fill="#555">
          Paired t-Test: Individual Difference Scores
        </text>

        {/* Column headers */}
        <text x={preX}    y={32} textAnchor="middle" fontSize={9} fontWeight={700} fill="#1a5276">Pre (°)</text>
        <text x={postX}   y={32} textAnchor="middle" fontSize={9} fontWeight={700} fill="#145a32">Post (°)</text>
        <text x={centerX} y={32} textAnchor="middle" fontSize={9} fontWeight={700} fill="#c0392b">d</text>

        {/* Column guide lines — start below headers */}
        <line x1={preX}  y1={colTop} x2={preX}  y2={colBot} stroke="#e2e8f0" strokeWidth={1} />
        <line x1={postX} y1={colTop} x2={postX} y2={colBot} stroke="#e2e8f0" strokeWidth={1} />

        {/* Data points */}
        {pts.map(({ label, pre, post, color }) => {
          const py   = toY(pre);
          const qy   = toY(post);
          const midY = (py + qy) / 2;
          const d    = `+${post - pre}°`;
          return (
            <g key={label}>
              {/* Slope line */}
              <line x1={preX} y1={py} x2={postX} y2={qy}
                stroke={color} strokeWidth={2} opacity={0.55} />
              {/* Pre circle + value */}
              <circle cx={preX} cy={py} r={9} fill={color} stroke="#fff" strokeWidth={1.5} />
              <text x={preX} y={py + 3.5} textAnchor="middle" fontSize={7.5} fontWeight={700} fill="#fff">{pre}</text>
              {/* Post circle + value */}
              <circle cx={postX} cy={qy} r={9} fill={color} stroke="#fff" strokeWidth={1.5} />
              <text x={postX} y={qy + 3.5} textAnchor="middle" fontSize={7.5} fontWeight={700} fill="#fff">{post}</text>
              {/* Patient label (left of pre column) */}
              <text x={preX - 14} y={py + 3.5} textAnchor="end" fontSize={8} fill={color} fontWeight={700}>{label}</text>
              {/* d value (centre column, in the gap between the two circles) */}
              <text x={centerX} y={midY + 3.5} textAnchor="middle" fontSize={9} fill={color} fontWeight={700}>{d}</text>
            </g>
          );
        })}

        {/* Formula box */}
        <rect x={8} y={colBot + 12} width={W - 16} height={52} rx={4}
          fill="#fef9e7" stroke="#f0a500" strokeWidth={1.5} />
        <text x={centerX} y={colBot + 27} textAnchor="middle" fontSize={8.5} fontWeight={700} fill="#7d6608">
          d̄ = mean difference  ·  s_d = SD of differences
        </text>
        <text x={centerX} y={colBot + 41} textAnchor="middle" fontSize={9} fill="#7d6608">
          t = d̄ / (s_d / √n)      df = n − 1
        </text>
        <text x={centerX} y={colBot + 53} textAnchor="middle" fontSize={7.5} fill="#888">
          H₀: d̄ = 0  (no change)  ·  Hₐ: d̄ ≠ 0
        </text>
      </svg>
    </div>
  );
}

/* ── 5.4.3  t Signal-to-Noise (UNCHANGED) ───────────────────────────────── */
export function TSignalNoiseDiagram() {
  const barH = 28;
  const scen = [
    { label: 'Large t  (significant)',     sig: 160, noise:  40, result: 'p ≤ 0.05  →  Reject H₀'  },
    { label: 'Small t  (not significant)', sig:  50, noise: 160, result: 'p > 0.05  →  Retain H₀'  },
  ];
  return (
    <div className="dd--inf-tsn">
      <svg viewBox="0 0 270 172" className="dd-inf-svg" role="img"
        aria-label="t-value signal to noise diagram">
        <text x={135} y={11} textAnchor="middle" fontSize={9} fontWeight={700} fill="#555">t = Signal / Noise</text>
        {scen.map((s, i) => {
          const yOff = i * 82 + 18;
          const total = 210;
          const sigW  = (s.sig   / (s.sig + s.noise)) * total;
          const noiseW = (s.noise / (s.sig + s.noise)) * total;
          const startX = (270 - total) / 2;
          return (
            <g key={i}>
              <text x={135} y={yOff + 10} textAnchor="middle" fontSize={8} fontWeight={700} fill="#333">{s.label}</text>
              <rect x={startX}         y={yOff + 14} width={sigW}   height={barH} rx={3} fill="#1e8449" />
              <text x={startX + sigW / 2} y={yOff + 32} textAnchor="middle" fontSize={8} fontWeight={700} fill="#fff">Signal (diff)</text>
              <rect x={startX + sigW} y={yOff + 14} width={noiseW} height={barH} rx={3} fill="#e74c3c" />
              <text x={startX + sigW + noiseW / 2} y={yOff + 32} textAnchor="middle" fontSize={8} fontWeight={700} fill="#fff">Noise</text>
              <text x={135} y={yOff + 54} textAnchor="middle" fontSize={8} fill="#555">{s.result}</text>
            </g>
          );
        })}
        <text x={135} y={168} textAnchor="middle" fontSize={8} fill="#888">Larger signal relative to noise → larger t → more evidence against H₀</text>
      </svg>
    </div>
  );
}

/* ── 5.4.4  Critical t Diagram (UNCHANGED) ──────────────────────────────── */
export function CriticalTDiagram() {
  const W = 270, H = 162, axY = 110, cx = 135;
  const pts = [];
  for (let x = -4; x <= 4; x += 0.1) {
    pts.push([cx + x * 30, axY - Math.exp(-0.5 * x * x) * 68]);
  }
  const pathD = pts.map((p, i) => (i === 0 ? `M${p[0]},${p[1]}` : `L${p[0]},${p[1]}`)).join(' ');
  const tcrit = 2.04;
  const tcritX = cx + tcrit * 30, tcritXL = cx - tcrit * 30;
  const tailPts = (side) => {
    const path = [];
    for (let i = 0; i <= 30; i++) {
      const t = side === 'right'
        ? tcrit + (4 - tcrit) * (i / 30)
        : -tcrit - (4 - tcrit) * (i / 30);
      path.push([cx + t * 30, axY - Math.exp(-0.5 * t * t) * 68]);
    }
    return [
      `M${path[0][0]},${axY}`,
      ...path.map(p => `L${p[0]},${p[1]}`),
      `L${path[path.length - 1][0]},${axY}`,
      'Z',
    ].join(' ');
  };
  return (
    <div className="dd--inf-crit">
      <svg viewBox={`0 0 ${W} ${H}`} className="dd-inf-svg" role="img"
        aria-label="Critical t-value diagram with rejection regions">
        <text x={135} y={11} textAnchor="middle" fontSize={8.5} fontWeight={700} fill="#555">Critical t-Values (α = 0.05, two-tailed)</text>
        <path d={tailPts('left')}  fill="#fadbd8" opacity={0.8} />
        <path d={tailPts('right')} fill="#fadbd8" opacity={0.8} />
        <path d={pathD} fill="none" stroke="#2471a3" strokeWidth={1.8} />
        <line x1={cx - 120} y1={axY} x2={cx + 120} y2={axY} stroke="#333" strokeWidth={1} />
        <line x1={tcritX}  y1={axY - 18} x2={tcritX}  y2={axY + 4} stroke="#c0392b" strokeWidth={1.5} strokeDasharray="4 2" />
        <line x1={tcritXL} y1={axY - 18} x2={tcritXL} y2={axY + 4} stroke="#c0392b" strokeWidth={1.5} strokeDasharray="4 2" />
        <text x={tcritXL - 2} y={axY - 22} textAnchor="middle" fontSize={8.5} fill="#c0392b">−t_crit</text>
        <text x={tcritX  + 2} y={axY - 22} textAnchor="middle" fontSize={8.5} fill="#c0392b">+t_crit</text>
        <text x={cx} y={axY - 10} textAnchor="middle" fontSize={7.5} fill="#2471a3">Do not reject H₀</text>
        <text x={cx} y={axY + 14} textAnchor="middle" fontSize={8} fill="#333">0</text>
        <text x={tcritXL - 24} y={axY - 8} textAnchor="middle" fontSize={7.5} fill="#c0392b">Reject</text>
        <text x={tcritX  + 24} y={axY - 8} textAnchor="middle" fontSize={7.5} fill="#c0392b">Reject</text>
        <rect x={4} y={120} width={262} height={38} rx={3} fill="#f8f9fa" stroke="#ccc" strokeWidth={1} />
        <text x={135} y={132} textAnchor="middle" fontSize={8} fontWeight={700} fill="#333">Selected critical values (α = 0.05, two-tailed)</text>
        <text x={135} y={144} textAnchor="middle" fontSize={8} fill="#555">df = 10 → 2.228  |  df = 20 → 2.086  |  df = 30 → 2.042</text>
        <text x={135} y={154} textAnchor="middle" fontSize={8} fill="#555">df = 60 → 2.000  |  df = ∞ → 1.960</text>
      </svg>
    </div>
  );
}

/* ── 5.5  Chi-Square: SVG table + HTML LaTeX formula (KaTeX) ────────────── */
export function ChiSquareDiagram() {
  const cells = [
    { O: 35, E: 26.7, row: 0, col: 0 },
    { O:  5, E: 13.3, row: 0, col: 1 },
    { O: 15, E: 23.3, row: 1, col: 0 },
    { O: 20, E: 11.7, row: 1, col: 1 },
  ];
  return (
    <div className="dd--inf-chi">
      <svg viewBox="0 0 270 168" className="dd-inf-svg" role="img"
        aria-label="Chi-square test — observed vs expected contingency table">
        <text x={135} y={11} textAnchor="middle" fontSize={8.5} fontWeight={700} fill="#555">Chi-Square: Observed vs Expected</text>
        {/* Column headers */}
        <rect x={24} y={16} width={108} height={22} rx={3} fill="#d6eaf8" />
        <text x={78}  y={29} textAnchor="middle" fontSize={8} fontWeight={700} fill="#1a5276">Returned to Sport</text>
        <rect x={136} y={16} width={108} height={22} rx={3} fill="#fdebd0" />
        <text x={190} y={29} textAnchor="middle" fontSize={8} fontWeight={700} fill="#935116">Did Not Return</text>
        {/* Row headers */}
        <rect x={0} y={40} width={22} height={46} rx={2} fill="#eaf0fb" />
        <text x={11} y={58} textAnchor="middle" fontSize={7} fontWeight={700} fill="#1a5276"
          transform="rotate(-90,11,63)">Adherent</text>
        <rect x={0} y={90} width={22} height={46} rx={2} fill="#fef9e7" />
        <text x={11} y={108} textAnchor="middle" fontSize={7} fontWeight={700} fill="#935116"
          transform="rotate(-90,11,113)">Non-adherent</text>
        {/* Cells */}
        {cells.map((c) => {
          const x  = c.col === 0 ? 24 : 136;
          const y  = c.row === 0 ? 40 : 90;
          const diff = Math.abs(c.O - c.E);
          const bg = diff > 8 ? '#fadbd8' : diff > 4 ? '#fef9e7' : '#eafaf1';
          return (
            <g key={`${c.row}-${c.col}`}>
              <rect x={x} y={y} width={108} height={46} fill={bg} stroke="#ccc" strokeWidth={0.5} />
              <text x={x + 54} y={y + 13} textAnchor="middle" fontSize={8.5} fontWeight={700} fill="#333">O = {c.O}</text>
              <text x={x + 54} y={y + 26} textAnchor="middle" fontSize={8}   fill="#555">E = {c.E}</text>
              <text x={x + 54} y={y + 39} textAnchor="middle" fontSize={7.5}
                fill={diff > 8 ? '#c0392b' : '#888'}>
                (O−E)²/E = {((c.O - c.E) ** 2 / c.E).toFixed(1)}
              </text>
            </g>
          );
        })}
        {/* Numerical result */}
        <rect x={4} y={140} width={262} height={24} rx={3} fill="#fef9e7" stroke="#f0a500" strokeWidth={1.5} />
        <text x={135} y={150} textAnchor="middle" fontSize={8} fontWeight={700} fill="#7d6608">χ² = 2.6 + 5.2 + 3.0 + 5.9 = 16.7</text>
        <text x={135} y={161} textAnchor="middle" fontSize={7.5} fill="#7d6608">
          {'df = 1  |  χ²_critical = 3.84  |  p < 0.001  →  significant ★'}
        </text>
      </svg>
      {/* LaTeX formula — processed by renderMathInElement on activeSubId change */}
      <div className="dd-inf-formula">
        {'\\[ \\chi^2 = \\sum_{i=1}^{k} \\dfrac{(O_i - E_i)^2}{E_i} \\]'}
      </div>
    </div>
  );
}

/* ── 5.2  Hypothesis Testing — 4 Stages (HTML) ──────────────────────────── */
export function HypTestingStepsDiagram() {
  const steps = [
    { label: 'Stage 1: Formulate Hypotheses',  detail: 'Write H₀ and Hₐ BEFORE data collection. Set α = 0.05.', color: '#2471a3', bg: '#d6eaf8' },
    { label: 'Stage 2: Collect Sample & Test', detail: 'Recruit sample, measure outcome, run the statistical test.', color: '#1e8449', bg: '#d5f5e3' },
    { label: 'Stage 3: Calculate the p-Value', detail: 'Probability of this result if H₀ were true. Software computes this.', color: '#e67e22', bg: '#fdebd0' },
    { label: 'Stage 4: Make a Decision',       detail: 'p ≤ α → Reject H₀ (significant). p > α → Do not reject H₀.', color: '#8e44ad', bg: '#f4ecff' },
  ];
  return (
    <div className="dd hts">
      {steps.map((s, i) => (
        <div key={i}>
          <div className="hts-step" style={{ borderLeftColor: s.color, background: s.bg }}>
            <span className="hts-step__num" style={{ background: s.color }}>{i + 1}</span>
            <div className="hts-step__body">
              <div className="hts-step__label" style={{ color: s.color }}>{s.label}</div>
              <div className="hts-step__detail">{s.detail}</div>
            </div>
          </div>
          {i < steps.length - 1 && <div className="hts-arrow">↓</div>}
        </div>
      ))}
    </div>
  );
}

/* ── 5.3  Research Designs — Design Decision Tree (HTML) ─────────────────── */
export function DesignDecisionDiagram() {
  return (
    <div className="dd ddd">
      <div className="ddd-question">
        Are the <strong>same participants</strong> measured in both conditions?
        <span className="ddd-question__sub">(e.g., pre &amp; post measurement, crossover design)</span>
      </div>
      <div className="ddd-branches">
        <div className="ddd-branch ddd-branch--yes">
          <div className="ddd-branch__label">YES</div>
          <div className="ddd-branch__title">Within-Groups Design</div>
          <div className="ddd-branch__test">Paired t-Test</div>
          <div className="ddd-branch__desc">Same participants measured twice — each person acts as their own control</div>
        </div>
        <div className="ddd-branch ddd-branch--no">
          <div className="ddd-branch__label">NO</div>
          <div className="ddd-branch__title">Between-Groups Design</div>
          <div className="ddd-branch__test">Independent t-Test</div>
          <div className="ddd-branch__desc">Different participants in each group — groups are independent of each other</div>
        </div>
      </div>
    </div>
  );
}

/* ── 5.4  Student's t-Test — t vs Normal Distribution (SVG) ─────────────── */
export function TvsNormalDiagram() {
  const W = 300, H = 124;
  const xL = 18, xR = 282, yBase = 106, yTop = 12;
  const scale = yBase - yTop;

  const toX = (z) => xL + ((z + 3.5) / 7) * (xR - xL);
  const normalPdf = (z) => Math.exp(-0.5 * z * z);
  const tPdf = (z, df) => Math.pow(1 + (z * z) / df, -(df + 1) / 2);

  const nPts = 141;
  const zRange = Array.from({ length: nPts }, (_, i) => -3.5 + 7 * (i / (nPts - 1)));
  const makePath = (pdfFn) =>
    zRange.map((z) => `${toX(z).toFixed(1)},${(yBase - pdfFn(z) * scale).toFixed(1)}`).join(' ');

  const curves = [
    { fn: (z) => tPdf(z, 3),  color: '#b8d9ec', label: 't,  df = 3',  dash: undefined },
    { fn: (z) => tPdf(z, 10), color: '#6fb0d1', label: 't,  df = 10', dash: undefined },
    { fn: (z) => tPdf(z, 30), color: '#2471a3', label: 't,  df = 30', dash: undefined },
    { fn: normalPdf,           color: '#1a3a5c', label: 'Normal (z)',  dash: '5 2'     },
  ];

  const tailLx = toX(-2);
  const tailRx = toX(2);

  return (
    <div className="dd--inf-tvsnorm">
      <p className="dd-heading">t-Distribution: From t to Normal</p>
      <svg viewBox={`0 0 ${W} ${H}`} className="dd-inf-svg" role="img"
        aria-label="t-distribution curves for df 3, 10, 30 converging to the normal distribution as degrees of freedom increase">

        {/* Tail shading beyond ±2 */}
        <rect x={xL} y={yTop} width={(tailLx - xL).toFixed(1)} height={scale} fill="#e84855" fillOpacity={0.07} />
        <rect x={tailRx.toFixed(1)} y={yTop} width={(xR - tailRx).toFixed(1)} height={scale} fill="#e84855" fillOpacity={0.07} />

        {/* Curves — widest first so normal sits on top */}
        {curves.map(({ fn, color, dash }) => (
          <polyline key={color} points={makePath(fn)}
            fill="none" stroke={color} strokeWidth={2} strokeLinejoin="round"
            strokeDasharray={dash} />
        ))}

        {/* Axis */}
        <line x1={xL} y1={yBase} x2={xR} y2={yBase} stroke="#94a3b8" strokeWidth={1.5} />

        {/* μ dashed guide */}
        <line x1={toX(0).toFixed(1)} y1={yTop} x2={toX(0).toFixed(1)} y2={yBase}
          stroke="#94a3b8" strokeWidth={1} strokeDasharray="3 2" />

        {/* ±2 boundary markers */}
        <line x1={tailRx.toFixed(1)} y1={yBase - 10} x2={tailRx.toFixed(1)} y2={yBase + 4} stroke="#e84855" strokeWidth={1} strokeDasharray="3 2" />
        <line x1={tailLx.toFixed(1)} y1={yBase - 10} x2={tailLx.toFixed(1)} y2={yBase + 4} stroke="#e84855" strokeWidth={1} strokeDasharray="3 2" />

        {/* "heavier tails" annotation */}
        <text x={toX(2.9).toFixed(1)} y={yBase - 13} textAnchor="middle" fontSize={6.5} fill="#e84855">heavier</text>
        <text x={toX(2.9).toFixed(1)} y={yBase - 5}  textAnchor="middle" fontSize={6.5} fill="#e84855">tails</text>

        {/* x-axis tick labels */}
        {[-3, -2, -1, 0, 1, 2, 3].map((z) => (
          <text key={z} x={toX(z).toFixed(1)} y={yBase + 12} textAnchor="middle" fontSize={7.5} fill="#64748b">{z}</text>
        ))}
      </svg>

      {/* Legend */}
      <div className="dd-inf-legend">
        {curves.map(({ color, label, dash }) => (
          <div key={label} className="dd-inf-legend-row">
            <svg width="22" height="10" style={{ flexShrink: 0 }}>
              <line x1={1} y1={5} x2={21} y2={5} stroke={color} strokeWidth={2} strokeDasharray={dash} />
            </svg>
            <span>{label}</span>
          </div>
        ))}
      </div>

      <p className="dd-caption">
        Critical t (α = 0.05, two-tailed): df = 3 → 3.182 · df = 10 → 2.228 · df = 30 → 2.042 · Normal → 1.960
      </p>
    </div>
  );
}
