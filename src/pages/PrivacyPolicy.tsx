import LegalPageLayout from "../components/LegalPageLayout";

const SECTIONS = [
  {
    heading: "Information We Collect",
    body: [
      "Identity data: full name, title, and employer provided when you register or enquire.",
      "Contact data: email address, telephone number, and postal address.",
      "Project data: business requirements, technical scope, and any materials shared when you engage us for a project.",
      "Usage data: IP address, browser type, pages visited, and session duration via analytics cookies.",
      "Communications data: records of emails, calls, and meeting notes with our team.",
    ],
  },
  {
    heading: "How We Use Your Information",
    body: [
      "To respond to your enquiries and manage your client account.",
      "To scope, deliver, and support the software, cloud, or product engagements you request.",
      "To send product updates and — where you have opted in — marketing communications.",
      "To improve our website and services through aggregated, anonymised analytics.",
      "To detect and prevent fraud, abuse, or other prohibited activities.",
    ],
  },
  {
    heading: "Legal Basis for Processing",
    body: "We process your personal data under the following legal bases: (a) performance of a contract — where processing is necessary to deliver the services you have requested; (b) legal obligation — where processing is required by applicable law; (c) legitimate interests — to improve our services and protect against fraud; and (d) consent — for optional marketing communications, which you may withdraw at any time.",
  },
  {
    heading: "Data Sharing & Third Parties",
    body: [
      "Cloud infrastructure and hosting providers that host our applications and your project data.",
      "External auditors, legal advisors, and subcontracted engineers bound by confidentiality obligations.",
      "Regulatory authorities where disclosure is required by law.",
      "Analytics and communication tool providers operating under data processing agreements.",
      "We never sell, rent, or trade your personal data to third parties for marketing purposes.",
    ],
  },
  {
    heading: "International Transfers",
    body: "SFGCO Tech works with clients and infrastructure providers in multiple jurisdictions. Where we transfer personal data outside your home jurisdiction, we use Standard Contractual Clauses approved by the relevant supervisory authority, or rely on adequacy decisions, to ensure an equivalent level of protection.",
  },
  {
    heading: "Data Retention",
    body: "We retain client and project records for as long as needed to deliver our services and meet any applicable legal obligations, and typically no longer than seven years after a relationship ends. Usage and analytics data is retained for up to 26 months. You may request deletion of data that is no longer required for a legal purpose.",
  },
  {
    heading: "Your Rights",
    body: [
      "Right of access — obtain a copy of the personal data we hold about you.",
      "Right to rectification — correct inaccurate or incomplete data.",
      "Right to erasure — request deletion where no legal basis for retention exists.",
      "Right to restriction — limit processing while a complaint is being reviewed.",
      "Right to data portability — receive your data in a structured, machine-readable format.",
      "Right to object — opt out of processing based on legitimate interests or for direct marketing.",
      "Right to withdraw consent — at any time, without affecting the lawfulness of prior processing.",
    ],
  },
  {
    heading: "Security",
    body: "We implement industry-standard safeguards including AES-256 encryption at rest, TLS 1.3 in transit, multi-factor authentication, and role-based access controls. In the event of a data breach that poses a risk to your rights, we will notify the relevant supervisory authority within 72 hours and affected individuals without undue delay.",
  },
  {
    heading: "Cookies",
    body: "We use essential, analytics, and preference cookies. Please see our Cookie Policy for full details and opt-out instructions.",
  },
  {
    heading: "Contact & Complaints",
    body: "To exercise any of your rights or raise a concern, contact our Data Protection contact at privacy@sfgco.sa. If you are unsatisfied with our response, you have the right to lodge a complaint with the supervisory authority in your jurisdiction.",
  },
];

export default function PrivacyPolicy() {
  return (
    <>
      <title>Privacy Policy | SFGCO Tech</title>
      <meta
        name="description"
        content="How SFGCO Tech collects, uses, and protects your personal data in compliance with global privacy regulations."
      />
      <LegalPageLayout
        badge="Legal"
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your personal information."
        lastUpdated="1 April 2026"
        sections={SECTIONS}
      />
    </>
  );
}
