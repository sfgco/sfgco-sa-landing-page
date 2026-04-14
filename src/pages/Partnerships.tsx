import FadeIn from '../components/FadeIn';
import HoverCard from '../components/HoverCard';

const PARTNER_TYPES = [
  {
    icon: '🏛️',
    title: 'Institutional Co-Investors',
    desc: 'Pension funds, sovereign wealth funds, insurance companies, and endowments seeking direct co-investment rights alongside our flagship strategies. We offer preferred economics and board-level access on qualifying tickets.',
    tags: ['Co-Investment Rights', 'ROFR', 'Preferred Terms'],
    accent: '#0e633d',
  },
  {
    icon: '🏦',
    title: 'Development Finance Institutions',
    desc: 'Multilateral and bilateral DFIs that provide first-loss capital, concessional financing, and political risk guarantees to unlock commercial investment in emerging markets.',
    tags: ['Blended Finance', 'First-Loss', 'Guarantees'],
    accent: '#1a8050',
  },
  {
    icon: '🏢',
    title: 'Corporate Partners',
    desc: 'Large corporates seeking to meet Scope 1, 2, and 3 emissions targets, secure renewable energy supply through PPAs, or access high-quality carbon credits for net-zero commitments.',
    tags: ['PPAs', 'Carbon Credits', 'Net-Zero Advisory'],
    accent: '#c8a84b',
  },
  {
    icon: '🔬',
    title: 'Technology Partners',
    desc: 'Deep-tech and AI companies developing solutions for climate monitoring, grid optimisation, predictive maintenance, or carbon accounting — seeking growth capital and SFGCO's global commercial network.',
    tags: ['Growth Capital', 'Market Access', 'Pilot Projects'],
    accent: '#2ea866',
  },
  {
    icon: '🌿',
    title: 'NGO & Conservation Bodies',
    desc: 'Environmental NGOs and conservation organisations looking to design and certify nature-based solutions projects that can access voluntary carbon markets and blended finance at scale.',
    tags: ['NbS Design', 'Verra/Gold Standard', 'REDD+'],
    accent: '#0a4a2e',
  },
  {
    icon: '🏫',
    title: 'Academic & Research Partners',
    desc: 'Universities and research institutions collaborating on proprietary climate data, ESG measurement methodology, and sustainability transition pathways that inform our investment theses.',
    tags: ['Research Grants', 'Data Sharing', 'Co-Publications'],
    accent: '#c8a84b',
  },
];

const CURRENT_PARTNERS = [
  { name: 'IFC', category: 'Development Finance' },
  { name: 'EIB', category: 'Development Finance' },
  { name: 'GIIN', category: 'Standards Body' },
  { name: 'IRENA', category: 'Research & Policy' },
  { name: 'WWF', category: 'Conservation' },
  { name: 'UNEP FI', category: 'Initiative' },
  { name: 'PRI', category: 'Initiative' },
  { name: 'CDP', category: 'Standards Body' },
];

const PROCESS = [
  { num: '01', title: 'Initial Expression of Interest', desc: 'Submit a brief overview of your organisation and the type of partnership you are exploring via our enquiry form or by emailing partnerships@sfgco.sa.' },
  { num: '02', title: 'Alignment Review', desc: 'Our Partnership Development team evaluates strategic, financial, and ESG alignment within 10 business days and responds with an outcome.' },
  { num: '03', title: 'Exploratory Call', desc: 'A structured 60-minute call with relevant SFGCO leads to map out a potential collaboration framework and answer your questions.' },
  { num: '04', title: 'Term Sheet & Due Diligence', desc: 'For partnerships proceeding to formalisation, we co-develop a term sheet, conduct mutual due diligence, and define governance and reporting requirements.' },
  { num: '05', title: 'Launch & Review', desc: 'Partnerships are reviewed annually against agreed KPIs, with the option to deepen or expand the relationship as outcomes materialise.' },
];

export default function Partnerships() {
  return (
    <>
      <title>Partnerships | SFGCO</title>
      <meta name="description" content="Partner with SFGCO — co-investment, DFI collaboration, corporate sustainability, technology ventures, and conservation partnerships." />

      {/* Hero */}
      <section style={{ background: 'linear-gradient(145deg, #060f08 0%, #0a2a16 35%, #0e633d 100%)', padding: '160px 48px 100px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -80, right: -80, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(200,168,75,0.10), transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: -60, left: -60, width: 320, height: 320, borderRadius: '50%', background: 'radial-gradient(circle, rgba(46,168,102,0.10), transparent 65%)', pointerEvents: 'none' }} />
        <FadeIn>
          <div style={{ color: '#c8a84b', fontSize: 11, fontWeight: 700, letterSpacing: 2.5, textTransform: 'uppercase', marginBottom: 20 }}>Collaborate With Us</div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 60, fontWeight: 800, color: '#fff', lineHeight: 1.1, marginBottom: 20, letterSpacing: -1 }}>Partnerships</h1>
          <p style={{ fontSize: 18, color: 'rgba(239,230,216,0.7)', maxWidth: 580, margin: '0 auto' }}>
            We achieve more together. SFGCO actively seeks partners who share our conviction that financial performance and planetary health are inseparable.
          </p>
        </FadeIn>
      </section>

      {/* Partner Types */}
      <section style={{ background: '#fff', padding: '100px 48px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: 64 }}>
              <div style={{ color: '#0e633d', fontSize: 11, fontWeight: 700, letterSpacing: 2.5, textTransform: 'uppercase', marginBottom: 18 }}>Partnership Models</div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 42, fontWeight: 800, color: '#0a1f14', marginBottom: 16 }}>How We Partner</h2>
              <p style={{ fontSize: 16, color: '#5a7062', maxWidth: 540, margin: '0 auto', lineHeight: 1.8 }}>
                We tailor each partnership to the unique capabilities and objectives of the collaborating organisation.
              </p>
            </div>
          </FadeIn>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {PARTNER_TYPES.map((pt, idx) => (
              <FadeIn key={pt.title} delay={idx * 70}>
                <HoverCard style={{ background: '#faf8f5', border: '1.5px solid #ede5d9', borderRadius: 22, padding: 32, height: '100%', position: 'relative', overflow: 'hidden', cursor: 'default' }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, width: 4, height: '100%', background: pt.accent }} />
                  <div style={{ fontSize: 38, marginBottom: 18 }}>{pt.icon}</div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 19, fontWeight: 800, color: '#0a1f14', marginBottom: 12 }}>{pt.title}</h3>
                  <p style={{ fontSize: 14, color: '#6b7c6e', lineHeight: 1.75, marginBottom: 20 }}>{pt.desc}</p>
                  <div style={{ display: 'flex', gap: 7, flexWrap: 'wrap' }}>
                    {pt.tags.map(tag => (
                      <span key={tag} style={{ background: `${pt.accent}14`, color: pt.accent, padding: '4px 12px', borderRadius: 50, fontSize: 10, fontWeight: 700 }}>{tag}</span>
                    ))}
                  </div>
                </HoverCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section style={{ background: '#0a1f14', padding: '80px 48px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', textAlign: 'center' }}>
          <FadeIn>
            <div style={{ color: '#c8a84b', fontSize: 11, fontWeight: 700, letterSpacing: 2.5, textTransform: 'uppercase', marginBottom: 18 }}>Our Network</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, fontWeight: 800, color: '#efe6d8', marginBottom: 48 }}>Trusted By Global Institutions</h2>
          </FadeIn>
          <FadeIn delay={60}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center' }}>
              {CURRENT_PARTNERS.map((p) => (
                <div key={p.name} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.09)', borderRadius: 14, padding: '16px 28px', textAlign: 'center' }}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 800, color: '#efe6d8', marginBottom: 5 }}>{p.name}</div>
                  <div style={{ fontSize: 10, color: 'rgba(239,230,216,0.4)', letterSpacing: 0.5 }}>{p.category}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Process */}
      <section style={{ background: '#faf8f5', padding: '100px 48px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: 64 }}>
              <div style={{ color: '#0e633d', fontSize: 11, fontWeight: 700, letterSpacing: 2.5, textTransform: 'uppercase', marginBottom: 18 }}>Partnership Journey</div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 42, fontWeight: 800, color: '#0a1f14' }}>How It Works</h2>
            </div>
          </FadeIn>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {PROCESS.map((step, idx) => (
              <FadeIn key={step.num} delay={idx * 70}>
                <div style={{ display: 'flex', gap: 28, paddingBottom: 40, position: 'relative' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                    <div style={{ width: 48, height: 48, borderRadius: '50%', background: '#0e633d', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: 14, color: '#efe6d8', flexShrink: 0 }}>{step.num}</div>
                    {idx < PROCESS.length - 1 && <div style={{ width: 2, flex: 1, background: '#e0d4c0', marginTop: 8 }} />}
                  </div>
                  <div style={{ paddingTop: 10 }}>
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 19, fontWeight: 800, color: '#0a1f14', marginBottom: 10 }}>{step.title}</h3>
                    <p style={{ fontSize: 14, color: '#6b7c6e', lineHeight: 1.8 }}>{step.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#fff', padding: '80px 48px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
          <FadeIn>
            <div style={{ background: 'linear-gradient(135deg, #0a2a16, #0e633d)', borderRadius: 24, padding: '52px 48px' }}>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, fontWeight: 800, color: '#efe6d8', marginBottom: 16 }}>Ready to Explore a Partnership?</h2>
              <p style={{ fontSize: 15, color: 'rgba(239,230,216,0.65)', marginBottom: 32, lineHeight: 1.8 }}>
                Our Partnership Development team typically responds within five business days. For urgent enquiries, please call our Riyadh office directly.
              </p>
              <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="mailto:partnerships@sfgco.sa" style={{ display: 'inline-block', background: '#c8a84b', color: '#0a1f14', padding: '14px 32px', borderRadius: 50, fontWeight: 800, fontSize: 14, textDecoration: 'none' }}>
                  partnerships@sfgco.sa
                </a>
                <a href="/contact" style={{ display: 'inline-block', background: 'rgba(255,255,255,0.1)', color: '#efe6d8', padding: '14px 32px', borderRadius: 50, fontWeight: 800, fontSize: 14, textDecoration: 'none', border: '1.5px solid rgba(255,255,255,0.2)' }}>
                  Contact Form →
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
