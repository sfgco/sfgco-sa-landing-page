import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

/** 404 page shown for any unmatched route. */
export default function NotFound() {
  const { t } = useTranslation();

  return (
    <section
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(145deg, #060f08 0%, #0a2a16 40%, #0e633d 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '48px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ position:'absolute', top:-80, right:-80, width:400, height:400, borderRadius:'50%', background:'radial-gradient(circle, rgba(200,168,75,0.08), transparent 65%)', pointerEvents:'none' }} />

      <div style={{ fontFamily:"'Playfair Display', serif", fontSize:120, fontWeight:800, color:'rgba(200,168,75,0.15)', lineHeight:1, marginBottom:8, userSelect:'none' }}>
        404
      </div>
      <h1 style={{ fontFamily:"'Playfair Display', serif", fontSize:40, fontWeight:800, color:'#fff', marginBottom:16, letterSpacing:-0.5 }}>
        {t('pages.notFound.title')}
      </h1>
      <p style={{ fontSize:17, color:'rgba(239,230,216,0.6)', marginBottom:44, maxWidth:400 }}>
        {t('pages.notFound.subtitle')}
      </p>
      <Link
        to="/"
        style={{
          background: '#c8a84b',
          color: '#0a1f14',
          padding: '14px 36px',
          borderRadius: 50,
          fontWeight: 700,
          fontSize: 14,
          letterSpacing: 0.5,
          transition: 'all 0.3s',
          boxShadow: '0 8px 32px rgba(200,168,75,0.35)',
        }}
        onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.transform='translateY(-2px)'; (e.currentTarget as HTMLAnchorElement).style.boxShadow='0 16px 48px rgba(200,168,75,0.5)'; }}
        onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.transform='translateY(0)'; (e.currentTarget as HTMLAnchorElement).style.boxShadow='0 8px 32px rgba(200,168,75,0.35)'; }}
      >
        {t('pages.notFound.backBtn')}
      </Link>
    </section>
  );
}
