import { useTranslation } from "react-i18next";
import FadeIn from "./FadeIn";

const cloudServices = [
  { key: "infra", icon: "🏗️" },
  { key: "devops", icon: "🔄" },
  { key: "security", icon: "🔒" },
  { key: "data", icon: "📊" },
  { key: "saas", icon: "🧩" },
  { key: "edge", icon: "⚡" },
];

export default function TechCloudSection() {
  const { t } = useTranslation();

  return (
    <section
      style={{
        background: "linear-gradient(180deg, #081a10 0%, #0a1f14 100%)",
        padding: "100px 48px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          bottom: -100,
          right: -100,
          width: 600,
          height: 600,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(200,168,75,0.06), transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
        {/* Header */}
        <FadeIn>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              marginBottom: 60,
              gap: 40,
              flexWrap: "wrap",
            }}
          >
            <div style={{ flex: "1 1 420px" }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "rgba(200,168,75,0.1)",
                  border: "1px solid rgba(200,168,75,0.22)",
                  borderRadius: 50,
                  padding: "6px 16px",
                  marginBottom: 24,
                }}
              >
                <span style={{ fontSize: 14 }}>☁️</span>
                <span
                  style={{
                    color: "#c8a84b",
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: 2,
                    textTransform: "uppercase",
                  }}
                >
                  {t("tech.cloud.badge")}
                </span>
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
                }}
              >
                {t("tech.cloud.title")}
              </h2>
              <p
                style={{
                  fontSize: 16,
                  color: "rgba(239,230,216,0.65)",
                  lineHeight: 1.8,
                  maxWidth: 520,
                }}
              >
                {t("tech.cloud.desc")}
              </p>
            </div>

            {/* Cloud metrics */}
            <div
              style={{
                display: "flex",
                gap: 20,
                flex: "0 0 auto",
                flexWrap: "wrap",
              }}
            >
              {[
                { val: "99.99%", label: t("tech.cloud.m1") },
                { val: "3×", label: t("tech.cloud.m2") },
                { val: "60%", label: t("tech.cloud.m3") },
              ].map((m) => (
                <div
                  key={m.label}
                  style={{
                    background: "rgba(200,168,75,0.08)",
                    border: "1px solid rgba(200,168,75,0.18)",
                    borderRadius: 16,
                    padding: "24px 28px",
                    textAlign: "center",
                    minWidth: 110,
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: 32,
                      fontWeight: 800,
                      color: "#c8a84b",
                      marginBottom: 6,
                    }}
                  >
                    {m.val}
                  </div>
                  <div
                    style={{
                      fontSize: 11,
                      color: "rgba(239,230,216,0.5)",
                      lineHeight: 1.4,
                    }}
                  >
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Services grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
          }}
          className="cloud-grid"
        >
          {cloudServices.map((svc, i) => (
            <FadeIn key={svc.key} delay={i * 80}>
              <div
                className="hover-card-sm"
                style={{
                  background: "linear-gradient(145deg, #0a1f14, #0d2a1a)",
                  border: "1px solid rgba(200,168,75,0.12)",
                  borderRadius: 18,
                  padding: "32px 28px",
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    background: "rgba(200,168,75,0.1)",
                    border: "1px solid rgba(200,168,75,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 22,
                    marginBottom: 20,
                  }}
                >
                  {svc.icon}
                </div>
                <h4
                  style={{
                    fontSize: 16,
                    fontWeight: 700,
                    color: "#fff",
                    marginBottom: 10,
                  }}
                >
                  {t(`tech.cloud.svc.${svc.key}.title`)}
                </h4>
                <p
                  style={{
                    fontSize: 14,
                    color: "rgba(239,230,216,0.55)",
                    lineHeight: 1.65,
                  }}
                >
                  {t(`tech.cloud.svc.${svc.key}.desc`)}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Cloud approach highlight */}
        <FadeIn delay={300}>
          <div
            style={{
              marginTop: 48,
              background:
                "linear-gradient(135deg, rgba(200,168,75,0.07) 0%, rgba(46,168,102,0.07) 100%)",
              border: "1px solid rgba(200,168,75,0.15)",
              borderRadius: 20,
              padding: "40px 48px",
              display: "flex",
              alignItems: "center",
              gap: 40,
              flexWrap: "wrap",
            }}
          >
            <div style={{ flex: "1 1 320px" }}>
              <h4
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 22,
                  fontWeight: 700,
                  color: "#fff",
                  marginBottom: 12,
                }}
              >
                {t("tech.cloud.approach.title")}
              </h4>
              <p
                style={{
                  fontSize: 15,
                  color: "rgba(239,230,216,0.6)",
                  lineHeight: 1.7,
                }}
              >
                {t("tech.cloud.approach.desc")}
              </p>
            </div>
            <div
              style={{
                display: "flex",
                gap: 12,
                flex: "0 0 auto",
                flexWrap: "wrap",
              }}
            >
              {["AWS", "Azure", "GCP", "Multi-Cloud"].map((cloud) => (
                <div
                  key={cloud}
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: 8,
                    padding: "8px 18px",
                    fontSize: 13,
                    fontWeight: 600,
                    color: "rgba(239,230,216,0.75)",
                  }}
                >
                  {cloud}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .cloud-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .cloud-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
