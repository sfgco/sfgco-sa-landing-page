import { useTranslation } from "react-i18next";
import WhyUsSection from "../components/WhyUsSection";

export default function WhyUs() {
  const { t } = useTranslation();

  return (
    <>
      <title>{`${t("whyUs.title")} | SFGCO`}</title>
      <meta name="description" content={t("whyUs.items.expertise.desc")} />
      <link rel="canonical" href="https://sfgco.sa/why-us" />
      <WhyUsSection />
    </>
  );
}
