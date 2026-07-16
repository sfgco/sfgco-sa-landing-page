import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import heroPhoto from "../assets/hero-riyadh.jpg";

/** Full-screen hero — full-bleed photo background with a dark scrim, single content column. */
export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* Full-bleed photo background */}
      <img
        src={heroPhoto}
        alt=""
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      {/* Dark scrim for text contrast over the photo */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(145deg, rgba(6,15,8,0.88) 0%, rgba(10,42,22,0.82) 25%, rgba(14,99,61,0.74) 55%, rgba(26,128,80,0.72) 75%, rgba(12,61,37,0.86) 100%)",
        }}
      />

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

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "130px 48px 90px",
          width: "100%",
          position: "relative",
        }}
      >
        {/* Content column */}
        <div
          style={{
            maxWidth: 680,
            animation: "fadeInUp 0.7s ease forwards",
          }}
        >
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
              <div style={{ fontSize: 14, fontWeight: 700, color: "#efe6d8" }}>
                {t("hero.visionValue")}
              </div>
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
