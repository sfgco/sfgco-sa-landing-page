import { useTranslation } from "react-i18next";
import SectorsSection from "../components/SectorsSection";

export default function InvestmentSectors() {
  const { t } = useTranslation();

  return (
    <>
      <title>{`${t("sectors.title")} | SFGCO`}</title>
      <meta name="description" content={t("sectors.items.renewable.desc")} />
      <link rel="canonical" href="https://sfgco.sa/investment-sectors" />
      <SectorsSection />
    </>
  );
}
