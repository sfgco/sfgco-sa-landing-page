import LegalPageLayout from '../components/LegalPageLayout';

const SECTIONS = [
  {
    heading: 'Acceptance of Terms',
    body: 'By accessing this website or using any SFGCO service, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site. These Terms apply to all visitors, users, and others who access or use the Service.',
  },
  {
    heading: 'Eligibility',
    body: [
      'You must be at least 18 years of age to access this website.',
      'Investment products described herein are available only to Qualified Investors as defined under applicable securities law in your jurisdiction.',
      'Access to certain sections of the platform requires successful completion of our KYC/AML verification process.',
      'SFGCO reserves the right to restrict access to residents of jurisdictions where the offer of our services would be prohibited.',
    ],
  },
  {
    heading: 'Not an Offer or Solicitation',
    body: 'Nothing on this website constitutes an offer to sell, or a solicitation of an offer to buy, any security or investment product in any jurisdiction where such an offer or solicitation would be unlawful. All information is provided for general informational purposes only. Prospective investors must review the relevant offering documents, including the Private Placement Memorandum (PPM) and Subscription Agreement, before making any investment decision.',
  },
  {
    heading: 'Intellectual Property',
    body: 'All content on this website — including text, graphics, logos, icons, images, data compilations, and software — is the property of SFGCO Investments Ltd. or its content suppliers and is protected by applicable intellectual property laws. You may not reproduce, distribute, modify, create derivative works, publicly display, or commercially exploit any content without prior written consent from SFGCO.',
  },
  {
    heading: 'User Obligations',
    body: [
      'Provide accurate, current, and complete information when creating an account or submitting enquiries.',
      'Maintain the confidentiality of your login credentials and notify us immediately of any unauthorised access.',
      'Not use the platform for any unlawful purpose or in violation of these Terms.',
      'Not attempt to gain unauthorised access to any portion of the platform or its related systems.',
      'Not transmit any malicious code, spam, or content that infringes on third-party rights.',
    ],
  },
  {
    heading: 'Disclaimer of Warranties',
    body: 'The service is provided on an "as is" and "as available" basis without warranties of any kind, either express or implied. SFGCO does not warrant that the service will be uninterrupted, error-free, or free of viruses or other harmful components. Historical performance data presented on this website does not guarantee future results.',
  },
  {
    heading: 'Limitation of Liability',
    body: 'To the maximum extent permitted by applicable law, SFGCO, its directors, officers, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages — including lost profits, loss of data, or business interruption — arising from your use of the service, even if advised of the possibility of such damages.',
  },
  {
    heading: 'Third-Party Links',
    body: 'This website may contain links to third-party websites. These links are provided for convenience only. SFGCO has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party sites. We encourage you to review the terms and privacy policies of any site you visit.',
  },
  {
    heading: 'Modifications to Terms',
    body: 'SFGCO reserves the right to modify these Terms at any time. We will provide reasonable notice of material changes by updating the "Last updated" date at the top of this page. Your continued use of the service after such changes constitutes your acceptance of the new Terms.',
  },
  {
    heading: 'Governing Law & Dispute Resolution',
    body: 'These Terms shall be governed by and construed in accordance with the laws of the Kingdom of Saudi Arabia, without regard to its conflict of law provisions. Any disputes arising under these Terms shall first be subject to good-faith mediation. If unresolved, disputes shall be submitted to binding arbitration in Riyadh under the rules of the Saudi Center for Commercial Arbitration.',
  },
];

export default function TermsOfService() {
  return (
    <>
      <title>Terms of Service | SFGCO</title>
      <meta name="description" content="SFGCO Terms of Service — the rules governing your use of our website and investment platform." />
      <LegalPageLayout
        badge="Legal"
        title="Terms of Service"
        subtitle="The rules that govern your access to SFGCO's website and investment platform."
        lastUpdated="1 April 2025"
        sections={SECTIONS}
      />
    </>
  );
}
