import { useTranslation } from "react-i18next";
import ProjectsSection from "../components/ProjectsSection";

export default function Projects() {
  const { t } = useTranslation();

  return (
    <>
      <title>{`${t("projects.title")} | SFGCO`}</title>
      <meta name="description" content={t("projects.body")} />
      <link rel="canonical" href="https://sfgco.sa/projects" />
      <ProjectsSection />
    </>
  );
}
