import { useTranslation } from 'react-i18next';
import FadeIn from './FadeIn';

const TESTIMONIALS = [
  { quote:'SFGCO has redefined what we expect from an impact manager. The combination of rigorous financial discipline and genuine environmental commitment is unmatched. Our ESG portfolio has outperformed benchmarks for five consecutive years.', name:'Dr. Sarah Mensah', title:'Chief Investment Officer', org:'African Development Pension Fund', meta:'$4.2B AUM · Investor since 2017', initials:'SM', color:'#c8a84b' },
  { quote:"Our family office has been with SFGCO for over a decade. The transparency, the quality of their team, and the consistent returns have made them our most valued long-term investment partner.", name:'Henrik Lundqvist', title:'Principal', org:'Lundqvist Family Office', meta:'Partner since 2012 · 3 fund cycles', initials:'HL', color:'#2ea866' },
  { quote:"As a corporation committed to net zero by 2030, SFGCO's carbon market expertise and project pipeline have been transformational. They don't just advise — they deliver measurable, verified results.", name:'Priya Sharma', title:'Chief Sustainability Officer', org:'GreenTech Corporation', meta:'$800M invested · 12 projects', initials:'PS', color:'#c8a84b' },
];

/** Dark-green testimonial grid with investor quotes. */
export default function Testimonials() {
  const { t } = useTranslation();

  return (
    <section style={{ background:'#0e633d', padding:'120px 48px', position:'relative', overflow:'hidden' }}>
      <div style={{ position:'absolute', top:-80, right:-80, width:400, height:400, borderRadius:'50%', background:'radial-gradient(circle, rgba(200,168,75,0.1), transparent 65%)', pointerEvents:'none' }} />
      <div style={{ position:'absolute', bottom:-60, left:-60, width:350, height:350, borderRadius:'50%', background:'radial-gradient(circle, rgba(239,230,216,0.05), transparent 65%)', pointerEvents:'none' }} />

      <div style={{ maxWidth:1200, margin:'0 auto', position:'relative' }}>
        <FadeIn>
          <div style={{ textAlign:'center', marginBottom:72 }}>
            <div style={{ color:'#c8a84b', fontSize:11, fontWeight:700, letterSpacing:2.5, textTransform:'uppercase', marginBottom:18 }}>{t('testimonials.badge')}</div>
            <h2 style={{ fontFamily:"'Playfair Display', serif", fontSize:50, fontWeight:800, color:'#fff' }}>{t('testimonials.title')}</h2>
          </div>
        </FadeIn>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:24 }}>
          {TESTIMONIALS.map((t2, idx) => (
            <FadeIn key={t2.name} delay={idx * 100}>
              <div style={{ background:'rgba(255,255,255,0.05)', border:'1px solid rgba(239,230,216,0.1)', borderRadius:22, padding:38, height:'100%', display:'flex', flexDirection:'column' }}>
                <div style={{ color:t2.color, fontSize:52, fontFamily:"'Playfair Display', serif", lineHeight:0.8, marginBottom:22, opacity:0.8 }}>"</div>
                <p style={{ color:'rgba(239,230,216,0.82)', fontSize:15, lineHeight:1.8, fontStyle:'italic', flex:1, marginBottom:30 }}>{t2.quote}</p>
                <div style={{ display:'flex', alignItems:'center', gap:16 }}>
                  <div style={{ width:50, height:50, borderRadius:'50%', background:t2.color, display:'flex', alignItems:'center', justifyContent:'center', fontSize:17, fontWeight:800, color:'#0a1f14', flexShrink:0, fontFamily:"'Playfair Display', serif" }}>
                    {t2.initials}
                  </div>
                  <div>
                    <div style={{ fontWeight:700, color:'#fff', fontSize:15 }}>{t2.name}</div>
                    <div style={{ fontSize:12, color:'rgba(239,230,216,0.65)', marginTop:2 }}>{t2.title}, {t2.org}</div>
                    <div style={{ fontSize:10, color:t2.color, marginTop:4, fontWeight:700, letterSpacing:0.3 }}>{t2.meta}</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
