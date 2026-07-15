import { useTranslation } from "react-i18next";
import ContactSection from "../components/ContactSection";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <>
      <title>{`${t("contact.title")} | SFGCO`}</title>
      <meta name="description" content={t("contact.location")} />
      <link rel="canonical" href="https://sfgco.sa/contact" />
      <ContactSection />
    </>
  );
}
