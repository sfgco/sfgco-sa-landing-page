import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { useParallax } from "../hooks/useParallax";

interface DashboardBar {
  label: string;
  pct: number;
}

const NODES = [
  { x: "12%", y: "22%" }, { x: "82%", y: "16%" }, { x: "94%", y: "58%" },
  { x: "68%", y: "82%" }, { x: "22%", y: "78%" }, { x: "6%", y: "52%" },
  { x: "48%", y: "12%" }, { x: "48%", y: "88%" },
];

/** Full-screen hero — headline, animated network backdrop, parallax orbs, and a live-feeling dashboard card. */
export default function HeroSection() {
  const { t } = useTranslation();
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);
  const orb1Offset = useParallax(orb1Ref, 0.06);
  const orb2Offset = useParallax(orb2Ref, -0.05);
  const bars = t("hero.dashboardBars", { returnObjects: true }) as DashboardBar[];

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(145deg, #060f08 0%, #0a2a16 25%, #0b2d1e 55%, #1a8050 78%, #0c3d25 100%)",
        position: "relative",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* Network / particle backdrop */}
      <svg
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.35 }}
        preserveAspectRatio="none"
      >
        {NODES.map((n, i) => {
          const next = NODES[(i + 3) % NODES.length];
          return (
            <line
              key={`l-${n.x}-${n.y}`}
              x1={n.x}
              y1={n.y}
              x2={next.x}
              y2={next.y}
              stroke="rgba(200,168,75,0.25)"
              strokeWidth={1}
            />
          );
        })}
        {NODES.map((n, i) => (
          <circle key={`c-${n.x}-${n.y}`} cx={n.x} cy={n.y} r={3} fill="#c8a84b">
            <animate
              attributeName="opacity"
              values="0.9;0.25;0.9"
              dur={`${3 + (i % 4)}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}
      </svg>

      {/* Background orbs (parallax) */}
      <div
        ref={orb1Ref}
        style={{
          position: "absolute",
          width: 700,
          height: 700,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(200,168,75,0.07) 0%, transparent 65%)",
          top: -150,
          right: -150,
          pointerEvents: "none",
          transform: `translateY(${orb1Offset}px)`,
        }}
      />
      <div
        ref={orb2Ref}
        style={{
          position: "absolute",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(239,230,216,0.05) 0%, transparent 65%)",
          bottom: 0,
          left: -100,
          pointerEvents: "none",
          transform: `translateY(${orb2Offset}px)`,
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(46,168,102,0.08) 0%, transparent 65%)",
          top: "40%",
          left: "35%",
          pointerEvents: "none",
        }}
      />

      {/* Grid overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          backgroundImage:
            "linear-gradient(rgba(239,230,216,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(239,230,216,0.02) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "130px 48px 90px",
          width: "100%",
          position: "relative",
        }}
      >
        <div
          className="grid-2-col"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "center",
          }}
        >
          {/* ── Left column ── */}
          <div>
            <div style={{ animation: "fadeInUp 0.7s ease forwards" }}>
              {/* Badge */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  background: "rgba(200,168,75,0.12)",
                  border: "1px solid rgba(200,168,75,0.3)",
                  borderRadius: 50,
                  padding: "7px 18px",
                  marginBottom: 28,
                }}
              >
                <span
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    background: "#c8a84b",
                    display: "inline-block",
                    animation: "pulse 2s infinite",
                  }}
                />
                <span
                  style={{
                    color: "#c8a84b",
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: 2,
                    textTransform: "uppercase",
                  }}
                >
                  {t("hero.badge")}
                </span>
              </div>

              <h1
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: 58,
                  fontWeight: 800,
                  lineHeight: 1.1,
                  color: "#fff",
                  marginBottom: 28,
                  letterSpacing: -1.5,
                }}
              >
                {t("hero.title1")}{" "}
                <span style={{ color: "#c8a84b" }}>{t("hero.titleHighlight")}</span>{" "}
                {t("hero.title2")}
              </h1>

              <p
                style={{
                  fontSize: 17,
                  color: "rgba(239,230,216,0.75)",
                  lineHeight: 1.75,
                  marginBottom: 44,
                  maxWidth: 500,
                }}
              >
                {t("hero.subtitle")}
              </p>

              {/* CTA buttons */}
              <div style={{ display: "flex", gap: 16, marginBottom: 64, flexWrap: "wrap" }}>
                <a
                  href="/contact"
                  style={{
                    background: "#c8a84b",
                    color: "#0a1f14",
                    padding: "15px 36px",
                    borderRadius: 50,
                    fontWeight: 700,
                    fontSize: 14,
                    letterSpacing: 0.5,
                    boxShadow: "0 8px 36px rgba(200,168,75,0.4)",
                    transition: "all 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-3px)";
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                      "0 16px 48px rgba(200,168,75,0.5)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                      "0 8px 36px rgba(200,168,75,0.4)";
                  }}
                >
                  {t("hero.consultBtn")}
                </a>
                <a
                  href="#services"
                  style={{
                    border: "1.5px solid rgba(239,230,216,0.35)",
                    color: "#efe6d8",
                    padding: "15px 36px",
                    borderRadius: 50,
                    fontWeight: 600,
                    fontSize: 14,
                    background: "transparent",
                    transition: "all 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "rgba(239,230,216,0.08)";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(239,230,216,0.6)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(239,230,216,0.35)";
                  }}
                >
                  {t("hero.servicesBtn")}
                </a>
              </div>

              {/* Quick stats */}
              <div style={{ display: "flex", gap: 48, flexWrap: "wrap" }}>
                {[
                  { val: t("hero.stat1"), label: t("hero.stat1Label") },
                  { val: t("hero.stat2"), label: t("hero.stat2Label") },
                  { val: t("hero.stat3"), label: t("hero.stat3Label") },
                ].map((s) => (
                  <div key={s.label}>
                    <div
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: 32,
                        fontWeight: 800,
                        color: "#fff",
                        lineHeight: 1,
                      }}
                    >
                      {s.val}
                    </div>
                    <div
                      style={{
                        fontSize: 11,
                        color: "rgba(239,230,216,0.55)",
                        marginTop: 5,
                        letterSpacing: 0.5,
                      }}
                    >
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right column: live dashboard card ── */}
          <div style={{ position: "relative", paddingTop: 50 }}>
            <div
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(239,230,216,0.12)",
                borderRadius: 28,
                padding: 36,
                backdropFilter: "blur(24px)",
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 32px 80px rgba(0,0,0,0.3)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 3,
                  background: "linear-gradient(90deg, #c8a84b 0%, #0e633d 50%, #c8a84b 100%)",
                }}
              />

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 28,
                }}
              >
                <span style={{ color: "rgba(239,230,216,0.65)", fontSize: 13, fontWeight: 500 }}>
                  {t("hero.dashboardTitle")}
                </span>
                <span
                  style={{
                    background: "rgba(46,168,102,0.2)",
                    color: "#2ea866",
                    padding: "4px 12px",
                    borderRadius: 50,
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: 1,
                  }}
                >
                  ● {t("hero.live")}
                </span>
              </div>

              <div style={{ marginBottom: 24 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                  <span style={{ color: "rgba(239,230,216,0.65)", fontSize: 12 }}>
                    {t("hero.dashboardMainLabel")}
                  </span>
                  <span style={{ color: "#c8a84b", fontSize: 13, fontWeight: 700 }}>
                    {t("hero.dashboardMainValue")}
                  </span>
                </div>
                <div
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    borderRadius: 50,
                    height: 9,
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: t("hero.dashboardMainValue"),
                      height: "100%",
                      background: "linear-gradient(90deg, #0e633d, #c8a84b)",
                      borderRadius: 50,
                    }}
                  />
                </div>
              </div>

              {bars.map((bar) => (
                <div key={bar.label} style={{ marginBottom: 16 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                    <span style={{ color: "rgba(239,230,216,0.7)", fontSize: 13 }}>{bar.label}</span>
                    <span style={{ color: "#fff", fontSize: 13, fontWeight: 700 }}>{bar.pct}%</span>
                  </div>
                  <div
                    style={{
                      background: "rgba(255,255,255,0.07)",
                      borderRadius: 50,
                      height: 6,
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        width: `${bar.pct}%`,
                        height: "100%",
                        background: "#2ea866",
                        borderRadius: 50,
                      }}
                    />
                  </div>
                </div>
              ))}

              <div
                style={{
                  borderTop: "1px solid rgba(239,230,216,0.08)",
                  paddingTop: 24,
                  marginTop: 20,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                }}
              >
                <div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 800, color: "#fff" }}>
                    {t("hero.dashboardFooter1Value")}
                  </div>
                  <div style={{ fontSize: 11, color: "rgba(239,230,216,0.5)", marginTop: 2 }}>
                    {t("hero.dashboardFooter1Label")}
                  </div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 800, color: "#c8a84b" }}>
                    {t("hero.dashboardFooter2Value")}
                  </div>
                  <div style={{ fontSize: 11, color: "rgba(239,230,216,0.5)", marginTop: 2 }}>
                    {t("hero.dashboardFooter2Label")}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div
              style={{
                position: "absolute",
                top: -30,
                left: -20,
                background: "#c8a84b",
                color: "#0a1f14",
                borderRadius: 18,
                padding: "14px 20px",
                boxShadow: "0 16px 48px rgba(200,168,75,0.5)",
                animation: "float 5s ease-in-out infinite",
              }}
            >
              <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: 24, lineHeight: 1 }}>
                24/7
              </div>
              <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: 1.5, marginTop: 2 }}>
                TECH SUPPORT
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                top: -30,
                right: -20,
                background: "rgba(10,31,20,0.9)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(239,230,216,0.12)",
                color: "#fff",
                borderRadius: 16,
                padding: "12px 18px",
                boxShadow: "0 12px 36px rgba(0,0,0,0.3)",
                animation: "float 6s ease-in-out infinite",
                animationDelay: "0.5s",
              }}
            >
              <div style={{ fontSize: 10, color: "rgba(239,230,216,0.5)", letterSpacing: 1 }}>
                SFGCO TECH
              </div>
              <div style={{ fontSize: 14, fontWeight: 700, marginTop: 2 }}>Building</div>
              <div style={{ fontSize: 10, color: "#c8a84b", fontWeight: 600 }}>Enterprise Technology</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        style={{
          position: "absolute",
          bottom: 36,
          left: "50%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          animation: "bounce 2s infinite",
          cursor: "pointer",
        }}
      >
        <span style={{ fontSize: 9, color: "rgba(239,230,216,0.4)", letterSpacing: 3, textTransform: "uppercase" }}>
          {t("hero.scrollCue")}
        </span>
        <svg width="20" height="28" viewBox="0 0 20 28" fill="none">
          <rect x="1" y="1" width="18" height="26" rx="9" stroke="rgba(239,230,216,0.25)" strokeWidth="1.5" />
          <circle cx="10" cy="8" r="3" fill="rgba(200,168,75,0.7)">
            <animate attributeName="cy" values="8;18;8" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>
    </section>
  );
}
