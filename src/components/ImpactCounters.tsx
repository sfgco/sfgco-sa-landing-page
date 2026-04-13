import { useTranslation } from 'react-i18next';
import FadeIn from './FadeIn';
import Counter from './Counter';

const PRIMARY_STATS = [
  { end:2400, prefix:'$', suffix:'M+', label:'Assets Under Management', sub:'Across all green portfolios', color:'#c8a84b' },
  { end:150, prefix:'', suffix:'+', label:'Portfolio Companies', sub:'Active investments globally', color:'#2ea866' },
  { end:18, prefix:'', suffix:'M+', label:'Tonnes CO₂ Offset', sub:'Verified & certified annually', color:'#c8a84b' },
  { end:42, prefix:'', suffix:'', label:'Countries', sub:'Active project presence', color:'#2ea866' },
];

const SECONDARY_STATS = [
  { val:'500MW+', label:'Clean Energy Deployed' },
  { val:'2M ha', label:'Land Restored' },
  { val:'400K', label:'Homes Powered' },
  { val:'15yr', label:'Track Record' },
  { val:'97%', label:'Client Retention' },
];

/** Dark animated counter section highlighting global impact metrics. */
export default function ImpactCounters() {
  const { t } = useTranslation();

  return (
    <section
      id="impact"
      style={{ background:'linear-gradient(150deg, #060f08 0%, #0a2a16 30%, #0e633d 70%, #0a4a2e 100%)', padding:'108px 48px', position:'relative', overflow:'hidden' }}
    >
      <div style={{ position:'absolute', top:-80, right:-80, width:400, height:400, borderRadius:'50%', background:'radial-gradient(circle, rgba(200,168,75,0.08), transparent 65%)', pointerEvents:'none' }} />
      <div style={{ position:'absolute', bottom:-60, left:0, width:350, height:350, borderRadius:'50%', background:'radial-gradient(circle, rgba(239,230,216,0.04), transparent 65%)', pointerEvents:'none' }} />

      <div style={{ maxWidth:1200, margin:'0 auto', position:'relative' }}>
        <FadeIn>
          <div style={{ textAlign:'center', marginBottom:72 }}>
            <div style={{ color:'#c8a84b', fontSize:11, fontWeight:700, letterSpacing:2.5, textTransform:'uppercase', marginBottom:18 }}>{t('impact.badge')}</div>
            <h2 style={{ fontFamily:"'Playfair Display', serif", fontSize:50, fontWeight:800, color:'#fff', marginBottom:16 }}>{t('impact.title')}</h2>
            <p style={{ color:'rgba(239,230,216,0.6)', fontSize:16, maxWidth:500, margin:'0 auto' }}>{t('impact.subtitle')}</p>
          </div>
        </FadeIn>

        {/* Primary counters */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:40, marginBottom:60 }}>
          {PRIMARY_STATS.map((s, idx) => (
            <FadeIn key={s.label} delay={idx * 100}>
              <div style={{ textAlign:'center', background:'rgba(255,255,255,0.04)', border:'1px solid rgba(239,230,216,0.07)', borderRadius:20, padding:'36px 24px' }}>
                <div style={{ fontFamily:"'Playfair Display', serif", fontSize:54, fontWeight:800, color:s.color, lineHeight:1 }}>
                  {s.prefix}<Counter end={s.end} suffix={s.suffix} />
                </div>
                <div style={{ fontSize:15, fontWeight:700, color:'#fff', marginTop:14 }}>{s.label}</div>
                <div style={{ fontSize:12, color:'rgba(239,230,216,0.5)', marginTop:6 }}>{s.sub}</div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Secondary stats */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(5, 1fr)', gap:20 }}>
          {SECONDARY_STATS.map(s => (
            <div key={s.label} style={{ textAlign:'center', padding:'20px 16px', borderRadius:14, background:'rgba(239,230,216,0.05)' }}>
              <div style={{ fontFamily:"'Playfair Display', serif", fontSize:26, fontWeight:800, color:'#fff' }}>{s.val}</div>
              <div style={{ fontSize:11, color:'rgba(239,230,216,0.5)', marginTop:6, letterSpacing:0.5 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
