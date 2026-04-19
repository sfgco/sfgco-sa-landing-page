import { useTranslation } from "react-i18next";
import FadeIn from "./FadeIn";
import HoverCard from "./HoverCard";

const MEMBERS = [
  {
    initials: "MA",
    name: "Magren Al Qahtani",
    role: "CEO & Co-Founder",
    bg: "#0e633d",
    bio: "Former UNCTAD advisor. 20+ yrs sustainable finance & impact investing.",
  },
  {
    initials: "AK",
    name: "Ahmed Khalid",
    role: "Chief Technology Officer",
    bg: "#2a1049",
    bio: "Ex-Toptal AI lead. Built scalable ML systems for climate risk modeling.",
  },
];

const AWARDS = [
  "🏆 Best Green Fund GCC 2025",
  "🌍 UN PRI Gold Rating",
  "⭐ Bloomberg ESG Leader",
  "🔰 GIIN Impact Award 2023",
  "🎖️ FT Sustainable Finance Top 50",
];

/** Leadership team grid with awards strip. */
export default function TeamSection() {
  const { t } = useTranslation();

  return (
    <section id="team" style={{ background: "#fff", padding: "120px 48px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 72 }}>
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
              {t("team.badge")}
            </div>
            <h2
              style={{
                fontSize: 50,
                fontWeight: 800,
                color: "#0a1f14",
                marginBottom: 18,
              }}
            >
              {t("team.title")}
            </h2>
            <p
              style={{
                color: "#5a7062",
                fontSize: 17,
                lineHeight: 1.75,
                maxWidth: 560,
                margin: "0 auto",
              }}
            >
              {t("team.subtitle")}
            </p>
          </div>
        </FadeIn>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 24,
          }}
        >
          {MEMBERS.map((m, idx) => (
            <FadeIn key={m.name} delay={idx * 80}>
              <HoverCard
                variant="team"
                style={{
                  borderRadius: 22,
                  overflow: "hidden",
                  border: "1.5px solid #ede5d9",
                  cursor: "pointer",
                  background: "#fff",
                }}
              >
                <div
                  style={{
                    height: 190,
                    background: m.bg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: -40,
                      right: -40,
                      width: 140,
                      height: 140,
                      borderRadius: "50%",
                      background: "rgba(255,255,255,0.05)",
                    }}
                  />
                  <div
                    style={{
                      width: 84,
                      height: 84,
                      borderRadius: "50%",
                      background: "rgba(239,230,216,0.15)",
                      border: "3px solid rgba(239,230,216,0.25)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "'Playfair Display', serif",
                      fontSize: 30,
                      fontWeight: 800,
                      color: "#efe6d8",
                    }}
                  >
                    {m.initials}
                  </div>
                </div>
                <div style={{ padding: "22px 24px 26px" }}>
                  <h4
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: 17,
                      fontWeight: 800,
                      color: "#0a1f14",
                      marginBottom: 4,
                    }}
                  >
                    {m.name}
                  </h4>
                  <div
                    style={{
                      fontSize: 12,
                      color: "#0e633d",
                      fontWeight: 700,
                      marginBottom: 12,
                      letterSpacing: 0.3,
                    }}
                  >
                    {m.role}
                  </div>
                  <p
                    style={{ fontSize: 12, color: "#9aaa9e", lineHeight: 1.65 }}
                  >
                    {m.bio}
                  </p>
                </div>
              </HoverCard>
            </FadeIn>
          ))}
        </div>

        {/* Awards row */}
        <FadeIn delay={200}>
          <div
            style={{
              marginTop: 72,
              background: "#f5f0e8",
              borderRadius: 24,
              padding: "40px 48px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 32,
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                fontSize: 14,
                fontWeight: 700,
                color: "#6b7c6e",
                letterSpacing: 0.5,
              }}
            >
              {t("team.recognition")}
            </div>
            {AWARDS.map((award) => (
              <div
                key={award}
                style={{ fontSize: 13, fontWeight: 600, color: "#2d3d32" }}
              >
                {award}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
