import LegalPageLayout from "../components/LegalPageLayout";

const SECTIONS = [
  {
    heading: "Important Notice",
    body: "This Risk Disclosure Statement is provided to help you understand the key risks associated with investing in funds and products managed or advised by SFGCO Investments Ltd. It does not disclose every risk inherent in investing. Before making any investment decision, you should carefully read all offering documents and, where appropriate, seek independent financial, legal, and tax advice.",
  },
  {
    heading: "Capital at Risk",
    body: "All investments carry the risk of loss. The value of investments can go down as well as up, and you may not recover the full amount invested. Past performance is not a reliable indicator of future results. Target returns and IRRs stated in our materials are projections only and are not guaranteed.",
  },
  {
    heading: "Illiquidity Risk",
    body: [
      "Many of our funds invest in private markets where there is no public market for the interests.",
      "Redemptions and transfers may be restricted or subject to lock-up periods of 5–12 years.",
      "Secondary market transactions, where available, may occur at a significant discount to NAV.",
      "Investors should only commit capital they can afford to have illiquid for the full fund term.",
    ],
  },
  {
    heading: "Market & Valuation Risk",
    body: [
      "Private asset valuations are estimated periodically and may not reflect realisable value.",
      "Green energy asset values are sensitive to commodity prices, power purchase agreement terms, and regulatory changes.",
      "Public equity or bond components of portfolios are subject to market volatility.",
      "Discount rates applied to valuations may change with interest rate movements.",
    ],
  },
  {
    heading: "Climate & Regulatory Risk",
    body: "Investments in renewable energy, carbon markets, and sustainability-linked instruments are subject to evolving environmental regulations, subsidy regimes, and carbon pricing mechanisms. Changes in government policy — including tariff reductions, permit revocations, or ESG reporting requirements — could materially affect the performance of our portfolios.",
  },
  {
    heading: "Currency Risk",
    body: "Our funds invest across 42 countries, many of which have currencies that may fluctuate against your base currency. Currency hedging strategies may be employed but cannot eliminate exchange rate risk entirely. Hedging itself carries costs and counterparty risk.",
  },
  {
    heading: "Counterparty & Credit Risk",
    body: [
      "We are exposed to the risk that counterparties — including corporate borrowers, offtakers under PPAs, or fund managers — may default on their obligations.",
      "Green bonds and sustainability-linked bonds carry credit risk commensurate with the issuer rating.",
      "Concentration risk may arise where a significant portion of a fund is exposed to a single project, sector, or geography.",
    ],
  },
  {
    heading: "Technology & Cyber Risk",
    body: "Investments in AI, deep tech, and digital infrastructure are subject to rapid technological change, obsolescence, and cybersecurity threats. Early-stage technology ventures carry a high probability of failure; investors in venture-stage products should expect that some portfolio companies will not return capital.",
  },
  {
    heading: "Political & Geopolitical Risk",
    body: "Investments in emerging markets or politically sensitive regions may be affected by expropriation, nationalisation, sanctions, civil unrest, or abrupt changes in foreign investment rules. SFGCO employs political risk insurance and diversification to mitigate but not eliminate these risks.",
  },
  {
    heading: "Tax Risk",
    body: "The tax treatment of investments may change during the life of a fund and will vary depending on your individual circumstances and jurisdiction. SFGCO does not provide tax advice. You should consult a qualified tax advisor to understand how investments may affect your tax position.",
  },
  {
    heading: "Qualified Investors Only",
    body: "SFGCO products are intended solely for qualified, sophisticated, or professional investors as defined under the applicable regulatory framework in your jurisdiction. They are not suitable for retail investors who cannot bear the loss of their entire investment or who require regular income or liquidity from their investments.",
  },
];

export default function RiskDisclosure() {
  return (
    <>
      <title>Risk Disclosure | SFGCO</title>
      <meta
        name="description"
        content="Understand the key risks associated with investing in SFGCO funds and sustainable investment products."
      />
      <LegalPageLayout
        badge="Legal"
        title="Risk Disclosure"
        subtitle="A transparent account of the material risks you should consider before investing with SFGCO."
        lastUpdated="1 April 2025"
        sections={SECTIONS}
      />
    </>
  );
}
