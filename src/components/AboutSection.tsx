import { useTranslation } from "react-i18next";
import FadeIn from "./FadeIn";

/** About / Mission section with stats card and key credentials. */
export default function AboutSection() {
  const { t } = useTranslation();

  const stats = [
    { n: "50+", l: "Specialists" },
    { n: "150+", l: "Projects Delivered" },
    { n: "15+", l: "Industries Served" },
    { n: "97%", l: "Client Retention" },
  ];

  const checks = [
    t("about.check1"),
    t("about.check2"),
    t("about.check3"),
    t("about.check4"),
  ];

  return (
    <section
      id="about"
      style={{ background: "#efe6d8", padding: "120px 48px" }}
    >
      <div
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
                background: "linear-gradient(150deg, #0a2a16, #0e633d)",
                borderRadius: 28,
                padding: 48,
                color: "#fff",
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 32px 80px rgba(14,99,61,0.25)",
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

              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 64,
                  fontWeight: 800,
                  lineHeight: 1,
                  color: "#c8a84b",
                }}
              >
                {t("about.yearsValue")}
              </div>
              <div
                style={{
                  fontSize: 16,
                  marginTop: 6,
                  color: "rgba(239,230,216,0.75)",
                }}
              >
                {t("about.yearsLabel")}
              </div>

              <div
                style={{
                  marginTop: 40,
                  paddingTop: 36,
                  borderTop: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 28,
                  }}
                >
                  {stats.map((s) => (
                    <div key={s.l}>
                      <div
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          fontSize: 30,
                          fontWeight: 800,
                          color: "#fff",
                        }}
                      >
                        {s.n}
                      </div>
                      <div
                        style={{
                          fontSize: 11,
                          color: "rgba(239,230,216,0.6)",
                          marginTop: 4,
                          letterSpacing: 0.5,
                        }}
                      >
                        {s.l}
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
                }}
              >
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#fff"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
              <div>
                <div
                  style={{ fontWeight: 700, fontSize: 13, color: "#0a1f14" }}
                >
                  Client Satisfaction
                </div>
                <div
                  style={{ fontSize: 12, color: "#0e633d", fontWeight: 700 }}
                >
                  98% · Top Rated
                </div>
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
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 800,
                  fontSize: 20,
                  color: "#0a1f14",
                  lineHeight: 1,
                }}
              >
                15+
              </div>
              <div
                style={{
                  fontSize: 9,
                  fontWeight: 700,
                  letterSpacing: 1.5,
                  color: "#0a1f14",
                  marginTop: 3,
                }}
              >
                INDUSTRIES SERVED
              </div>
            </div>
          </div>
        </FadeIn>

        {/* ── Right: text ── */}
        <FadeIn delay={150}>
          <div
            style={{
              color: "#0e633d",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: 2.5,
              textTransform: "uppercase",
              marginBottom: 18,
            }}
          >
            {t("about.badge")}
          </div>
          <h2
            style={{
              fontSize: 50,
              fontWeight: 800,
              color: "#0a1f14",
              lineHeight: 1.13,
              marginBottom: 24,
            }}
          >
            {t("about.title")}
            <br />
            <span style={{ color: "#0e633d" }}>
              {t("about.titleHighlight")}
            </span>
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "#5a7062",
              lineHeight: 1.85,
              marginBottom: 20,
            }}
          >
            {t("about.p1")}
          </p>
          <p
            style={{
              fontSize: 16,
              color: "#5a7062",
              lineHeight: 1.85,
              marginBottom: 40,
            }}
          >
            {t("about.p2")}
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 14,
              marginBottom: 44,
            }}
          >
            {checks.map((item) => (
              <div
                key={item}
                style={{ display: "flex", alignItems: "flex-start", gap: 12 }}
              >
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
                  }}
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path
                      d="M2 5l2.5 2.5 3.5-4"
                      stroke="#fff"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span
                  style={{ fontSize: 15, color: "#2d3d32", fontWeight: 500 }}
                >
                  {item}
                </span>
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
              (e.currentTarget as HTMLAnchorElement).style.background =
                "#0a4a2e";
              (e.currentTarget as HTMLAnchorElement).style.transform =
                "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background =
                "#0e633d";
              (e.currentTarget as HTMLAnchorElement).style.transform =
                "translateY(0)";
            }}
          >
            {t("about.discoverBtn")}
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
