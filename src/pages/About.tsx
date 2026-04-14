import { useTranslation } from "react-i18next";
import AboutSection from "../components/AboutSection";
import TeamSection from "../components/TeamSection";
import FadeIn from "../components/FadeIn";

/** Standalone About page — page hero + reuses AboutSection and TeamSection. */
export default function About() {
  const { t } = useTranslation();

  return (
    <>
      {/* Page hero */}
      <section
        style={{
          background:
            "linear-gradient(145deg, #060f08 0%, #0a2a16 35%, #0e633d 100%)",
          padding: "160px 48px 100px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -80,
            right: -80,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(200,168,75,0.08), transparent 65%)",
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
            SFGCO
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
            {t("pages.about.title")}
          </h1>
          <p
            style={{
              fontSize: 18,
              color: "rgba(239,230,216,0.7)",
              maxWidth: 520,
              margin: "0 auto",
            }}
          >
            {t("pages.about.subtitle")}
          </p>
        </FadeIn>
      </section>

      <AboutSection />
      <TeamSection />
    </>
  );
}
