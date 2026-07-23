import { getReviewData, getAllReviewSlugs } from '@/lib/markdown';
import Link from 'next/link';

export async function generateMetadata({ params }) {
  const { slug } = params;
  const reviewData = await getReviewData(slug);

  return {
    title: `${reviewData.title} - Güvenilir İnceleme 2026`,
    description: reviewData.description,
    openGraph: {
      title: reviewData.title,
      description: reviewData.description,
      type: 'article',
    }
  };
}

export default async function ReviewPost({ params }) {
  const { slug } = params;
  const reviewData = await getReviewData(slug);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'Organization',
      name: reviewData.title.replace(' İnceleme', '')
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: reviewData.rating || 5,
      bestRating: 5
    },
    author: {
      '@type': 'Person',
      name: reviewData.author || 'Senkazan Ekibi'
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container" style={{ paddingTop: '80px', paddingBottom: '80px', maxWidth: '900px', margin: '0 auto' }}>
        
        {/* Breadcrumb */}
        <nav style={{ marginBottom: '2rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
          <Link href="/" style={{ color: 'var(--accent-glow)' }}>Ana Sayfa</Link> &raquo;{' '}
          <span style={{ color: 'var(--text-main)' }}>İncelemeler</span> &raquo;{' '}
          <span style={{ color: 'var(--text-main)' }}>{reviewData.title}</span>
        </nav>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', marginBottom: '3rem' }}>
          {/* Left: Summary Card */}
          <div className="glass-panel" style={{ flex: '1 1 300px', padding: '2rem', borderRadius: '16px', border: '1px solid var(--accent-glow)' }}>
            <h1 style={{ fontSize: '2rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>{reviewData.title}</h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1.5rem' }}>
               <span style={{ background: '#26a17b', color: '#000', padding: '4px 8px', borderRadius: '4px', fontWeight: 'bold' }}>
                 {reviewData.rating}/5 Puan
               </span>
               <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Senkazan Puanı</span>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <p style={{ margin: '0.5rem 0', color: 'var(--text-muted)' }}><strong>Lisans:</strong> <span style={{ color: 'var(--text-main)' }}>{reviewData.license || 'Mevcut'}</span></p>
              <p style={{ margin: '0.5rem 0', color: 'var(--text-muted)' }}><strong>Min Yatırım:</strong> <span style={{ color: 'var(--text-main)' }}>{reviewData.minDeposit || '50 TL'}</span></p>
              <p style={{ margin: '0.5rem 0', color: 'var(--text-muted)' }}><strong>Çekim Hızı:</strong> <span style={{ color: 'var(--text-main)' }}>{reviewData.withdrawalTime || 'Anında'}</span></p>
            </div>

            <a href="#" className="btn-primary" style={{ display: 'block', textAlign: 'center', width: '100%', padding: '15px' }}>
              Güvenle Giriş Yap
            </a>
          </div>

          {/* Right: Pros & Cons */}
          <div style={{ flex: '2 1 400px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: '16px', borderLeft: '4px solid #26a17b' }}>
              <h3 style={{ color: '#26a17b', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                👍 Avantajlar (Artılar)
              </h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {reviewData.pros && reviewData.pros.map((pro, i) => (
                  <li key={i} style={{ marginBottom: '0.5rem', color: 'var(--text-main)', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <span style={{ color: '#26a17b' }}>✓</span> {pro}
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: '16px', borderLeft: '4px solid #e74c3c' }}>
              <h3 style={{ color: '#e74c3c', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                👎 Dezavantajlar (Eksiler)
              </h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {reviewData.cons && reviewData.cons.map((con, i) => (
                  <li key={i} style={{ marginBottom: '0.5rem', color: 'var(--text-main)', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <span style={{ color: '#e74c3c' }}>×</span> {con}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Markdown Content */}
        <div className="glass-panel" style={{ padding: '2.5rem', borderRadius: '16px' }}>
          <article className="markdown-content" dangerouslySetInnerHTML={{ __html: reviewData.contentHtml }} />
        </div>

      </div>

      <style>{`
        .markdown-content h2 { font-size: 1.8rem; margin-top: 2rem; margin-bottom: 1rem; color: var(--text-main); border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 0.5rem; }
        .markdown-content h3 { font-size: 1.4rem; margin-top: 1.5rem; margin-bottom: 1rem; color: var(--text-main); }
        .markdown-content p { font-size: 1.05rem; line-height: 1.7; color: var(--text-muted); margin-bottom: 1.5rem; }
        .markdown-content ul, .markdown-content ol { margin-bottom: 1.5rem; padding-left: 1.5rem; color: var(--text-muted); }
        .markdown-content li { margin-bottom: 0.5rem; line-height: 1.6; }
        .markdown-content strong { color: var(--text-main); }
      `}</style>
    </>
  );
}

export async function generateStaticParams() {
  const paths = getAllReviewSlugs();
  return paths.map((path) => ({
    slug: path.params.slug,
  }));
}
