import { useTranslation } from "react-i18next";
import AboutSection from "../components/AboutSection";

export default function About() {
  const { t } = useTranslation();

  return (
    <>
      <title>{`${t("about.title")} | SFGCO`}</title>
      <meta name="description" content={t("about.body")} />
      <link rel="canonical" href="https://sfgco.sa/about" />
      <AboutSection />
    </>
  );
}
