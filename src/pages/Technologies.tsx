import { useTranslation } from "react-i18next";
import TechEcosystem from "../components/TechEcosystem";
import FadeIn from "../components/FadeIn";

/** Standalone Technologies page — page hero + the full grouped tech-stack grid. */
export default function Technologies() {
  const { t } = useTranslation();

  return (
    <>
      <title>SFGCO Tech | Technology Stack</title>
      <meta
        name="description"
        content="The cloud, application, AI, and enterprise platforms SFGCO Tech builds on — AWS, Azure, Google Cloud, React, Python, OpenAI, SAP, Odoo, ERPNext, and more."
      />

      {/* Page hero */}
      <section
        style={{
          background: "linear-gradient(145deg, #060f08 0%, #0a2a16 30%, #0b2d1e 55%, #1a8050 100%)",
          padding: "160px 48px 100px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: -80,
            left: -80,
            width: 380,
            height: 380,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(200,168,75,0.07), transparent 65%)",
            pointerEvents: "none",
          }}
        />
        <FadeIn>
          <div
            style={{
              color: "#c8a84b",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: 2.5,
              textTransform: "uppercase",
              marginBottom: 20,
            }}
          >
            {t("technologies.badge")}
          </div>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 60,
              fontWeight: 800,
              color: "#fff",
              lineHeight: 1.1,
              marginBottom: 20,
              letterSpacing: -1,
            }}
          >
            {t("pages.technologies.title")}
          </h1>
          <p style={{ fontSize: 18, color: "rgba(239,230,216,0.7)", maxWidth: 520, margin: "0 auto" }}>
            {t("pages.technologies.subtitle")}
          </p>
        </FadeIn>
      </section>

      <TechEcosystem />
    </>
  );
}
