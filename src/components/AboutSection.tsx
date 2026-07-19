import { useTranslation } from "react-i18next";
import FadeIn from "./FadeIn";
import Counter from "./Counter";
import Icon from "./Icon";

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

/** About / Mission section with animated stats card and key credentials. */
export default function AboutSection() {
  const { t } = useTranslation();

  const stats = t("about.stats", { returnObjects: true }) as Stat[];

  const checks = [
    t("about.check1"),
    t("about.check2"),
    t("about.check3"),
    t("about.check4"),
  ];

  return (
    <section id="about" style={{ background: "#efe6d8", padding: "120px 48px" }}>
      <div
        className="grid-2-col"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 88,
          alignItems: "center",
        }}
      >
        {/* ── Left: visual card ── */}
        <FadeIn>
          <div style={{ position: "relative" }}>
            <div
              style={{
                background: "linear-gradient(150deg, #0a2a16, #0b2d1e 55%, #0e633d)",
                borderRadius: 28,
                padding: 48,
                color: "#fff",
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 32px 80px rgba(11,45,30,0.3)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: -60,
                  right: -60,
                  width: 240,
                  height: 240,
                  borderRadius: "50%",
                  background: "rgba(200,168,75,0.1)",
                  pointerEvents: "none",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: -40,
                  left: -40,
                  width: 180,
                  height: 180,
                  borderRadius: "50%",
                  background: "rgba(239,230,216,0.05)",
                  pointerEvents: "none",
                }}
              />

              {/* Abstract network motif */}
              <svg
                style={{ position: "absolute", top: 20, right: 24, opacity: 0.5 }}
                width="90"
                height="90"
                viewBox="0 0 90 90"
              >
                <circle cx="45" cy="45" r="6" fill="#c8a84b" />
                <circle cx="15" cy="20" r="4" fill="rgba(239,230,216,0.5)" />
                <circle cx="75" cy="18" r="4" fill="rgba(239,230,216,0.5)" />
                <circle cx="18" cy="72" r="4" fill="rgba(239,230,216,0.5)" />
                <line x1="45" y1="45" x2="15" y2="20" stroke="rgba(200,168,75,0.4)" strokeWidth="1" />
                <line x1="45" y1="45" x2="75" y2="18" stroke="rgba(200,168,75,0.4)" strokeWidth="1" />
                <line x1="45" y1="45" x2="18" y2="72" stroke="rgba(200,168,75,0.4)" strokeWidth="1" />
              </svg>

              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 64, fontWeight: 800, lineHeight: 1, color: "#c8a84b" }}>
                {t("about.yearsValue")}
              </div>
              <div style={{ fontSize: 16, marginTop: 6, color: "rgba(239,230,216,0.75)" }}>
                {t("about.yearsLabel")}
              </div>

              <div style={{ marginTop: 40, paddingTop: 36, borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28 }}>
                  {stats.map((s) => (
                    <div key={s.label}>
                      <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 30, fontWeight: 800, color: "#fff" }}>
                        <Counter end={s.value} suffix={s.suffix} />
                      </div>
                      <div style={{ fontSize: 11, color: "rgba(239,230,216,0.6)", marginTop: 4, letterSpacing: 0.5 }}>
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Client satisfaction badge */}
            <div
              style={{
                position: "absolute",
                top: -18,
                right: -18,
                background: "#fff",
                borderRadius: 18,
                padding: "16px 20px",
                boxShadow: "0 16px 48px rgba(14,99,61,0.15)",
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              <div
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: "50%",
                  background: "#0e633d",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                }}
              >
                <Icon name="shieldCheck" size={20} />
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 13, color: "#0a1f14" }}>Secure by Design</div>
                <div style={{ fontSize: 12, color: "#0e633d", fontWeight: 700 }}>Enterprise-Grade</div>
              </div>
            </div>

            {/* Industries badge */}
            <div
              style={{
                position: "absolute",
                bottom: -18,
                left: -18,
                background: "#c8a84b",
                borderRadius: 16,
                padding: "14px 20px",
                boxShadow: "0 12px 36px rgba(200,168,75,0.4)",
              }}
            >
              <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: 20, color: "#0a1f14", lineHeight: 1 }}>
                8
              </div>
              <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: 1.5, color: "#0a1f14", marginTop: 3 }}>
                INDUSTRIES SERVED
              </div>
            </div>
          </div>
        </FadeIn>

        {/* ── Right: text ── */}
        <FadeIn delay={150}>
          <div className="eyebrow">{t("about.badge")}</div>
          <h2 style={{ fontSize: 50, fontWeight: 800, color: "#0a1f14", lineHeight: 1.13, marginBottom: 24 }}>
            {t("about.title")} <span style={{ color: "#0e633d" }}>{t("about.titleHighlight")}</span>
          </h2>
          <p style={{ fontSize: 16, color: "#5a7062", lineHeight: 1.85, marginBottom: 20 }}>
            {t("about.p1")}
          </p>
          <p style={{ fontSize: 16, color: "#5a7062", lineHeight: 1.85, marginBottom: 40 }}>
            {t("about.p2")}
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 44 }}>
            {checks.map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                <div
                  style={{
                    width: 22,
                    height: 22,
                    borderRadius: "50%",
                    background: "#0e633d",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    marginTop: 2,
                    color: "#fff",
                  }}
                >
                  <Icon name="check" size={11} strokeWidth={2.4} />
                </div>
                <span style={{ fontSize: 15, color: "#2d3d32", fontWeight: 500 }}>{item}</span>
              </div>
            ))}
          </div>

          <a
            href="#services"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              background: "#0e633d",
              color: "#efe6d8",
              padding: "14px 34px",
              borderRadius: 50,
              fontWeight: 700,
              fontSize: 14,
              transition: "all 0.3s",
              boxShadow: "0 8px 32px rgba(14,99,61,0.25)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#0a4a2e";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#0e633d";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
            }}
          >
            {t("about.discoverBtn")}
            <Icon name="arrow" size={16} strokeWidth={2.5} />
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
