import Link from 'next/link';
import CasinoGrid from '@/components/CasinoGrid';
import { casinosData } from '@/data/casinos';
import { getSortedGuidesData } from '@/lib/markdown';

export const metadata = {
  title: "Senkazan.pro - En Güvenilir Bahis ve Casino Siteleri 2026",
  description: "Türkiye'nin en güvenilir lisanslı casino siteleri, bedava deneme bonusları, anında para çekim garantisi veren bahis siteleri listesi.",
};

export default function Home() {
  const allGuides = getSortedGuidesData().slice(0, 3); // Take top 3 for homepage

  return (
    <main>
      {/* Hero Section */}
      <section className="hero" style={{ 
        paddingTop: '120px', 
        paddingBottom: '60px',
        textAlign: 'center',
        position: 'relative'
      }}>
        <div className="container">
          <div className="badge" style={{ 
            display: 'inline-block', 
            background: 'rgba(38, 161, 123, 0.1)', 
            color: 'var(--accent-glow)',
            padding: '8px 16px',
            borderRadius: '20px',
            marginBottom: '1.5rem',
            border: '1px solid rgba(38, 161, 123, 0.2)',
            fontSize: '0.9rem',
            fontWeight: 600
          }}>
            Güncellendi: Temmuz 2026
          </div>
          
          <h1 className="hero-title" style={{ maxWidth: '800px', margin: '0 auto 1.5rem' }}>
            Türkiye'nin En Çok Kazandıran <span className="premium-gradient">Casino Siteleri</span>
          </h1>
          
          <p className="hero-subtitle" style={{ maxWidth: '600px', margin: '0 auto 3rem' }}>
            En yüksek oranlar, çevrimsiz deneme bonusları ve 5 dakikada ödeme garantisi sunan Türkiye'nin en popüler lisanslı casino sitelerini keşfedin.
            Doğrudan giriş yapmak veya bonus detaylarını görmek için inceleme butonlarına tıklayabilirsiniz.
          </p>

          <CasinoGrid casinosData={casinosData} />

        </div>
      </section>

      {/* NEW: Guide Sections */}
      <section style={{ padding: '60px 0', background: 'rgba(0,0,0,0.2)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '2rem', color: 'var(--text-main)' }}>Son Eklenen <span className="premium-gradient">Rehberler</span></h2>
            <Link href="/rehberler" style={{ color: 'var(--accent-glow)', textDecoration: 'none', fontWeight: 600 }}>
              Tümünü Gör →
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
            {allGuides.map(({ slug, category, title, description, date }) => (
              <div key={slug} className="glass-panel" style={{ padding: '1.5rem', borderRadius: '16px', transition: 'transform 0.3s' }}>
                <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ background: 'rgba(38, 161, 123, 0.2)', color: '#26a17b', padding: '4px 10px', borderRadius: '8px', fontSize: '0.85rem', textTransform: 'uppercase' }}>
                    {category}
                  </span>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{date}</span>
                </div>
                
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>{title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.5', marginBottom: '1.5rem' }}>{description}</p>

                <Link href={`/rehberler/${category}/${slug}`} className="btn-primary" style={{ display: 'inline-block', width: '100%', textAlign: 'center', padding: '10px' }}>
                  Hemen Oku
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mini Categories Section */}
      <section style={{ padding: '60px 0' }}>
        <div className="container">
          <h2 style={{ fontSize: '2rem', color: 'var(--text-main)', textAlign: 'center', marginBottom: '2rem' }}>
            Kategorilere Göz Atın
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
             {['Slot Oyunları', 'Canlı Casino', 'Crash Oyunları', 'Bonuslar', 'Ödeme Yöntemleri'].map((cat) => (
                <Link key={cat} href="/rehberler" className="glass-panel" style={{ padding: '15px 30px', borderRadius: '30px', color: 'var(--text-main)', textDecoration: 'none', fontWeight: 600, transition: 'all 0.3s' }}>
                  {cat}
                </Link>
             ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section style={{ padding: '80px 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--text-main)' }}>Senkazan.pro Otoriter iGaming Platformu</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.8' }}>
            Senkazan.pro, yalnızca bir casino listeleme platformu değil, alanında uzman editörler tarafından hazırlanan dev bir bilgi merkezi ve inceleme portalıdır. Amacımız, oyuncuları sahte sitelerden korumak, kazandıran oyunların dinamiklerini (RTP, Volatilite) açıklamak ve bilinçli oyun oynamayı teşvik etmektir.
          </p>
        </div>
      </section>
    </main>
  );
}
