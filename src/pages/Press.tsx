import FadeIn from "../components/FadeIn";
import HoverCard from "../components/HoverCard";

const PRESS_RELEASES = [
  {
    date: "March 2026",
    category: "Product Launch",
    title:
      "SFGCO Tech Launches New AI Agent Platform for Enterprise Automation",
    outlet: "Press Release",
    outletColor: "#0e633d",
    summary:
      "SFGCO Tech announces the general availability of its AI agent platform, helping enterprise clients automate customer service, operations, and internal workflows.",
  },
  {
    date: "January 2026",
    category: "Milestone",
    title:
      "SFGCO Tech Surpasses 50 Delivered Projects Across 15+ Industries",
    outlet: "Press Release",
    outletColor: "#0e633d",
    summary:
      "The company marks a growth milestone, with production software now running across healthcare, logistics, retail, and financial services clients.",
  },
  {
    date: "November 2025",
    category: "Partnership",
    title:
      "SFGCO Tech Expands Cloud Practice with New AWS & Azure Delivery Teams",
    outlet: "Press Release",
    outletColor: "#0e633d",
    summary:
      "A strategic expansion of the company's cloud engineering capabilities, enabling faster migrations and hybrid-cloud deployments for enterprise clients.",
  },
];

export default function Press() {
  return (
    <>
      <title>Press & Media | SFGCO Tech</title>
      <meta
        name="description"
        content="SFGCO Tech press releases, product news, and media kit for journalists and analysts."
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
            News, press releases, and resources for journalists covering
            SFGCO Tech and our work in AI, cloud, and enterprise software.
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
