export interface TechItem {
  name: string;
  mark: string;
  color: string;
}

export interface TechCategory {
  key: string;
  items: TechItem[];
}

const GREEN = "#0e633d";
const GOLD = "#c8a84b";
const DEEP = "#0b2d1e";
const LIGHT = "#2ea866";

/** Curated technology list grouped by category — powers both the Trusted Tech marquee and the Technologies page grid. */
export const TECH_CATEGORIES: TechCategory[] = [
  {
    key: "cloudInfra",
    items: [
      { name: "AWS", mark: "AWS", color: GREEN },
      { name: "Azure", mark: "Az", color: GREEN },
      { name: "Google Cloud", mark: "GCP", color: GREEN },
      { name: "Docker", mark: "Dkr", color: LIGHT },
      { name: "Kubernetes", mark: "K8s", color: LIGHT },
      { name: "Terraform", mark: "Tf", color: LIGHT },
    ],
  },
  {
    key: "appStack",
    items: [
      { name: "Node.js", mark: "Node", color: GREEN },
      { name: "React", mark: "Rct", color: GREEN },
      { name: "Python", mark: "Py", color: DEEP },
      { name: "PostgreSQL", mark: "PG", color: LIGHT },
      { name: "MongoDB", mark: "Mgo", color: LIGHT },
    ],
  },
  {
    key: "aiAutomation",
    items: [
      { name: "OpenAI", mark: "AI", color: GOLD },
      { name: "LangChain", mark: "LC", color: GOLD },
    ],
  },
  {
    key: "enterprise",
    items: [
      { name: "SAP", mark: "SAP", color: DEEP },
      { name: "Odoo", mark: "Odo", color: DEEP },
      { name: "ERPNext", mark: "ERPN", color: DEEP },
    ],
  },
];

export const TECH_FLAT: TechItem[] = TECH_CATEGORIES.flatMap((c) => c.items);
