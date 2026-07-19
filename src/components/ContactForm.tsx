import { useState } from "react";
import { useTranslation } from "react-i18next";
import Icon from "./Icon";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const CONTACT_EMAIL = "tech@sfgco.sa";

const FIELD_STYLE: React.CSSProperties = {
  width: "100%",
  padding: "13px 16px",
  borderRadius: 12,
  border: "1.5px solid #ede5d9",
  background: "#faf8f5",
  fontSize: 14,
  color: "#1a2e20",
  fontFamily: "inherit",
  outline: "none",
  transition: "border-color 0.2s ease",
};

/** Contact form — validates client-side, then opens a pre-filled mailto: link (no backend wired up yet). */
export default function ContactForm() {
  const { t } = useTranslation();
  const [form, setForm] = useState<FormState>({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [sent, setSent] = useState(false);

  const update = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors: FormErrors = {};
    if (!form.name.trim()) nextErrors.name = t("contact.form.nameError");
    if (!EMAIL_RE.test(form.email.trim())) nextErrors.email = t("contact.form.emailError");
    if (!form.message.trim()) nextErrors.message = t("contact.form.messageError");
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const subject = encodeURIComponent(form.subject.trim() || `Website inquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const fieldRow = (
    field: keyof FormState,
    label: string,
    placeholder: string,
    type: "text" | "email" = "text",
  ) => (
    <div>
      <label
        htmlFor={field}
        style={{ display: "block", fontSize: 12.5, fontWeight: 700, color: "#2d3d32", marginBottom: 7 }}
      >
        {label}
      </label>
      <input
        id={field}
        type={type}
        value={form[field]}
        onChange={update(field)}
        placeholder={placeholder}
        style={{
          ...FIELD_STYLE,
          borderColor: errors[field as keyof FormErrors] ? "#c0503f" : "#ede5d9",
        }}
        onFocus={(e) => (e.currentTarget.style.borderColor = "#0e633d")}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = errors[field as keyof FormErrors] ? "#c0503f" : "#ede5d9";
        }}
      />
      {errors[field as keyof FormErrors] && (
        <span style={{ display: "block", fontSize: 12, color: "#c0503f", marginTop: 5 }}>
          {errors[field as keyof FormErrors]}
        </span>
      )}
    </div>
  );

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        background: "#fff",
        border: "1.5px solid #ede5d9",
        borderRadius: 24,
        padding: 40,
        display: "flex",
        flexDirection: "column",
        gap: 20,
        boxShadow: "0 24px 60px rgba(14,99,61,0.06)",
      }}
    >
      <div className="grid-2-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
        {fieldRow("name", t("contact.form.nameLabel"), t("contact.form.namePlaceholder"))}
        {fieldRow("email", t("contact.form.emailLabel"), t("contact.form.emailPlaceholder"), "email")}
      </div>
      {fieldRow("subject", t("contact.form.subjectLabel"), t("contact.form.subjectPlaceholder"))}
      <div>
        <label
          htmlFor="message"
          style={{ display: "block", fontSize: 12.5, fontWeight: 700, color: "#2d3d32", marginBottom: 7 }}
        >
          {t("contact.form.messageLabel")}
        </label>
        <textarea
          id="message"
          rows={5}
          value={form.message}
          onChange={update("message")}
          placeholder={t("contact.form.messagePlaceholder")}
          style={{ ...FIELD_STYLE, resize: "vertical", borderColor: errors.message ? "#c0503f" : "#ede5d9" }}
          onFocus={(e) => (e.currentTarget.style.borderColor = "#0e633d")}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = errors.message ? "#c0503f" : "#ede5d9";
          }}
        />
        {errors.message && (
          <span style={{ display: "block", fontSize: 12, color: "#c0503f", marginTop: 5 }}>
            {errors.message}
          </span>
        )}
      </div>

      <button
        type="submit"
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
          background: "#c8a84b",
          color: "#0a1f14",
          padding: "15px 30px",
          borderRadius: 50,
          border: "none",
          fontWeight: 800,
          fontSize: 14,
          cursor: "pointer",
          boxShadow: "0 8px 28px rgba(200,168,75,0.35)",
        }}
      >
        {t("contact.form.submitBtn")}
        <Icon name="arrow" size={16} strokeWidth={2.5} />
      </button>

      {sent && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            fontSize: 13,
            color: "#0e633d",
            fontWeight: 600,
          }}
        >
          <Icon name="check" size={14} strokeWidth={2.4} />
          {t("contact.form.successMsg")}
        </div>
      )}
    </form>
  );
}
