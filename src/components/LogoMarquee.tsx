import TechBadge from "./TechBadge";
import type { TechItem } from "../data/techStack";

interface LogoMarqueeProps {
  items: TechItem[];
}

/** Infinite horizontal scroll of tech badges — pauses on hover, respects prefers-reduced-motion via CSS. */
export default function LogoMarquee({ items }: Readonly<LogoMarqueeProps>) {
  const loop = [...items, ...items];

  return (
    <div
      className="marquee-pause"
      style={{
        overflow: "hidden",
        maskImage:
          "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
      }}
    >
      <div className="marquee-track" style={{ gap: 16, paddingBlock: 4 }}>
        {loop.map((item, idx) => (
          <div key={`${item.name}-${idx}`} style={{ flexShrink: 0 }}>
            <TechBadge name={item.name} mark={item.mark} color={item.color} compact />
          </div>
        ))}
      </div>
    </div>
  );
}
