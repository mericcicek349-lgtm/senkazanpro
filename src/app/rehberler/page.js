import Link from 'next/link';
import { getSortedGuidesData } from '@/lib/markdown';

export const metadata = {
  title: 'Casino ve Slot Rehberleri - Senkazan.pro',
  description: 'Aviator, Rulet, Blackjack ve Popüler Slot oyunları hakkında en kapsamlı rehberler ve kazanma taktikleri.',
};

export default function RehberlerPage() {
  const allGuides = getSortedGuidesData();

  return (
    <div className="container" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
      <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 className="hero-title" style={{ fontSize: '2.5rem' }}>
          Casino <span className="premium-gradient">Rehberleri</span>
        </h1>
        <p className="hero-subtitle" style={{ fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
          Kazanma şansınızı artıracak taktikler, oyun kuralları ve sektör terimleri.
        </p>
      </header>

      <div className="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
        {allGuides.map(({ slug, category, title, description, date }) => (
          <div key={slug} className="glass-panel" style={{ padding: '1.5rem', borderRadius: '16px', transition: 'transform 0.3s' }}>
            <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ background: 'rgba(38, 161, 123, 0.2)', color: '#26a17b', padding: '4px 10px', borderRadius: '8px', fontSize: '0.85rem', textTransform: 'uppercase' }}>
                {category}
              </span>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                {date}
              </span>
            </div>
            
            <h2 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>
              {title}
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.5', marginBottom: '1.5rem' }}>
              {description}
            </p>

            <Link href={`/rehberler/${category}/${slug}`} className="btn-primary" style={{ display: 'inline-block', width: '100%', textAlign: 'center', padding: '10px' }}>
              Rehberi Oku
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
