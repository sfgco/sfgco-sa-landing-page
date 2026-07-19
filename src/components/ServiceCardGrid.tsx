import { useTranslation } from "react-i18next";
import FadeIn from "./FadeIn";
import ServiceCard from "./ServiceCard";
import BarPanel from "./illustrations/BarPanel";
import NetworkGraph from "./illustrations/NetworkGraph";
import DeviceMock from "./illustrations/DeviceMock";
import ShieldRadar from "./illustrations/ShieldRadar";
import GridPanel from "./illustrations/GridPanel";

const GREEN = "#0e633d";
const LIGHT = "#2ea866";
const GOLD = "#c8a84b";
const DEEP_GREEN = "#0a4a2e";

const SERVICE_KEYS = ["s1", "s2", "s3", "s4", "s5", "s6", "s7"] as const;

const ICONS: Record<(typeof SERVICE_KEYS)[number], React.ComponentProps<typeof ServiceCard>["icon"]> = {
  s1: "cloud",
  s2: "database",
  s3: "devices",
  s4: "brain",
  s5: "link",
  s6: "shield",
  s7: "grid",
};

const ACCENTS: Record<(typeof SERVICE_KEYS)[number], string> = {
  s1: GREEN,
  s2: LIGHT,
  s3: GOLD,
  s4: GOLD,
  s5: DEEP_GREEN,
  s6: GOLD,
  s7: DEEP_GREEN,
};

const ART: Record<(typeof SERVICE_KEYS)[number], React.ReactNode> = {
  s1: (
    <BarPanel
      accent={GREEN}
      icon="cloud"
      eyebrow="Cloud Console"
      bars={[
        { label: "Cloud Architecture", pct: 92 },
        { label: "High Availability", pct: 88 },
        { label: "CI/CD Automation", pct: 95 },
        { label: "Cost Optimization", pct: 84 },
      ]}
      badge={{ value: "24/7", label: "Monitoring" }}
    />
  ),
  s2: (
    <BarPanel
      accent={LIGHT}
      icon="database"
      eyebrow="Data Platform"
      bars={[
        { label: "Data Warehousing", pct: 90 },
        { label: "ETL Pipelines", pct: 93 },
        { label: "BI & Reporting", pct: 87 },
        { label: "Data Governance", pct: 82 },
      ]}
      badge={{ value: "ETL", label: "Automated" }}
    />
  ),
  s3: <DeviceMock accent={GOLD} icon="devices" eyebrow="Product Preview" badge={{ value: "PWA", label: "Ready" }} />,
  s4: (
    <NetworkGraph
      accent={GOLD}
      icon="brain"
      eyebrow="AI Orchestration"
      nodes={["LLM", "RAG", "Agents", "Vision", "Speech"]}
      badge={{ value: "RAG", label: "Enabled" }}
    />
  ),
  s5: (
    <NetworkGraph
      accent={DEEP_GREEN}
      icon="link"
      eyebrow="Integration Map"
      nodes={["ERP", "CRM", "Payments", "Gov APIs", "IoT"]}
      badge={{ value: "API", label: "Connected" }}
    />
  ),
  s6: (
    <ShieldRadar
      accent={GOLD}
      icon="shield"
      eyebrow="Security Operations"
      stats={[
        { label: "Threat Detection", value: "Real-time" },
        { label: "Access Control", value: "IAM" },
        { label: "Compliance", value: "Continuous" },
      ]}
      badge={{ value: "SOC", label: "Integrated" }}
    />
  ),
  s7: (
    <GridPanel
      accent={DEEP_GREEN}
      icon="grid"
      eyebrow="ERP Modules"
      modules={[
        { label: "HR", icon: "users" },
        { label: "Finance", icon: "bank" },
        { label: "Procurement", icon: "bag" },
        { label: "Inventory", icon: "grid" },
        { label: "Manufacturing", icon: "factory" },
        { label: "CRM", icon: "handshake" },
      ]}
      badge={{ value: "ERP", label: "Unified" }}
    />
  ),
};

interface ServiceCardGridProps {
  expandable?: boolean;
}

/** Grid of the 7 service cards — plain "Learn More" links on Home, self-expanding detail + illustration on the Services page. */
export default function ServiceCardGrid({ expandable = false }: Readonly<ServiceCardGridProps>) {
  const { t } = useTranslation();

  return (
    <div className="grid-3-col" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
      {SERVICE_KEYS.map((key, idx) => {
        const items = t(`services.${key}.items`, { returnObjects: true }) as string[];
        return (
          <FadeIn key={key} delay={idx * 60}>
            <ServiceCard
              index={idx}
              icon={ICONS[key]}
              accent={ACCENTS[key]}
              title={t(`services.${key}.title`)}
              desc={t(`services.${key}.desc`)}
              items={items}
              art={ART[key]}
              expandable={expandable}
            />
          </FadeIn>
        );
      })}
    </div>
  );
}
