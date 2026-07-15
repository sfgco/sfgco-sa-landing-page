import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import FadeIn from "../components/FadeIn";
import HoverCard from "../components/HoverCard";
import { newsArticles } from "../data/newsArticles";

/** News listing page — reads from the shared newsArticles data source. */
export default function NewsList() {
  const { t } = useTranslation();
  const categories = t("news.categories", { returnObjects: true }) as string[];

  return (
    <>
      <title>{`${t("news.title")} | SFGCO`}</title>

      <section
        style={{
          background:
            "linear-gradient(145deg, #060f08 0%, #0a2a16 40%, #0e633d 100%)",
          padding: "160px 48px 90px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -80,
            insetInlineEnd: -80,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(200,168,75,0.08), transparent 65%)",
            pointerEvents: "none",
          }}
        />
        <FadeIn>
          <h1
            style={{
              fontFamily: "'cairo', serif",
              fontSize: 52,
              fontWeight: 800,
              color: "#fff",
              marginBottom: 18,
            }}
          >
            {t("news.title")}
          </h1>
          <p
            style={{
              fontSize: 17,
              color: "rgba(239,230,216,0.7)",
              maxWidth: 520,
              margin: "0 auto",
            }}
          >
            {t("news.subtitle")}
          </p>
        </FadeIn>
      </section>

      <section style={{ background: "#fff", padding: "90px 48px 120px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          {newsArticles.length === 0 ? (
            <FadeIn>
              <div
                style={{
                  background: "#faf8f5",
                  border: "1.5px dashed #ddd0be",
                  borderRadius: 24,
                  padding: "64px 40px",
                  textAlign: "center",
                  marginBottom: 56,
                }}
              >
                <svg
                  width="42"
                  height="42"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#9aaa9e"
                  strokeWidth="1.5"
                  style={{ margin: "0 auto 18px" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2zM7 8h10M7 12h10M7 16h6"
                  />
                </svg>
                <h2
                  style={{
                    fontFamily: "'cairo', serif",
                    fontSize: 22,
                    fontWeight: 800,
                    color: "#0a1f14",
                    marginBottom: 10,
                  }}
                >
                  {t("news.emptyTitle")}
                </h2>
                <p style={{ fontSize: 14, color: "#8a988c" }}>
                  {t("news.emptyBody")}
                </p>
              </div>
            </FadeIn>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: 24,
                marginBottom: 56,
              }}
            >
              {newsArticles.map((a) => (
                <Link
                  key={a.slug}
                  to={`/news/${a.slug}`}
                  style={{ color: "inherit" }}
                >
                  <HoverCard
                    style={{
                      background: "#faf8f5",
                      border: "1.5px solid #ede5d9",
                      borderRadius: 20,
                      padding: 28,
                      height: "100%",
                    }}
                  >
                    <div
                      style={{
                        fontSize: 11,
                        color: "#9aaa9e",
                        marginBottom: 10,
                      }}
                    >
                      {a.date}
                    </div>
                    <h3
                      style={{
                        fontFamily: "'cairo', serif",
                        fontSize: 19,
                        fontWeight: 800,
                        color: "#0a1f14",
                        marginBottom: 10,
                      }}
                    >
                      {a.title}
                    </h3>
                    <p
                      style={{
                        fontSize: 13.5,
                        color: "#6b7c6e",
                        lineHeight: 1.7,
                      }}
                    >
                      {a.excerpt}
                    </p>
                  </HoverCard>
                </Link>
              ))}
            </div>
          )}

          <FadeIn delay={100}>
            <div
              style={{
                background: "#efe6d8",
                borderRadius: 24,
                padding: "40px 44px",
              }}
            >
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: 1,
                  color: "#8a7a55",
                  textTransform: "uppercase",
                  marginBottom: 20,
                }}
              >
                {t("news.categoriesTitle")}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                {categories.map((c) => (
                  <span
                    key={c}
                    style={{
                      background: "rgba(14,99,61,0.08)",
                      color: "#0e633d",
                      padding: "9px 18px",
                      borderRadius: 50,
                      fontSize: 13.5,
                      fontWeight: 600,
                    }}
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
