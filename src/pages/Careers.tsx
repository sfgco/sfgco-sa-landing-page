import { useState } from "react";
import FadeIn from "../components/FadeIn";
import HoverCard from "../components/HoverCard";

const VALUES = [
  {
    icon: "🚀",
    title: "Innovation First",
    desc: "Every decision we make — from architecture choices to tooling — is evaluated through a build-for-the-future lens.",
  },
  {
    icon: "🔬",
    title: "Engineering Rigour",
    desc: "We back every technical decision with data. We challenge assumptions, welcome dissent, and improve through evidence.",
  },
  {
    icon: "🤝",
    title: "Long-Term Partnership",
    desc: "We build careers, not just jobs. Most of our senior team joined at entry level and grew with the company.",
  },
  {
    icon: "⚡",
    title: "Bias for Delivery",
    desc: "Speed matters. We operate with startup urgency inside an enterprise-grade engineering framework.",
  },
];

const BENEFITS = [
  "Competitive salary benchmarked to top-quartile tech roles",
  "Annual performance bonus tied to delivery and personal KPIs",
  "Full medical, dental & vision for you and dependents",
  "SAR 15,000 annual learning & conference budget",
  "Hybrid work — 3 days in office, 2 remote",
  "30 days annual leave + all Saudi public holidays",
  "Modern hardware & tooling of your choice",
  "Clear promotion tracks and mentorship program",
];

const OPENINGS = [
  {
    title: "AI/ML Engineer",
    team: "Artificial Intelligence",
    location: "Khobar, KSA",
    type: "Full-Time",
    level: "Mid-Senior",
    tags: ["LLMs", "Python", "MLOps"],
    desc: "Design and ship generative AI and machine learning solutions — from RAG pipelines to production ML systems — for clients across healthcare, retail, and logistics.",
  },
  {
    title: "Full-Stack Engineer",
    team: "Custom Software",
    location: "Remote · MENA Timezone",
    type: "Full-Time",
    level: "Mid-Senior",
    tags: ["React", "Node.js", "AWS"],
    desc: "Build and scale enterprise portals, SaaS platforms, and APIs that power mission-critical workflows for clients across multiple industries.",
  },
  {
    title: "Cloud DevOps Engineer",
    team: "Cloud Solutions",
    location: "Khobar, KSA",
    type: "Full-Time",
    level: "Senior",
    tags: ["Kubernetes", "CI/CD", "Terraform"],
    desc: "Own cloud infrastructure and delivery pipelines across AWS, Azure, and GCP, helping clients migrate, scale, and secure their production environments.",
  },
];

const LEVEL_COLOR: Record<string, string> = {
  Analyst: "#2ea866",
  Associate: "#0e633d",
  "Senior Associate": "#1a8050",
  Specialist: "#c8a84b",
  Senior: "#c8a84b",
  "Mid-Senior": "#0a4a2e",
};

export default function Careers() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <>
      <title>Careers | SFGCO Tech</title>
      <meta
        name="description"
        content="Join SFGCO Tech — build a career at the intersection of AI, cloud engineering, and enterprise software."
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
        <div
          style={{
            position: "absolute",
            bottom: -60,
            left: -60,
            width: 320,
            height: 320,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(46,168,102,0.10), transparent 65%)",
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
            Join Our Team
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
            Build Products.
            <br />
            <span style={{ color: "#c8a84b" }}>Shape the Future.</span>
          </h1>
          <p
            style={{
              fontSize: 18,
              color: "rgba(239,230,216,0.7)",
              maxWidth: 560,
              margin: "0 auto 40px",
            }}
          >
            SFGCO Tech is a place where rigorous engineering meets genuine
            product craft. We are growing fast and looking for exceptional
            people to grow with us.
          </p>
          <div
            style={{
              display: "flex",
              gap: 32,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {[
              [OPENINGS.length, "Open Roles"],
              ["15+", "Industries"],
              ["50+", "Team Members"],
            ].map(([val, label]) => (
              <div key={label} style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 36,
                    fontWeight: 800,
                    color: "#c8a84b",
                  }}
                >
                  {val}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: "rgba(239,230,216,0.5)",
                    letterSpacing: 0.5,
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* Values */}
      <section style={{ background: "#fff", padding: "100px 48px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
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
                Our Culture
              </div>
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 42,
                  fontWeight: 800,
                  color: "#0a1f14",
                }}
              >
                What We Stand For
              </h2>
            </div>
          </FadeIn>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 24,
            }}
          >
            {VALUES.map((v, idx) => (
              <FadeIn key={v.title} delay={idx * 80}>
                <HoverCard
                  style={{
                    background: "#faf8f5",
                    border: "1.5px solid #ede5d9",
                    borderRadius: 22,
                    padding: 32,
                    height: "100%",
                    cursor: "default",
                  }}
                >
                  <div style={{ fontSize: 38, marginBottom: 18 }}>{v.icon}</div>
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: 18,
                      fontWeight: 800,
                      color: "#0a1f14",
                      marginBottom: 12,
                    }}
                  >
                    {v.title}
                  </h3>
                  <p
                    style={{ fontSize: 14, color: "#6b7c6e", lineHeight: 1.75 }}
                  >
                    {v.desc}
                  </p>
                </HoverCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section style={{ background: "#0a1f14", padding: "100px 48px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 64 }}>
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
                Total Rewards
              </div>
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 42,
                  fontWeight: 800,
                  color: "#efe6d8",
                }}
              >
                Benefits & Perks
              </h2>
            </div>
          </FadeIn>
          <FadeIn delay={60}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 16,
              }}
            >
              {BENEFITS.map((b) => (
                <div
                  key={b}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 14,
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: 14,
                    padding: "18px 20px",
                  }}
                >
                  <div
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: "50%",
                      background: "rgba(200,168,75,0.18)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginTop: 1,
                    }}
                  >
                    <svg width="9" height="9" viewBox="0 0 8 8" fill="none">
                      <path
                        d="M1.5 4l1.8 1.8 3.2-3.6"
                        stroke="#c8a84b"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span
                    style={{
                      fontSize: 14,
                      color: "rgba(239,230,216,0.75)",
                      lineHeight: 1.6,
                    }}
                  >
                    {b}
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Open Roles */}
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
                Open Positions
              </div>
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 42,
                  fontWeight: 800,
                  color: "#0a1f14",
                }}
              >
                Current Opportunities
              </h2>
            </div>
          </FadeIn>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {OPENINGS.map((job, idx) => (
              <FadeIn key={job.title} delay={idx * 60}>
                <button
                  style={{
                    display: "block",
                    width: "100%",
                    textAlign: "left",
                    background: "#fff",
                    border: `1.5px solid ${selected === job.title ? "#0e633d" : "#ede5d9"}`,
                    borderRadius: 18,
                    overflow: "hidden",
                    transition: "border-color 0.25s",
                    cursor: "pointer",
                    padding: 0,
                    fontFamily: "'Inter', sans-serif",
                  }}
                  onClick={() =>
                    setSelected(selected === job.title ? null : job.title)
                  }
                >
                  <div
                    style={{
                      padding: "24px 28px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 20,
                    }}
                  >
                    <div style={{ flex: 1 }}>
                      <div
                        style={{
                          display: "flex",
                          gap: 8,
                          marginBottom: 10,
                          flexWrap: "wrap",
                        }}
                      >
                        <span
                          style={{
                            background: `${LEVEL_COLOR[job.level] ?? "#0e633d"}14`,
                            color: LEVEL_COLOR[job.level] ?? "#0e633d",
                            padding: "3px 12px",
                            borderRadius: 50,
                            fontSize: 10,
                            fontWeight: 700,
                          }}
                        >
                          {job.level}
                        </span>
                        <span
                          style={{
                            background: "rgba(14,99,61,0.06)",
                            color: "#5a7062",
                            padding: "3px 12px",
                            borderRadius: 50,
                            fontSize: 10,
                            fontWeight: 600,
                          }}
                        >
                          {job.team}
                        </span>
                        <span
                          style={{
                            background: "rgba(14,99,61,0.06)",
                            color: "#5a7062",
                            padding: "3px 12px",
                            borderRadius: 50,
                            fontSize: 10,
                            fontWeight: 600,
                          }}
                        >
                          {job.location}
                        </span>
                      </div>
                      <h3
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          fontSize: 19,
                          fontWeight: 800,
                          color: "#0a1f14",
                        }}
                      >
                        {job.title}
                      </h3>
                    </div>
                    <div
                      style={{
                        color: "#0e633d",
                        fontWeight: 700,
                        fontSize: 20,
                        transition: "transform 0.2s",
                        transform:
                          selected === job.title
                            ? "rotate(45deg)"
                            : "rotate(0deg)",
                      }}
                    >
                      +
                    </div>
                  </div>
                  {selected === job.title && (
                    <div
                      style={{
                        padding: "0 28px 28px",
                        borderTop: "1px solid #f0e8de",
                      }}
                    >
                      <p
                        style={{
                          fontSize: 14,
                          color: "#6b7c6e",
                          lineHeight: 1.8,
                          marginBottom: 20,
                          marginTop: 20,
                        }}
                      >
                        {job.desc}
                      </p>
                      <div
                        style={{
                          display: "flex",
                          gap: 7,
                          flexWrap: "wrap",
                          marginBottom: 24,
                        }}
                      >
                        {job.tags.map((tag) => (
                          <span
                            key={tag}
                            style={{
                              background: "rgba(14,99,61,0.08)",
                              color: "#0e633d",
                              padding: "4px 12px",
                              borderRadius: 50,
                              fontSize: 10,
                              fontWeight: 700,
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <a
                        href="mailto:careers@sfgco.sa"
                        style={{
                          display: "inline-block",
                          background: "#0e633d",
                          color: "#efe6d8",
                          padding: "12px 28px",
                          borderRadius: 50,
                          fontWeight: 800,
                          fontSize: 13,
                          textDecoration: "none",
                          letterSpacing: 0.5,
                        }}
                      >
                        Apply for This Role →
                      </a>
                    </div>
                  )}
                </button>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={200}>
            <div
              style={{
                textAlign: "center",
                marginTop: 52,
                background: "linear-gradient(135deg, #0a2a16, #0e633d)",
                borderRadius: 20,
                padding: "40px 48px",
              }}
            >
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 24,
                  fontWeight: 800,
                  color: "#efe6d8",
                  marginBottom: 12,
                }}
              >
                Don't See a Fit?
              </h3>
              <p
                style={{
                  fontSize: 15,
                  color: "rgba(239,230,216,0.65)",
                  marginBottom: 24,
                }}
              >
                We are always interested in exceptional talent. Send us your CV
                and we'll keep you in mind for future roles.
              </p>
              <a
                href="mailto:careers@sfgco.sa"
                style={{
                  display: "inline-block",
                  background: "#c8a84b",
                  color: "#0a1f14",
                  padding: "14px 32px",
                  borderRadius: 50,
                  fontWeight: 800,
                  fontSize: 13,
                  textDecoration: "none",
                }}
              >
                Send Speculative Application
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
