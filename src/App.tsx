import { useState, useEffect, useRef } from "react";
import logoImg from "./assets/sfgco-logo.png";

// ─── Animated counter ────────────────────────────────────────────────────────
function Counter({
  end,
  suffix = "",
  prefix = "",
}: Readonly<{ end: number; suffix?: string; prefix?: string }>) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !started) setStarted(true);
      },
      { threshold: 0.5 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const duration = 2000;
    const steps = 60;
    const increment = end / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [started, end]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

// ─── Fade-in-up on scroll ─────────────────────────────────────────────────────
function FadeIn({
  children,
  delay = 0,
  style = {},
}: Readonly<{
  children: React.ReactNode;
  delay?: number;
  style?: React.CSSProperties;
}>) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

// ─── Hover card helper ────────────────────────────────────────────────────────
function HoverCard({
  children,
  variant = "default",
  style,
  className = "",
}: Readonly<{
  children: React.ReactNode;
  variant?: "default" | "sm" | "lg" | "team";
  style?: React.CSSProperties;
  className?: string;
}>) {
  const variantClass =
    variant === "sm"
      ? "hover-card hover-card-sm"
      : variant === "lg"
        ? "hover-card hover-card-lg"
        : variant === "team"
          ? "hover-card hover-card-team"
          : "hover-card";
  return (
    <div className={`${variantClass} ${className}`} style={style}>
      {children}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = ["About", "Services", "Investments", "Impact", "Team"];

  return (
    <>
      {/* ──────────── NAVBAR ──────────── */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: scrolled ? "12px 48px" : "22px 48px",
          background: scrolled ? "rgba(10,31,20,0.96)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          transition: "all 0.35s ease",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: scrolled ? "1px solid rgba(239,230,216,0.08)" : "none",
        }}
      >
        <a
          href="#hero"
          style={{ display: "flex", alignItems: "center", gap: 12 }}
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
              Future of Green
            </div>
          </div>
        </a>

        <div style={{ display: "flex", gap: 36, alignItems: "center" }}>
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
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
              {link}
            </a>
          ))}
          <a
            href="#contact"
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
            Invest Now
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            color: "#fff",
            fontSize: 24,
            cursor: "pointer",
          }}
        >
          ☰
        </button>
      </nav>

      {/* ──────────── HERO ──────────── */}
      <section
        id="hero"
        style={{
          minHeight: "100vh",
          background:
            "linear-gradient(145deg, #060f08 0%, #0a2a16 25%, #0e633d 55%, #1a8050 75%, #0c3d25 100%)",
          position: "relative",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        {/* Background orbs */}
        <div
          style={{
            position: "absolute",
            width: 700,
            height: 700,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(200,168,75,0.07) 0%, transparent 65%)",
            top: -150,
            right: -150,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(239,230,216,0.05) 0%, transparent 65%)",
            bottom: 0,
            left: -100,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 300,
            height: 300,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(46,168,102,0.08) 0%, transparent 65%)",
            top: "40%",
            left: "35%",
            pointerEvents: "none",
          }}
        />

        {/* Grid pattern overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            backgroundImage:
              "linear-gradient(rgba(239,230,216,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(239,230,216,0.02) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "130px 48px 90px",
            width: "100%",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 80,
              alignItems: "center",
            }}
          >
            {/* Left column */}
            <div>
              <div style={{ animation: "fadeInUp 0.7s ease forwards" }}>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    background: "rgba(200,168,75,0.12)",
                    border: "1px solid rgba(200,168,75,0.3)",
                    borderRadius: 50,
                    padding: "7px 18px",
                    marginBottom: 28,
                  }}
                >
                  <span
                    style={{
                      width: 7,
                      height: 7,
                      borderRadius: "50%",
                      background: "#c8a84b",
                      display: "inline-block",
                      animation: "pulse 2s infinite",
                    }}
                  />
                  <span
                    style={{
                      color: "#c8a84b",
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: 2,
                      textTransform: "uppercase",
                    }}
                  >
                    Sustainable Investment Leaders
                  </span>
                </div>

                <h1
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: 66,
                    fontWeight: 800,
                    lineHeight: 1.08,
                    color: "#fff",
                    marginBottom: 28,
                    letterSpacing: -1.5,
                  }}
                >
                  Invest in the
                  <br />
                  <span style={{ color: "#c8a84b" }}>Future</span> of
                  <br />
                  Green Earth
                </h1>

                <p
                  style={{
                    fontSize: 17,
                    color: "rgba(239,230,216,0.75)",
                    lineHeight: 1.75,
                    marginBottom: 44,
                    maxWidth: 500,
                  }}
                >
                  SFGCO pioneers sustainable investment — connecting visionary
                  capital with transformative green projects across 42
                  countries. Build wealth. Restore the planet.
                </p>

                <div style={{ display: "flex", gap: 16, marginBottom: 64 }}>
                  <a
                    href="#investments"
                    style={{
                      background: "#c8a84b",
                      color: "#0a1f14",
                      padding: "15px 36px",
                      borderRadius: 50,
                      fontWeight: 700,
                      fontSize: 14,
                      letterSpacing: 0.5,
                      boxShadow: "0 8px 36px rgba(200,168,75,0.4)",
                      transition: "all 0.3s",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.transform =
                        "translateY(-3px)";
                      (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                        "0 16px 48px rgba(200,168,75,0.5)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.transform =
                        "translateY(0)";
                      (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                        "0 8px 36px rgba(200,168,75,0.4)";
                    }}
                  >
                    Explore Investments
                  </a>
                  <a
                    href="#about"
                    style={{
                      border: "1.5px solid rgba(239,230,216,0.35)",
                      color: "#efe6d8",
                      padding: "15px 36px",
                      borderRadius: 50,
                      fontWeight: 600,
                      fontSize: 14,
                      letterSpacing: 0.5,
                      background: "transparent",
                      transition: "all 0.3s",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.background =
                        "rgba(239,230,216,0.08)";
                      (e.currentTarget as HTMLAnchorElement).style.borderColor =
                        "rgba(239,230,216,0.6)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.background =
                        "transparent";
                      (e.currentTarget as HTMLAnchorElement).style.borderColor =
                        "rgba(239,230,216,0.35)";
                    }}
                  >
                    Our Mission
                  </a>
                </div>

                {/* Quick stats */}
                <div style={{ display: "flex", gap: 48 }}>
                  {[
                    { val: "$2.4B+", label: "Assets Managed" },
                    { val: "150+", label: "Portfolio Companies" },
                    { val: "42", label: "Countries" },
                  ].map((s) => (
                    <div key={s.label}>
                      <div
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          fontSize: 32,
                          fontWeight: 800,
                          color: "#fff",
                          lineHeight: 1,
                        }}
                      >
                        {s.val}
                      </div>
                      <div
                        style={{
                          fontSize: 11,
                          color: "rgba(239,230,216,0.55)",
                          marginTop: 5,
                          letterSpacing: 0.5,
                        }}
                      >
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right column — impact dashboard card */}
            <div style={{ position: "relative" }}>
              <div
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(239,230,216,0.12)",
                  borderRadius: 28,
                  padding: 36,
                  backdropFilter: "blur(24px)",
                  position: "relative",
                  overflow: "hidden",
                  boxShadow: "0 32px 80px rgba(0,0,0,0.3)",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 3,
                    background:
                      "linear-gradient(90deg, #c8a84b 0%, #0e633d 50%, #c8a84b 100%)",
                  }}
                />

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 28,
                  }}
                >
                  <span
                    style={{
                      color: "rgba(239,230,216,0.65)",
                      fontSize: 13,
                      fontWeight: 500,
                    }}
                  >
                    2024 Live Impact Dashboard
                  </span>
                  <span
                    style={{
                      background: "rgba(46,168,102,0.2)",
                      color: "#2ea866",
                      padding: "4px 12px",
                      borderRadius: 50,
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: 1,
                    }}
                  >
                    ● LIVE
                  </span>
                </div>

                <div style={{ marginBottom: 24 }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: 8,
                    }}
                  >
                    <span
                      style={{ color: "rgba(239,230,216,0.65)", fontSize: 12 }}
                    >
                      Annual CO₂ Offset Target
                    </span>
                    <span
                      style={{
                        color: "#c8a84b",
                        fontSize: 13,
                        fontWeight: 700,
                      }}
                    >
                      18.2M Tonnes — 91%
                    </span>
                  </div>
                  <div
                    style={{
                      background: "rgba(255,255,255,0.08)",
                      borderRadius: 50,
                      height: 9,
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        width: "91%",
                        height: "100%",
                        background: "linear-gradient(90deg, #0e633d, #c8a84b)",
                        borderRadius: 50,
                      }}
                    />
                  </div>
                </div>

                {[
                  { label: "Solar & Wind", pct: 85, color: "#c8a84b" },
                  { label: "Green Buildings", pct: 73, color: "#2ea866" },
                  { label: "Reforestation", pct: 91, color: "#1a8050" },
                  { label: "Clean Transport", pct: 67, color: "#0e633d" },
                ].map((bar) => (
                  <div key={bar.label} style={{ marginBottom: 16 }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: 6,
                      }}
                    >
                      <span
                        style={{ color: "rgba(239,230,216,0.7)", fontSize: 13 }}
                      >
                        {bar.label}
                      </span>
                      <span
                        style={{ color: "#fff", fontSize: 13, fontWeight: 700 }}
                      >
                        {bar.pct}%
                      </span>
                    </div>
                    <div
                      style={{
                        background: "rgba(255,255,255,0.07)",
                        borderRadius: 50,
                        height: 6,
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          width: `${bar.pct}%`,
                          height: "100%",
                          background: bar.color,
                          borderRadius: 50,
                        }}
                      />
                    </div>
                  </div>
                ))}

                <div
                  style={{
                    borderTop: "1px solid rgba(239,230,216,0.08)",
                    paddingTop: 24,
                    marginTop: 20,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: 28,
                        fontWeight: 800,
                        color: "#fff",
                      }}
                    >
                      $847M
                    </div>
                    <div
                      style={{
                        fontSize: 11,
                        color: "rgba(239,230,216,0.5)",
                        marginTop: 2,
                      }}
                    >
                      Returns Generated (2024)
                    </div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: 28,
                        fontWeight: 800,
                        color: "#c8a84b",
                      }}
                    >
                      +23.4%
                    </div>
                    <div
                      style={{
                        fontSize: 11,
                        color: "rgba(239,230,216,0.5)",
                        marginTop: 2,
                      }}
                    >
                      YoY Portfolio Growth
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div
                style={{
                  position: "absolute",
                  bottom: -24,
                  left: -24,
                  background: "#c8a84b",
                  color: "#0a1f14",
                  borderRadius: 18,
                  padding: "14px 20px",
                  boxShadow: "0 16px 48px rgba(200,168,75,0.5)",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 800,
                    fontSize: 24,
                    lineHeight: 1,
                  }}
                >
                  AAA
                </div>
                <div
                  style={{
                    fontSize: 9,
                    fontWeight: 700,
                    letterSpacing: 1.5,
                    marginTop: 2,
                  }}
                >
                  ESG RATED
                </div>
              </div>

              <div
                style={{
                  position: "absolute",
                  top: -20,
                  right: -20,
                  background: "rgba(10,31,20,0.9)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(239,230,216,0.12)",
                  color: "#fff",
                  borderRadius: 16,
                  padding: "12px 18px",
                  boxShadow: "0 12px 36px rgba(0,0,0,0.3)",
                }}
              >
                <div
                  style={{
                    fontSize: 10,
                    color: "rgba(239,230,216,0.5)",
                    letterSpacing: 1,
                  }}
                >
                  SINCE 2009
                </div>
                <div style={{ fontSize: 14, fontWeight: 700, marginTop: 2 }}>
                  Ranked #1
                </div>
                <div
                  style={{ fontSize: 10, color: "#c8a84b", fontWeight: 600 }}
                >
                  Green Fund Africa
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div
          style={{
            position: "absolute",
            bottom: 36,
            left: "50%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
            animation: "bounce 2s infinite",
            cursor: "pointer",
          }}
        >
          <span
            style={{
              fontSize: 9,
              color: "rgba(239,230,216,0.4)",
              letterSpacing: 3,
              textTransform: "uppercase",
            }}
          >
            Discover
          </span>
          <svg width="20" height="28" viewBox="0 0 20 28" fill="none">
            <rect
              x="1"
              y="1"
              width="18"
              height="26"
              rx="9"
              stroke="rgba(239,230,216,0.25)"
              strokeWidth="1.5"
            />
            <circle cx="10" cy="8" r="3" fill="rgba(200,168,75,0.7)">
              <animate
                attributeName="cy"
                values="8;18;8"
                dur="2s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="1;0.3;1"
                dur="2s"
                repeatCount="indefinite"
              />
            </circle>
          </svg>
        </div>
      </section>

      {/* ──────────── TRUST STRIP ──────────── */}
      <section
        style={{
          background: "#fff",
          padding: "36px 48px",
          borderBottom: "1px solid #f0ebe3",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p
            style={{
              textAlign: "center",
              color: "#b8c4bc",
              fontSize: 10,
              letterSpacing: 2.5,
              textTransform: "uppercase",
              fontWeight: 700,
              marginBottom: 28,
            }}
          >
            Trusted Partners & Institutional Investors
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 24,
              flexWrap: "wrap",
            }}
          >
            {[
              "World Bank Group",
              "BlackRock ESG",
              "UN Environment",
              "Goldman Sachs",
              "HSBC Green",
              "IFC Capital",
              "Vanguard ESG",
            ].map((name) => (
              <div
                key={name}
                style={{
                  fontSize: 13,
                  fontWeight: 800,
                  color: "#cac2b7",
                  letterSpacing: 1.5,
                  textTransform: "uppercase",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────── ABOUT ──────────── */}
      <section
        id="about"
        style={{ background: "#efe6d8", padding: "120px 48px" }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 88,
            alignItems: "center",
          }}
        >
          {/* Left — visual */}
          <FadeIn>
            <div style={{ position: "relative" }}>
              <div
                style={{
                  background: "linear-gradient(150deg, #0a2a16, #0e633d)",
                  borderRadius: 28,
                  padding: 48,
                  color: "#fff",
                  position: "relative",
                  overflow: "hidden",
                  boxShadow: "0 32px 80px rgba(14,99,61,0.25)",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: -60,
                    right: -60,
                    width: 240,
                    height: 240,
                    borderRadius: "50%",
                    background: "rgba(200,168,75,0.1)",
                    pointerEvents: "none",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: -40,
                    left: -40,
                    width: 180,
                    height: 180,
                    borderRadius: "50%",
                    background: "rgba(239,230,216,0.05)",
                    pointerEvents: "none",
                  }}
                />

                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 64,
                    fontWeight: 800,
                    lineHeight: 1,
                    color: "#c8a84b",
                  }}
                >
                  15+
                </div>
                <div
                  style={{
                    fontSize: 16,
                    marginTop: 6,
                    color: "rgba(239,230,216,0.75)",
                  }}
                >
                  Years of Proven Impact
                </div>

                <div
                  style={{
                    marginTop: 40,
                    paddingTop: 36,
                    borderTop: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: 28,
                    }}
                  >
                    {[
                      { n: "80+", l: "Specialists" },
                      { n: "$2.4B", l: "Assets Under Mgmt." },
                      { n: "18M+", l: "Tonnes CO₂ Offset" },
                      { n: "97%", l: "Client Retention" },
                    ].map((s) => (
                      <div key={s.l}>
                        <div
                          style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: 30,
                            fontWeight: 800,
                            color: "#fff",
                          }}
                        >
                          {s.n}
                        </div>
                        <div
                          style={{
                            fontSize: 11,
                            color: "rgba(239,230,216,0.6)",
                            marginTop: 4,
                            letterSpacing: 0.5,
                          }}
                        >
                          {s.l}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* ESG badge */}
              <div
                style={{
                  position: "absolute",
                  top: -18,
                  right: -18,
                  background: "#fff",
                  borderRadius: 18,
                  padding: "16px 20px",
                  boxShadow: "0 16px 48px rgba(14,99,61,0.15)",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <div
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: "50%",
                    background: "#0e633d",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#fff"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </div>
                <div>
                  <div
                    style={{ fontWeight: 700, fontSize: 13, color: "#0a1f14" }}
                  >
                    ESG Score
                  </div>
                  <div
                    style={{ fontSize: 12, color: "#0e633d", fontWeight: 700 }}
                  >
                    92/100 · Top 1%
                  </div>
                </div>
              </div>

              {/* UN SDG badge */}
              <div
                style={{
                  position: "absolute",
                  bottom: -18,
                  left: -18,
                  background: "#c8a84b",
                  borderRadius: 16,
                  padding: "14px 20px",
                  boxShadow: "0 12px 36px rgba(200,168,75,0.4)",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 800,
                    fontSize: 20,
                    color: "#0a1f14",
                    lineHeight: 1,
                  }}
                >
                  12/17
                </div>
                <div
                  style={{
                    fontSize: 9,
                    fontWeight: 700,
                    letterSpacing: 1.5,
                    color: "#0a1f14",
                    marginTop: 3,
                  }}
                >
                  UN SDG GOALS
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right — text */}
          <FadeIn delay={150}>
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
              Our Mission
            </div>
            <h2
              style={{
                fontSize: 50,
                fontWeight: 800,
                color: "#0a1f14",
                lineHeight: 1.13,
                marginBottom: 24,
              }}
            >
              Sustainability Is
              <br />
              Not a Trend —<br />
              It's the <span style={{ color: "#0e633d" }}>Only Future</span>
            </h2>
            <p
              style={{
                fontSize: 16,
                color: "#5a7062",
                lineHeight: 1.85,
                marginBottom: 20,
              }}
            >
              Founded on the conviction that financial returns and environmental
              stewardship are inseparable, SFGCO has pioneered a new model of
              investment — one that delivers strong risk-adjusted returns while
              driving measurable, verifiable positive impact on our planet.
            </p>
            <p
              style={{
                fontSize: 16,
                color: "#5a7062",
                lineHeight: 1.85,
                marginBottom: 40,
              }}
            >
              We partner with institutional investors, family offices, and
              forward-thinking corporations to deploy capital into
              transformative green projects across renewable energy, ecosystem
              restoration, and clean technology.
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 14,
                marginBottom: 44,
              }}
            >
              {[
                "UN Principles for Responsible Investment (PRI) signatory",
                "TCFD-aligned reporting & real-time impact transparency",
                "Science-based targets for net-zero portfolio by 2035",
                "ISO 14001 certified environmental management system",
              ].map((item) => (
                <div
                  key={item}
                  style={{ display: "flex", alignItems: "flex-start", gap: 12 }}
                >
                  <div
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: "50%",
                      background: "#0e633d",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginTop: 2,
                    }}
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path
                        d="M2 5l2.5 2.5 3.5-4"
                        stroke="#fff"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span
                    style={{ fontSize: 15, color: "#2d3d32", fontWeight: 500 }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#investments"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                background: "#0e633d",
                color: "#efe6d8",
                padding: "14px 34px",
                borderRadius: 50,
                fontWeight: 700,
                fontSize: 14,
                transition: "all 0.3s",
                boxShadow: "0 8px 32px rgba(14,99,61,0.25)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background =
                  "#0a4a2e";
                (e.currentTarget as HTMLAnchorElement).style.transform =
                  "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background =
                  "#0e633d";
                (e.currentTarget as HTMLAnchorElement).style.transform =
                  "translateY(0)";
              }}
            >
              Discover Opportunities
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </FadeIn>
        </div>
      </section>

      {/* ──────────── SERVICES ──────────── */}
      <section
        id="services"
        style={{ background: "#fff", padding: "120px 48px" }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 72 }}>
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
                What We Do
              </div>
              <h2
                style={{
                  fontSize: 50,
                  fontWeight: 800,
                  color: "#0a1f14",
                  marginBottom: 18,
                }}
              >
                Comprehensive Green Services
              </h2>
              <p
                style={{
                  color: "#5a7062",
                  fontSize: 17,
                  lineHeight: 1.75,
                  maxWidth: 580,
                  margin: "0 auto",
                }}
              >
                From strategic advisory to active portfolio management, we
                deliver end-to-end sustainability solutions for forward-thinking
                investors.
              </p>
            </div>
          </FadeIn>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 24,
            }}
          >
            {[
              {
                icon: "☀️",
                title: "Renewable Energy",
                desc: "Curated investments in utility-scale solar, wind, and hydropower projects delivering stable, long-term yields with strong ESG credentials.",
                tags: ["Solar PV", "Wind", "Hydro", "Storage"],
                accent: "#c8a84b",
              },
              {
                icon: "🏙️",
                title: "Green Infrastructure",
                desc: "Financing sustainable buildings, smart cities, green transport corridors, and climate-resilient urban systems that reshape how we live.",
                tags: ["Smart Cities", "LEED", "Transit", "Water"],
                accent: "#0e633d",
              },
              {
                icon: "📊",
                title: "ESG Advisory",
                desc: "Strategic guidance on ESG integration, materiality assessments, regulatory compliance, and high-quality sustainability reporting.",
                tags: ["TCFD", "GRI", "SASB", "SFDR"],
                accent: "#1a8050",
              },
              {
                icon: "🌱",
                title: "Carbon Markets",
                desc: "Access to verified carbon offset projects, REDD+ credits, voluntary carbon markets, and net-zero transition strategy for corporates.",
                tags: ["Offsets", "REDD+", "Article 6", "VCM"],
                accent: "#2ea866",
              },
              {
                icon: "💼",
                title: "Impact Investment Funds",
                desc: "Professionally managed portfolios targeting measurable environmental outcomes alongside competitive, risk-adjusted financial returns.",
                tags: ["Equity", "Bonds", "Blended", "VC"],
                accent: "#0a4a2e",
              },
              {
                icon: "♻️",
                title: "Circular Economy",
                desc: "Investment in waste valorization, bio-based materials, sustainable supply chains, and the transition from linear to circular business models.",
                tags: ["Waste-to-Value", "Bioeconomy", "Recycling"],
                accent: "#c8a84b",
              },
            ].map((s, idx) => (
              <FadeIn key={s.title} delay={idx * 80}>
                <HoverCard
                  style={{
                    background: "#faf8f5",
                    border: "1.5px solid #ede5d9",
                    borderRadius: 22,
                    padding: 32,
                    height: "100%",
                    position: "relative",
                    overflow: "hidden",
                    cursor: "pointer",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: 4,
                      height: "100%",
                      background: s.accent,
                      borderRadius: "4px 0 0 4px",
                    }}
                  />
                  <div style={{ fontSize: 40, marginBottom: 18 }}>{s.icon}</div>
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: 20,
                      fontWeight: 800,
                      color: "#0a1f14",
                      marginBottom: 12,
                    }}
                  >
                    {s.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 14,
                      color: "#6b7c6e",
                      lineHeight: 1.75,
                      marginBottom: 22,
                    }}
                  >
                    {s.desc}
                  </p>
                  <div style={{ display: "flex", gap: 7, flexWrap: "wrap" }}>
                    {s.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          background: `${s.accent}14`,
                          color: s.accent,
                          padding: "4px 12px",
                          borderRadius: 50,
                          fontSize: 10,
                          fontWeight: 700,
                          letterSpacing: 0.5,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </HoverCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────── IMPACT COUNTER ──────────── */}
      <section
        id="impact"
        style={{
          background:
            "linear-gradient(150deg, #060f08 0%, #0a2a16 30%, #0e633d 70%, #0a4a2e 100%)",
          padding: "108px 48px",
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
        <div
          style={{
            position: "absolute",
            bottom: -60,
            left: 0,
            width: 350,
            height: 350,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(239,230,216,0.04), transparent 65%)",
            pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 72 }}>
              <div
                style={{
                  color: "#c8a84b",
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: 2.5,
                  textTransform: "uppercase",
                  marginBottom: 18,
                }}
              >
                Measurable Impact
              </div>
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 50,
                  fontWeight: 800,
                  color: "#fff",
                  marginBottom: 16,
                }}
              >
                Numbers That Drive Real Change
              </h2>
              <p
                style={{
                  color: "rgba(239,230,216,0.6)",
                  fontSize: 16,
                  maxWidth: 500,
                  margin: "0 auto",
                }}
              >
                Every figure represents verified, independently audited impact —
                not projections.
              </p>
            </div>
          </FadeIn>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 40,
              marginBottom: 60,
            }}
          >
            {[
              {
                end: 2400,
                prefix: "$",
                suffix: "M+",
                label: "Assets Under Management",
                sub: "Across all green portfolios",
                color: "#c8a84b",
              },
              {
                end: 150,
                prefix: "",
                suffix: "+",
                label: "Portfolio Companies",
                sub: "Active investments globally",
                color: "#2ea866",
              },
              {
                end: 18,
                prefix: "",
                suffix: "M+",
                label: "Tonnes CO₂ Offset",
                sub: "Verified & certified annually",
                color: "#c8a84b",
              },
              {
                end: 42,
                prefix: "",
                suffix: "",
                label: "Countries",
                sub: "Active project presence",
                color: "#2ea866",
              },
            ].map((s, idx) => (
              <FadeIn key={s.label} delay={idx * 100}>
                <div
                  style={{
                    textAlign: "center",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(239,230,216,0.07)",
                    borderRadius: 20,
                    padding: "36px 24px",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: 54,
                      fontWeight: 800,
                      color: s.color,
                      lineHeight: 1,
                    }}
                  >
                    {s.prefix}
                    <Counter end={s.end} suffix={s.suffix} />
                  </div>
                  <div
                    style={{
                      fontSize: 15,
                      fontWeight: 700,
                      color: "#fff",
                      marginTop: 14,
                    }}
                  >
                    {s.label}
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      color: "rgba(239,230,216,0.5)",
                      marginTop: 6,
                    }}
                  >
                    {s.sub}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Secondary stats */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gap: 20,
            }}
          >
            {[
              { val: "500MW+", label: "Clean Energy Deployed" },
              { val: "2M ha", label: "Land Restored" },
              { val: "400K", label: "Homes Powered" },
              { val: "15yr", label: "Track Record" },
              { val: "97%", label: "Client Retention" },
            ].map((s) => (
              <div
                key={s.label}
                style={{
                  textAlign: "center",
                  padding: "20px 16px",
                  borderRadius: 14,
                  background: "rgba(239,230,216,0.05)",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 26,
                    fontWeight: 800,
                    color: "#fff",
                  }}
                >
                  {s.val}
                </div>
                <div
                  style={{
                    fontSize: 11,
                    color: "rgba(239,230,216,0.5)",
                    marginTop: 6,
                    letterSpacing: 0.5,
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────── INVESTMENT OPPORTUNITIES ──────────── */}
      <section
        id="investments"
        style={{ background: "#efe6d8", padding: "120px 48px" }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 72 }}>
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
                Invest With Us
              </div>
              <h2
                style={{
                  fontSize: 50,
                  fontWeight: 800,
                  color: "#0a1f14",
                  marginBottom: 18,
                }}
              >
                Choose Your Path to
                <br />
                Sustainable Returns
              </h2>
              <p
                style={{
                  color: "#5a7062",
                  fontSize: 17,
                  lineHeight: 1.75,
                  maxWidth: 600,
                  margin: "0 auto",
                }}
              >
                Three distinct investment vehicles designed to match your risk
                profile, return expectations, and impact ambitions.
              </p>
            </div>
          </FadeIn>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 24,
              alignItems: "start",
            }}
          >
            {[
              {
                badge: "Conservative",
                name: "Green Bond Fund",
                return: "6–8%",
                returnLabel: "Annual Yield",
                minInvest: "$500K",
                duration: "5–7 Years",
                risk: "Low Risk",
                riskColor: "#2ea866",
                features: [
                  "Investment-grade green bonds",
                  "Quarterly cash distributions",
                  "ICMA Green Bond Principles aligned",
                  "Capital preservation focus",
                  "Diversified across 20+ issuers",
                  "Quarterly impact reporting",
                ],
                popular: false,
              },
              {
                badge: "★ Most Popular",
                name: "Renewable Energy Portfolio",
                return: "12–18%",
                returnLabel: "Target Net IRR",
                minInvest: "$1M",
                duration: "7–10 Years",
                risk: "Moderate Risk",
                riskColor: "#c8a84b",
                features: [
                  "Direct equity in RE assets",
                  "Solar, wind & battery storage",
                  "Asset-backed security",
                  "Co-investment rights",
                  "Annual site visits & audits",
                  "Real-time dashboard access",
                ],
                popular: true,
              },
              {
                badge: "High Impact",
                name: "Climate Ventures Fund",
                return: "25%+",
                returnLabel: "Target Gross IRR",
                minInvest: "$2M",
                duration: "10–12 Years",
                risk: "Growth Risk",
                riskColor: "#c8a84b",
                features: [
                  "Early-stage climate-tech equity",
                  "Series A & B entry points",
                  "Board-level representation",
                  "Deep tech & hard science focus",
                  "UN SDG-aligned exit strategy",
                  "Access to proprietary deal flow",
                ],
                popular: false,
              },
            ].map((plan, idx) => (
              <FadeIn key={plan.name} delay={idx * 100}>
                <div
                  style={{
                    background: plan.popular ? "#0e633d" : "#fff",
                    borderRadius: 26,
                    padding: 40,
                    border: plan.popular
                      ? "2px solid #c8a84b"
                      : "1.5px solid #e0d4c0",
                    position: "relative",
                    overflow: "hidden",
                    boxShadow: plan.popular
                      ? "0 32px 100px rgba(14,99,61,0.25)"
                      : "0 4px 20px rgba(14,99,61,0.06)",
                    transform: plan.popular ? "scale(1.04)" : "scale(1)",
                  }}
                >
                  {plan.popular && (
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: 4,
                        background:
                          "linear-gradient(90deg, #c8a84b, #e8cc7a, #c8a84b)",
                      }}
                    />
                  )}

                  <div style={{ marginBottom: 14 }}>
                    <span
                      style={{
                        background: plan.popular
                          ? "rgba(200,168,75,0.2)"
                          : "rgba(14,99,61,0.08)",
                        color: plan.popular ? "#c8a84b" : "#0e633d",
                        padding: "5px 14px",
                        borderRadius: 50,
                        fontSize: 10,
                        fontWeight: 800,
                        letterSpacing: 0.8,
                      }}
                    >
                      {plan.badge}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: 24,
                      fontWeight: 800,
                      color: plan.popular ? "#efe6d8" : "#0a1f14",
                      marginTop: 14,
                      marginBottom: 24,
                    }}
                  >
                    {plan.name}
                  </h3>

                  <div style={{ marginBottom: 28 }}>
                    <div
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: 52,
                        fontWeight: 800,
                        color: plan.popular ? "#c8a84b" : "#0e633d",
                        lineHeight: 1,
                      }}
                    >
                      {plan.return}
                    </div>
                    <div
                      style={{
                        fontSize: 12,
                        color: plan.popular
                          ? "rgba(239,230,216,0.55)"
                          : "#9aaa9e",
                        marginTop: 6,
                      }}
                    >
                      {plan.returnLabel}
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: 12, marginBottom: 32 }}>
                    {[
                      { label: "Min. Investment", val: plan.minInvest },
                      { label: "Duration", val: plan.duration },
                    ].map((f) => (
                      <div
                        key={f.label}
                        style={{
                          flex: 1,
                          background: plan.popular
                            ? "rgba(255,255,255,0.07)"
                            : "rgba(14,99,61,0.05)",
                          borderRadius: 12,
                          padding: "14px 16px",
                        }}
                      >
                        <div
                          style={{
                            fontSize: 15,
                            fontWeight: 800,
                            color: plan.popular ? "#fff" : "#0a1f14",
                          }}
                        >
                          {f.val}
                        </div>
                        <div
                          style={{
                            fontSize: 10,
                            color: plan.popular
                              ? "rgba(239,230,216,0.45)"
                              : "#b0bdb2",
                            marginTop: 4,
                            letterSpacing: 0.5,
                          }}
                        >
                          {f.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      background: `${plan.riskColor}18`,
                      padding: "5px 14px",
                      borderRadius: 50,
                      marginBottom: 28,
                    }}
                  >
                    <span
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: plan.riskColor,
                        display: "inline-block",
                      }}
                    />
                    <span
                      style={{
                        fontSize: 10,
                        fontWeight: 700,
                        color: plan.riskColor,
                        letterSpacing: 0.5,
                      }}
                    >
                      {plan.risk}
                    </span>
                  </div>

                  <div style={{ marginBottom: 32 }}>
                    {plan.features.map((f) => (
                      <div
                        key={f}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 10,
                          marginBottom: 11,
                        }}
                      >
                        <div
                          style={{
                            width: 18,
                            height: 18,
                            borderRadius: "50%",
                            background: plan.popular
                              ? "rgba(200,168,75,0.18)"
                              : "rgba(14,99,61,0.08)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                          }}
                        >
                          <svg
                            width="8"
                            height="8"
                            viewBox="0 0 8 8"
                            fill="none"
                          >
                            <path
                              d="M1.5 4l1.8 1.8 3.2-3.6"
                              stroke={plan.popular ? "#c8a84b" : "#0e633d"}
                              strokeWidth="1.4"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <span
                          style={{
                            fontSize: 13,
                            color: plan.popular
                              ? "rgba(239,230,216,0.75)"
                              : "#5a7062",
                          }}
                        >
                          {f}
                        </span>
                      </div>
                    ))}
                  </div>

                  <button
                    style={{
                      width: "100%",
                      padding: "15px",
                      borderRadius: 14,
                      border: "none",
                      cursor: "pointer",
                      background: plan.popular ? "#c8a84b" : "#0e633d",
                      color: plan.popular ? "#0a1f14" : "#efe6d8",
                      fontWeight: 800,
                      fontSize: 14,
                      letterSpacing: 0.5,
                      fontFamily: "'Inter', sans-serif",
                      transition: "all 0.3s",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.opacity =
                        "0.88";
                      (e.currentTarget as HTMLButtonElement).style.transform =
                        "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.opacity =
                        "1";
                      (e.currentTarget as HTMLButtonElement).style.transform =
                        "translateY(0)";
                    }}
                  >
                    Request Investment Information
                  </button>
                </div>
              </FadeIn>
            ))}
          </div>

          <p
            style={{
              textAlign: "center",
              fontSize: 11,
              color: "#b0bdb2",
              marginTop: 36,
              lineHeight: 1.7,
            }}
          >
            All investments carry risk. Past performance is not indicative of
            future results. For qualified investors only. Please review our Risk
            Disclosure before investing.
          </p>
        </div>
      </section>

      {/* ──────────── WHY SFGCO ──────────── */}
      <section style={{ background: "#fff", padding: "120px 48px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 88,
              alignItems: "center",
            }}
          >
            <FadeIn>
              <div>
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
                  Why Choose SFGCO
                </div>
                <h2
                  style={{
                    fontSize: 50,
                    fontWeight: 800,
                    color: "#0a1f14",
                    lineHeight: 1.13,
                    marginBottom: 24,
                  }}
                >
                  Where Financial
                  <br />
                  Excellence Meets
                  <br />
                  <span style={{ color: "#0e633d" }}>Green Purpose</span>
                </h2>
                <p
                  style={{
                    fontSize: 16,
                    color: "#5a7062",
                    lineHeight: 1.85,
                    marginBottom: 44,
                  }}
                >
                  We combine institutional-grade investment rigor with deep
                  environmental expertise — delivering portfolios that
                  consistently outperform while generating verifiable planet
                  outcomes.
                </p>

                {[
                  {
                    num: "01",
                    title: "Proven 15-Year Track Record",
                    desc: "Consistent above-benchmark returns with industry-leading sustainability outcomes through multiple market cycles.",
                  },
                  {
                    num: "02",
                    title: "Deep Domain Expertise",
                    desc: "80+ specialists spanning renewable energy, climate science, environmental law, carbon markets, and institutional finance.",
                  },
                  {
                    num: "03",
                    title: "Verified, Audited Impact",
                    desc: "All investments independently verified against science-based standards with real-time client dashboards.",
                  },
                  {
                    num: "04",
                    title: "Exclusive Global Deal Flow",
                    desc: "Partnerships with governments, multilateral development banks, and corporations across 42 countries.",
                  },
                ].map((item) => (
                  <div
                    key={item.num}
                    style={{ display: "flex", gap: 20, marginBottom: 28 }}
                  >
                    <div
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: 13,
                        fontWeight: 700,
                        color: "#c8a84b",
                        letterSpacing: 1,
                        minWidth: 26,
                        paddingTop: 3,
                      }}
                    >
                      {item.num}
                    </div>
                    <div>
                      <h4
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          fontSize: 17,
                          fontWeight: 700,
                          color: "#0a1f14",
                          marginBottom: 6,
                        }}
                      >
                        {item.title}
                      </h4>
                      <p
                        style={{
                          fontSize: 14,
                          color: "#6b7c6e",
                          lineHeight: 1.7,
                        }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={150}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 16,
                }}
              >
                {[
                  {
                    icon: "🏆",
                    title: "Award Winning",
                    sub: "Best Green Fund 2024",
                    bg: "#0e633d",
                    light: true,
                  },
                  {
                    icon: "🔒",
                    title: "Regulated & Secure",
                    sub: "FSCA & FSB Licensed",
                    bg: "#efe6d8",
                    light: false,
                  },
                  {
                    icon: "📈",
                    title: "Consistent Returns",
                    sub: "+18.3% avg. 5yr IRR",
                    bg: "#efe6d8",
                    light: false,
                  },
                  {
                    icon: "🌍",
                    title: "UN SDG Aligned",
                    sub: "12 of 17 Global Goals",
                    bg: "#0e633d",
                    light: true,
                  },
                  {
                    icon: "⚡",
                    title: "500MW+ Clean Energy",
                    sub: "Deployed & operational",
                    bg: "#c8a84b",
                    light: false,
                  },
                  {
                    icon: "🤝",
                    title: "Institutional Grade",
                    sub: "Pension & endowment ready",
                    bg: "#f5f1eb",
                    light: false,
                  },
                ].map((card) => (
                  <HoverCard
                    key={card.title}
                    style={{
                      background: card.bg,
                      borderRadius: 20,
                      padding: "28px 24px",
                      cursor: "pointer",
                    }}
                  >
                    <div style={{ fontSize: 34, marginBottom: 14 }}>
                      {card.icon}
                    </div>
                    <div
                      style={{
                        fontSize: 14,
                        fontWeight: 700,
                        color: card.light ? "#efe6d8" : "#0a1f14",
                        marginBottom: 5,
                      }}
                    >
                      {card.title}
                    </div>
                    <div
                      style={{
                        fontSize: 11,
                        color: card.light
                          ? "rgba(239,230,216,0.65)"
                          : "#9aaa9e",
                      }}
                    >
                      {card.sub}
                    </div>
                  </HoverCard>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ──────────── FEATURED PROJECTS ──────────── */}
      <section style={{ background: "#f5f0e8", padding: "120px 48px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 72 }}>
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
                Featured Projects
              </div>
              <h2
                style={{
                  fontSize: 50,
                  fontWeight: 800,
                  color: "#0a1f14",
                  marginBottom: 18,
                }}
              >
                Impact In Action
              </h2>
              <p
                style={{
                  color: "#5a7062",
                  fontSize: 17,
                  lineHeight: 1.75,
                  maxWidth: 560,
                  margin: "0 auto",
                }}
              >
                A selection from our $2.4B+ portfolio of active green
                investments delivering both returns and real-world
                transformation.
              </p>
            </div>
          </FadeIn>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 24,
            }}
          >
            {[
              {
                emoji: "☀️",
                gradient: "linear-gradient(145deg, #b8860b, #c8a84b)",
                category: "Renewable Energy",
                status: "Operational",
                statusColor: "#2ea866",
                location: "Morocco & Tunisia",
                title: "Sahara Solar Initiative",
                metrics: [
                  { l: "Capacity", v: "500 MW" },
                  { l: "Homes Powered", v: "400,000" },
                  { l: "CO₂ Offset", v: "850K t/yr" },
                  { l: "Target IRR", v: "14.2%" },
                ],
              },
              {
                emoji: "🏙️",
                gradient: "linear-gradient(145deg, #0a4a2e, #0e633d)",
                category: "Smart Infrastructure",
                status: "Construction",
                statusColor: "#c8a84b",
                location: "Singapore",
                title: "Singapore Green Quarter",
                metrics: [
                  { l: "Net-Zero Space", v: "2.4M m²" },
                  { l: "Occupants", v: "65,000" },
                  { l: "CO₂ Offset", v: "1.2M t/yr" },
                  { l: "Target IRR", v: "16.8%" },
                ],
              },
              {
                emoji: "🌳",
                gradient: "linear-gradient(145deg, #1a8050, #2ea866)",
                category: "Ecosystem Restoration",
                status: "Active",
                statusColor: "#2ea866",
                location: "Brazilian Amazon",
                title: "Amazon Guardian Fund",
                metrics: [
                  { l: "Area Protected", v: "2M hectares" },
                  { l: "Families Supported", v: "80,000" },
                  { l: "CO₂ Offset", v: "15M t/yr" },
                  { l: "Target IRR", v: "11.4%" },
                ],
              },
            ].map((p, idx) => (
              <FadeIn key={p.title} delay={idx * 100}>
                <HoverCard
                  style={{
                    background: "#fff",
                    borderRadius: 24,
                    overflow: "hidden",
                    boxShadow: "0 8px 36px rgba(14,99,61,0.08)",
                    cursor: "pointer",
                  }}
                >
                  <div
                    style={{
                      height: 188,
                      background: p.gradient,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                    }}
                  >
                    <span style={{ fontSize: 68 }}>{p.emoji}</span>
                    <div
                      style={{
                        position: "absolute",
                        top: 16,
                        left: 16,
                        background: "rgba(0,0,0,0.22)",
                        backdropFilter: "blur(8px)",
                        color: "#fff",
                        padding: "5px 13px",
                        borderRadius: 50,
                        fontSize: 10,
                        fontWeight: 700,
                      }}
                    >
                      {p.category}
                    </div>
                    <div
                      style={{
                        position: "absolute",
                        top: 16,
                        right: 16,
                        background: p.statusColor,
                        color: "#fff",
                        padding: "5px 13px",
                        borderRadius: 50,
                        fontSize: 10,
                        fontWeight: 800,
                      }}
                    >
                      {p.status}
                    </div>
                  </div>
                  <div style={{ padding: 28 }}>
                    <div
                      style={{
                        fontSize: 11,
                        color: "#9aaa9e",
                        marginBottom: 8,
                        letterSpacing: 0.5,
                      }}
                    >
                      {p.location}
                    </div>
                    <h3
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: 22,
                        fontWeight: 800,
                        color: "#0a1f14",
                        marginBottom: 20,
                      }}
                    >
                      {p.title}
                    </h3>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: 10,
                        marginBottom: 22,
                      }}
                    >
                      {p.metrics.map((m) => (
                        <div
                          key={m.l}
                          style={{
                            background: "#f7f4ef",
                            borderRadius: 10,
                            padding: "10px 13px",
                          }}
                        >
                          <div
                            style={{
                              fontSize: 9,
                              color: "#b0bdb2",
                              marginBottom: 3,
                              textTransform: "uppercase",
                              letterSpacing: 0.8,
                            }}
                          >
                            {m.l}
                          </div>
                          <div
                            style={{
                              fontSize: 13,
                              fontWeight: 800,
                              color: "#0a1f14",
                            }}
                          >
                            {m.v}
                          </div>
                        </div>
                      ))}
                    </div>
                    <button
                      style={{
                        width: "100%",
                        padding: "11px",
                        borderRadius: 10,
                        border: "1.5px solid #0e633d",
                        background: "transparent",
                        color: "#0e633d",
                        fontWeight: 700,
                        fontSize: 12,
                        cursor: "pointer",
                        fontFamily: "'Inter', sans-serif",
                        transition: "all 0.3s",
                      }}
                      onMouseEnter={(e) => {
                        (
                          e.currentTarget as HTMLButtonElement
                        ).style.background = "#0e633d";
                        (e.currentTarget as HTMLButtonElement).style.color =
                          "#efe6d8";
                      }}
                      onMouseLeave={(e) => {
                        (
                          e.currentTarget as HTMLButtonElement
                        ).style.background = "transparent";
                        (e.currentTarget as HTMLButtonElement).style.color =
                          "#0e633d";
                      }}
                    >
                      View Full Project Details →
                    </button>
                  </div>
                </HoverCard>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={200}>
            <div style={{ textAlign: "center", marginTop: 52 }}>
              <button
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  border: "1.5px solid #0e633d",
                  color: "#0e633d",
                  padding: "13px 32px",
                  borderRadius: 50,
                  fontWeight: 700,
                  fontSize: 14,
                  transition: "all 0.3s",
                  background: "transparent",
                  cursor: "pointer",
                  fontFamily: "'Inter', sans-serif",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background =
                    "#0e633d";
                  (e.currentTarget as HTMLButtonElement).style.color =
                    "#efe6d8";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background =
                    "transparent";
                  (e.currentTarget as HTMLButtonElement).style.color =
                    "#0e633d";
                }}
              >
                View All 150+ Portfolio Projects
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ──────────── TESTIMONIALS ──────────── */}
      <section
        style={{
          background: "#0e633d",
          padding: "120px 48px",
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
              "radial-gradient(circle, rgba(200,168,75,0.1), transparent 65%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -60,
            left: -60,
            width: 350,
            height: 350,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(239,230,216,0.05), transparent 65%)",
            pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 72 }}>
              <div
                style={{
                  color: "#c8a84b",
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: 2.5,
                  textTransform: "uppercase",
                  marginBottom: 18,
                }}
              >
                Investor Voices
              </div>
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 50,
                  fontWeight: 800,
                  color: "#fff",
                }}
              >
                Trusted by Global Leaders
              </h2>
            </div>
          </FadeIn>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 24,
            }}
          >
            {[
              {
                quote:
                  "SFGCO has redefined what we expect from an impact manager. The combination of rigorous financial discipline and genuine environmental commitment is unmatched. Our ESG portfolio has outperformed benchmarks for five consecutive years.",
                name: "Dr. Sarah Mensah",
                title: "Chief Investment Officer",
                org: "African Development Pension Fund",
                meta: "$4.2B AUM · Investor since 2017",
                initials: "SM",
                color: "#c8a84b",
              },
              {
                quote:
                  "Our family office has been with SFGCO for over a decade. The transparency, the quality of their team, and the consistent returns have made them our most valued long-term investment partner.",
                name: "Henrik Lundqvist",
                title: "Principal",
                org: "Lundqvist Family Office",
                meta: "Partner since 2012 · 3 fund cycles",
                initials: "HL",
                color: "#2ea866",
              },
              {
                quote:
                  "As a corporation committed to net zero by 2030, SFGCO's carbon market expertise and project pipeline have been transformational. They don't just advise — they deliver measurable, verified results.",
                name: "Priya Sharma",
                title: "Chief Sustainability Officer",
                org: "GreenTech Corporation",
                meta: "$800M invested · 12 projects",
                initials: "PS",
                color: "#c8a84b",
              },
            ].map((t, idx) => (
              <FadeIn key={t.name} delay={idx * 100}>
                <div
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(239,230,216,0.1)",
                    borderRadius: 22,
                    padding: 38,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      color: t.color,
                      fontSize: 52,
                      fontFamily: "'Playfair Display', serif",
                      lineHeight: 0.8,
                      marginBottom: 22,
                      opacity: 0.8,
                    }}
                  >
                    "
                  </div>
                  <p
                    style={{
                      color: "rgba(239,230,216,0.82)",
                      fontSize: 15,
                      lineHeight: 1.8,
                      fontStyle: "italic",
                      flex: 1,
                      marginBottom: 30,
                    }}
                  >
                    {t.quote}
                  </p>
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 16 }}
                  >
                    <div
                      style={{
                        width: 50,
                        height: 50,
                        borderRadius: "50%",
                        background: t.color,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 17,
                        fontWeight: 800,
                        color: "#0a1f14",
                        flexShrink: 0,
                        fontFamily: "'Playfair Display', serif",
                      }}
                    >
                      {t.initials}
                    </div>
                    <div>
                      <div
                        style={{ fontWeight: 700, color: "#fff", fontSize: 15 }}
                      >
                        {t.name}
                      </div>
                      <div
                        style={{
                          fontSize: 12,
                          color: "rgba(239,230,216,0.65)",
                          marginTop: 2,
                        }}
                      >
                        {t.title}, {t.org}
                      </div>
                      <div
                        style={{
                          fontSize: 10,
                          color: t.color,
                          marginTop: 4,
                          fontWeight: 700,
                          letterSpacing: 0.3,
                        }}
                      >
                        {t.meta}
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────── TEAM ──────────── */}
      <section id="team" style={{ background: "#fff", padding: "120px 48px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 72 }}>
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
                Leadership
              </div>
              <h2
                style={{
                  fontSize: 50,
                  fontWeight: 800,
                  color: "#0a1f14",
                  marginBottom: 18,
                }}
              >
                The Minds Behind the Mission
              </h2>
              <p
                style={{
                  color: "#5a7062",
                  fontSize: 17,
                  lineHeight: 1.75,
                  maxWidth: 560,
                  margin: "0 auto",
                }}
              >
                A world-class team combining decades of institutional finance
                experience with deep environmental expertise.
              </p>
            </div>
          </FadeIn>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 24,
            }}
          >
            {[
              {
                initials: "JA",
                name: "James Adeyemi",
                role: "CEO & Co-Founder",
                bg: "#0e633d",
                bio: "Former UNCTAD advisor. 20+ yrs sustainable finance & impact investing.",
              },
              {
                initials: "LK",
                name: "Layla Khalid",
                role: "Chief Investment Officer",
                bg: "#1a8050",
                bio: "Ex-Goldman Sachs ESG lead. Managed $6B+ in green fixed income portfolios.",
              },
              {
                initials: "MO",
                name: "Marcus Osei",
                role: "Chief Sustainability Officer",
                bg: "#c8a84b",
                bio: "UNFCCC climate advisor. PhD Environmental Economics, Oxford University.",
              },
              {
                initials: "NW",
                name: "Nina Weber",
                role: "MD, Investment Banking",
                bg: "#0a4a2e",
                bio: "Ex-World Bank Group. Structured $3B+ in green infrastructure across 28 countries.",
              },
            ].map((m, idx) => (
              <FadeIn key={m.name} delay={idx * 80}>
                <HoverCard
                  style={{
                    borderRadius: 22,
                    overflow: "hidden",
                    border: "1.5px solid #ede5d9",
                    cursor: "pointer",
                    background: "#fff",
                  }}
                >
                  <div
                    style={{
                      height: 190,
                      background: m.bg,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: -40,
                        right: -40,
                        width: 140,
                        height: 140,
                        borderRadius: "50%",
                        background: "rgba(255,255,255,0.05)",
                      }}
                    />
                    <div
                      style={{
                        width: 84,
                        height: 84,
                        borderRadius: "50%",
                        background: "rgba(239,230,216,0.15)",
                        border: "3px solid rgba(239,230,216,0.25)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: "'Playfair Display', serif",
                        fontSize: 30,
                        fontWeight: 800,
                        color: "#efe6d8",
                      }}
                    >
                      {m.initials}
                    </div>
                  </div>
                  <div style={{ padding: "22px 24px 26px" }}>
                    <h4
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: 17,
                        fontWeight: 800,
                        color: "#0a1f14",
                        marginBottom: 4,
                      }}
                    >
                      {m.name}
                    </h4>
                    <div
                      style={{
                        fontSize: 12,
                        color: "#0e633d",
                        fontWeight: 700,
                        marginBottom: 12,
                        letterSpacing: 0.3,
                      }}
                    >
                      {m.role}
                    </div>
                    <p
                      style={{
                        fontSize: 12,
                        color: "#9aaa9e",
                        lineHeight: 1.65,
                      }}
                    >
                      {m.bio}
                    </p>
                  </div>
                </HoverCard>
              </FadeIn>
            ))}
          </div>

          {/* Awards row */}
          <FadeIn delay={200}>
            <div
              style={{
                marginTop: 72,
                background: "#f5f0e8",
                borderRadius: 24,
                padding: "40px 48px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 32,
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  fontSize: 14,
                  fontWeight: 700,
                  color: "#6b7c6e",
                  letterSpacing: 0.5,
                }}
              >
                Industry Recognition
              </div>
              {[
                "🏆 Best Green Fund Africa 2024",
                "🌍 UN PRI Gold Rating",
                "⭐ Bloomberg ESG Leader",
                "🔰 GIIN Impact Award 2023",
                "🎖️ FT Sustainable Finance Top 50",
              ].map((award) => (
                <div
                  key={award}
                  style={{ fontSize: 13, fontWeight: 600, color: "#2d3d32" }}
                >
                  {award}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ──────────── PROCESS ──────────── */}
      <section style={{ background: "#efe6d8", padding: "120px 48px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 72 }}>
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
                How It Works
              </div>
              <h2
                style={{
                  fontSize: 50,
                  fontWeight: 800,
                  color: "#0a1f14",
                  marginBottom: 18,
                }}
              >
                Your Investment Journey
              </h2>
            </div>
          </FadeIn>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 32,
              position: "relative",
            }}
          >
            {/* Connecting line */}
            <div
              style={{
                position: "absolute",
                top: 44,
                left: "12.5%",
                right: "12.5%",
                height: 2,
                background: "linear-gradient(90deg, #0e633d, #c8a84b)",
                zIndex: 0,
              }}
            />

            {[
              {
                step: "01",
                icon: "💬",
                title: "Discovery Call",
                desc: "We learn about your investment goals, timeline, risk appetite, and sustainability priorities.",
              },
              {
                step: "02",
                icon: "📋",
                title: "Custom Strategy",
                desc: "Our team crafts a bespoke green investment strategy tailored to your specific objectives.",
              },
              {
                step: "03",
                icon: "✅",
                title: "Due Diligence",
                desc: "Rigorous screening of all investments for financial, environmental, and social criteria.",
              },
              {
                step: "04",
                icon: "📊",
                title: "Ongoing Reporting",
                desc: "Real-time dashboards tracking both financial returns and verified sustainability impact.",
              },
            ].map((s, idx) => (
              <FadeIn key={s.step} delay={idx * 100}>
                <div
                  style={{
                    textAlign: "center",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  <div
                    style={{
                      width: 88,
                      height: 88,
                      borderRadius: "50%",
                      margin: "0 auto 24px",
                      background: idx % 2 === 0 ? "#0e633d" : "#c8a84b",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 34,
                      boxShadow: `0 12px 40px ${idx % 2 === 0 ? "rgba(14,99,61,0.3)" : "rgba(200,168,75,0.35)"}`,
                      border: "4px solid #efe6d8",
                    }}
                  >
                    {s.icon}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: 11,
                      fontWeight: 700,
                      color: "#c8a84b",
                      letterSpacing: 2,
                      marginBottom: 8,
                    }}
                  >
                    {s.step}
                  </div>
                  <h4
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: 19,
                      fontWeight: 800,
                      color: "#0a1f14",
                      marginBottom: 12,
                    }}
                  >
                    {s.title}
                  </h4>
                  <p
                    style={{ fontSize: 14, color: "#6b7c6e", lineHeight: 1.7 }}
                  >
                    {s.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────── CTA ──────────── */}
      <section
        id="contact"
        style={{
          background:
            "linear-gradient(150deg, #060f08 0%, #0a2a16 25%, #0e633d 60%, #1a8050 85%, #0c3d25 100%)",
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
            background:
              "radial-gradient(circle, rgba(200,168,75,0.1), transparent 65%)",
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
            background:
              "radial-gradient(circle, rgba(239,230,216,0.06), transparent 65%)",
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

        <div style={{ position: "relative", maxWidth: 720, margin: "0 auto" }}>
          <FadeIn>
            <div
              style={{
                color: "#c8a84b",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: 2.5,
                textTransform: "uppercase",
                marginBottom: 24,
              }}
            >
              Begin Your Journey
            </div>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 58,
                fontWeight: 800,
                color: "#fff",
                lineHeight: 1.1,
                marginBottom: 24,
                letterSpacing: -1,
              }}
            >
              Ready to Invest in
              <br />
              <span style={{ color: "#c8a84b" }}>Tomorrow's World?</span>
            </h2>
            <p
              style={{
                fontSize: 18,
                color: "rgba(239,230,216,0.7)",
                lineHeight: 1.75,
                marginBottom: 52,
              }}
            >
              Join 150+ institutional investors, family offices, and
              corporations who are building wealth while building a better
              planet. Our team is ready to craft your personalized sustainable
              investment strategy.
            </p>

            <div
              style={{
                display: "flex",
                gap: 14,
                justifyContent: "center",
                marginBottom: 20,
              }}
            >
              <input
                type="email"
                placeholder="Enter your email address"
                style={{
                  flex: 1,
                  maxWidth: 380,
                  padding: "16px 24px",
                  borderRadius: 14,
                  border: "1.5px solid rgba(239,230,216,0.18)",
                  background: "rgba(255,255,255,0.07)",
                  color: "#fff",
                  fontSize: 15,
                  outline: "none",
                  backdropFilter: "blur(12px)",
                  fontFamily: "'Inter', sans-serif",
                }}
                onFocus={(e) =>
                  (e.currentTarget.style.borderColor = "rgba(200,168,75,0.5)")
                }
                onBlur={(e) =>
                  (e.currentTarget.style.borderColor = "rgba(239,230,216,0.18)")
                }
              />
              <button
                style={{
                  background: "#c8a84b",
                  color: "#0a1f14",
                  padding: "16px 34px",
                  borderRadius: 14,
                  border: "none",
                  fontWeight: 800,
                  fontSize: 14,
                  cursor: "pointer",
                  transition: "all 0.3s",
                  whiteSpace: "nowrap",
                  letterSpacing: 0.4,
                  fontFamily: "'Inter', sans-serif",
                  boxShadow: "0 8px 32px rgba(200,168,75,0.35)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.transform =
                    "translateY(-2px)";
                  (e.currentTarget as HTMLButtonElement).style.boxShadow =
                    "0 16px 48px rgba(200,168,75,0.5)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.transform =
                    "translateY(0)";
                  (e.currentTarget as HTMLButtonElement).style.boxShadow =
                    "0 8px 32px rgba(200,168,75,0.35)";
                }}
              >
                Schedule a Strategy Call
              </button>
            </div>

            <div
              style={{
                display: "flex",
                gap: 40,
                justifyContent: "center",
                flexWrap: "wrap",
                marginBottom: 56,
              }}
            >
              {[
                "No commitment required",
                "Personalized strategy session",
                "Fully confidential",
              ].map((item) => (
                <div
                  key={item}
                  style={{ display: "flex", alignItems: "center", gap: 8 }}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <circle
                      cx="7"
                      cy="7"
                      r="6.5"
                      stroke="#c8a84b"
                      strokeWidth="1.2"
                    />
                    <path
                      d="M4 7l2 2 4-3.5"
                      stroke="#c8a84b"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span
                    style={{ color: "rgba(239,230,216,0.65)", fontSize: 13 }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Contact cards */}
            <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
              {[
                { icon: "📧", label: "Email Us", val: "invest@sfgco.com" },
                { icon: "📞", label: "Call Us", val: "+27 11 234 5678" },
                { icon: "📍", label: "Head Office", val: "Johannesburg, SA" },
              ].map((c) => (
                <div
                  key={c.label}
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(239,230,216,0.1)",
                    borderRadius: 14,
                    padding: "16px 24px",
                    textAlign: "center",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <div style={{ fontSize: 22, marginBottom: 6 }}>{c.icon}</div>
                  <div
                    style={{
                      fontSize: 10,
                      color: "rgba(239,230,216,0.5)",
                      letterSpacing: 1,
                      textTransform: "uppercase",
                      marginBottom: 4,
                    }}
                  >
                    {c.label}
                  </div>
                  <div
                    style={{ fontSize: 13, color: "#c8a84b", fontWeight: 700 }}
                  >
                    {c.val}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ──────────── FOOTER ──────────── */}
      <footer
        style={{
          background: "#060f08",
          padding: "88px 48px 40px",
          color: "rgba(239,230,216,0.55)",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2.2fr 1fr 1fr 1fr",
              gap: 64,
              marginBottom: 72,
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
                <div>
                  <div
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: 800,
                      fontSize: 16,
                      color: "#efe6d8",
                      letterSpacing: 3,
                    }}
                  >
                    SFGCO
                  </div>
                  <div
                    style={{
                      fontSize: 8,
                      color: "rgba(239,230,216,0.45)",
                      letterSpacing: 2,
                      textTransform: "uppercase",
                    }}
                  >
                    Future of Green
                  </div>
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
                Leading the transition to a sustainable global economy through
                innovative investment strategies, rigorous impact measurement,
                and long-term partnerships.
              </p>
              <div style={{ display: "flex", gap: 10, marginBottom: 28 }}>
                {[
                  { l: "in", title: "LinkedIn" },
                  { l: "tw", title: "Twitter" },
                  { l: "yt", title: "YouTube" },
                  { l: "fb", title: "Facebook" },
                ].map((s) => (
                  <div
                    key={s.l}
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 9,
                      background: "rgba(239,230,216,0.06)",
                      border: "1px solid rgba(239,230,216,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 10,
                      fontWeight: 800,
                      color: "#efe6d8",
                      cursor: "pointer",
                      letterSpacing: 0.5,
                      transition: "all 0.2s",
                    }}
                    title={s.title}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLDivElement).style.background =
                        "#0e633d";
                      (e.currentTarget as HTMLDivElement).style.borderColor =
                        "#0e633d";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLDivElement).style.background =
                        "rgba(239,230,216,0.06)";
                      (e.currentTarget as HTMLDivElement).style.borderColor =
                        "rgba(239,230,216,0.1)";
                    }}
                  >
                    {s.l.toUpperCase()}
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", gap: 10 }}>
                {["PRI", "TCFD", "GIIN", "ISO"].map((b) => (
                  <div
                    key={b}
                    style={{
                      padding: "4px 10px",
                      borderRadius: 6,
                      border: "1px solid rgba(200,168,75,0.25)",
                      fontSize: 9,
                      fontWeight: 800,
                      color: "#c8a84b",
                      letterSpacing: 1,
                    }}
                  >
                    {b}
                  </div>
                ))}
              </div>
            </div>

            {/* Link columns */}
            {[
              {
                head: "Services",
                links: [
                  "Renewable Energy",
                  "Green Infrastructure",
                  "ESG Advisory",
                  "Carbon Markets",
                  "Impact Funds",
                  "Circular Economy",
                ],
              },
              {
                head: "Invest",
                links: [
                  "Green Bond Fund",
                  "RE Portfolio Fund",
                  "Climate Ventures",
                  "Co-investments",
                  "Fund Performance",
                  "Risk Disclosure",
                ],
              },
              {
                head: "Company",
                links: [
                  "About SFGCO",
                  "Leadership Team",
                  "Careers",
                  "Press & Media",
                  "Partnerships",
                  "Contact Us",
                ],
              },
            ].map((col) => (
              <div key={col.head}>
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
                  {col.head}
                </h5>
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 11 }}
                >
                  {col.links.map((l) => (
                    <a
                      key={l}
                      href="#"
                      style={{
                        color: "rgba(239,230,216,0.48)",
                        fontSize: 13,
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "#c8a84b")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "rgba(239,230,216,0.48)")
                      }
                    >
                      {l}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter */}
          <div
            style={{
              background: "rgba(14,99,61,0.2)",
              border: "1px solid rgba(14,99,61,0.3)",
              borderRadius: 18,
              padding: "28px 36px",
              marginBottom: 56,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 32,
              flexWrap: "wrap",
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 18,
                  fontWeight: 700,
                  color: "#efe6d8",
                  marginBottom: 6,
                }}
              >
                Stay Ahead of Sustainable Finance
              </div>
              <div style={{ fontSize: 13, color: "rgba(239,230,216,0.55)" }}>
                Monthly insights on green investment, ESG trends, and impact
                reports.
              </div>
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              <input
                type="email"
                placeholder="your@email.com"
                style={{
                  padding: "11px 18px",
                  borderRadius: 10,
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(239,230,216,0.15)",
                  color: "#fff",
                  fontSize: 13,
                  outline: "none",
                  fontFamily: "'Inter', sans-serif",
                  width: 230,
                }}
              />
              <button
                style={{
                  background: "#c8a84b",
                  color: "#0a1f14",
                  padding: "11px 22px",
                  borderRadius: 10,
                  border: "none",
                  fontWeight: 800,
                  fontSize: 13,
                  cursor: "pointer",
                  fontFamily: "'Inter', sans-serif",
                  whiteSpace: "nowrap",
                }}
              >
                Subscribe
              </button>
            </div>
          </div>

          {/* Bottom bar */}
          <div
            style={{
              borderTop: "1px solid rgba(239,230,216,0.07)",
              paddingTop: 32,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 16,
            }}
          >
            <p style={{ fontSize: 12 }}>
              © 2024 SFGCO Investments Ltd. All rights reserved. Registered
              Investment Advisor.
            </p>
            <div style={{ display: "flex", gap: 28 }}>
              {[
                "Privacy Policy",
                "Terms of Service",
                "Risk Disclosure",
                "Cookie Policy",
              ].map((l) => (
                <a
                  key={l}
                  href="#"
                  style={{
                    color: "rgba(239,230,216,0.38)",
                    fontSize: 11,
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "rgba(239,230,216,0.7)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "rgba(239,230,216,0.38)")
                  }
                >
                  {l}
                </a>
              ))}
            </div>
          </div>

          <p
            style={{
              fontSize: 10,
              marginTop: 20,
              lineHeight: 1.7,
              color: "rgba(239,230,216,0.2)",
              maxWidth: 960,
            }}
          >
            Investment involves risk. Past performance is not indicative of
            future results. SFGCO products are intended for qualified
            institutional investors only. This website does not constitute an
            offer or solicitation to buy or sell any security in any
            jurisdiction where such activity would be prohibited. Please review
            our full Risk Disclosure before making any investment decisions.
          </p>
        </div>
      </footer>
    </>
  );
}
