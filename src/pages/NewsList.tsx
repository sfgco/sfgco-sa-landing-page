import { useTranslation } from "react-i18next";
import FadeIn from "../components/FadeIn";

/** News listing page — currently no real articles published; shows a clean empty state. */
export default function NewsList() {
  const { t } = useTranslation();

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

      <section style={{ background: "#efe6d8", padding: "90px 48px 120px" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <FadeIn>
            <div
              style={{
                background: "#fff",
                border: "1.5px solid #e0d4c0",
                borderRadius: 24,
                padding: "64px 40px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: "50%",
                  background: "rgba(14,99,61,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 22px",
                }}
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0e633d"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2zM7 8h10M7 12h10M7 16h6" />
                </svg>
              </div>
              <h2
                style={{
                  fontFamily: "'cairo', serif",
                  fontSize: 22,
                  fontWeight: 800,
                  color: "#0a1f14",
                  marginBottom: 12,
                }}
              >
                {t("news.emptyTitle")}
              </h2>
              <p
                style={{
                  fontSize: 14.5,
                  color: "#8a988c",
                  maxWidth: 440,
                  margin: "0 auto",
                  lineHeight: 1.8,
                }}
              >
                {t("news.emptyBody")}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
