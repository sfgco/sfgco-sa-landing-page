import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import FadeIn from "../components/FadeIn";
import { newsArticles } from "../data/newsArticles";

/** Single news article detail page, resolved by slug from the shared data source. */
export default function NewsArticle() {
  const { t } = useTranslation();
  const { slug } = useParams();
  const article = newsArticles.find((a) => a.slug === slug);

  return (
    <section
      style={{
        background: "#efe6d8",
        padding: "160px 48px 120px",
        minHeight: "70vh",
      }}
    >
      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        <FadeIn>
          <Link
            to="/news"
            style={{
              color: "#0e633d",
              fontSize: 13.5,
              fontWeight: 700,
              display: "inline-block",
              marginBottom: 32,
            }}
          >
            ← {t("news.backBtn")}
          </Link>

          {article ? (
            <div
              style={{
                background: "#fff",
                border: "1.5px solid #e0d4c0",
                borderRadius: 24,
                padding: "48px 44px",
              }}
            >
              <div style={{ fontSize: 12, color: "#9aaa9e", marginBottom: 14 }}>
                <span dir="ltr">{article.date}</span> · {article.category}
              </div>
              <h1
                style={{
                  fontFamily: "'cairo', serif",
                  fontSize: 34,
                  fontWeight: 800,
                  color: "#0a1f14",
                  marginBottom: 26,
                  lineHeight: 1.3,
                }}
              >
                {article.title}
              </h1>
              <p
                style={{
                  fontSize: 16,
                  lineHeight: 1.95,
                  color: "#3d4d40",
                  whiteSpace: "pre-line",
                }}
              >
                {article.body}
              </p>
            </div>
          ) : (
            <div style={{ textAlign: "center", padding: "60px 0" }}>
              <h1
                style={{
                  fontFamily: "'cairo', serif",
                  fontSize: 28,
                  fontWeight: 800,
                  color: "#0a1f14",
                  marginBottom: 14,
                }}
              >
                {t("news.emptyTitle")}
              </h1>
              <p style={{ fontSize: 15, color: "#8a988c" }}>
                {t("news.emptyBody")}
              </p>
            </div>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
