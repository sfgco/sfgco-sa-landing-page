import { useTranslation } from "react-i18next";
import OpportunitiesSection from "../components/OpportunitiesSection";

export default function Opportunities() {
  const { t } = useTranslation();

  return (
    <>
      <title>{`${t("opportunities.title")} | SFGCO`}</title>
      <meta name="description" content={t("opportunities.body")} />
      <link rel="canonical" href="https://sfgco.sa/opportunities" />
      <OpportunitiesSection />
    </>
  );
}
