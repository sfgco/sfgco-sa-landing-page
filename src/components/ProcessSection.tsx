import { useTranslation } from 'react-i18next';
import FadeIn from './FadeIn';

const STEPS = [
  { step:'01', icon:'💬', title:'Discovery Call', desc:'We learn about your investment goals, timeline, risk appetite, and sustainability priorities.' },
  { step:'02', icon:'📋', title:'Custom Strategy', desc:'Our team crafts a bespoke green investment strategy tailored to your specific objectives.' },
  { step:'03', icon:'✅', title:'Due Diligence', desc:'Rigorous screening of all investments for financial, environmental, and social criteria.' },
  { step:'04', icon:'📊', title:'Ongoing Reporting', desc:'Real-time dashboards tracking both financial returns and verified sustainability impact.' },
];

/** Four-step numbered process with connecting gradient line. */
export default function ProcessSection() {
  const { t } = useTranslation();

  return (
    <section style={{ background:'#efe6d8', padding:'120px 48px' }}>
      <div style={{ maxWidth:1200, margin:'0 auto' }}>
        <FadeIn>
          <div style={{ textAlign:'center', marginBottom:72 }}>
            <div style={{ color:'#0e633d', fontSize:11, fontWeight:700, letterSpacing:2.5, textTransform:'uppercase', marginBottom:18 }}>{t('process.badge')}</div>
            <h2 style={{ fontSize:50, fontWeight:800, color:'#0a1f14', marginBottom:18 }}>{t('process.title')}</h2>
          </div>
        </FadeIn>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:32, position:'relative' }}>
          {/* Connecting line */}
          <div style={{ position:'absolute', top:44, left:'12.5%', right:'12.5%', height:2, background:'linear-gradient(90deg, #0e633d, #c8a84b)', zIndex:0 }} />

          {STEPS.map((s, idx) => (
            <FadeIn key={s.step} delay={idx * 100}>
              <div style={{ textAlign:'center', position:'relative', zIndex:1 }}>
                <div style={{ width:88, height:88, borderRadius:'50%', margin:'0 auto 24px', background:idx % 2 === 0 ? '#0e633d' : '#c8a84b', display:'flex', alignItems:'center', justifyContent:'center', fontSize:34, boxShadow:`0 12px 40px ${idx % 2 === 0 ? 'rgba(14,99,61,0.3)' : 'rgba(200,168,75,0.35)'}`, border:'4px solid #efe6d8' }}>
                  {s.icon}
                </div>
                <div style={{ fontFamily:"'Playfair Display', serif", fontSize:11, fontWeight:700, color:'#c8a84b', letterSpacing:2, marginBottom:8 }}>{s.step}</div>
                <h4 style={{ fontFamily:"'Playfair Display', serif", fontSize:19, fontWeight:800, color:'#0a1f14', marginBottom:12 }}>{s.title}</h4>
                <p style={{ fontSize:14, color:'#6b7c6e', lineHeight:1.7 }}>{s.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
