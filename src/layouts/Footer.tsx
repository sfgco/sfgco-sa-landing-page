import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logoImg from "../assets/sfgco-logo.png";

const SOCIAL = [
  {
    key: "x",
    href: "https://x.com/sfgco_sa",
    icon: (
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    ),
  },
  {
    key: "instagram",
    href: "https://instagram.com/sfgco_sa",
    icon: (
      <path d="M12 2c2.7 0 3.06.01 4.12.06 1.06.05 1.79.22 2.43.47.66.26 1.22.6 1.77 1.16.55.55.9 1.11 1.16 1.77.25.64.42 1.37.47 2.43.05 1.06.06 1.42.06 4.12s-.01 3.06-.06 4.12c-.05 1.06-.22 1.79-.47 2.43-.26.66-.6 1.22-1.16 1.77-.55.55-1.11.9-1.77 1.16-.64.25-1.37.42-2.43.47-1.06.05-1.42.06-4.12.06s-3.06-.01-4.12-.06c-1.06-.05-1.79-.22-2.43-.47a4.92 4.92 0 01-1.77-1.16 4.92 4.92 0 01-1.16-1.77c-.25-.64-.42-1.37-.47-2.43C2.01 15.06 2 14.7 2 12s.01-3.06.06-4.12c.05-1.06.22-1.79.47-2.43.26-.66.6-1.22 1.16-1.77A4.92 4.92 0 015.46 2.5c.64-.25 1.37-.42 2.43-.47C8.94 2.01 9.3 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm0 8.2a3.2 3.2 0 110-6.4 3.2 3.2 0 010 6.4zm5.2-8.4a1.17 1.17 0 100-2.34 1.17 1.17 0 000 2.34z" />
    ),
  },
  {
    key: "tiktok",
    href: "https://tiktok.com/@sfgco_sa",
    icon: (
      <path d="M16.6 5.82c-.86-.94-1.34-2.16-1.34-3.42h-3.14v13.36a2.6 2.6 0 11-2.6-2.6c.24 0 .48.03.7.1V9.9a5.74 5.74 0 00-.7-.04A5.76 5.76 0 108.7 21.6a5.76 5.76 0 005.76-5.76V9.06a8.44 8.44 0 004.94 1.58V7.5a5.2 5.2 0 01-2.8-1.68z" />
    ),
  },
];

const COMPANY_LINKS = [
  { key: "nav.about", to: "/about" },
  { key: "nav.vision", to: "/vision" },
  { key: "nav.mission", to: "/mission" },
  { key: "nav.values", to: "/values" },
  { key: "nav.strategicGoals", to: "/strategic-goals" },
];

const INVEST_LINKS = [
  { key: "nav.services", to: "/services" },
  { key: "nav.sectors", to: "/investment-sectors" },
  { key: "nav.projects", to: "/projects" },
  { key: "nav.news", to: "/news" },
];

/** Site-wide footer — real contact info, quick links, and social channels only. */
export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer
      style={{
        background: "#060f08",
        padding: "80px 48px 40px",
        color: "rgba(239,230,216,0.55)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          className="grid-4-cols"
          style={{
            display: "grid",
            gridTemplateColumns: "1.3fr 1fr 1fr 1fr",
            gap: 40,
            marginBottom: 64,
          }}
        >
          {/* Brand column */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 22,
              }}
            >
              <img
                src={logoImg}
                alt="SFGCO"
                style={{ height: 40, opacity: 0.9 }}
              />
              <div
                style={{
                  fontFamily: "'cairo', serif",
                  fontWeight: 800,
                  fontSize: 16,
                  color: "#efe6d8",
                  letterSpacing: 3,
                }}
              >
                SFGCO
              </div>
            </div>
            <p
              style={{
                fontSize: 13,
                lineHeight: 1.85,
                maxWidth: 300,
                marginBottom: 28,
                color: "rgba(239,230,216,0.5)",
              }}
            >
              {t("footer.tagline")}
            </p>

            <div style={{ display: "flex", gap: 10 }}>
              {SOCIAL.map((s) => (
                <a
                  key={s.key}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.key}
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 9,
                    background: "rgba(239,230,216,0.06)",
                    border: "1px solid rgba(239,230,216,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="#efe6d8"
                  >
                    {s.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Company links */}
          <div>
            <h5
              style={{
                fontWeight: 800,
                color: "#efe6d8",
                fontSize: 11,
                letterSpacing: 2,
                textTransform: "uppercase",
                marginBottom: 22,
              }}
            >
              {t("footer.quickLinksTitle")}
            </h5>
            <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
              {COMPANY_LINKS.map((l) => (
                <Link
                  key={l.key}
                  to={l.to}
                  style={{
                    color: "rgba(239,230,216,0.48)",
                    fontSize: 13,
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color =
                      "#c8a84b")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color =
                      "rgba(239,230,216,0.48)")
                  }
                >
                  {t(l.key)}
                </Link>
              ))}
            </div>
          </div>

          {/* Investment links */}
          <div>
            <h5
              style={{
                fontWeight: 800,
                color: "#efe6d8",
                fontSize: 11,
                letterSpacing: 2,
                textTransform: "uppercase",
                marginBottom: 22,
              }}
            >
              {t("nav.sectors")}
            </h5>
            <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
              {INVEST_LINKS.map((l) => (
                <Link
                  key={l.key}
                  to={l.to}
                  style={{
                    color: "rgba(239,230,216,0.48)",
                    fontSize: 13,
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color =
                      "#c8a84b")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color =
                      "rgba(239,230,216,0.48)")
                  }
                >
                  {t(l.key)}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h5
              style={{
                fontWeight: 800,
                color: "#efe6d8",
                fontSize: 11,
                letterSpacing: 2,
                textTransform: "uppercase",
                marginBottom: 22,
              }}
            >
              {t("footer.contactTitle")}
            </h5>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 14,
                fontSize: 13,
                lineHeight: 1.7,
              }}
            >
              <span>{t("contact.location")}</span>
              <a
                href={`tel:${t("contact.phone")}`}
                dir="ltr"
                style={{ color: "rgba(239,230,216,0.65)" }}
              >
                {t("contact.phone")}
              </a>
              <a
                href={`mailto:${t("contact.email")}`}
                dir="ltr"
                style={{ color: "rgba(239,230,216,0.65)" }}
              >
                {t("contact.email")}
              </a>
              <Link to="/contact" style={{ color: "#c8a84b", fontWeight: 700 }}>
                {t("nav.contact")} ←
              </Link>
            </div>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(239,230,216,0.07)",
            paddingTop: 28,
            textAlign: "center",
          }}
        >
          <p style={{ fontSize: 12 }}>{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  );
}
