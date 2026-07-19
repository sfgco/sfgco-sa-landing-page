import { useTranslation } from "react-i18next";
import ContactForm from "../components/ContactForm";
import FadeIn from "../components/FadeIn";
import Icon from "../components/Icon";

const INFO_CARDS: { icon: React.ComponentProps<typeof Icon>["name"]; labelKey: string; val: string; href: string }[] = [
  { icon: "mail", labelKey: "cta.emailLabel", val: "tech@sfgco.sa", href: "mailto:tech@sfgco.sa" },
  { icon: "phone", labelKey: "cta.callLabel", val: "+966 55 593 0749", href: "tel:+966555930749" },
  { icon: "globe", labelKey: "cta.webLabel", val: "tech.sfgco.sa", href: "https://tech.sfgco.sa" },
];

/** Standalone Contact page — page hero, contact form, and direct contact info. */
export default function Contact() {
  const { t } = useTranslation();

  return (
    <>
      <title>SFGCO Tech | Contact Us</title>
      <meta name="description" content={t("pages.contact.subtitle")} />

      {/* Page hero */}
      <section
        style={{
          background: "linear-gradient(145deg, #060f08 0%, #0a2a16 50%, #0e633d 100%)",
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
            background: "radial-gradient(circle, rgba(200,168,75,0.09), transparent 65%)",
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
          <p style={{ fontSize: 18, color: "rgba(239,230,216,0.7)", maxWidth: 520, margin: "0 auto" }}>
            {t("pages.contact.subtitle")}
          </p>
        </FadeIn>
      </section>

      {/* Form + info */}
      <section style={{ background: "#efe6d8", padding: "104px 48px" }}>
        <div
          className="grid-2-col"
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1.3fr 1fr",
            gap: 48,
            alignItems: "start",
          }}
        >
          <FadeIn>
            <ContactForm />
          </FadeIn>

          <FadeIn delay={120}>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 20,
                  fontWeight: 800,
                  color: "#0a1f14",
                  marginBottom: 4,
                }}
              >
                {t("contact.infoTitle")}
              </h3>
              {INFO_CARDS.map((c) => (
                <a
                  key={c.labelKey}
                  href={c.href}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    background: "#fff",
                    border: "1.5px solid #e0d4c0",
                    borderRadius: 16,
                    padding: "18px 20px",
                    transition: "border-color 0.2s ease",
                  }}
                >
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      background: "rgba(14,99,61,0.1)",
                      color: "#0e633d",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon name={c.icon} size={19} />
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: 10,
                        color: "#9aaa9e",
                        letterSpacing: 1,
                        textTransform: "uppercase",
                        marginBottom: 3,
                      }}
                    >
                      {t(c.labelKey)}
                    </div>
                    <div dir="ltr" style={{ fontSize: 14, color: "#0a1f14", fontWeight: 700, unicodeBidi: "isolate" }}>{c.val}</div>
                  </div>
                </a>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
