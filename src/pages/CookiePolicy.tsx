import LegalPageLayout from '../components/LegalPageLayout';

const SECTIONS = [
  {
    heading: 'What Are Cookies',
    body: 'Cookies are small text files placed on your device by a website when you visit it. They are widely used to make websites work, improve efficiency, and provide information to site owners. Cookies cannot run programs or deliver viruses to your device; they are unique to your browser and can only be read by the server that placed them.',
  },
  {
    heading: 'Cookies We Use',
    body: [
      'Strictly Necessary — essential for the website to function. They enable core features such as security, network management, and page navigation. These cannot be disabled.',
      'Performance & Analytics — collect anonymous information about how visitors use our site (pages visited, time on page, errors). We use this data solely to improve the website.',
      'Functionality — remember your preferences such as language selection (EN/AR) and region, so you do not have to reset them on each visit.',
      'Targeting & Marketing — used to deliver relevant content and track the effectiveness of our campaigns. These are only set with your explicit consent.',
    ],
  },
  {
    heading: 'Specific Cookies in Use',
    body: [
      'sfgco_lang (session) — stores your language preference (en/ar). Expires at end of browser session.',
      '_ga, _gid (analytics, 2 years / 24 hours) — Google Analytics visitor identifier. Anonymised; IP addresses are truncated.',
      '_gat_UA (analytics, 1 minute) — throttles the request rate to Google Analytics.',
      'sfgco_consent (365 days) — records your cookie consent choices so the banner does not reappear.',
      'sfgco_session (session) — maintains your authenticated session on the investor portal. Cleared when you log out.',
    ],
  },
  {
    heading: 'Third-Party Cookies',
    body: 'Some cookies are placed by third-party services that appear on our pages. We use Google Analytics for website analytics. These providers have their own privacy policies and may use the data they collect for their own purposes. We do not control third-party cookies and recommend reviewing the respective provider policies.',
  },
  {
    heading: 'Your Consent',
    body: 'When you first visit our website, a cookie consent banner is displayed. Strictly necessary cookies are active by default. All other categories require your explicit consent before being set. You can change your preferences at any time by clicking "Cookie Settings" in the footer.',
  },
  {
    heading: 'How to Manage & Opt Out',
    body: [
      'Browser settings — most browsers allow you to refuse or delete cookies via their settings menu. Consult your browser\'s help documentation for instructions.',
      'Google Analytics opt-out — install the Google Analytics Opt-out Browser Add-on available at tools.google.com/dlpage/gaoptout.',
      'Cookie Settings panel — use the "Cookie Settings" link in our footer to update your preferences at any time without affecting strictly necessary cookies.',
      'Note: disabling certain cookies may reduce website functionality and your experience.',
    ],
  },
  {
    heading: 'Cookie Retention',
    body: 'Session cookies are erased when you close your browser. Persistent cookies remain on your device for the period stated in their configuration (see Section 3). You can clear persistent cookies at any time through your browser settings.',
  },
  {
    heading: 'Changes to This Policy',
    body: 'We may update this Cookie Policy from time to time to reflect changes in technology, regulation, or our data practices. The "Last updated" date at the top of this page will be revised accordingly. We encourage you to check back periodically.',
  },
  {
    heading: 'Contact Us',
    body: 'If you have any questions about our use of cookies, please contact our Data Protection Officer at privacy@sfgco.com or write to us at SFGCO Investments Ltd., King Fahd Road, Riyadh 12214, Kingdom of Saudi Arabia.',
  },
];

export default function CookiePolicy() {
  return (
    <>
      <title>Cookie Policy | SFGCO</title>
      <meta name="description" content="Learn how SFGCO uses cookies, what data they collect, and how to manage your preferences." />
      <LegalPageLayout
        badge="Legal"
        title="Cookie Policy"
        subtitle="What cookies we use, why we use them, and how you can control them."
        lastUpdated="1 April 2025"
        sections={SECTIONS}
      />
    </>
  );
}
