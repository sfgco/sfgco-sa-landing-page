import PanelFrame from "./PanelFrame";
import Icon from "../Icon";

interface NetworkGraphProps {
  accent: string;
  icon: React.ComponentProps<typeof Icon>["name"];
  eyebrow: string;
  nodes: string[];
  badge: { value: string; label: string };
}

const POSITIONS = [
  { x: 130, y: 40 },
  { x: 40, y: 110 },
  { x: 220, y: 110 },
  { x: 90, y: 190 },
  { x: 170, y: 190 },
];
const CENTER = { x: 130, y: 115 };

/** Connected-node illustration — used for AI/LLM and System Integration. */
export default function NetworkGraph({
  accent,
  icon,
  eyebrow,
  nodes,
  badge,
}: Readonly<NetworkGraphProps>) {
  const pts = nodes.slice(0, 5).map((label, idx) => ({
    label,
    ...POSITIONS[idx % POSITIONS.length],
  }));

  return (
    <PanelFrame
      accent={accent}
      icon={icon}
      eyebrow={eyebrow}
      badges={[
        { value: badge.value, label: badge.label, corner: "br", tone: "gold" },
      ]}
    >
      <svg viewBox="0 0 260 230" width="100%" height={200}>
        {pts.map((p) => (
          <line
            key={`line-${p.label}`}
            x1={CENTER.x}
            y1={CENTER.y}
            x2={p.x}
            y2={p.y}
            stroke={`${accent}55`}
            strokeWidth={1.5}
            strokeDasharray="4 4"
          />
        ))}
        <circle
          cx={CENTER.x}
          cy={CENTER.y}
          r={22}
          fill="rgba(200,168,75,0.15)"
          stroke="#c8a84b"
          strokeWidth={1.5}
        />
        <circle cx={CENTER.x} cy={CENTER.y} r={7} fill="#c8a84b">
          <animate
            attributeName="r"
            values="6;9;6"
            dur="2.4s"
            repeatCount="indefinite"
          />
        </circle>
        {pts.map((p) => (
          <g key={p.label}>
            <circle
              cx={p.x}
              cy={p.y}
              r={16}
              fill="rgba(255,255,255,0.06)"
              stroke={accent}
              strokeWidth={1.4}
            />
            <circle cx={p.x} cy={p.y} r={4} fill={accent} />
          </g>
        ))}
      </svg>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 8,
          marginTop: 8,
          justifyContent: "center",
        }}
      >
        {pts.map((p) => (
          <span
            key={p.label}
            style={{
              fontSize: 11,
              fontWeight: 600,
              color: "rgba(239,230,216,0.75)",
              background: "rgba(255,255,255,0.06)",
              border: `1px solid ${accent}35`,
              borderRadius: 50,
              padding: "5px 12px",
            }}
          >
            {p.label}
          </span>
        ))}
      </div>
    </PanelFrame>
  );
}
