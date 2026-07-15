import { useTranslation } from "react-i18next";
import ServicesSection from "../components/ServicesSection";

export default function Services() {
  const { t } = useTranslation();

  return (
    <>
      <title>{`${t("services.title")} | SFGCO`}</title>
      <meta name="description" content={t("services.items.direct.desc")} />
      <link rel="canonical" href="https://sfgco.sa/services" />
      <ServicesSection />
    </>
  );
}
