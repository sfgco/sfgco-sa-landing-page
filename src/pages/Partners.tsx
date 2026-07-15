import { useTranslation } from "react-i18next";
import PartnersSection from "../components/PartnersSection";

export default function Partners() {
  const { t } = useTranslation();

  return (
    <>
      <title>{`${t("partners.title")} | SFGCO`}</title>
      <meta name="description" content={t("partners.title")} />
      <link rel="canonical" href="https://sfgco.sa/partners" />
      <PartnersSection />
    </>
  );
}
