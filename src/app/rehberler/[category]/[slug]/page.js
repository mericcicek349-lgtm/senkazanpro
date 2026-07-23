import { getGuideData, getAllGuideSlugs } from '@/lib/markdown';
import Link from 'next/link';

export async function generateMetadata({ params }) {
  // await params parsing for Next.js App Router rules
  const { category, slug } = params;
  const guideData = await getGuideData(category, slug);

  return {
    title: `${guideData.title} - Senkazan.pro Rehber`,
    description: guideData.description,
    openGraph: {
      title: guideData.title,
      description: guideData.description,
      type: 'article',
      authors: [guideData.author || 'Editör'],
    }
  };
}

export default async function GuidePost({ params }) {
  const { category, slug } = params;
  const guideData = await getGuideData(category, slug);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guideData.title,
    description: guideData.description,
    author: [{
      '@type': 'Person',
      name: guideData.author || 'Senkazan Ekibi'
    }],
    datePublished: guideData.date,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container" style={{ paddingTop: '80px', paddingBottom: '80px', maxWidth: '800px', margin: '0 auto' }}>
        
        {/* Breadcrumb */}
        <nav style={{ marginBottom: '2rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
          <Link href="/" style={{ color: 'var(--accent-glow)' }}>Ana Sayfa</Link> &raquo;{' '}
          <Link href="/rehberler" style={{ color: 'var(--accent-glow)' }}>Rehberler</Link> &raquo;{' '}
          <span style={{ textTransform: 'capitalize' }}>{category}</span> &raquo;{' '}
          <span style={{ color: 'var(--text-main)' }}>{guideData.title}</span>
        </nav>

        <header style={{ marginBottom: '3rem', paddingBottom: '2rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <div style={{ display: 'flex', gap: '10px', marginBottom: '1rem' }}>
            <span style={{ background: 'rgba(38, 161, 123, 0.2)', color: '#26a17b', padding: '4px 10px', borderRadius: '8px', fontSize: '0.85rem', textTransform: 'uppercase' }}>
              {category}
            </span>
            {guideData.tags && guideData.tags.map(tag => (
               <span key={tag} style={{ background: 'rgba(255, 255, 255, 0.05)', color: 'var(--text-muted)', padding: '4px 10px', borderRadius: '8px', fontSize: '0.85rem' }}>
                 #{tag}
               </span>
            ))}
          </div>
          <h1 style={{ fontSize: '2.5rem', color: 'var(--text-main)', marginBottom: '1rem', lineHeight: '1.2' }}>
            {guideData.title}
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--accent-glow)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', fontWeight: 'bold' }}>
                {guideData.author ? guideData.author.charAt(0) : 'E'}
              </div>
              <span>{guideData.author || 'Editör'}</span>
            </div>
            <span>•</span>
            <span>Son Güncelleme: {guideData.date}</span>
          </div>
        </header>

        <article className="markdown-content" dangerouslySetInnerHTML={{ __html: guideData.contentHtml }} />

        <div style={{ marginTop: '4rem', padding: '2rem', background: 'rgba(0,0,0,0.3)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
          <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--text-main)' }}>Senkazan Editör Notu</h3>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '0.95rem' }}>
            Bu rehber iGaming uzmanlarımız tarafından en güncel taktikler dikkate alınarak hazırlanmıştır. Casino oyunlarında kazanma şansınızı artırmak için stratejilerin yanı sıra doğru platformu seçmek de önemlidir. 
          </p>
          <Link href="/" className="btn-primary" style={{ display: 'inline-block', marginTop: '1rem' }}>
            Güvenilir Siteleri İncele
          </Link>
        </div>

      </div>

      <style>{`
        .markdown-content h2 { font-size: 1.8rem; margin-top: 2.5rem; margin-bottom: 1rem; color: var(--text-main); }
        .markdown-content h3 { font-size: 1.4rem; margin-top: 2rem; margin-bottom: 1rem; color: var(--text-main); }
        .markdown-content p { font-size: 1.05rem; line-height: 1.7; color: var(--text-muted); margin-bottom: 1.5rem; }
        .markdown-content ul, .markdown-content ol { margin-bottom: 1.5rem; padding-left: 1.5rem; color: var(--text-muted); }
        .markdown-content li { margin-bottom: 0.5rem; line-height: 1.6; }
        .markdown-content a { color: var(--accent-glow); text-decoration: none; }
        .markdown-content a:hover { text-decoration: underline; }
        .markdown-content blockquote { border-left: 4px solid var(--accent-glow); padding-left: 1rem; margin-left: 0; font-style: italic; background: rgba(38, 161, 123, 0.05); padding: 1rem; border-radius: 0 8px 8px 0; }
        .markdown-content strong { color: var(--text-main); }
      `}</style>
    </>
  );
}

export async function generateStaticParams() {
  const paths = getAllGuideSlugs();
  return paths.map((path) => ({
    category: path.params.category,
    slug: path.params.slug,
  }));
}
