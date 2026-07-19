import CasinoList from '@/components/CasinoList';
import PromoCodes from '@/components/PromoCodes';

export const metadata = {
  title: "En İyi Casino Bonusları 2026 - Senkazan.pro",
  description: "En yüksek hoşgeldin bonusları, çevrimsiz deneme bonusları, kayıp iadeleri ve üyelere özel güncel promosyon kodları.",
};

export default function BonusesPage() {
  return (
    <main style={{ minHeight: '100vh', paddingTop: '80px' }}>
      {/* Hero Header */}
      <section style={{ 
        padding: '4rem 0 2rem', 
        textAlign: 'center', 
        background: 'radial-gradient(circle at center, rgba(0, 255, 135, 0.05) 0%, transparent 60%)',
        borderBottom: '1px solid var(--border-color)'
      }}>
        <div className="container">
          <span className="badge-green" style={{ marginBottom: '1rem', display: 'inline-block' }}>
            🔥 EN GÜNCEL TEKLİFLER
          </span>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '0.75rem' }}>
            Casino & Bahis <span className="premium-gradient">Bonus Fırsatları</span>
          </h1>
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto', fontSize: '1.05rem' }}>
            Türkiye&apos;nin en güvenilir sitelerinin güncel giriş adresleri, ilk yatırım bonusları ve deneme kodları.
          </p>
        </div>
      </section>

      {/* Casino List */}
      <CasinoList />

      {/* Promo Codes */}
      <PromoCodes />
    </main>
  );
}
