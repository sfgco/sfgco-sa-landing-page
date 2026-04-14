import { useTranslation } from "react-i18next";
import FadeIn from "./FadeIn";
import HoverCard from "./HoverCard";

const FOCUS_AREAS = [
  {
    icon: "🤖",
    titleKey: "techAI.area1.title",
    descKey: "techAI.area1.desc",
    tags: ["LLMs", "MLOps", "AI Chips", "Data Centers"],
    accent: "#0e633d",
    stat: "$1.8T",
    statLabel: "Market by 2030",
  },
  {
    icon: "⚡",
    titleKey: "techAI.area2.title",
    descKey: "techAI.area2.desc",
    tags: ["Cloud", "Edge AI", "Semiconductors", "5G"],
    accent: "#c8a84b",
    stat: "42%",
    statLabel: "CAGR (2025–2030)",
  },
  {
    icon: "🧬",
    titleKey: "techAI.area3.title",
    descKey: "techAI.area3.desc",
    tags: ["BioAI", "Drug Discovery", "Genomics", "MedTech"],
    accent: "#1a8050",
    stat: "$320B",
    statLabel: "AI-Health TAM",
  },
  {
    icon: "🔒",
    titleKey: "techAI.area4.title",
    descKey: "techAI.area4.desc",
    tags: ["Zero-Trust", "Post-Quantum", "SOC AI", "Identity"],
    accent: "#0a4a2e",
    stat: "$266B",
    statLabel: "Cybersecurity Market",
  },
  {
    icon: "🏭",
    titleKey: "techAI.area5.title",
    descKey: "techAI.area5.desc",
    tags: ["Industry 4.0", "Digital Twins", "Robotics", "IIoT"],
    accent: "#2ea866",
    stat: "65%",
    statLabel: "Efficiency Gains",
  },
  {
    icon: "🌐",
    titleKey: "techAI.area6.title",
    descKey: "techAI.area6.desc",
    tags: ["GovTech", "Smart Grid", "FinTech AI", "AgriTech"],
    accent: "#c8a84b",
    stat: "190+",
    statLabel: "Portfolio Targets",
  },
];

const INVESTMENT_PLANS = [
  {
    badge: "techAI.plan1.badge",
    name: "techAI.plan1.name",
    return: "15–22%",
    returnLabel: "techAI.plan1.returnLabel",
    minInvest: "$500K",
    duration: "5–7 Yrs",
    risk: "techAI.plan1.risk",
    riskColor: "#1a8050",
    popular: false,
    features: [
      "techAI.plan1.f1",
      "techAI.plan1.f2",
      "techAI.plan1.f3",
      "techAI.plan1.f4",
      "techAI.plan1.f5",
    ],
  },
  {
    badge: "techAI.plan2.badge",
    name: "techAI.plan2.name",
    return: "30%+",
    returnLabel: "techAI.plan2.returnLabel",
    minInvest: "$2M",
    duration: "7–10 Yrs",
    risk: "techAI.plan2.risk",
    riskColor: "#c8a84b",
    popular: true,
    features: [
      "techAI.plan2.f1",
      "techAI.plan2.f2",
      "techAI.plan2.f3",
      "techAI.plan2.f4",
      "techAI.plan2.f5",
    ],
  },
  {
    badge: "techAI.plan3.badge",
    name: "techAI.plan3.name",
    return: "3–4×",
    returnLabel: "techAI.plan3.returnLabel",
    minInvest: "$5M",
    duration: "10–12 Yrs",
    risk: "techAI.plan3.risk",
    riskColor: "#c8a84b",
    popular: false,
    features: [
      "techAI.plan3.f1",
      "techAI.plan3.f2",
      "techAI.plan3.f3",
      "techAI.plan3.f4",
      "techAI.plan3.f5",
    ],
  },
];

const STATS = [
  { value: "$4.1T", labelKey: "techAI.stat1" },
  { value: "38%", labelKey: "techAI.stat2" },
  { value: "12,000+", labelKey: "techAI.stat3" },
  { value: "94%", labelKey: "techAI.stat4" },
];

export default function TechAISection() {
  const { t } = useTranslation();

  return (
    <section
      id="tech-ai"
      style={{
        background: "#0a1f14",
        padding: "120px 48px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decorative gradient blobs */}
      <div
        style={{
          position: "absolute",
          top: -120,
          right: -120,
          width: 500,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(14,99,61,0.18) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -80,
          left: -80,
          width: 380,
          height: 380,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(200,168,75,0.10) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
        {/* ── Section Header ── */}
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 80 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(200,168,75,0.12)",
                border: "1px solid rgba(200,168,75,0.25)",
                borderRadius: 50,
                padding: "6px 18px",
                marginBottom: 22,
              }}
            >
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "#c8a84b",
                  display: "inline-block",
                  boxShadow: "0 0 8px #c8a84b",
                }}
              />
              <span
                style={{
                  color: "#c8a84b",
                  fontSize: 11,
                  fontWeight: 800,
                  letterSpacing: 2.5,
                  textTransform: "uppercase",
                }}
              >
                {t("techAI.badge")}
              </span>
            </div>
            <h2
              style={{
                fontSize: 52,
                fontWeight: 800,
                color: "#efe6d8",
                marginBottom: 20,
                lineHeight: 1.15,
              }}
            >
              {t("techAI.title1")}{" "}
              <span style={{ color: "#c8a84b" }}>
                {t("techAI.titleHighlight")}
              </span>
              <br />
              {t("techAI.title2")}
            </h2>
            <p
              style={{
                color: "rgba(239,230,216,0.6)",
                fontSize: 17,
                lineHeight: 1.8,
                maxWidth: 640,
                margin: "0 auto",
              }}
            >
              {t("techAI.subtitle")}
            </p>
          </div>
        </FadeIn>

        {/* ── Market Stats Bar ── */}
        <FadeIn delay={60}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 1,
              background: "rgba(255,255,255,0.06)",
              borderRadius: 20,
              overflow: "hidden",
              marginBottom: 80,
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            {STATS.map((s, i) => (
              <div
                key={i}
                style={{
                  padding: "36px 28px",
                  background: "rgba(10,31,20,0.7)",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 38,
                    fontWeight: 800,
                    color: "#c8a84b",
                    marginBottom: 8,
                  }}
                >
                  {s.value}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: "rgba(239,230,216,0.5)",
                    letterSpacing: 0.4,
                    lineHeight: 1.5,
                  }}
                >
                  {t(s.labelKey)}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* ── Focus Areas Grid ── */}
        <FadeIn delay={80}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <div
              style={{
                color: "rgba(239,230,216,0.45)",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: 2.5,
                textTransform: "uppercase",
              }}
            >
              {t("techAI.areasLabel")}
            </div>
          </div>
        </FadeIn>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
            marginBottom: 100,
          }}
        >
          {FOCUS_AREAS.map((area, idx) => (
            <FadeIn key={area.titleKey} delay={idx * 70}>
              <HoverCard
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 22,
                  padding: 32,
                  height: "100%",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: 2,
                    background: `linear-gradient(90deg, ${area.accent}, transparent)`,
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: 20,
                  }}
                >
                  <div style={{ fontSize: 38 }}>{area.icon}</div>
                  <div style={{ textAlign: "right" }}>
                    <div
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: 22,
                        fontWeight: 800,
                        color: area.accent,
                      }}
                    >
                      {area.stat}
                    </div>
                    <div
                      style={{
                        fontSize: 10,
                        color: "rgba(239,230,216,0.4)",
                        letterSpacing: 0.4,
                      }}
                    >
                      {area.statLabel}
                    </div>
                  </div>
                </div>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 19,
                    fontWeight: 800,
                    color: "#efe6d8",
                    marginBottom: 12,
                  }}
                >
                  {t(area.titleKey)}
                </h3>
                <p
                  style={{
                    fontSize: 13.5,
                    color: "rgba(239,230,216,0.55)",
                    lineHeight: 1.75,
                    marginBottom: 20,
                  }}
                >
                  {t(area.descKey)}
                </p>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {area.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        background: `${area.accent}1a`,
                        color: area.accent,
                        padding: "3px 11px",
                        borderRadius: 50,
                        fontSize: 10,
                        fontWeight: 700,
                        letterSpacing: 0.4,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </HoverCard>
            </FadeIn>
          ))}
        </div>

        {/* ── Investment Plans ── */}
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div
              style={{
                color: "rgba(239,230,216,0.45)",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: 2.5,
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              {t("techAI.plansLabel")}
            </div>
            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 38,
                fontWeight: 800,
                color: "#efe6d8",
              }}
            >
              {t("techAI.plansTitle")}
            </h3>
          </div>
        </FadeIn>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
            alignItems: "start",
            marginBottom: 48,
          }}
        >
          {INVESTMENT_PLANS.map((plan, idx) => (
            <FadeIn key={plan.name} delay={idx * 100}>
              <div
                style={{
                  background: plan.popular
                    ? "linear-gradient(160deg, #0e633d 0%, #083d26 100%)"
                    : "rgba(255,255,255,0.04)",
                  borderRadius: 26,
                  padding: 40,
                  border: plan.popular
                    ? "2px solid #c8a84b"
                    : "1px solid rgba(255,255,255,0.1)",
                  position: "relative",
                  overflow: "hidden",
                  boxShadow: plan.popular
                    ? "0 32px 100px rgba(14,99,61,0.4)"
                    : "none",
                  transform: plan.popular ? "scale(1.04)" : "scale(1)",
                }}
              >
                {plan.popular && (
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 4,
                      background:
                        "linear-gradient(90deg, #c8a84b, #e8cc7a, #c8a84b)",
                    }}
                  />
                )}

                <div style={{ marginBottom: 14 }}>
                  <span
                    style={{
                      background: plan.popular
                        ? "rgba(200,168,75,0.2)"
                        : "rgba(200,168,75,0.1)",
                      color: "#c8a84b",
                      padding: "5px 14px",
                      borderRadius: 50,
                      fontSize: 10,
                      fontWeight: 800,
                      letterSpacing: 0.8,
                    }}
                  >
                    {t(plan.badge)}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 22,
                    fontWeight: 800,
                    color: "#efe6d8",
                    marginTop: 14,
                    marginBottom: 24,
                  }}
                >
                  {t(plan.name)}
                </h3>

                <div style={{ marginBottom: 28 }}>
                  <div
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: 50,
                      fontWeight: 800,
                      color: "#c8a84b",
                      lineHeight: 1,
                    }}
                  >
                    {plan.return}
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      color: "rgba(239,230,216,0.45)",
                      marginTop: 6,
                    }}
                  >
                    {t(plan.returnLabel)}
                  </div>
                </div>

                <div style={{ display: "flex", gap: 12, marginBottom: 28 }}>
                  {[
                    { label: t("techAI.minLabel"), val: plan.minInvest },
                    { label: t("techAI.durLabel"), val: plan.duration },
                  ].map((f) => (
                    <div
                      key={f.label}
                      style={{
                        flex: 1,
                        background: "rgba(255,255,255,0.06)",
                        borderRadius: 12,
                        padding: "14px 16px",
                      }}
                    >
                      <div
                        style={{
                          fontSize: 15,
                          fontWeight: 800,
                          color: "#efe6d8",
                        }}
                      >
                        {f.val}
                      </div>
                      <div
                        style={{
                          fontSize: 10,
                          color: "rgba(239,230,216,0.4)",
                          marginTop: 4,
                          letterSpacing: 0.5,
                        }}
                      >
                        {f.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    background: `${plan.riskColor}20`,
                    padding: "5px 14px",
                    borderRadius: 50,
                    marginBottom: 28,
                  }}
                >
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: plan.riskColor,
                      display: "inline-block",
                    }}
                  />
                  <span
                    style={{
                      fontSize: 10,
                      fontWeight: 700,
                      color: plan.riskColor,
                      letterSpacing: 0.5,
                    }}
                  >
                    {t(plan.risk)}
                  </span>
                </div>

                <div style={{ marginBottom: 32 }}>
                  {plan.features.map((fKey) => (
                    <div
                      key={fKey}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        marginBottom: 11,
                      }}
                    >
                      <div
                        style={{
                          width: 18,
                          height: 18,
                          borderRadius: "50%",
                          background: "rgba(200,168,75,0.15)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                          <path
                            d="M1.5 4l1.8 1.8 3.2-3.6"
                            stroke="#c8a84b"
                            strokeWidth="1.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span
                        style={{ fontSize: 13, color: "rgba(239,230,216,0.7)" }}
                      >
                        {t(fKey)}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  style={{
                    width: "100%",
                    padding: "15px",
                    borderRadius: 14,
                    border: "none",
                    cursor: "pointer",
                    background: plan.popular
                      ? "#c8a84b"
                      : "rgba(200,168,75,0.15)",
                    color: plan.popular ? "#0a1f14" : "#c8a84b",
                    fontWeight: 800,
                    fontSize: 14,
                    letterSpacing: 0.5,
                    fontFamily: "'Inter', sans-serif",
                    transition: "all 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.opacity =
                      "0.88";
                    (e.currentTarget as HTMLButtonElement).style.transform =
                      "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.opacity = "1";
                    (e.currentTarget as HTMLButtonElement).style.transform =
                      "translateY(0)";
                  }}
                >
                  {t("techAI.requestBtn")}
                </button>
              </div>
            </FadeIn>
          ))}
        </div>

        <p
          style={{
            textAlign: "center",
            fontSize: 11,
            color: "rgba(239,230,216,0.3)",
            lineHeight: 1.7,
          }}
        >
          {t("techAI.disclaimer")}
        </p>
      </div>
    </section>
  );
}
