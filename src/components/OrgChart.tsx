import { useTranslation } from "react-i18next";

function Box({
  label,
  variant = "default",
}: Readonly<{ label: string; variant?: "root" | "department" | "section" | "default" }>) {
  const styles: Record<string, React.CSSProperties> = {
    root: { background: "#0e633d", color: "#fff", fontWeight: 800 },
    department: { background: "#fff", color: "#0a1f14", border: "1.5px solid #cfe0d4", fontWeight: 700 },
    section: { background: "#f4f8f5", color: "#3d5045", border: "1px solid #dce8de", fontWeight: 600 },
    default: { background: "#fff", color: "#0a1f14", border: "1.5px solid #cfe0d4", fontWeight: 700 },
  };

  return (
    <div
      style={{
        padding: "10px 16px",
        borderRadius: 12,
        fontSize: 12.5,
        textAlign: "center",
        lineHeight: 1.5,
        boxShadow: "0 4px 14px rgba(14,99,61,0.08)",
        ...styles[variant],
      }}
    >
      {label}
    </div>
  );
}

/** Visual organizational chart reflecting the company's real reporting structure. */
export default function OrgChart() {
  const { t } = useTranslation();

  const departments = [
    { key: "marketing", sections: [] },
    { key: "hr", sections: [] },
    { key: "grc", sections: ["compliance", "legal"] },
    { key: "investment", sections: ["assets", "bizdev"] },
    { key: "operations", sections: [] },
    { key: "finance", sections: [] },
  ];

  return (
    <div style={{ overflowX: "auto", padding: "8px 0" }}>
      <div style={{ minWidth: 760, display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
        <Box label={t("about.org.shareholders")} variant="root" />
        <div style={{ width: 2, height: 20, background: "#cfe0d4" }} />
        <Box label={t("about.org.ceo")} variant="root" />
        <div style={{ width: "100%", height: 20, position: "relative" }}>
          <div style={{ position: "absolute", top: 0, left: "8.3%", right: "8.3%", height: 2, background: "#cfe0d4" }} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 14, width: "100%" }}>
          {departments.map((d) => (
            <div key={d.key} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
              <div style={{ width: 2, height: 12, background: "#cfe0d4" }} />
              <Box label={t(`about.org.${d.key}`)} variant="department" />
              {d.sections.length > 0 && (
                <>
                  <div style={{ width: 2, height: 12, background: "#cfe0d4" }} />
                  <div style={{ display: "flex", flexDirection: "column", gap: 8, width: "100%" }}>
                    {d.sections.map((s) => (
                      <Box key={s} label={t(`about.org.${s}`)} variant="section" />
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
