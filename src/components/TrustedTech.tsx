import { useTranslation } from "react-i18next";
import LogoMarquee from "./LogoMarquee";
import { TECH_FLAT } from "../data/techStack";

/** Slim animated strip of technology-partner badges, right beneath the Hero. */
export default function TrustedTech() {
  const { t } = useTranslation();

  return (
    <section style={{ background: "#faf8f5", padding: "48px 0", borderBottom: "1px solid #ede5d9" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px", marginBottom: 26 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
          <span
            style={{
              color: "#0e633d",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            {t("trustedTech.badge")}
          </span>
          <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#c8a84b" }} />
          <span style={{ color: "#5a7062", fontSize: 13.5, fontWeight: 500 }}>
            {t("trustedTech.title")}
          </span>
        </div>
      </div>
      <LogoMarquee items={TECH_FLAT} />
    </section>
  );
}
