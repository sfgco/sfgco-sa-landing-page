import { useTranslation } from "react-i18next";
import MissionSection from "../components/MissionSection";

export default function Mission() {
  const { t } = useTranslation();

  return (
    <>
      <title>{`${t("visionMission.missionTitle")} | SFGCO`}</title>
      <meta name="description" content={t("visionMission.missionBody")} />
      <link rel="canonical" href="https://sfgco.sa/mission" />
      <MissionSection />
    </>
  );
}
