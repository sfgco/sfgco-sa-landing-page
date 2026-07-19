import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useScrolled } from "../hooks/useScrolled";
import { useLanguage } from "../hooks/useLanguage";
import logoImg from "../assets/sfgco-logo.png";

/** Top navigation bar with scroll effect, routing links, and EN/AR language switcher. */
export default function Navbar() {
  const { t } = useTranslation();
  const scrolled = useScrolled(80);
  const { language, changeLanguage } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const NAV_LINKS = [
    { key: "nav.about", to: "/about" },
    { key: "nav.services", to: "/services" },
    { key: "nav.technologies", to: "/technologies" },
    { key: "nav.contact", to: "/contact" },
  ];

  return (
    <>
      <nav
        role="navigation"
        aria-label="Main navigation"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: scrolled ? "12px 48px" : "22px 48px",
          background: scrolled ? "rgba(11,45,30,0.96)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          transition: "all 0.35s ease",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: scrolled ? "1px solid rgba(239,230,216,0.08)" : "none",
        }}
      >
        {/* Logo */}
        <button
          onClick={() => navigate("/")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
          }}
          aria-label="Go to homepage"
        >
          <img
            src={logoImg}
            alt="SFGCO"
            style={{ height: 42, objectFit: "contain" }}
          />
          <div>
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 800,
                fontSize: 17,
                color: "#fff",
                letterSpacing: 3,
              }}
            >
              SFGCO
            </div>
            <div
              style={{
                fontSize: 8,
                color: "rgba(239,230,216,0.6)",
                letterSpacing: 2,
                textTransform: "uppercase",
              }}
            >
              Tech
            </div>
          </div>
        </button>

        {/* Desktop links */}
        <div
          className="nav-links"
          style={{ display: "flex", gap: 36, alignItems: "center" }}
        >
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.key}
              to={link.to}
              style={{
                color: "rgba(255,255,255,0.8)",
                fontSize: 13,
                fontWeight: 500,
                letterSpacing: 0.5,
                transition: "color 0.2s",
                fontFamily: "'Inter', sans-serif",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(255,255,255,0.8)")
              }
            >
              {t(link.key)}
            </NavLink>
          ))}

          {/* Language switcher */}
          <div
            style={{
              display: "flex",
              gap: 4,
              alignItems: "center",
              borderRadius: 50,
              border: "1px solid rgba(239,230,216,0.2)",
              overflow: "hidden",
            }}
          >
            {(["en", "ar"] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => changeLanguage(lang)}
                aria-label={`Switch to ${lang === "en" ? "English" : "Arabic"}`}
                style={{
                  padding: "5px 12px",
                  background:
                    language === lang ? "rgba(200,168,75,0.25)" : "transparent",
                  color:
                    language === lang ? "#c8a84b" : "rgba(255,255,255,0.6)",
                  border: "none",
                  cursor: "pointer",
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: 0.5,
                  transition: "all 0.2s",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Get Started CTA */}
          <NavLink
            to="/contact"
            style={{
              background: "#c8a84b",
              color: "#0a1f14",
              padding: "10px 26px",
              borderRadius: 50,
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: 0.5,
              transition: "all 0.3s",
              boxShadow: "0 4px 20px rgba(200,168,75,0.3)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform =
                "translateY(-2px)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                "0 8px 28px rgba(200,168,75,0.45)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform =
                "translateY(0)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                "0 4px 20px rgba(200,168,75,0.3)";
            }}
          >
            {t("nav.getStarted")}
          </NavLink>
        </div>

        {/* Mobile hamburger */}
        <button
          className="nav-hamburger"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          style={{
            display: "none",
            background: "none",
            border: "1px solid rgba(239,230,216,0.3)",
            color: "#fff",
            fontSize: 20,
            cursor: "pointer",
            borderRadius: 8,
            padding: "6px 10px",
          }}
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 999,
            background: "rgba(6,15,8,0.98)",
            backdropFilter: "blur(20px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 36,
          }}
        >
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.key}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              style={{
                color: "rgba(255,255,255,0.85)",
                fontSize: 22,
                fontWeight: 600,
                fontFamily: "'Playfair Display', serif",
              }}
            >
              {t(link.key)}
            </NavLink>
          ))}

          {/* Mobile language switcher */}
          <div style={{ display: "flex", gap: 8 }}>
            {(["en", "ar"] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => changeLanguage(lang)}
                style={{
                  padding: "8px 20px",
                  borderRadius: 50,
                  border: "1px solid rgba(239,230,216,0.3)",
                  background: language === lang ? "#c8a84b" : "transparent",
                  color: language === lang ? "#0a1f14" : "#fff",
                  fontWeight: 700,
                  fontSize: 13,
                  cursor: "pointer",
                }}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>

          <NavLink
            to="/contact"
            onClick={() => setMobileOpen(false)}
            style={{
              background: "#c8a84b",
              color: "#0a1f14",
              padding: "14px 36px",
              borderRadius: 50,
              fontWeight: 700,
              fontSize: 15,
            }}
          >
            {t("nav.getStarted")}
          </NavLink>
        </div>
      )}
    </>
  );
}
