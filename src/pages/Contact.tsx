import { useTranslation } from "react-i18next";
import CTASection from "../components/CTASection";
import FadeIn from "../components/FadeIn";

/** Standalone Contact page — page hero + full CTA / contact section. */
export default function Contact() {
  const { t } = useTranslation();

  return (
    <>
      {/* Page hero */}
      <section
        style={{
          background:
            "linear-gradient(145deg, #060f08 0%, #0a2a16 50%, #0e633d 100%)",
          padding: "160px 48px 100px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -60,
            right: -60,
            width: 360,
            height: 360,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(200,168,75,0.09), transparent 65%)",
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
            {t("cta.badge")}
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
            {t("pages.contact.title")}
          </h1>
          <p
            style={{
              fontSize: 18,
              color: "rgba(239,230,216,0.7)",
              maxWidth: 520,
              margin: "0 auto",
            }}
          >
            {t("pages.contact.subtitle")}
          </p>
        </FadeIn>
      </section>

      <CTASection />
    </>
  );
}
