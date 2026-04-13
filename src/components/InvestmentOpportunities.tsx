import { useTranslation } from 'react-i18next';
import FadeIn from './FadeIn';

const PLANS = [
  {
    badge: 'Conservative',
    name: 'Green Bond Fund',
    return: '6–8%',
    returnLabel: 'Annual Yield',
    minInvest: '$500K',
    duration: '5–7 Years',
    risk: 'Low Risk',
    riskColor: '#2ea866',
    features: ['Investment-grade green bonds','Quarterly cash distributions','ICMA Green Bond Principles aligned','Capital preservation focus','Diversified across 20+ issuers','Quarterly impact reporting'],
    popular: false,
  },
  {
    badge: '★ Most Popular',
    name: 'Renewable Energy Portfolio',
    return: '12–18%',
    returnLabel: 'Target Net IRR',
    minInvest: '$1M',
    duration: '7–10 Years',
    risk: 'Moderate Risk',
    riskColor: '#c8a84b',
    features: ['Direct equity in RE assets','Solar, wind & battery storage','Asset-backed security','Co-investment rights','Annual site visits & audits','Real-time dashboard access'],
    popular: true,
  },
  {
    badge: 'High Impact',
    name: 'Climate Ventures Fund',
    return: '25%+',
    returnLabel: 'Target Gross IRR',
    minInvest: '$2M',
    duration: '10–12 Years',
    risk: 'Growth Risk',
    riskColor: '#c8a84b',
    features: ['Early-stage climate-tech equity','Series A & B entry points','Board-level representation','Deep tech & hard science focus','UN SDG-aligned exit strategy','Access to proprietary deal flow'],
    popular: false,
  },
];

/** Three investment plan cards with feature lists and CTA buttons. */
export default function InvestmentOpportunities() {
  const { t } = useTranslation();

  return (
    <section id="investments" style={{ background:'#efe6d8', padding:'120px 48px' }}>
      <div style={{ maxWidth:1200, margin:'0 auto' }}>
        <FadeIn>
          <div style={{ textAlign:'center', marginBottom:72 }}>
            <div style={{ color:'#0e633d', fontSize:11, fontWeight:700, letterSpacing:2.5, textTransform:'uppercase', marginBottom:18 }}>{t('investments.badge')}</div>
            <h2 style={{ fontSize:50, fontWeight:800, color:'#0a1f14', marginBottom:18 }}>
              {t('investments.title1')}<br />{t('investments.title2')}
            </h2>
            <p style={{ color:'#5a7062', fontSize:17, lineHeight:1.75, maxWidth:600, margin:'0 auto' }}>{t('investments.subtitle')}</p>
          </div>
        </FadeIn>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:24, alignItems:'start' }}>
          {PLANS.map((plan, idx) => (
            <FadeIn key={plan.name} delay={idx * 100}>
              <div style={{ background:plan.popular ? '#0e633d' : '#fff', borderRadius:26, padding:40, border:plan.popular ? '2px solid #c8a84b' : '1.5px solid #e0d4c0', position:'relative', overflow:'hidden', boxShadow:plan.popular ? '0 32px 100px rgba(14,99,61,0.25)' : '0 4px 20px rgba(14,99,61,0.06)', transform:plan.popular ? 'scale(1.04)' : 'scale(1)' }}>
                {plan.popular && <div style={{ position:'absolute', top:0, left:0, right:0, height:4, background:'linear-gradient(90deg, #c8a84b, #e8cc7a, #c8a84b)' }} />}

                <div style={{ marginBottom:14 }}>
                  <span style={{ background:plan.popular ? 'rgba(200,168,75,0.2)' : 'rgba(14,99,61,0.08)', color:plan.popular ? '#c8a84b' : '#0e633d', padding:'5px 14px', borderRadius:50, fontSize:10, fontWeight:800, letterSpacing:0.8 }}>
                    {plan.badge}
                  </span>
                </div>

                <h3 style={{ fontFamily:"'Playfair Display', serif", fontSize:24, fontWeight:800, color:plan.popular ? '#efe6d8' : '#0a1f14', marginTop:14, marginBottom:24 }}>{plan.name}</h3>

                <div style={{ marginBottom:28 }}>
                  <div style={{ fontFamily:"'Playfair Display', serif", fontSize:52, fontWeight:800, color:plan.popular ? '#c8a84b' : '#0e633d', lineHeight:1 }}>{plan.return}</div>
                  <div style={{ fontSize:12, color:plan.popular ? 'rgba(239,230,216,0.55)' : '#9aaa9e', marginTop:6 }}>{plan.returnLabel}</div>
                </div>

                <div style={{ display:'flex', gap:12, marginBottom:32 }}>
                  {[{ label:'Min. Investment', val:plan.minInvest }, { label:'Duration', val:plan.duration }].map(f => (
                    <div key={f.label} style={{ flex:1, background:plan.popular ? 'rgba(255,255,255,0.07)' : 'rgba(14,99,61,0.05)', borderRadius:12, padding:'14px 16px' }}>
                      <div style={{ fontSize:15, fontWeight:800, color:plan.popular ? '#fff' : '#0a1f14' }}>{f.val}</div>
                      <div style={{ fontSize:10, color:plan.popular ? 'rgba(239,230,216,0.45)' : '#b0bdb2', marginTop:4, letterSpacing:0.5 }}>{f.label}</div>
                    </div>
                  ))}
                </div>

                <div style={{ display:'inline-flex', alignItems:'center', gap:6, background:`${plan.riskColor}18`, padding:'5px 14px', borderRadius:50, marginBottom:28 }}>
                  <span style={{ width:6, height:6, borderRadius:'50%', background:plan.riskColor, display:'inline-block' }} />
                  <span style={{ fontSize:10, fontWeight:700, color:plan.riskColor, letterSpacing:0.5 }}>{plan.risk}</span>
                </div>

                <div style={{ marginBottom:32 }}>
                  {plan.features.map(f => (
                    <div key={f} style={{ display:'flex', alignItems:'center', gap:10, marginBottom:11 }}>
                      <div style={{ width:18, height:18, borderRadius:'50%', background:plan.popular ? 'rgba(200,168,75,0.18)' : 'rgba(14,99,61,0.08)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                          <path d="M1.5 4l1.8 1.8 3.2-3.6" stroke={plan.popular ? '#c8a84b' : '#0e633d'} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <span style={{ fontSize:13, color:plan.popular ? 'rgba(239,230,216,0.75)' : '#5a7062' }}>{f}</span>
                    </div>
                  ))}
                </div>

                <button
                  style={{ width:'100%', padding:'15px', borderRadius:14, border:'none', cursor:'pointer', background:plan.popular ? '#c8a84b' : '#0e633d', color:plan.popular ? '#0a1f14' : '#efe6d8', fontWeight:800, fontSize:14, letterSpacing:0.5, fontFamily:"'Inter', sans-serif", transition:'all 0.3s' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.opacity='0.88'; (e.currentTarget as HTMLButtonElement).style.transform='translateY(-2px)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.opacity='1'; (e.currentTarget as HTMLButtonElement).style.transform='translateY(0)'; }}
                >
                  {t('investments.requestBtn')}
                </button>
              </div>
            </FadeIn>
          ))}
        </div>

        <p style={{ textAlign:'center', fontSize:11, color:'#b0bdb2', marginTop:36, lineHeight:1.7 }}>
          {t('investments.disclaimer')}
        </p>
      </div>
    </section>
  );
}
