import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logoImg from '../assets/sfgco-logo.png';

const SOCIAL = [
  { l: 'in', title: 'LinkedIn' },
  { l: 'tw', title: 'Twitter' },
  { l: 'yt', title: 'YouTube' },
  { l: 'fb', title: 'Facebook' },
];

const CERTS = ['PRI', 'TCFD', 'GIIN', 'ISO'];

const FOOTER_COLS = [
  { headKey: 'Services', links: ['Renewable Energy','Green Infrastructure','ESG Advisory','Carbon Markets','Impact Funds','Circular Economy'] },
  { headKey: 'Invest', links: ['Green Bond Fund','RE Portfolio Fund','Climate Ventures','Co-investments','Fund Performance','Risk Disclosure'] },
  { headKey: 'Company', links: ['About SFGCO','Leadership Team','Careers','Press & Media','Partnerships','Contact Us'] },
];

const LEGAL_LINKS = [
  { label: 'Privacy Policy',   to: '/privacy-policy'   },
  { label: 'Terms of Service', to: '/terms-of-service' },
  { label: 'Risk Disclosure',  to: '/risk-disclosure'  },
  { label: 'Cookie Policy',    to: '/cookie-policy'    },
];

/** Site-wide footer with newsletter signup, links, and legal copy. */
export default function Footer() {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');

  return (
    <footer style={{ background:'#060f08', padding:'88px 48px 40px', color:'rgba(239,230,216,0.55)' }}>
      <div style={{ maxWidth:1200, margin:'0 auto' }}>

        {/* Main grid */}
        <div style={{ display:'grid', gridTemplateColumns:'2.2fr 1fr 1fr 1fr', gap:64, marginBottom:72 }}>

          {/* Brand column */}
          <div>
            <div style={{ display:'flex', alignItems:'center', gap:12, marginBottom:22 }}>
              <img src={logoImg} alt="SFGCO" style={{ height:40, opacity:0.9 }} />
              <div>
                <div style={{ fontFamily:"'Playfair Display', serif", fontWeight:800, fontSize:16, color:'#efe6d8', letterSpacing:3 }}>SFGCO</div>
                <div style={{ fontSize:8, color:'rgba(239,230,216,0.45)', letterSpacing:2, textTransform:'uppercase' }}>Future of Green</div>
              </div>
            </div>
            <p style={{ fontSize:13, lineHeight:1.85, maxWidth:300, marginBottom:28, color:'rgba(239,230,216,0.5)' }}>{t('footer.tagline')}</p>

            {/* Social icons */}
            <div style={{ display:'flex', gap:10, marginBottom:28 }}>
              {SOCIAL.map(s => (
                <button
                  key={s.l}
                  title={s.title}
                  aria-label={s.title}
                  style={{ width:36, height:36, borderRadius:9, background:'rgba(239,230,216,0.06)', border:'1px solid rgba(239,230,216,0.1)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:10, fontWeight:800, color:'#efe6d8', cursor:'pointer', letterSpacing:0.5, transition:'all 0.2s' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background='#0e633d'; (e.currentTarget as HTMLButtonElement).style.borderColor='#0e633d'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background='rgba(239,230,216,0.06)'; (e.currentTarget as HTMLButtonElement).style.borderColor='rgba(239,230,216,0.1)'; }}
                >
                  {s.l.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Certifications */}
            <div style={{ display:'flex', gap:10 }}>
              {CERTS.map(b => (
                <div key={b} style={{ padding:'4px 10px', borderRadius:6, border:'1px solid rgba(200,168,75,0.25)', fontSize:9, fontWeight:800, color:'#c8a84b', letterSpacing:1 }}>{b}</div>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_COLS.map(col => (
            <div key={col.headKey}>
              <h5 style={{ fontWeight:800, color:'#efe6d8', fontSize:11, letterSpacing:2, textTransform:'uppercase', marginBottom:22 }}>{col.headKey}</h5>
              <div style={{ display:'flex', flexDirection:'column', gap:11 }}>
                {col.links.map(l => (
                  <button
                    key={l}
                    style={{ background:'none', border:'none', padding:0, textAlign:'start', color:'rgba(239,230,216,0.48)', fontSize:13, transition:'color 0.2s', cursor:'pointer', fontFamily:"'Inter', sans-serif" }}
                    onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.color='#c8a84b')}
                    onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.color='rgba(239,230,216,0.48)')}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div style={{ background:'rgba(14,99,61,0.2)', border:'1px solid rgba(14,99,61,0.3)', borderRadius:18, padding:'28px 36px', marginBottom:56, display:'flex', justifyContent:'space-between', alignItems:'center', gap:32, flexWrap:'wrap' }}>
          <div>
            <div style={{ fontFamily:"'Playfair Display', serif", fontSize:18, fontWeight:700, color:'#efe6d8', marginBottom:6 }}>{t('footer.newsletterTitle')}</div>
            <div style={{ fontSize:13, color:'rgba(239,230,216,0.55)' }}>{t('footer.newsletterSub')}</div>
          </div>
          <div style={{ display:'flex', gap:10 }}>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder={t('footer.newsletterPlaceholder')}
              aria-label={t('footer.newsletterPlaceholder')}
              style={{ padding:'11px 18px', borderRadius:10, background:'rgba(255,255,255,0.07)', border:'1px solid rgba(239,230,216,0.15)', color:'#fff', fontSize:13, outline:'none', fontFamily:"'Inter', sans-serif", width:230 }}
            />
            <button
              onClick={() => setEmail('')}
              style={{ background:'#c8a84b', color:'#0a1f14', padding:'11px 22px', borderRadius:10, border:'none', fontWeight:800, fontSize:13, cursor:'pointer', fontFamily:"'Inter', sans-serif", whiteSpace:'nowrap' }}
            >
              {t('footer.subscribeBtn')}
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop:'1px solid rgba(239,230,216,0.07)', paddingTop:32, display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:16 }}>
          <p style={{ fontSize:12 }}>{t('footer.copyright')}</p>
          <div style={{ display:'flex', gap:28 }}>
            {LEGAL_LINKS.map(l => (
              <Link
                key={l.to}
                to={l.to}
                style={{ color:'rgba(239,230,216,0.38)', fontSize:11, textDecoration:'none', transition:'color 0.2s', fontFamily:"'Inter', sans-serif" }}
                onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color='rgba(239,230,216,0.7)')}
                onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color='rgba(239,230,216,0.38)')}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <p style={{ fontSize:10, marginTop:20, lineHeight:1.7, color:'rgba(239,230,216,0.2)', maxWidth:960 }}>
          {t('footer.disclaimer')}
        </p>
      </div>
    </footer>
  );
}
