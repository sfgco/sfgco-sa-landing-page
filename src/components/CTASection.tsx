import { useTranslation } from "react-i18next";
import FadeIn from "./FadeIn";
import Icon from "./Icon";

const CONTACT_CARDS: { icon: React.ComponentProps<typeof Icon>["name"]; labelKey: string; val: string; href: string }[] = [
  { icon: "mail", labelKey: "cta.emailLabel", val: "tech@sfgco.sa", href: "mailto:tech@sfgco.sa" },
  { icon: "phone", labelKey: "cta.callLabel", val: "+966 55 593 0749", href: "tel:+966555930749" },
  { icon: "globe", labelKey: "cta.webLabel", val: "tech.sfgco.sa", href: "https://tech.sfgco.sa" },
];

/** Final, high-impact CTA section with the doc's exact contact info. */
export default function CTASection() {
  const { t } = useTranslation();

  const perks = [t("cta.perk1"), t("cta.perk2"), t("cta.perk3")];

  return (
    <section
      id="contact"
      style={{
        background: "linear-gradient(150deg, #060f08 0%, #0a2a16 25%, #0b2d1e 60%, #1a8050 85%, #0c3d25 100%)",
        padding: "128px 48px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -120,
          left: -120,
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(200,168,75,0.1), transparent 65%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -100,
          right: -100,
          width: 450,
          height: 450,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(239,230,216,0.06), transparent 65%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(239,230,216,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(239,230,216,0.015) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", maxWidth: 760, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ color: "#c8a84b", fontSize: 11, fontWeight: 700, letterSpacing: 2.5, textTransform: "uppercase", marginBottom: 24 }}>
            {t("cta.badge")}
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 54,
              fontWeight: 800,
              color: "#fff",
              lineHeight: 1.15,
              marginBottom: 24,
              letterSpacing: -1,
            }}
          >
            {t("cta.title1")} <span style={{ color: "#c8a84b" }}>{t("cta.titleHighlight")}</span>
          </h2>
          <p style={{ fontSize: 18, color: "rgba(239,230,216,0.72)", lineHeight: 1.8, marginBottom: 44, maxWidth: 620, marginInline: "auto" }}>
            {t("cta.subtitle")}
          </p>

          <a
            href="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              background: "#c8a84b",
              color: "#0a1f14",
              padding: "17px 44px",
              borderRadius: 50,
              fontWeight: 800,
              fontSize: 15,
              letterSpacing: 0.3,
              boxShadow: "0 12px 40px rgba(200,168,75,0.4)",
              transition: "all 0.3s",
              marginBottom: 40,
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-3px)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 18px 52px rgba(200,168,75,0.5)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 12px 40px rgba(200,168,75,0.4)";
            }}
          >
            {t("cta.consultBtn")}
            <Icon name="arrow" size={16} strokeWidth={2.5} />
          </a>

          {/* Perks */}
          <div style={{ display: "flex", gap: 40, justifyContent: "center", flexWrap: "wrap", marginBottom: 56 }}>
            {perks.map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ color: "#c8a84b", display: "flex" }}>
                  <Icon name="check" size={14} strokeWidth={2.2} />
                </span>
                <span style={{ color: "rgba(239,230,216,0.65)", fontSize: 13 }}>{item}</span>
              </div>
            ))}
          </div>

          {/* Contact cards */}
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            {CONTACT_CARDS.map((c) => (
              <a
                key={c.labelKey}
                href={c.href}
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(239,230,216,0.1)",
                  borderRadius: 16,
                  padding: "18px 28px",
                  textAlign: "center",
                  backdropFilter: "blur(12px)",
                  minWidth: 170,
                  transition: "background 0.25s ease, border-color 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.1)";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(200,168,75,0.4)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.06)";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(239,230,216,0.1)";
                }}
              >
                <div style={{ color: "#c8a84b", display: "flex", justifyContent: "center", marginBottom: 8 }}>
                  <Icon name={c.icon} size={20} />
                </div>
                <div style={{ fontSize: 10, color: "rgba(239,230,216,0.5)", letterSpacing: 1, textTransform: "uppercase", marginBottom: 4 }}>
                  {t(c.labelKey)}
                </div>
                <div dir="ltr" style={{ fontSize: 13, color: "#fff", fontWeight: 700, unicodeBidi: "isolate" }}>{c.val}</div>
              </a>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
