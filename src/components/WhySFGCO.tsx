import { useTranslation } from "react-i18next";
import FadeIn from "./FadeIn";
import HoverCard from "./HoverCard";
import Icon from "./Icon";

const REASON_KEYS = ["reason1", "reason2", "reason3", "reason4", "reason5", "reason6", "reason7"] as const;
const ICONS: React.ComponentProps<typeof Icon>["name"][] = [
  "users", "sparkles", "shieldCheck", "lock", "zap", "handshake", "refresh",
];
const TILE_BG = ["#faf8f5", "#efe6d8", "#faf8f5", "#efe6d8", "#faf8f5", "#efe6d8"];

/** "Why Choose Us" as an asymmetric bento: one large feature tile + a 2x3 grid of supporting reasons. */
export default function WhySFGCO() {
  const { t } = useTranslation();

  return (
    <section style={{ background: "#fff", padding: "120px 48px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div className="eyebrow" style={{ display: "flex", justifyContent: "center" }}>
              {t("whySFGCO.badge")}
            </div>
            <h2 style={{ fontSize: 50, fontWeight: 800, color: "#0a1f14", marginBottom: 18 }}>
              {t("whySFGCO.title1")} <span style={{ color: "#0e633d" }}>{t("whySFGCO.titleHighlight")}</span>
            </h2>
            <p style={{ color: "#5a7062", fontSize: 17, lineHeight: 1.75, maxWidth: 620, margin: "0 auto" }}>
              {t("whySFGCO.subtitle")}
            </p>
          </div>
        </FadeIn>

        <div
          className="grid-2-col"
          style={{ display: "grid", gridTemplateColumns: "0.9fr 1.4fr", gap: 24, alignItems: "stretch" }}
        >
          {/* Feature tile — reason 1 */}
          <FadeIn>
            <div
              style={{
                background: "linear-gradient(160deg, #0a2a16, #0b2d1e 55%, #0e633d)",
                borderRadius: 26,
                padding: 40,
                height: "100%",
                minHeight: 320,
                color: "#fff",
                position: "relative",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: -70,
                  right: -70,
                  width: 220,
                  height: 220,
                  borderRadius: "50%",
                  background: "rgba(200,168,75,0.12)",
                }}
              />
              <div
                style={{
                  width: 54,
                  height: 54,
                  borderRadius: 15,
                  background: "rgba(200,168,75,0.15)",
                  border: "1px solid rgba(200,168,75,0.4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#c8a84b",
                  marginBottom: 26,
                }}
              >
                <Icon name={ICONS[0]} size={26} />
              </div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 800, marginBottom: 12 }}>
                {t(`whySFGCO.${REASON_KEYS[0]}.title`)}
              </h3>
              <p style={{ fontSize: 14.5, color: "rgba(239,230,216,0.78)", lineHeight: 1.75 }}>
                {t(`whySFGCO.${REASON_KEYS[0]}.desc`)}
              </p>
            </div>
          </FadeIn>

          {/* Supporting grid — reasons 2-7 */}
          <div className="grid-3-col" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {REASON_KEYS.slice(1).map((key, idx) => (
              <FadeIn key={key} delay={idx * 70}>
                <HoverCard
                  variant="sm"
                  style={{ background: TILE_BG[idx], borderRadius: 18, padding: "24px 20px", height: "100%" }}
                >
                  <div
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: 10,
                      background: "rgba(14,99,61,0.1)",
                      color: "#0e633d",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 14,
                    }}
                  >
                    <Icon name={ICONS[idx + 1]} size={19} />
                  </div>
                  <h4 style={{ fontSize: 14, fontWeight: 800, color: "#0a1f14", marginBottom: 6 }}>
                    {t(`whySFGCO.${key}.title`)}
                  </h4>
                  <p style={{ fontSize: 12, color: "#6b7c6e", lineHeight: 1.6 }}>
                    {t(`whySFGCO.${key}.desc`)}
                  </p>
                </HoverCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
