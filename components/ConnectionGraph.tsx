/**
 * Decorative animated network graph.
 * SVG with nodes that pulse and lines with flowing dashes — gives an
 * AI / automation / "data flowing" feel without floating geometric shapes.
 */
type Node = { x: number; y: number; r?: number; delay?: number };
type Line = [number, number]; // indices into nodes

const NODES: Node[] = [
  { x: 80,   y: 90,  r: 4 },
  { x: 240,  y: 180, r: 5, delay: 0.3 },
  { x: 410,  y: 90,  r: 3, delay: 0.6 },
  { x: 560,  y: 220, r: 5, delay: 0.9 },
  { x: 720,  y: 110, r: 4, delay: 1.2 },
  { x: 870,  y: 240, r: 5, delay: 0.4 },
  { x: 1050, y: 130, r: 4, delay: 0.7 },
  { x: 1130, y: 320, r: 3, delay: 1.5 },
  { x: 110,  y: 360, r: 4, delay: 1.8 },
  { x: 290,  y: 470, r: 5, delay: 0.2 },
  { x: 480,  y: 410, r: 4, delay: 1.0 },
  { x: 670,  y: 480, r: 4, delay: 0.5 },
  { x: 860,  y: 460, r: 3, delay: 1.4 },
  { x: 1020, y: 400, r: 4, delay: 1.1 },
];

const LINES: Line[] = [
  [0, 1], [1, 2], [1, 3], [2, 3], [3, 4],
  [4, 5], [4, 6], [5, 6], [6, 7], [5, 13],
  [0, 8], [1, 8], [8, 9], [9, 10], [10, 3],
  [10, 11], [11, 12], [11, 5], [12, 13], [13, 7],
];

export default function ConnectionGraph({
  className = "",
  opacity = 0.55,
}: {
  className?: string;
  opacity?: number;
}) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1200 560"
      preserveAspectRatio="xMidYMid slice"
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      style={{ opacity }}
    >
      <defs>
        <radialGradient id="node-halo" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(168, 85, 247, 0.6)" />
          <stop offset="100%" stopColor="rgba(168, 85, 247, 0)" />
        </radialGradient>
      </defs>

      {/* Lines (drawn first, behind nodes) */}
      <g stroke="rgba(168, 85, 247, 0.35)" strokeWidth="1" strokeLinecap="round" fill="none">
        {LINES.map(([a, b], i) => {
          const n1 = NODES[a];
          const n2 = NODES[b];
          return (
            <line
              key={`l-${i}`}
              x1={n1.x}
              y1={n1.y}
              x2={n2.x}
              y2={n2.y}
              className="flow-line"
              style={{ animationDelay: `${(i % 4) * 0.5}s` }}
            />
          );
        })}
      </g>

      {/* Node halos */}
      <g>
        {NODES.map((n, i) => (
          <circle
            key={`h-${i}`}
            cx={n.x}
            cy={n.y}
            r={(n.r || 4) * 4}
            fill="url(#node-halo)"
            className="pulse-node"
            style={{ animationDelay: `${n.delay || 0}s` }}
          />
        ))}
      </g>

      {/* Nodes */}
      <g>
        {NODES.map((n, i) => (
          <circle
            key={`n-${i}`}
            cx={n.x}
            cy={n.y}
            r={n.r || 4}
            fill="rgba(196, 181, 253, 0.95)"
            className="pulse-node"
            style={{ animationDelay: `${n.delay || 0}s` }}
          />
        ))}
      </g>
    </svg>
  );
}
