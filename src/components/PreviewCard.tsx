import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import HoverCard from "./HoverCard";

interface PreviewCardProps {
  icon: ReactNode;
  eyebrow: string;
  title: string;
  to: string;
  ctaLabel: string;
  children?: ReactNode;
  dark?: boolean;
}

/** Home-page overview tile — icon, title, optional excerpt, link out to the dedicated page. */
export default function PreviewCard({
  icon,
  eyebrow,
  title,
  to,
  ctaLabel,
  children,
  dark = false,
}: Readonly<PreviewCardProps>) {
  return (
    <HoverCard
      style={{
        background: dark ? "#0e633d" : "#faf8f5",
        border: dark ? "none" : "1.5px solid #ede5d9",
        borderRadius: 22,
        padding: 32,
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          width: 50,
          height: 50,
          borderRadius: 14,
          background: dark ? "rgba(200,168,75,0.2)" : "rgba(14,99,61,0.08)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 20,
        }}
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke={dark ? "#c8a84b" : "#0e633d"}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {icon}
        </svg>
      </div>

      <div
        style={{
          color: dark ? "#c8a84b" : "#0e633d",
          fontSize: 10.5,
          fontWeight: 700,
          letterSpacing: 1.5,
          textTransform: "uppercase",
          marginBottom: 8,
        }}
      >
        {eyebrow}
      </div>
      <h3
        style={{
          fontFamily: "cairo', serif",
          fontSize: 20,
          fontWeight: 800,
          color: dark ? "#efe6d8" : "#0a1f14",
          marginBottom: 12,
        }}
      >
        {title}
      </h3>

      {children && (
        <p
          style={{
            fontSize: 13.5,
            lineHeight: 1.8,
            color: dark ? "rgba(239,230,216,0.75)" : "#6b7c6e",
            marginBottom: 20,
            flexGrow: 1,
          }}
        >
          {children}
        </p>
      )}

      <Link
        to={to}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          fontSize: 13,
          fontWeight: 700,
          color: dark ? "#c8a84b" : "#0e633d",
          marginTop: children ? 0 : "auto",
          paddingTop: children ? 0 : 20,
        }}
      >
        {ctaLabel}
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </Link>
    </HoverCard>
  );
}
