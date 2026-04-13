import { useTranslation } from 'react-i18next';
import FadeIn from './FadeIn';
import HoverCard from './HoverCard';

const REASONS = [
  { num:'01', title:'Proven 15-Year Track Record', desc:'Consistent above-benchmark returns with industry-leading sustainability outcomes through multiple market cycles.' },
  { num:'02', title:'Deep Domain Expertise', desc:'80+ specialists spanning renewable energy, climate science, environmental law, carbon markets, and institutional finance.' },
  { num:'03', title:'Verified, Audited Impact', desc:'All investments independently verified against science-based standards with real-time client dashboards.' },
  { num:'04', title:'Exclusive Global Deal Flow', desc:'Partnerships with governments, multilateral development banks, and corporations across 42 countries.' },
];

const CARDS = [
  { icon:'🏆', title:'Award Winning', sub:'Best Green Fund 2024', bg:'#0e633d', light:true },
  { icon:'🔒', title:'Regulated & Secure', sub:'FSCA & FSB Licensed', bg:'#efe6d8', light:false },
  { icon:'📈', title:'Consistent Returns', sub:'+18.3% avg. 5yr IRR', bg:'#efe6d8', light:false },
  { icon:'🌍', title:'UN SDG Aligned', sub:'12 of 17 Global Goals', bg:'#0e633d', light:true },
  { icon:'⚡', title:'500MW+ Clean Energy', sub:'Deployed & operational', bg:'#c8a84b', light:false },
  { icon:'🤝', title:'Institutional Grade', sub:'Pension & endowment ready', bg:'#f5f1eb', light:false },
];

/** Two-column section: numbered reasons on the left, feature cards on the right. */
export default function WhySFGCO() {
  const { t } = useTranslation();

  return (
    <section style={{ background:'#fff', padding:'120px 48px' }}>
      <div style={{ maxWidth:1200, margin:'0 auto' }}>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:88, alignItems:'center' }}>
          <FadeIn>
            <div>
              <div style={{ color:'#0e633d', fontSize:11, fontWeight:700, letterSpacing:2.5, textTransform:'uppercase', marginBottom:18 }}>{t('whySFGCO.badge')}</div>
              <h2 style={{ fontSize:50, fontWeight:800, color:'#0a1f14', lineHeight:1.13, marginBottom:24 }}>
                {t('whySFGCO.title1')}<br />
                <span style={{ color:'#0e633d' }}>{t('whySFGCO.titleHighlight')}</span>
              </h2>
              <p style={{ fontSize:16, color:'#5a7062', lineHeight:1.85, marginBottom:44 }}>{t('whySFGCO.subtitle')}</p>

              {REASONS.map(item => (
                <div key={item.num} style={{ display:'flex', gap:20, marginBottom:28 }}>
                  <div style={{ fontFamily:"'Playfair Display', serif", fontSize:13, fontWeight:700, color:'#c8a84b', letterSpacing:1, minWidth:26, paddingTop:3 }}>{item.num}</div>
                  <div>
                    <h4 style={{ fontFamily:"'Playfair Display', serif", fontSize:17, fontWeight:700, color:'#0a1f14', marginBottom:6 }}>{item.title}</h4>
                    <p style={{ fontSize:14, color:'#6b7c6e', lineHeight:1.7 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={150}>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16 }}>
              {CARDS.map(card => (
                <HoverCard key={card.title} style={{ background:card.bg, borderRadius:20, padding:'28px 24px', cursor:'pointer' }}>
                  <div style={{ fontSize:34, marginBottom:14 }}>{card.icon}</div>
                  <div style={{ fontSize:14, fontWeight:700, color:card.light ? '#efe6d8' : '#0a1f14', marginBottom:5 }}>{card.title}</div>
                  <div style={{ fontSize:11, color:card.light ? 'rgba(239,230,216,0.65)' : '#9aaa9e' }}>{card.sub}</div>
                </HoverCard>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
