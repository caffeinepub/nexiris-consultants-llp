import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const radarPoints = [
  { label: 'Entity', angle: -90, score: 0.85 },
  { label: 'Compliance', angle: -18, score: 0.72 },
  { label: 'Documents', angle: 54, score: 0.91 },
  { label: 'Financial', angle: 126, score: 0.68 },
  { label: 'Route', angle: 198, score: 0.79 },
];

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: cx + r * Math.cos(rad),
    y: cy + r * Math.sin(rad),
  };
}

function RadarChart() {
  const cx = 120;
  const cy = 120;
  const maxR = 90;
  const levels = [0.25, 0.5, 0.75, 1.0];

  const scorePoints = radarPoints.map((p) => {
    const pt = polarToCartesian(cx, cy, maxR * p.score, p.angle);
    return `${pt.x},${pt.y}`;
  });

  const gridPoints = (level: number) =>
    radarPoints
      .map((p) => {
        const pt = polarToCartesian(cx, cy, maxR * level, p.angle);
        return `${pt.x},${pt.y}`;
      })
      .join(' ');

  return (
    <svg viewBox="0 0 240 240" className="w-full max-w-[220px] mx-auto">
      {/* Grid */}
      {levels.map((level) => (
        <polygon
          key={level}
          points={gridPoints(level)}
          fill="none"
          stroke="#3ECFB2"
          strokeOpacity={0.15}
          strokeWidth="1"
        />
      ))}
      {/* Axes */}
      {radarPoints.map((p) => {
        const pt = polarToCartesian(cx, cy, maxR, p.angle);
        return (
          <line
            key={p.label}
            x1={cx}
            y1={cy}
            x2={pt.x}
            y2={pt.y}
            stroke="#3ECFB2"
            strokeOpacity={0.2}
            strokeWidth="1"
          />
        );
      })}
      {/* Score area */}
      <polygon
        points={scorePoints.join(' ')}
        fill="#3ECFB2"
        fillOpacity={0.15}
        stroke="#3ECFB2"
        strokeWidth="2"
      />
      {/* Score dots */}
      {radarPoints.map((p) => {
        const pt = polarToCartesian(cx, cy, maxR * p.score, p.angle);
        return (
          <circle key={p.label} cx={pt.x} cy={pt.y} r="4" fill="#3ECFB2" />
        );
      })}
      {/* Labels */}
      {radarPoints.map((p) => {
        const pt = polarToCartesian(cx, cy, maxR + 18, p.angle);
        return (
          <text
            key={p.label}
            x={pt.x}
            y={pt.y}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="9"
            fill="#1A2332"
            fontFamily="Inter, sans-serif"
            fontWeight="500"
          >
            {p.label}
          </text>
        );
      })}
    </svg>
  );
}

const dimensions = [
  { label: 'Entity Verification', score: 85 },
  { label: 'Compliance Screening', score: 72 },
  { label: 'Document Authenticity', score: 91 },
  { label: 'Financial Health', score: 68 },
  { label: 'Route Risk', score: 79 },
];

export default function TradeScoreSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation();

  return (
    <section id="trade-score" className="py-20 bg-brand-frostWhite">
      <div className="max-w-5xl mx-auto px-6">
        <div
          ref={sectionRef}
          className={`scroll-animate ${isVisible ? 'is-visible' : ''}`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-brand-dark mb-4">
                Trade Trust Score™
              </h2>
              <p className="text-brand-dark/60 text-base leading-relaxed mb-6">
                Our proprietary scoring model synthesises five verification dimensions into a
                single, actionable risk indicator — giving you a clear picture of counterparty
                trustworthiness before you commit.
              </p>
              <div className="space-y-3">
                {dimensions.map((dim) => (
                  <div key={dim.label}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-brand-dark text-sm font-medium">{dim.label}</span>
                      <span className="text-brand-mintyBlue text-sm font-semibold">{dim.score}</span>
                    </div>
                    <div className="h-1.5 bg-brand-frostGray rounded-full overflow-hidden">
                      <div
                        className="h-full bg-brand-mintyBlue rounded-full transition-all duration-1000"
                        style={{ width: `${dim.score}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Chart */}
            <div className="bg-white border border-brand-mintyBlue/15 rounded-lg p-8 shadow-card">
              <div className="text-center mb-4">
                <div className="font-heading font-bold text-5xl text-brand-mintyBlue">79</div>
                <div className="text-brand-dark/50 text-sm mt-1">Composite Trust Score</div>
              </div>
              <RadarChart />
              <p className="text-center text-brand-dark/40 text-xs mt-4">
                Sample report — scores vary by counterparty
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
