import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import FadeIn from "./FadeIn";

/** News teaser on the home page — links out to the full /news listing. */
export default function NewsTeaserSection() {
  const { t } = useTranslation();
  const categories = t("news.categories", { returnObjects: true }) as string[];

  return (
    <section id="news" style={{ background: "#fff", padding: "120px 48px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
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
              {t("news.badge")}
            </div>
            <h2 style={{ fontSize: 44, fontWeight: 800, color: "#0a1f14", marginBottom: 16 }}>
              {t("news.title")}
            </h2>
            <p style={{ color: "#5a7062", fontSize: 16, maxWidth: 520, margin: "0 auto" }}>
              {t("news.subtitle")}
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <div
            style={{
              background: "#faf8f5",
              border: "1.5px solid #ede5d9",
              borderRadius: 24,
              padding: "40px 44px",
            }}
          >
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: 1,
                color: "#9aaa9e",
                textTransform: "uppercase",
                marginBottom: 20,
              }}
            >
              {t("news.categoriesTitle")}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              {categories.map((c) => (
                <span
                  key={c}
                  style={{
                    background: "rgba(14,99,61,0.07)",
                    color: "#0e633d",
                    padding: "9px 18px",
                    borderRadius: 50,
                    fontSize: 13.5,
                    fontWeight: 600,
                  }}
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={150}>
          <div style={{ textAlign: "center", marginTop: 44 }}>
            <Link
              to="/news"
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
                boxShadow: "0 8px 32px rgba(14,99,61,0.25)",
              }}
            >
              {t("news.viewAllBtn")}
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
