import { useTranslation } from "react-i18next";
import StrategicGoalsSection from "../components/StrategicGoalsSection";

export default function StrategicGoals() {
  const { t } = useTranslation();
  const goals = t("goals.items", { returnObjects: true }) as string[];

  return (
    <>
      <title>{`${t("goals.title")} | SFGCO`}</title>
      <meta name="description" content={goals.join(" ")} />
      <link rel="canonical" href="https://sfgco.sa/strategic-goals" />
      <StrategicGoalsSection />
    </>
  );
}
