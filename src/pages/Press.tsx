import FadeIn from "../components/FadeIn";
import HoverCard from "../components/HoverCard";

const PRESS_RELEASES = [
  {
    date: "March 2025",
    category: "Fund Launch",
    title:
      "SFGCO Closes $800M Deep Tech Venture Fund, Targeting AI and Climate-Tech Unicorns",
    outlet: "Press Release",
    outletColor: "#0e633d",
    summary:
      "SFGCO announces the final close of its third flagship venture fund, with commitments from sovereign wealth funds, university endowments, and leading family offices across 18 countries.",
  },
  {
    date: "January 2025",
    category: "Milestone",
    title:
      "SFGCO Portfolio Crosses $2.4B AUM, Surpasses 18 Million Tonnes CO₂ Offset",
    outlet: "Press Release",
    outletColor: "#0e633d",
    summary:
      "The firm marks a decade-and-a-half of verified impact, with independently audited results across renewable energy, ecosystem restoration, and green infrastructure.",
  },
  {
    date: "November 2025",
    category: "Partnership",
    title:
      "SFGCO and UN Environment Programme Sign Strategic MOU on Nature-Based Finance",
    outlet: "Press Release",
    outletColor: "#0e633d",
    summary:
      "A landmark agreement to co-develop blended finance structures for large-scale biodiversity and ocean conservation investments in the Global South.",
  },
];

const COVERAGE = [
  {
    outlet: "Financial Times",
    date: "Feb 2025",
    headline:
      "The Gulf's Green Gold Rush: How SFGCO is Reshaping Regional Capital Markets",
    logo: "FT",
  },
  {
    outlet: "Bloomberg",
    date: "Jan 2025",
    headline:
      "Saudi Green Investor SFGCO Eyes European Expansion After Record Fund Close",
    logo: "BB",
  },
  {
    outlet: "Reuters",
    date: "Dec 2025",
    headline:
      "SFGCO's Amazon Guardian Fund Hits 2 Million Hectare Protection Milestone",
    logo: "RE",
  },
  {
    outlet: "Wall Street Journal",
    date: "Nov 2025",
    headline:
      "Sovereign Wealth Funds Double Down on Climate Investing Through SFGCO",
    logo: "WJ",
  },
  {
    outlet: "Arab News",
    date: "Oct 2025",
    headline:
      "SFGCO Wins Best ESG Investment Manager at MENA Finance Awards 2025",
    logo: "AN",
  },
  {
    outlet: "Responsible Investor",
    date: "Sep 2025",
    headline:
      "SFGCO Sets New Standard for Impact Transparency with Real-Time LP Dashboard",
    logo: "RI",
  },
];

const AWARDS = [
  {
    year: "2025",
    award: "Best ESG Investment Manager — MENA",
    body: "MENA Finance Awards",
  },
  {
    year: "2025",
    award: "Green Fund of the Year",
    body: "Environmental Finance Awards",
  },
  {
    year: "2023",
    award: "Impact Investor of the Year",
    body: "GIIN Investor Forum",
  },
  {
    year: "2023",
    award: "Best Renewable Energy Fund",
    body: "Infrastructure Investor Awards",
  },
  {
    year: "2022",
    award: "ESG Reporting Excellence Award",
    body: "CFA Society — Riyadh Chapter",
  },
];

export default function Press() {
  return (
    <>
      <title>Press & Media | SFGCO</title>
      <meta
        name="description"
        content="SFGCO press releases, media coverage, awards, and media kit for journalists and analysts."
      />

      {/* Hero */}
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
            width: 440,
            height: 440,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(200,168,75,0.10), transparent 65%)",
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
            Media Centre
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
            Press & Media
          </h1>
          <p
            style={{
              fontSize: 18,
              color: "rgba(239,230,216,0.7)",
              maxWidth: 520,
              margin: "0 auto 36px",
            }}
          >
            News, press releases, media coverage, and resources for journalists
            covering sustainable finance and green investment.
          </p>
          <a
            href="mailto:press@sfgco.sa"
            style={{
              display: "inline-block",
              background: "#c8a84b",
              color: "#0a1f14",
              padding: "14px 32px",
              borderRadius: 50,
              fontWeight: 800,
              fontSize: 14,
              textDecoration: "none",
              letterSpacing: 0.5,
            }}
          >
            Media Enquiries: press@sfgco.sa
          </a>
        </FadeIn>
      </section>

      {/* Press Releases */}
      <section style={{ background: "#faf8f5", padding: "100px 48px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 64 }}>
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
                Latest News
              </div>
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 42,
                  fontWeight: 800,
                  color: "#0a1f14",
                }}
              >
                Press Releases
              </h2>
            </div>
          </FadeIn>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {PRESS_RELEASES.map((pr, idx) => (
              <FadeIn key={pr.title} delay={idx * 80}>
                <HoverCard
                  style={{
                    background: "#fff",
                    border: "1.5px solid #ede5d9",
                    borderRadius: 20,
                    padding: "32px 36px",
                    cursor: "pointer",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: 12,
                      marginBottom: 16,
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{
                        background: `${pr.outletColor}12`,
                        color: pr.outletColor,
                        padding: "4px 13px",
                        borderRadius: 50,
                        fontSize: 10,
                        fontWeight: 700,
                        letterSpacing: 0.5,
                      }}
                    >
                      {pr.category}
                    </span>
                    <span style={{ fontSize: 12, color: "#b0bdb2" }}>
                      {pr.date}
                    </span>
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: 21,
                      fontWeight: 800,
                      color: "#0a1f14",
                      marginBottom: 14,
                      lineHeight: 1.4,
                    }}
                  >
                    {pr.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 14,
                      color: "#6b7c6e",
                      lineHeight: 1.8,
                      marginBottom: 20,
                    }}
                  >
                    {pr.summary}
                  </p>
                  <span
                    style={{ fontSize: 13, fontWeight: 700, color: "#0e633d" }}
                  >
                    Read Full Release →
                  </span>
                </HoverCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Media Coverage */}
      <section style={{ background: "#fff", padding: "100px 48px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 64 }}>
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
                In the News
              </div>
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 42,
                  fontWeight: 800,
                  color: "#0a1f14",
                }}
              >
                Media Coverage
              </h2>
            </div>
          </FadeIn>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 20,
            }}
          >
            {COVERAGE.map((item, idx) => (
              <FadeIn key={item.headline} delay={idx * 60}>
                <HoverCard
                  style={{
                    background: "#faf8f5",
                    border: "1.5px solid #ede5d9",
                    borderRadius: 18,
                    padding: 28,
                    height: "100%",
                    cursor: "pointer",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginBottom: 16,
                    }}
                  >
                    <div
                      style={{
                        background: "#0a1f14",
                        color: "#efe6d8",
                        padding: "5px 13px",
                        borderRadius: 8,
                        fontSize: 11,
                        fontWeight: 800,
                        letterSpacing: 0.5,
                      }}
                    >
                      {item.logo}
                    </div>
                    <span style={{ fontSize: 11, color: "#b0bdb2" }}>
                      {item.date}
                    </span>
                  </div>
                  <div
                    style={{
                      fontSize: 11,
                      color: "#9aaa9e",
                      marginBottom: 10,
                      fontWeight: 600,
                    }}
                  >
                    {item.outlet}
                  </div>
                  <p
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: 16,
                      fontWeight: 700,
                      color: "#0a1f14",
                      lineHeight: 1.5,
                    }}
                  >
                    {item.headline}
                  </p>
                </HoverCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section style={{ background: "#0a1f14", padding: "100px 48px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 60 }}>
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
                Recognition
              </div>
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 42,
                  fontWeight: 800,
                  color: "#efe6d8",
                }}
              >
                Awards & Honours
              </h2>
            </div>
          </FadeIn>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              borderRadius: 18,
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            {AWARDS.map((a, idx) => (
              <FadeIn key={a.award} delay={idx * 60}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 24,
                    padding: "22px 28px",
                    background: "rgba(255,255,255,0.03)",
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: 22,
                      fontWeight: 800,
                      color: "#c8a84b",
                      minWidth: 54,
                    }}
                  >
                    {a.year}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        fontSize: 15,
                        fontWeight: 700,
                        color: "#efe6d8",
                        marginBottom: 4,
                      }}
                    >
                      {a.award}
                    </div>
                    <div
                      style={{ fontSize: 12, color: "rgba(239,230,216,0.45)" }}
                    >
                      {a.body}
                    </div>
                  </div>
                  <div style={{ fontSize: 20 }}>🏆</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Media Kit */}
      <section style={{ background: "#faf8f5", padding: "80px 48px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
          <FadeIn>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 36,
                fontWeight: 800,
                color: "#0a1f14",
                marginBottom: 16,
              }}
            >
              Media Kit
            </h2>
            <p
              style={{
                fontSize: 15,
                color: "#6b7c6e",
                lineHeight: 1.8,
                marginBottom: 36,
              }}
            >
              Download our official logos, brand guidelines, executive
              headshots, and approved photography for editorial use.
            </p>
            <div
              style={{
                display: "flex",
                gap: 16,
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              {[
                "Logo Package (SVG/PNG)",
                "Brand Guidelines PDF",
                "Executive Headshots",
                "Approved Photography",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    background: "#fff",
                    border: "1.5px solid #ede5d9",
                    borderRadius: 14,
                    padding: "14px 22px",
                    fontSize: 13,
                    fontWeight: 700,
                    color: "#0a1f14",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0e633d"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                  </svg>
                  {item}
                </div>
              ))}
            </div>
            <p style={{ fontSize: 12, color: "#b0bdb2", marginTop: 24 }}>
              All assets are provided for editorial and journalistic use only.
              Commercial use requires prior written approval. Contact{" "}
              <a href="mailto:press@sfgco.sa" style={{ color: "#0e633d" }}>
                press@sfgco.sa
              </a>
              .
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
