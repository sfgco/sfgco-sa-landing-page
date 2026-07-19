import { useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import HoverCard from "./HoverCard";
import Icon from "./Icon";

interface ServiceCardProps {
  icon: React.ComponentProps<typeof Icon>["name"];
  accent: string;
  title: string;
  desc: string;
  items?: string[];
  art?: ReactNode;
  expandable?: boolean;
  index?: number;
}

/** One service card — icon, title, short summary, and a Learn More action that either links to /services (Home) or expands in place (Services page). */
export default function ServiceCard({
  icon,
  accent,
  title,
  desc,
  items = [],
  art,
  expandable = false,
  index = 0,
}: Readonly<ServiceCardProps>) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  return (
    <HoverCard
      variant="lg"
      style={{
        background: "#faf8f5",
        border: "1.5px solid #ede5d9",
        borderRadius: 22,
        overflow: "hidden",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ height: 5, background: `linear-gradient(90deg, ${accent}, #c8a84b)` }} />
      <div style={{ padding: 30, display: "flex", flexDirection: "column", flex: 1 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 18,
          }}
        >
          <div
            style={{
              width: 46,
              height: 46,
              borderRadius: 13,
              background: `${accent}18`,
              color: accent,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <Icon name={icon} size={22} />
          </div>
          <span
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 12,
              fontWeight: 800,
              color: accent,
              letterSpacing: 1,
            }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <h3
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 19,
            fontWeight: 800,
            color: "#0a1f14",
            marginBottom: 10,
          }}
        >
          {title}
        </h3>
        <p style={{ fontSize: 13.5, color: "#6b7c6e", lineHeight: 1.75, marginBottom: 20, flex: 1 }}>
          {desc}
        </p>

        {expandable ? (
          <>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "none",
                border: "none",
                padding: 0,
                color: accent,
                fontWeight: 700,
                fontSize: 13,
                cursor: "pointer",
                alignSelf: "flex-start",
              }}
            >
              {open ? t("services.hideDetails") : t("services.learnMore")}
              <span
                style={{
                  display: "flex",
                  transition: "transform 0.25s ease",
                  transform: open ? "rotate(180deg)" : "rotate(0deg)",
                }}
              >
                <Icon name="arrow" size={13} strokeWidth={2.4} />
              </span>
            </button>

            {open && (
              <div style={{ marginTop: 22, paddingTop: 22, borderTop: "1px solid #ede5d9" }}>
                {art && <div style={{ marginBottom: 20 }}>{art}</div>}
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {items.map((item) => (
                    <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 9 }}>
                      <div
                        style={{
                          width: 17,
                          height: 17,
                          borderRadius: "50%",
                          background: `${accent}1f`,
                          color: accent,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          marginTop: 2,
                        }}
                      >
                        <Icon name="check" size={10} strokeWidth={2.4} />
                      </div>
                      <span style={{ fontSize: 13, color: "#2d3d32", fontWeight: 500 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        ) : (
          <Link
            to="/services"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              color: accent,
              fontWeight: 700,
              fontSize: 13,
              alignSelf: "flex-start",
            }}
          >
            {t("services.learnMore")}
            <Icon name="arrow" size={13} strokeWidth={2.4} />
          </Link>
        )}
      </div>
    </HoverCard>
  );
}
