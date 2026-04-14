import FadeIn from './FadeIn';

interface Section {
  heading: string;
  body: string | string[]; // string for a paragraph, string[] for a list
}

interface Props {
  badge: string;
  title: string;
  subtitle: string;
  lastUpdated: string;
  sections: Section[];
}

/** Shared dark-hero + prose layout used by all legal pages. */
export default function LegalPageLayout({ badge, title, subtitle, lastUpdated, sections }: Readonly<Props>) {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          background: 'linear-gradient(145deg, #060f08 0%, #0a2a16 35%, #0e633d 100%)',
          padding: '160px 48px 100px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ position: 'absolute', top: -80, right: -80, width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(200,168,75,0.09), transparent 65%)', pointerEvents: 'none' }} />
        <FadeIn>
          <div style={{ color: '#c8a84b', fontSize: 11, fontWeight: 700, letterSpacing: 2.5, textTransform: 'uppercase', marginBottom: 20 }}>{badge}</div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 58, fontWeight: 800, color: '#fff', lineHeight: 1.1, marginBottom: 20, letterSpacing: -1 }}>{title}</h1>
          <p style={{ fontSize: 17, color: 'rgba(239,230,216,0.65)', maxWidth: 520, margin: '0 auto 18px' }}>{subtitle}</p>
          <p style={{ fontSize: 12, color: 'rgba(239,230,216,0.35)', letterSpacing: 0.5 }}>Last updated: {lastUpdated}</p>
        </FadeIn>
      </section>

      {/* Prose */}
      <section style={{ background: '#faf8f5', padding: '88px 48px 120px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          {sections.map((sec, i) => (
            <FadeIn key={sec.heading} delay={i * 40}>
              <div style={{ marginBottom: 52 }}>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 800, color: '#0a1f14', marginBottom: 16, paddingBottom: 12, borderBottom: '1.5px solid #e8dfd1' }}>
                  <span style={{ color: '#c8a84b', marginRight: 10, fontSize: 14, fontWeight: 700 }}>{String(i + 1).padStart(2, '0')}.</span>
                  {sec.heading}
                </h2>
                {Array.isArray(sec.body) ? (
                  <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                    {sec.body.map((item) => (
                      <li key={item} style={{ display: 'flex', gap: 12, marginBottom: 12, alignItems: 'flex-start' }}>
                        <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#0e633d', marginTop: 7, flexShrink: 0, display: 'inline-block' }} />
                        <span style={{ fontSize: 15, color: '#5a7062', lineHeight: 1.8 }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p style={{ fontSize: 15, color: '#5a7062', lineHeight: 1.9, margin: 0 }}>{sec.body}</p>
                )}
              </div>
            </FadeIn>
          ))}

          {/* Contact callout */}
          <FadeIn delay={200}>
            <div style={{ background: 'linear-gradient(135deg, #0a2a16, #0e633d)', borderRadius: 20, padding: '36px 40px', textAlign: 'center', marginTop: 20 }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 800, color: '#efe6d8', marginBottom: 10 }}>Questions about this document?</div>
              <p style={{ fontSize: 14, color: 'rgba(239,230,216,0.65)', marginBottom: 20 }}>Our compliance team is available to clarify any section of this policy.</p>
              <a
                href="/contact"
                style={{ display: 'inline-block', background: '#c8a84b', color: '#0a1f14', padding: '12px 28px', borderRadius: 50, fontWeight: 800, fontSize: 13, letterSpacing: 0.5, textDecoration: 'none', transition: 'opacity 0.2s' }}
              >
                Contact Compliance Team
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
