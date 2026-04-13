import { useTranslation } from 'react-i18next';
import FadeIn from './FadeIn';

const CONTACT_CARDS = [
  { icon:'📧', labelKey:'cta.emailLabel', val:'invest@sfgco.com' },
  { icon:'📞', labelKey:'cta.callLabel', val:'+27 11 234 5678' },
  { icon:'📍', labelKey:'cta.officeLabel', val:'Johannesburg, SA' },
];

/** Dark gradient CTA section with email capture and contact info. */
export default function CTASection() {
  const { t } = useTranslation();

  const perks = [t('cta.perk1'), t('cta.perk2'), t('cta.perk3')];

  return (
    <section
      id="contact"
      style={{ background:'linear-gradient(150deg, #060f08 0%, #0a2a16 25%, #0e633d 60%, #1a8050 85%, #0c3d25 100%)', padding:'128px 48px', textAlign:'center', position:'relative', overflow:'hidden' }}
    >
      <div style={{ position:'absolute', top:-120, left:-120, width:500, height:500, borderRadius:'50%', background:'radial-gradient(circle, rgba(200,168,75,0.1), transparent 65%)', pointerEvents:'none' }} />
      <div style={{ position:'absolute', bottom:-100, right:-100, width:450, height:450, borderRadius:'50%', background:'radial-gradient(circle, rgba(239,230,216,0.06), transparent 65%)', pointerEvents:'none' }} />
      <div style={{ position:'absolute', inset:0, backgroundImage:'linear-gradient(rgba(239,230,216,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(239,230,216,0.015) 1px, transparent 1px)', backgroundSize:'60px 60px', pointerEvents:'none' }} />

      <div style={{ position:'relative', maxWidth:720, margin:'0 auto' }}>
        <FadeIn>
          <div style={{ color:'#c8a84b', fontSize:11, fontWeight:700, letterSpacing:2.5, textTransform:'uppercase', marginBottom:24 }}>{t('cta.badge')}</div>
          <h2 style={{ fontFamily:"'Playfair Display', serif", fontSize:58, fontWeight:800, color:'#fff', lineHeight:1.1, marginBottom:24, letterSpacing:-1 }}>
            {t('cta.title1')}<br />
            <span style={{ color:'#c8a84b' }}>{t('cta.titleHighlight')}</span>
          </h2>
          <p style={{ fontSize:18, color:'rgba(239,230,216,0.7)', lineHeight:1.75, marginBottom:52 }}>{t('cta.subtitle')}</p>

          {/* Email capture */}
          <div style={{ display:'flex', gap:14, justifyContent:'center', marginBottom:20 }}>
            <input
              type="email"
              placeholder={t('cta.emailPlaceholder')}
              aria-label={t('cta.emailPlaceholder')}
              style={{ flex:1, maxWidth:380, padding:'16px 24px', borderRadius:14, border:'1.5px solid rgba(239,230,216,0.18)', background:'rgba(255,255,255,0.07)', color:'#fff', fontSize:15, outline:'none', backdropFilter:'blur(12px)', fontFamily:"'Inter', sans-serif" }}
              onFocus={e => (e.currentTarget.style.borderColor='rgba(200,168,75,0.5)')}
              onBlur={e => (e.currentTarget.style.borderColor='rgba(239,230,216,0.18)')}
            />
            <button
              style={{ background:'#c8a84b', color:'#0a1f14', padding:'16px 34px', borderRadius:14, border:'none', fontWeight:800, fontSize:14, cursor:'pointer', transition:'all 0.3s', whiteSpace:'nowrap', letterSpacing:0.4, fontFamily:"'Inter', sans-serif", boxShadow:'0 8px 32px rgba(200,168,75,0.35)' }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.transform='translateY(-2px)'; (e.currentTarget as HTMLButtonElement).style.boxShadow='0 16px 48px rgba(200,168,75,0.5)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform='translateY(0)'; (e.currentTarget as HTMLButtonElement).style.boxShadow='0 8px 32px rgba(200,168,75,0.35)'; }}
            >
              {t('cta.scheduleBtn')}
            </button>
          </div>

          {/* Perks */}
          <div style={{ display:'flex', gap:40, justifyContent:'center', flexWrap:'wrap', marginBottom:56 }}>
            {perks.map(item => (
              <div key={item} style={{ display:'flex', alignItems:'center', gap:8 }}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <circle cx="7" cy="7" r="6.5" stroke="#c8a84b" strokeWidth="1.2" />
                  <path d="M4 7l2 2 4-3.5" stroke="#c8a84b" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span style={{ color:'rgba(239,230,216,0.65)', fontSize:13 }}>{item}</span>
              </div>
            ))}
          </div>

          {/* Contact cards */}
          <div style={{ display:'flex', gap:16, justifyContent:'center' }}>
            {CONTACT_CARDS.map(c => (
              <div key={c.labelKey} style={{ background:'rgba(255,255,255,0.06)', border:'1px solid rgba(239,230,216,0.1)', borderRadius:14, padding:'16px 24px', textAlign:'center', backdropFilter:'blur(12px)' }}>
                <div style={{ fontSize:22, marginBottom:6 }}>{c.icon}</div>
                <div style={{ fontSize:10, color:'rgba(239,230,216,0.5)', letterSpacing:1, textTransform:'uppercase', marginBottom:4 }}>{t(c.labelKey)}</div>
                <div style={{ fontSize:13, color:'#c8a84b', fontWeight:700 }}>{c.val}</div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
