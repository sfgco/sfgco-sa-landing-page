import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const SECTOR_ICONS: { key: string; icon: React.ReactNode }[] = [
  { key: "renewable", icon: <path d="M12 3v2m0 14v2m9-9h-2M5 12H3m14.4-6.4l-1.4 1.4M7 17l-1.4 1.4m0-12.8L7 7m10 10l1.4 1.4M12 8a4 4 0 100 8 4 4 0 000-8z" /> },
  { key: "environment", icon: <path d="M12 22c-4.4-1.2-8-5.6-8-11 0-3 1.4-5.6 3.6-7.3C9.2 2.3 10.6 2 12 2s2.8.3 4.4 1.7C18.6 5.4 20 8 20 11c0 5.4-3.6 9.8-8 11z" /> },
  { key: "realEstate", icon: <path d="M3 11l9-8 9 8M5 10v10h14V10M9 20v-6h6v6" /> },
  { key: "tech", icon: <path d="M9 3H5a2 2 0 00-2 2v4m18 0V5a2 2 0 00-2-2h-4m0 18h4a2 2 0 002-2v-4M3 15v4a2 2 0 002 2h4" /> },
  { key: "agriculture", icon: <path d="M12 2C8 6 6 9 6 13a6 6 0 0012 0c0-4-2-7-6-11z" /> },
  { key: "water", icon: <path d="M12 2s7 8 7 13a7 7 0 01-14 0c0-5 7-13 7-13z" /> },
  { key: "recycling", icon: <path d="M7 19H4.8a2 2 0 01-1.7-3l3-5m10 8h3.1a2 2 0 001.7-3l-1.5-2.6M14 5.4l1.5 2.6" /> },
  { key: "logistics", icon: <path d="M3 17h13V7H3v10zM16 10h3l3 3v4h-6v-7z" /> },
];

/** Full-screen hero — headline, description, and a visual sectors preview card. */
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
          background: "radial-gradient(circle, rgba(200,168,75,0.07) 0%, transparent 65%)",
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
          background: "radial-gradient(circle, rgba(239,230,216,0.05) 0%, transparent 65%)",
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

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "130px 48px 90px", width: "100%", position: "relative" }}>
        <div className="grid-2-cols" style={{ display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: 80, alignItems: "center" }}>
          {/* Left column */}
          <div style={{ animation: "fadeInUp 0.7s ease forwards" }}>
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
              <span style={{ color: "#c8a84b", fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase" }}>
                {t("hero.badge")}
              </span>
            </div>

            <h1
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
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

            <p style={{ fontSize: 17, color: "rgba(239,230,216,0.8)", lineHeight: 1.9, marginBottom: 44, maxWidth: 560 }}>
              {t("hero.description")}
            </p>

            <div style={{ display: "flex", gap: 16, marginBottom: 56, flexWrap: "wrap" }}>
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
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
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
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(239,230,216,0.08)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
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
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c8a84b" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M12 3l1.7 3.5 3.8.5-2.75 2.7.65 3.8L12 11.5l-3.4 1.8.65-3.8L6.5 7l3.8-.5z" />
                </svg>
              </div>
              <div>
                <div style={{ fontSize: 12, color: "rgba(239,230,216,0.5)" }}>{t("hero.visionLabel")}</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#efe6d8" }}>{t("hero.visionValue")}</div>
              </div>
            </div>
          </div>

          {/* Right column — sectors preview card */}
          <div style={{ position: "relative" }}>
            <div
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(239,230,216,0.12)",
                borderRadius: 28,
                padding: 32,
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
                  insetInlineStart: 0,
                  insetInlineEnd: 0,
                  height: 3,
                  background: "linear-gradient(90deg, #c8a84b 0%, #0e633d 50%, #c8a84b 100%)",
                }}
              />
              <div style={{ color: "rgba(239,230,216,0.7)", fontSize: 13, fontWeight: 600, marginBottom: 22 }}>
                {t("sectors.title")}
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {SECTOR_ICONS.map((s) => (
                  <div
                    key={s.key}
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(239,230,216,0.08)",
                      borderRadius: 14,
                      padding: "14px 12px",
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c8a84b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                      {s.icon}
                    </svg>
                    <span style={{ fontSize: 11.5, color: "#efe6d8", fontWeight: 600, lineHeight: 1.3 }}>
                      {t(`sectors.items.${s.key}.title`)}
                    </span>
                  </div>
                ))}
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
