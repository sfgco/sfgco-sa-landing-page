import { useTranslation } from 'react-i18next';

const PARTNERS = [
  'World Bank Group', 'BlackRock ESG', 'UN Environment',
  'Goldman Sachs', 'HSBC Green', 'IFC Capital', 'Vanguard ESG',
];

/** Scrolling strip of trusted partner / institutional investor names. */
export default function TrustStrip() {
  const { t } = useTranslation();

  return (
    <section style={{ background:'#fff', padding:'36px 48px', borderBottom:'1px solid #f0ebe3' }}>
      <div style={{ maxWidth:1200, margin:'0 auto' }}>
        <p style={{ textAlign:'center', color:'#b8c4bc', fontSize:10, letterSpacing:2.5, textTransform:'uppercase', fontWeight:700, marginBottom:28 }}>
          {t('trust.label')}
        </p>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', gap:24, flexWrap:'wrap' }}>
          {PARTNERS.map(name => (
            <div key={name} style={{ fontSize:13, fontWeight:800, color:'#cac2b7', letterSpacing:1.5, textTransform:'uppercase', fontFamily:"'Inter', sans-serif" }}>
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
