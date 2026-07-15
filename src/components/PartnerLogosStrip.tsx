import { useTranslation } from "react-i18next";
import FadeIn from "./FadeIn";
import HoverCard from "./HoverCard";

const LOGOS = [
  { file: "/images/contract-logo-h.png", alt: "Contract" },
  { file: "/images/eayni-logo.png", alt: "Eayni" },
  { file: "/images/zazubot-logo.png", alt: "Zazubot" },
];

/** Homepage trust section — a premium, continuously-scrolling partner logo carousel. */
export default function PartnerLogosStrip() {
  const { t } = useTranslation();
  // Exactly 2 copies: the `marquee` keyframe translates by -50%, which must
  // land precisely on a repeat boundary (one full copy) for a seamless loop —
  // 3+ copies causes a visible jump/pause each time the animation restarts.
  const loop = [...LOGOS, ...LOGOS];

  return (
    <section style={{ background: "#faf8f5", padding: "100px 48px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <FadeIn>
          <h2
            style={{
              textAlign: "center",
              fontSize: 38,
              fontWeight: 800,
              color: "#0a1f14",
              marginBottom: 56,
            }}
          >
            {t("partners.badge")}
          </h2>
        </FadeIn>

        <FadeIn delay={80}>
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              maskImage:
                "linear-gradient(90deg, transparent 0, #000 8%, #000 92%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(90deg, transparent 0, #000 8%, #000 92%, transparent 100%)",
            }}
          >
            <div
              style={{
                display: "flex",
                width: "max-content",
                animation: "marquee 20s linear infinite",
                alignItems: "stretch",
              }}
            >
              {loop.map((logo, idx) => (
                <HoverCard
                  key={`${logo.file}-${idx}`}
                  variant="sm"
                  className="partner-logo-tile"
                  style={{
                    width: 245,
                    height: 150,
                    flexShrink: 0,
                    // Trailing margin (not flex `gap`) on every tile, including
                    // the last — so the doubled track has a perfectly uniform
                    // pitch and translateX(-50%) lands exactly on the repeat
                    // boundary with zero seam.
                    marginInlineEnd: 32,
                    background: "#fff",
                    border: "1.5px solid #ede5d9",
                    borderRadius: 20,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 26,
                    boxShadow: "0 4px 20px rgba(14,99,61,0.06)",
                  }}
                >
                  <img
                    src={logo.file}
                    alt={logo.alt}
                    style={{
                      maxHeight: 82,
                      maxWidth: "100%",
                      objectFit: "contain",
                    }}
                  />
                </HoverCard>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
