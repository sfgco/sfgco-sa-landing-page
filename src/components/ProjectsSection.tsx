import { useTranslation } from "react-i18next";
import FadeIn from "./FadeIn";

/**
 * Completed Projects. No real project entries have been supplied yet — the
 * source document explicitly placeholders this list ("يتم ذكر المشاريع...").
 * `PROJECTS` is the future CMS/admin-managed data slot: add entries here (or
 * wire to a CMS) to have them render as cards automatically.
 */
type Project = { title: string; location: string; category: string; image?: string };
const PROJECTS: Project[] = [];

export default function ProjectsSection() {
  const { t } = useTranslation();

  return (
    <section id="projects" style={{ background: "#fff", padding: "120px 48px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
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
              {t("projects.badge")}
            </div>
            <h2 style={{ fontSize: 44, fontWeight: 800, color: "#0a1f14", marginBottom: 18 }}>{t("projects.title")}</h2>
            <p style={{ color: "#5a7062", fontSize: 16, lineHeight: 1.8, maxWidth: 620, margin: "0 auto" }}>
              {t("projects.body")}
            </p>
          </div>
        </FadeIn>

        {PROJECTS.length === 0 ? (
          <FadeIn delay={100}>
            <div
              style={{
                background: "#faf8f5",
                border: "1.5px dashed #ddd0be",
                borderRadius: 24,
                padding: "56px 40px",
                textAlign: "center",
              }}
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#9aaa9e" strokeWidth="1.5" style={{ margin: "0 auto 18px" }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M5 21V7l7-4 7 4v14M9 9h1m4 0h1m-6 4h1m4 0h1" />
              </svg>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 800, color: "#0a1f14", marginBottom: 10 }}>
                {t("projects.emptyTitle")}
              </h3>
              <p style={{ fontSize: 14, color: "#8a988c", maxWidth: 420, margin: "0 auto" }}>{t("projects.emptyBody")}</p>
            </div>
          </FadeIn>
        ) : (
          <div className="grid-3-cols" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {PROJECTS.map((p) => (
              <div key={p.title}>{p.title}</div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
