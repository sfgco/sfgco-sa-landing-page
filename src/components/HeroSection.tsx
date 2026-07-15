import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logoImg from "../assets/sfgco-logo.png";
import HeroIllustration from "./HeroIllustration";

/** Full-screen hero — premium split layout: company identity + headline on one side, a custom illustration on the other. */
export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(145deg, #060f08 0%, #0a2a16 25%, #0e633d 55%, #1a8050 75%, #0c3d25 100%)",
        position: "relative",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* Background orbs */}
      <div
        style={{
          position: "absolute",
          width: 700,
          height: 700,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(200,168,75,0.07) 0%, transparent 65%)",
          top: -150,
          insetInlineEnd: -150,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(239,230,216,0.05) 0%, transparent 65%)",
          bottom: 0,
          insetInlineStart: -100,
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
          className="grid-2-cols"
          style={{
            display: "grid",
            gridTemplateColumns: "1.05fr 0.95fr",
            gap: 80,
            alignItems: "center",
          }}
        >
          {/* Left column */}
          <div style={{ animation: "fadeInUp 0.7s ease forwards" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                marginBottom: 20,
              }}
            >
              <img
                src={logoImg}
                alt="SFGCO"
                style={{ height: 52, objectFit: "contain" }}
              />
              <div
                style={{
                  fontFamily: "'cairo', serif",
                  fontWeight: 800,
                  fontSize: 26,
                  color: "#fff",
                  letterSpacing: 4,
                }}
              >
                SFGCO
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                marginBottom: 32,
              }}
            >
              <span
                style={{
                  width: 28,
                  height: 2,
                  background: "#c8a84b",
                  display: "inline-block",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  color: "#e8cc7a",
                  fontSize: 15,
                  fontWeight: 600,
                  letterSpacing: 0.3,
                }}
              >
                {t("hero.badge")}
              </span>
            </div>

            <h1
              style={{
                fontFamily: "'cairo', Georgia, serif",
                fontSize: 52,
                fontWeight: 800,
                lineHeight: 1.25,
                color: "#fff",
                marginBottom: 28,
                letterSpacing: -1,
              }}
            >
              {t("hero.title")}
            </h1>

            <p
              style={{
                fontSize: 17,
                color: "rgba(239,230,216,0.8)",
                lineHeight: 1.9,
                marginBottom: 44,
                maxWidth: 560,
              }}
            >
              {t("hero.description")}
            </p>

            <div
              style={{
                display: "flex",
                gap: 16,
                marginBottom: 56,
                flexWrap: "wrap",
              }}
            >
              <Link
                to="/investment-sectors"
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
                  (e.currentTarget as HTMLAnchorElement).style.transform =
                    "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.transform =
                    "translateY(0)";
                }}
              >
                {t("hero.ctaPrimary")}
              </Link>
              <Link
                to="/about"
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
                  (e.currentTarget as HTMLAnchorElement).style.background =
                    "rgba(239,230,216,0.08)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background =
                    "transparent";
                }}
              >
                {t("hero.ctaSecondary")}
              </Link>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: "50%",
                  border: "1.5px solid rgba(200,168,75,0.5)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#c8a84b"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4M12 3l1.7 3.5 3.8.5-2.75 2.7.65 3.8L12 11.5l-3.4 1.8.65-3.8L6.5 7l3.8-.5z"
                  />
                </svg>
              </div>
              <div>
                <div style={{ fontSize: 12, color: "rgba(239,230,216,0.5)" }}>
                  {t("hero.visionLabel")}
                </div>
                <div
                  style={{ fontSize: 14, fontWeight: 700, color: "#efe6d8" }}
                >
                  {t("hero.visionValue")}
                </div>
              </div>
            </div>
          </div>

          {/* Right column — premium illustration: energy, growth, sustainability */}
          <div style={{ position: "relative" }}>
            <div
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(239,230,216,0.12)",
                borderRadius: 28,
                padding: 28,
                backdropFilter: "blur(24px)",
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 32px 80px rgba(0,0,0,0.3)",
                aspectRatio: "1 / 1",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  insetInlineStart: 0,
                  insetInlineEnd: 0,
                  height: 3,
                  background:
                    "linear-gradient(90deg, #c8a84b 0%, #0e633d 50%, #c8a84b 100%)",
                }}
              />
              <HeroIllustration />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        style={{
          position: "absolute",
          bottom: 36,
          insetInlineStart: "50%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          animation: "bounce 2s infinite",
          cursor: "pointer",
        }}
      >
        <svg width="20" height="28" viewBox="0 0 20 28" fill="none">
          <rect
            x="1"
            y="1"
            width="18"
            height="26"
            rx="9"
            stroke="rgba(239,230,216,0.25)"
            strokeWidth="1.5"
          />
          <circle cx="10" cy="8" r="3" fill="rgba(200,168,75,0.7)">
            <animate
              attributeName="cy"
              values="8;18;8"
              dur="2s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="1;0.3;1"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      </div>
    </section>
  );
}
