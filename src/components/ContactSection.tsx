import { useState } from "react";
import { useTranslation } from "react-i18next";
import FadeIn from "./FadeIn";

const SOCIAL = [
  {
    key: "x",
    handle: "@sfgco_sa",
    href: "https://x.com/sfgco_sa",
    icon: (
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    ),
  },
  {
    key: "instagram",
    handle: "@sfgco_sa",
    href: "https://instagram.com/sfgco_sa",
    icon: (
      <path d="M12 2c2.7 0 3.06.01 4.12.06 1.06.05 1.79.22 2.43.47.66.26 1.22.6 1.77 1.16.55.55.9 1.11 1.16 1.77.25.64.42 1.37.47 2.43.05 1.06.06 1.42.06 4.12s-.01 3.06-.06 4.12c-.05 1.06-.22 1.79-.47 2.43-.26.66-.6 1.22-1.16 1.77-.55.55-1.11.9-1.77 1.16-.64.25-1.37.42-2.43.47-1.06.05-1.42.06-4.12.06s-3.06-.01-4.12-.06c-1.06-.05-1.79-.22-2.43-.47a4.92 4.92 0 01-1.77-1.16 4.92 4.92 0 01-1.16-1.77c-.25-.64-.42-1.37-.47-2.43C2.01 15.06 2 14.7 2 12s.01-3.06.06-4.12c.05-1.06.22-1.79.47-2.43.26-.66.6-1.22 1.16-1.77A4.92 4.92 0 015.46 2.5c.64-.25 1.37-.42 2.43-.47C8.94 2.01 9.3 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm0 8.2a3.2 3.2 0 110-6.4 3.2 3.2 0 010 6.4zm5.2-8.4a1.17 1.17 0 100-2.34 1.17 1.17 0 000 2.34z" />
    ),
  },
  {
    key: "tiktok",
    handle: "@sfgco_sa",
    href: "https://tiktok.com/@sfgco_sa",
    icon: (
      <path d="M16.6 5.82c-.86-.94-1.34-2.16-1.34-3.42h-3.14v13.36a2.6 2.6 0 11-2.6-2.6c.24 0 .48.03.7.1V9.9a5.74 5.74 0 00-.7-.04A5.76 5.76 0 108.7 21.6a5.76 5.76 0 005.76-5.76V9.06a8.44 8.44 0 004.94 1.58V7.5a5.2 5.2 0 01-2.8-1.68z" />
    ),
  },
];

/** Contact Us — form (6 fields exactly per source doc) + contact info + social. */
export default function ContactSection() {
  const { t } = useTranslation();
  const [form, setForm] = useState({
    name: "",
    org: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const fields: {
    key: keyof typeof form;
    label: string;
    type: string;
    area?: boolean;
  }[] = [
    { key: "name", label: t("contact.form.name"), type: "text" },
    { key: "org", label: t("contact.form.org"), type: "text" },
    { key: "email", label: t("contact.form.email"), type: "email" },
    { key: "phone", label: t("contact.form.phone"), type: "tel" },
    { key: "subject", label: t("contact.form.subject"), type: "text" },
    {
      key: "message",
      label: t("contact.form.message"),
      type: "text",
      area: true,
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `${t("contact.form.name")}: ${form.name}\n${t("contact.form.org")}: ${form.org}\n${t("contact.form.phone")}: ${form.phone}\n\n${form.message}`;
    window.location.href = `mailto:${t("contact.email")}?subject=${encodeURIComponent(
      form.subject || t("contact.formTitle"),
    )}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "13px 16px",
    borderRadius: 12,
    border: "1.5px solid #e0d4c0",
    background: "#fff",
    fontSize: 14,
    color: "#0a1f14",
    outline: "none",
    fontFamily: "inherit",
  };

  return (
    <section
      id="contact"
      style={{ background: "#0a1f14", padding: "120px 48px" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
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
              {t("contact.badge")}
            </div>
            <h2
              style={{
                fontFamily: "'cairo', serif",
                fontSize: 46,
                fontWeight: 800,
                color: "#fff",
              }}
            >
              {t("contact.title")}
            </h2>
          </div>
        </FadeIn>

        <div
          className="grid-2-cols"
          style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 56 }}
        >
          {/* Form */}
          <FadeIn>
            <form
              onSubmit={handleSubmit}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(239,230,216,0.12)",
                borderRadius: 24,
                padding: 40,
              }}
            >
              <h3
                style={{
                  fontFamily: "'cairo', serif",
                  fontSize: 22,
                  fontWeight: 800,
                  color: "#efe6d8",
                  marginBottom: 28,
                }}
              >
                {t("contact.formTitle")}
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 18,
                }}
              >
                {fields.map((f) => (
                  <div
                    key={f.key}
                    style={f.area ? { gridColumn: "1 / -1" } : undefined}
                  >
                    <label
                      htmlFor={f.key}
                      style={{
                        display: "block",
                        fontSize: 12.5,
                        color: "rgba(239,230,216,0.6)",
                        marginBottom: 8,
                        fontWeight: 600,
                      }}
                    >
                      {f.label}
                    </label>
                    {f.area ? (
                      <textarea
                        id={f.key}
                        rows={5}
                        value={form[f.key]}
                        onChange={(e) =>
                          setForm((s) => ({ ...s, [f.key]: e.target.value }))
                        }
                        style={{ ...inputStyle, resize: "vertical" }}
                        required
                      />
                    ) : (
                      <input
                        id={f.key}
                        type={f.type}
                        value={form[f.key]}
                        onChange={(e) =>
                          setForm((s) => ({ ...s, [f.key]: e.target.value }))
                        }
                        style={inputStyle}
                        required
                      />
                    )}
                  </div>
                ))}
              </div>

              <button
                type="submit"
                style={{
                  marginTop: 28,
                  width: "100%",
                  padding: "15px",
                  borderRadius: 14,
                  border: "none",
                  background: "#c8a84b",
                  color: "#0a1f14",
                  fontWeight: 800,
                  fontSize: 14,
                  cursor: "pointer",
                  fontFamily: "inherit",
                }}
              >
                {t("contact.form.submit")}
              </button>

              {submitted && (
                <p
                  style={{
                    marginTop: 16,
                    fontSize: 13.5,
                    color: "#2ea866",
                    fontWeight: 600,
                  }}
                >
                  {t("contact.form.success")}
                </p>
              )}
            </form>
          </FadeIn>

          {/* Info */}
          <FadeIn delay={120}>
            <div>
              <h3
                style={{
                  fontFamily: "'cairo', serif",
                  fontSize: 22,
                  fontWeight: 800,
                  color: "#efe6d8",
                  marginBottom: 28,
                }}
              >
                {t("contact.infoTitle")}
              </h3>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 22,
                  marginBottom: 36,
                }}
              >
                {[
                  {
                    label: t("contact.locationLabel"),
                    value: t("contact.location"),
                    href: undefined,
                  },
                  {
                    label: t("contact.phoneLabel"),
                    value: t("contact.phone"),
                    href: `tel:${t("contact.phone")}`,
                  },
                  {
                    label: t("contact.emailLabel"),
                    value: t("contact.email"),
                    href: `mailto:${t("contact.email")}`,
                  },
                ].map((item) => (
                  <div key={item.label}>
                    <div
                      style={{
                        fontSize: 11,
                        color: "rgba(239,230,216,0.45)",
                        letterSpacing: 1,
                        textTransform: "uppercase",
                        marginBottom: 6,
                      }}
                    >
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        style={{
                          color: "#efe6d8",
                          fontSize: 16,
                          fontWeight: 600,
                        }}
                        dir="ltr"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div
                        style={{
                          color: "#efe6d8",
                          fontSize: 16,
                          fontWeight: 600,
                        }}
                      >
                        {item.value}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div
                style={{
                  fontSize: 11,
                  color: "rgba(239,230,216,0.45)",
                  letterSpacing: 1,
                  textTransform: "uppercase",
                  marginBottom: 14,
                }}
              >
                {t("contact.socialLabel")}
              </div>
              <div style={{ display: "flex", gap: 12 }}>
                {SOCIAL.map((s) => (
                  <a
                    key={s.key}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={s.handle}
                    aria-label={s.handle}
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      background: "rgba(239,230,216,0.06)",
                      border: "1px solid rgba(239,230,216,0.12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="#efe6d8"
                    >
                      {s.icon}
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
