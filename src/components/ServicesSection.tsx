import { useTranslation } from 'react-i18next';
import FadeIn from './FadeIn';
import HoverCard from './HoverCard';

const SERVICE_META = [
  { key: 'cat1', icon: '🤖', accent: '#c8a84b' },
  { key: 'cat2', icon: '☁️', accent: '#0e633d' },
  { key: 'cat3', icon: '🏢', accent: '#1a8050' },
  { key: 'cat4', icon: '📱', accent: '#2ea866' },
  { key: 'cat5', icon: '💻', accent: '#0a4a2e' },
  { key: 'cat6', icon: '🎮', accent: '#c8a84b' },
];

/** Six-card grid of technology service categories. */
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
          {SERVICE_META.map((s, idx) => {
            const tags = t(`services.${s.key}.tags`, { returnObjects: true }) as string[];
            return (
              <FadeIn key={s.key} delay={idx * 80}>
                <HoverCard style={{ background:'#faf8f5', border:'1.5px solid #ede5d9', borderRadius:22, padding:32, height:'100%', position:'relative', overflow:'hidden', cursor:'pointer' }}>
                  <div style={{ position:'absolute', top:0, left:0, width:4, height:'100%', background:s.accent, borderRadius:'4px 0 0 4px' }} />
                  <div style={{ fontSize:40, marginBottom:18 }}>{s.icon}</div>
                  <h3 style={{ fontFamily:"'Playfair Display', serif", fontSize:20, fontWeight:800, color:'#0a1f14', marginBottom:12 }}>{t(`services.${s.key}.title`)}</h3>
                  <p style={{ fontSize:14, color:'#6b7c6e', lineHeight:1.75, marginBottom:22 }}>{t(`services.${s.key}.desc`)}</p>
                  <div style={{ display:'flex', gap:7, flexWrap:'wrap' }}>
                    {tags.map(tag => (
                      <span key={tag} style={{ background:`${s.accent}14`, color:s.accent, padding:'4px 12px', borderRadius:50, fontSize:10, fontWeight:700, letterSpacing:0.5 }}>{tag}</span>
                    ))}
                  </div>
                </HoverCard>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
