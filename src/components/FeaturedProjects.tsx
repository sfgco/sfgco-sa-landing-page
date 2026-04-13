import { useTranslation } from 'react-i18next';
import FadeIn from './FadeIn';
import HoverCard from './HoverCard';

const PROJECTS = [
  {
    emoji:'☀️',
    gradient:'linear-gradient(145deg, #b8860b, #c8a84b)',
    category:'Renewable Energy',
    status:'Operational',
    statusColor:'#2ea866',
    location:'Morocco & Tunisia',
    title:'Sahara Solar Initiative',
    metrics:[{ l:'Capacity', v:'500 MW' },{ l:'Homes Powered', v:'400,000' },{ l:'CO₂ Offset', v:'850K t/yr' },{ l:'Target IRR', v:'14.2%' }],
  },
  {
    emoji:'🏙️',
    gradient:'linear-gradient(145deg, #0a4a2e, #0e633d)',
    category:'Smart Infrastructure',
    status:'Construction',
    statusColor:'#c8a84b',
    location:'Singapore',
    title:'Singapore Green Quarter',
    metrics:[{ l:'Net-Zero Space', v:'2.4M m²' },{ l:'Occupants', v:'65,000' },{ l:'CO₂ Offset', v:'1.2M t/yr' },{ l:'Target IRR', v:'16.8%' }],
  },
  {
    emoji:'🌳',
    gradient:'linear-gradient(145deg, #1a8050, #2ea866)',
    category:'Ecosystem Restoration',
    status:'Active',
    statusColor:'#2ea866',
    location:'Brazilian Amazon',
    title:'Amazon Guardian Fund',
    metrics:[{ l:'Area Protected', v:'2M hectares' },{ l:'Families Supported', v:'80,000' },{ l:'CO₂ Offset', v:'15M t/yr' },{ l:'Target IRR', v:'11.4%' }],
  },
];

/** Three featured portfolio project cards. */
export default function FeaturedProjects() {
  const { t } = useTranslation();

  return (
    <section style={{ background:'#f5f0e8', padding:'120px 48px' }}>
      <div style={{ maxWidth:1200, margin:'0 auto' }}>
        <FadeIn>
          <div style={{ textAlign:'center', marginBottom:72 }}>
            <div style={{ color:'#0e633d', fontSize:11, fontWeight:700, letterSpacing:2.5, textTransform:'uppercase', marginBottom:18 }}>{t('projects.badge')}</div>
            <h2 style={{ fontSize:50, fontWeight:800, color:'#0a1f14', marginBottom:18 }}>{t('projects.title')}</h2>
            <p style={{ color:'#5a7062', fontSize:17, lineHeight:1.75, maxWidth:560, margin:'0 auto' }}>{t('projects.subtitle')}</p>
          </div>
        </FadeIn>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:24 }}>
          {PROJECTS.map((p, idx) => (
            <FadeIn key={p.title} delay={idx * 100}>
              <HoverCard style={{ background:'#fff', borderRadius:24, overflow:'hidden', boxShadow:'0 8px 36px rgba(14,99,61,0.08)', cursor:'pointer' }}>
                <div style={{ height:188, background:p.gradient, display:'flex', alignItems:'center', justifyContent:'center', position:'relative' }}>
                  <span style={{ fontSize:68 }}>{p.emoji}</span>
                  <div style={{ position:'absolute', top:16, left:16, background:'rgba(0,0,0,0.22)', backdropFilter:'blur(8px)', color:'#fff', padding:'5px 13px', borderRadius:50, fontSize:10, fontWeight:700 }}>{p.category}</div>
                  <div style={{ position:'absolute', top:16, right:16, background:p.statusColor, color:'#fff', padding:'5px 13px', borderRadius:50, fontSize:10, fontWeight:800 }}>{p.status}</div>
                </div>
                <div style={{ padding:28 }}>
                  <div style={{ fontSize:11, color:'#9aaa9e', marginBottom:8, letterSpacing:0.5 }}>{p.location}</div>
                  <h3 style={{ fontFamily:"'Playfair Display', serif", fontSize:22, fontWeight:800, color:'#0a1f14', marginBottom:20 }}>{p.title}</h3>
                  <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:10, marginBottom:22 }}>
                    {p.metrics.map(m => (
                      <div key={m.l} style={{ background:'#f7f4ef', borderRadius:10, padding:'10px 13px' }}>
                        <div style={{ fontSize:9, color:'#b0bdb2', marginBottom:3, textTransform:'uppercase', letterSpacing:0.8 }}>{m.l}</div>
                        <div style={{ fontSize:13, fontWeight:800, color:'#0a1f14' }}>{m.v}</div>
                      </div>
                    ))}
                  </div>
                  <button
                    style={{ width:'100%', padding:'11px', borderRadius:10, border:'1.5px solid #0e633d', background:'transparent', color:'#0e633d', fontWeight:700, fontSize:12, cursor:'pointer', fontFamily:"'Inter', sans-serif", transition:'all 0.3s' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background='#0e633d'; (e.currentTarget as HTMLButtonElement).style.color='#efe6d8'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background='transparent'; (e.currentTarget as HTMLButtonElement).style.color='#0e633d'; }}
                  >
                    {t('projects.viewBtn')}
                  </button>
                </div>
              </HoverCard>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={200}>
          <div style={{ textAlign:'center', marginTop:52 }}>
            <button
              style={{ display:'inline-flex', alignItems:'center', gap:10, border:'1.5px solid #0e633d', color:'#0e633d', padding:'13px 32px', borderRadius:50, fontWeight:700, fontSize:14, background:'transparent', cursor:'pointer', fontFamily:"'Inter', sans-serif", transition:'all 0.3s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background='#0e633d'; (e.currentTarget as HTMLButtonElement).style.color='#efe6d8'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background='transparent'; (e.currentTarget as HTMLButtonElement).style.color='#0e633d'; }}
            >
              {t('projects.viewAllBtn')}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
