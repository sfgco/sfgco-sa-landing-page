import { useTranslation } from "react-i18next";
import VisionSection from "../components/VisionSection";

export default function Vision() {
  const { t } = useTranslation();

  return (
    <>
      <title>{`${t("visionMission.visionTitle")} | SFGCO`}</title>
      <meta name="description" content={t("visionMission.visionBody")} />
      <link rel="canonical" href="https://sfgco.sa/vision" />
      <VisionSection />
    </>
  );
}
