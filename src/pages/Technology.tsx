import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import FadeIn from "../components/FadeIn";
import TechPillarsSection from "../components/TechPillarsSection";
import TechAIDeepSection from "../components/TechAIDeepSection";
import TechCloudSection from "../components/TechCloudSection";
import TechMobilitySection from "../components/TechMobilitySection";

/** Standalone Technology page — AI, Cloud, and Mobility deep-dives. */
export default function Technology() {
  const { t } = useTranslation();

  return (
    <>
      {/* ── Page hero ─────────────────────────────────────────────────────── */}
      <section
        style={{
          background:
            "linear-gradient(145deg, #060f08 0%, #0a2a16 40%, #0e633d 100%)",
          padding: "160px 48px 110px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative orbs */}
        <div
          style={{
            position: "absolute",
            top: -100,
            right: -100,
            width: 480,
            height: 480,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(200,168,75,0.08), transparent 65%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -80,
            left: -80,
            width: 360,
            height: 360,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(75,142,200,0.08), transparent 65%)",
            pointerEvents: "none",
          }}
        />

        <FadeIn>
          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              background: "rgba(200,168,75,0.12)",
              border: "1px solid rgba(200,168,75,0.28)",
              borderRadius: 50,
              padding: "8px 20px",
              marginBottom: 28,
            }}
          >
            <span style={{ fontSize: 16 }}>🔬</span>
            <span
              style={{
                color: "#c8a84b",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: 2.5,
                textTransform: "uppercase",
              }}
            >
              {t("pages.technology.badge")}
            </span>
          </div>

          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(44px, 7vw, 72px)",
              fontWeight: 800,
              color: "#fff",
              lineHeight: 1.08,
              marginBottom: 24,
              letterSpacing: -1.5,
              maxWidth: 820,
              margin: "0 auto 24px",
            }}
          >
            {t("pages.technology.titleLine1")}{" "}
            <span style={{ color: "#2ea866" }}>
              {t("pages.technology.titleHighlight")}
            </span>
            {t("pages.technology.titleLine2") && (
              <>
                <br />
                {t("pages.technology.titleLine2")}
              </>
            )}
          </h1>

          <p
            style={{
              fontSize: 18,
              color: "rgba(239,230,216,0.7)",
              maxWidth: 580,
              margin: "0 auto 48px",
              lineHeight: 1.75,
            }}
          >
            {t("pages.technology.subtitle")}
          </p>

          {/* Hero CTA row */}
          <div
            style={{
              display: "flex",
              gap: 16,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <NavLink
              to="/contact"
              style={{
                background: "#c8a84b",
                color: "#0a1f14",
                padding: "14px 32px",
                borderRadius: 50,
                fontSize: 14,
                fontWeight: 700,
                letterSpacing: 0.5,
                boxShadow: "0 4px 24px rgba(200,168,75,0.35)",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform =
                  "translateY(-2px)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                  "0 8px 32px rgba(200,168,75,0.5)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform =
                  "translateY(0)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                  "0 4px 24px rgba(200,168,75,0.35)";
              }}
            >
              {t("pages.technology.ctaBtn")}
            </NavLink>
            <NavLink
              to="/investments"
              style={{
                background: "transparent",
                color: "rgba(239,230,216,0.85)",
                padding: "14px 32px",
                borderRadius: 50,
                fontSize: 14,
                fontWeight: 600,
                border: "1px solid rgba(239,230,216,0.2)",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor =
                  "rgba(239,230,216,0.5)";
                (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor =
                  "rgba(239,230,216,0.2)";
                (e.currentTarget as HTMLAnchorElement).style.color =
                  "rgba(239,230,216,0.85)";
              }}
            >
              {t("pages.technology.viewInvestBtn")}
            </NavLink>
          </div>

          {/* Pillar quick-links */}
          <div
            style={{
              display: "flex",
              gap: 12,
              justifyContent: "center",
              marginTop: 52,
              flexWrap: "wrap",
            }}
          >
            {[
              { label: "AI & Machine Learning", color: "#2ea866", href: "#ai" },
              { label: "Cloud Infrastructure", color: "#c8a84b", href: "#cloud" },
              { label: "Smart Mobility", color: "#4b8ec8", href: "#mobility" },
            ].map((tag) => (
              <a
                key={tag.label}
                href={tag.href}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  background: "rgba(255,255,255,0.04)",
                  border: `1px solid ${tag.color}40`,
                  borderRadius: 50,
                  padding: "7px 18px",
                  fontSize: 12,
                  fontWeight: 600,
                  color: "rgba(239,230,216,0.7)",
                  textDecoration: "none",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor =
                    tag.color;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "rgba(239,230,216,0.7)";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = `${tag.color}40`;
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: tag.color,
                    flexShrink: 0,
                  }}
                />
                {tag.label}
              </a>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* ── Three pillars overview ─────────────────────────────────────────── */}
      <TechPillarsSection />

      {/* ── AI deep-dive ──────────────────────────────────────────────────── */}
      <div id="ai">
        <TechAIDeepSection />
      </div>

      {/* ── Cloud deep-dive ───────────────────────────────────────────────── */}
      <div id="cloud">
        <TechCloudSection />
      </div>

      {/* ── Mobility deep-dive ────────────────────────────────────────────── */}
      <div id="mobility">
        <TechMobilitySection />
      </div>

      {/* ── Page CTA ──────────────────────────────────────────────────────── */}
      <section
        style={{
          background:
            "linear-gradient(135deg, #060f08 0%, #0a2a16 50%, #060f08 100%)",
          padding: "100px 48px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(46,168,102,0.1)",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 600,
            height: 400,
            background:
              "radial-gradient(ellipse, rgba(46,168,102,0.06), transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <FadeIn>
          <div
            style={{
              color: "#c8a84b",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: 2.5,
              textTransform: "uppercase",
              marginBottom: 20,
            }}
          >
            {t("pages.technology.cta.badge")}
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 46,
              fontWeight: 800,
              color: "#fff",
              lineHeight: 1.15,
              marginBottom: 20,
              letterSpacing: -0.5,
              maxWidth: 700,
              margin: "0 auto 20px",
            }}
          >
            {t("pages.technology.cta.title")}
          </h2>
          <p
            style={{
              fontSize: 17,
              color: "rgba(239,230,216,0.6)",
              maxWidth: 520,
              margin: "0 auto 44px",
              lineHeight: 1.7,
            }}
          >
            {t("pages.technology.cta.subtitle")}
          </p>
          <div
            style={{
              display: "flex",
              gap: 16,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <NavLink
              to="/contact"
              style={{
                background: "#c8a84b",
                color: "#0a1f14",
                padding: "15px 36px",
                borderRadius: 50,
                fontSize: 14,
                fontWeight: 700,
                letterSpacing: 0.5,
                boxShadow: "0 4px 24px rgba(200,168,75,0.3)",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform =
                  "translateY(-2px)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                  "0 8px 32px rgba(200,168,75,0.45)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform =
                  "translateY(0)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                  "0 4px 24px rgba(200,168,75,0.3)";
              }}
            >
              {t("pages.technology.cta.btn")}
            </NavLink>
            <NavLink
              to="/investments"
              style={{
                background: "transparent",
                color: "rgba(239,230,216,0.8)",
                padding: "15px 36px",
                borderRadius: 50,
                fontSize: 14,
                fontWeight: 600,
                border: "1px solid rgba(239,230,216,0.2)",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor =
                  "rgba(239,230,216,0.45)";
                (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor =
                  "rgba(239,230,216,0.2)";
                (e.currentTarget as HTMLAnchorElement).style.color =
                  "rgba(239,230,216,0.8)";
              }}
            >
              {t("pages.technology.cta.secondary")}
            </NavLink>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
