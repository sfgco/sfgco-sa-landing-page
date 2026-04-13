import { useTranslation } from 'react-i18next';
import FadeIn from './FadeIn';
import HoverCard from './HoverCard';

const SERVICES = [
  { icon:'☀️', title:'Renewable Energy', desc:'Curated investments in utility-scale solar, wind, and hydropower projects delivering stable, long-term yields with strong ESG credentials.', tags:['Solar PV','Wind','Hydro','Storage'], accent:'#c8a84b' },
  { icon:'🏙️', title:'Green Infrastructure', desc:'Financing sustainable buildings, smart cities, green transport corridors, and climate-resilient urban systems that reshape how we live.', tags:['Smart Cities','LEED','Transit','Water'], accent:'#0e633d' },
  { icon:'📊', title:'ESG Advisory', desc:'Strategic guidance on ESG integration, materiality assessments, regulatory compliance, and high-quality sustainability reporting.', tags:['TCFD','GRI','SASB','SFDR'], accent:'#1a8050' },
  { icon:'🌱', title:'Carbon Markets', desc:'Access to verified carbon offset projects, REDD+ credits, voluntary carbon markets, and net-zero transition strategy for corporates.', tags:['Offsets','REDD+','Article 6','VCM'], accent:'#2ea866' },
  { icon:'💼', title:'Impact Investment Funds', desc:'Professionally managed portfolios targeting measurable environmental outcomes alongside competitive, risk-adjusted financial returns.', tags:['Equity','Bonds','Blended','VC'], accent:'#0a4a2e' },
  { icon:'♻️', title:'Circular Economy', desc:'Investment in waste valorization, bio-based materials, sustainable supply chains, and the transition from linear to circular business models.', tags:['Waste-to-Value','Bioeconomy','Recycling'], accent:'#c8a84b' },
];

/** Six-card grid of green investment services. */
export default function ServicesSection() {
  const { t } = useTranslation();

  return (
    <section id="services" style={{ background:'#fff', padding:'120px 48px' }}>
      <div style={{ maxWidth:1200, margin:'0 auto' }}>
        <FadeIn>
          <div style={{ textAlign:'center', marginBottom:72 }}>
            <div style={{ color:'#0e633d', fontSize:11, fontWeight:700, letterSpacing:2.5, textTransform:'uppercase', marginBottom:18 }}>{t('services.badge')}</div>
            <h2 style={{ fontSize:50, fontWeight:800, color:'#0a1f14', marginBottom:18 }}>{t('services.title')}</h2>
            <p style={{ color:'#5a7062', fontSize:17, lineHeight:1.75, maxWidth:580, margin:'0 auto' }}>{t('services.subtitle')}</p>
          </div>
        </FadeIn>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:24 }}>
          {SERVICES.map((s, idx) => (
            <FadeIn key={s.title} delay={idx * 80}>
              <HoverCard style={{ background:'#faf8f5', border:'1.5px solid #ede5d9', borderRadius:22, padding:32, height:'100%', position:'relative', overflow:'hidden', cursor:'pointer' }}>
                <div style={{ position:'absolute', top:0, left:0, width:4, height:'100%', background:s.accent, borderRadius:'4px 0 0 4px' }} />
                <div style={{ fontSize:40, marginBottom:18 }}>{s.icon}</div>
                <h3 style={{ fontFamily:"'Playfair Display', serif", fontSize:20, fontWeight:800, color:'#0a1f14', marginBottom:12 }}>{s.title}</h3>
                <p style={{ fontSize:14, color:'#6b7c6e', lineHeight:1.75, marginBottom:22 }}>{s.desc}</p>
                <div style={{ display:'flex', gap:7, flexWrap:'wrap' }}>
                  {s.tags.map(tag => (
                    <span key={tag} style={{ background:`${s.accent}14`, color:s.accent, padding:'4px 12px', borderRadius:50, fontSize:10, fontWeight:700, letterSpacing:0.5 }}>{tag}</span>
                  ))}
                </div>
              </HoverCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
