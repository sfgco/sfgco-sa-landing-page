import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useScrolled } from "../hooks/useScrolled";
import { useLanguage } from "../hooks/useLanguage";
import logoImg from "../assets/sfgco-logo.png";

const NAV_LINKS = [
  { key: "nav.home", to: "/", end: true },
  { key: "nav.about", to: "/about" },
  { key: "nav.services", to: "/services" },
  { key: "nav.sectors", to: "/investment-sectors" },
  { key: "nav.whyUs", to: "/why-us" },
  { key: "nav.projects", to: "/projects" },
  { key: "nav.partners", to: "/partners" },
  { key: "nav.news", to: "/news" },
];

/** Top navigation bar — routes to dedicated pages, highlights the active route, EN/AR switcher. */
export default function Navbar() {
  const { t } = useTranslation();
  const scrolled = useScrolled(80);
  const { language, changeLanguage } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  // On every route except the full-bleed dark Hero on Home, the navbar must
  // stay solid — a transparent navbar with light text is unreadable over the
  // light-background inner pages.
  const isHome = pathname === "/";
  const solid = scrolled || !isHome;

  const linkStyle = (isActive: boolean): React.CSSProperties => ({
    color: isActive ? "#c8a84b" : "rgba(255,255,255,0.8)",
    fontSize: 13,
    fontWeight: isActive ? 700 : 500,
    letterSpacing: 0.5,
    transition: "color 0.2s",
    fontFamily: "inherit",
    position: "relative",
    paddingBottom: 4,
    borderBottom: isActive ? "1.5px solid #c8a84b" : "1.5px solid transparent",
  });

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
          padding: solid ? "12px 48px" : "22px 48px",
          background: solid ? "rgba(10,31,20,0.96)" : "transparent",
          backdropFilter: solid ? "blur(20px)" : "none",
          transition: "all 0.35s ease",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: solid ? "1px solid rgba(239,230,216,0.08)" : "none",
        }}
      >
        {/* Logo */}
        <button
          onClick={() => navigate("/")}
          style={{ display: "flex", alignItems: "center", gap: 12, background: "none", border: "none", cursor: "pointer", padding: 0 }}
          aria-label="Go to homepage"
        >
          <img src={logoImg} alt="SFGCO" style={{ height: 42, objectFit: "contain" }} />
          <div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: 17, color: "#fff", letterSpacing: 3 }}>
              SFGCO
            </div>
          </div>
        </button>

        {/* Desktop links */}
        <div className="nav-links" style={{ display: "flex", gap: 26, alignItems: "center" }}>
          {NAV_LINKS.map((link) => (
            <NavLink key={link.key} to={link.to} end={link.end} style={({ isActive }) => linkStyle(isActive)}>
              {t(link.key)}
            </NavLink>
          ))}

          {/* Language switcher */}
          <div style={{ display: "flex", gap: 4, alignItems: "center", borderRadius: 50, border: "1px solid rgba(239,230,216,0.2)", overflow: "hidden" }}>
            {(["ar", "en"] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => changeLanguage(lang)}
                aria-label={`Switch to ${lang === "en" ? "English" : "Arabic"}`}
                style={{
                  padding: "5px 12px",
                  background: language === lang ? "rgba(200,168,75,0.25)" : "transparent",
                  color: language === lang ? "#c8a84b" : "rgba(255,255,255,0.6)",
                  border: "none",
                  cursor: "pointer",
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: 0.5,
                  transition: "all 0.2s",
                  fontFamily: "inherit",
                }}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Contact CTA */}
          <NavLink
            to="/contact"
            style={({ isActive }) => ({
              background: isActive ? "#e8cc7a" : "#c8a84b",
              color: "#0a1f14",
              padding: "10px 26px",
              borderRadius: 50,
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: 0.5,
              transition: "all 0.3s",
              boxShadow: "0 4px 20px rgba(200,168,75,0.3)",
            })}
          >
            {t("nav.contact")}
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
            gap: 26,
            overflowY: "auto",
            padding: "40px 0",
          }}
        >
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.key}
              to={link.to}
              end={link.end}
              onClick={() => setMobileOpen(false)}
              style={({ isActive }) => ({
                color: isActive ? "#c8a84b" : "rgba(255,255,255,0.85)",
                fontSize: 20,
                fontWeight: 600,
                fontFamily: "'Playfair Display', serif",
              })}
            >
              {t(link.key)}
            </NavLink>
          ))}

          <div style={{ display: "flex", gap: 8 }}>
            {(["ar", "en"] as const).map((lang) => (
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
            style={{ background: "#c8a84b", color: "#0a1f14", padding: "14px 36px", borderRadius: 50, fontWeight: 700, fontSize: 15 }}
          >
            {t("nav.contact")}
          </NavLink>
        </div>
      )}
    </>
  );
}
