import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import FadeIn from "./FadeIn";

/**
 * Investment Opportunities. No real opportunities have been supplied yet — the
 * source document explicitly placeholders this list ("يتم ذكر الفرص...").
 * `OPPORTUNITIES` is the future CMS/admin-managed data slot.
 */
type Opportunity = { title: string; sector: string };
const OPPORTUNITIES: Opportunity[] = [];

export default function OpportunitiesSection() {
  const { t } = useTranslation();

  return (
    <section id="opportunities" style={{ background: "#efe6d8", padding: "120px 48px" }}>
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
              {t("opportunities.badge")}
            </div>
            <h2 style={{ fontSize: 44, fontWeight: 800, color: "#0a1f14", marginBottom: 18 }}>{t("opportunities.title")}</h2>
            <p style={{ color: "#5a7062", fontSize: 16, lineHeight: 1.8, maxWidth: 620, margin: "0 auto" }}>
              {t("opportunities.body")}
            </p>
          </div>
        </FadeIn>

        {OPPORTUNITIES.length === 0 ? (
          <FadeIn delay={100}>
            <div
              style={{
                background: "#fff",
                border: "1.5px dashed #cfc2a8",
                borderRadius: 24,
                padding: "56px 40px",
                textAlign: "center",
              }}
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#9aaa9e" strokeWidth="1.5" style={{ margin: "0 auto 18px" }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3M12 2a10 10 0 100 20 10 10 0 000-20z" />
              </svg>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 800, color: "#0a1f14", marginBottom: 10 }}>
                {t("opportunities.emptyTitle")}
              </h3>
              <p style={{ fontSize: 14, color: "#8a988c", maxWidth: 420, margin: "0 auto 26px" }}>{t("opportunities.emptyBody")}</p>
              <Link
                to="/contact"
                style={{
                  display: "inline-flex",
                  background: "#0e633d",
                  color: "#efe6d8",
                  padding: "13px 30px",
                  borderRadius: 50,
                  fontWeight: 700,
                  fontSize: 13.5,
                }}
              >
                {t("opportunities.requestBtn")}
              </Link>
            </div>
          </FadeIn>
        ) : (
          <div className="grid-3-cols" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {OPPORTUNITIES.map((o) => (
              <div key={o.title}>{o.title}</div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
