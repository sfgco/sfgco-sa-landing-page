import { useTranslation } from "react-i18next";
import ValuesSection from "../components/ValuesSection";

export default function Values() {
  const { t } = useTranslation();

  return (
    <>
      <title>{`${t("values.title")} | SFGCO`}</title>
      <meta name="description" content={t("values.title")} />
      <link rel="canonical" href="https://sfgco.sa/values" />
      <ValuesSection />
    </>
  );
}
