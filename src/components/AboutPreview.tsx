import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import FadeIn from "./FadeIn";
import Icon from "./Icon";

/** Home page's short "Brief About" teaser — full company story lives on /about. */
export default function AboutPreview() {
  const { t } = useTranslation();

  return (
    <section id="about" style={{ background: "#efe6d8", padding: "104px 48px" }}>
      <div style={{ maxWidth: 780, margin: "0 auto", textAlign: "center" }}>
        <FadeIn>
          <div className="eyebrow" style={{ display: "flex", justifyContent: "center" }}>
            {t("about.badge")}
          </div>
          <h2 style={{ fontSize: 42, fontWeight: 800, color: "#0a1f14", lineHeight: 1.15, marginBottom: 20 }}>
            {t("about.title")} <span style={{ color: "#0e633d" }}>{t("about.titleHighlight")}</span>
          </h2>
          <p style={{ fontSize: 16, color: "#5a7062", lineHeight: 1.85, marginBottom: 32 }}>
            {t("about.brief")}
          </p>
          <Link
            to="/about"
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
            {t("about.learnMoreBtn")}
            <Icon name="arrow" size={16} strokeWidth={2.5} />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
