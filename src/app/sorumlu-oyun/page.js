export const metadata = {
  title: 'Sorumlu Oyun Politikası - Senkazan.pro',
  description: 'Kumar bağımlılığını önleme ve sorumlu oyun politikalarımız.',
};

export default function SorumluOyun() {
  return (
    <div className="container" style={{ paddingTop: '100px', paddingBottom: '100px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 className="hero-title" style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Sorumlu Oyun <span className="premium-gradient">Politikası</span></h1>
      
      <div className="glass-panel" style={{ padding: '2rem', borderRadius: '16px' }}>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
          Senkazan.pro olarak, casino ve bahis oyunlarının yalnızca bir <strong>eğlence amacı</strong> taşıması gerektiğine inanıyoruz. Oyunları maddi kazanç elde etme yolu veya borç ödeme aracı olarak görmek ciddi finansal ve psikolojik sorunlara yol açabilir.
        </p>

        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-main)' }}>Güvenli Oyun İçin Tavsiyelerimiz</h2>
        <ul style={{ color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
          <li>Oyunlara ayıracağınız bütçeyi önceden belirleyin ve asla aşmayın.</li>
          <li>Kayıplarınızı telafi etmek için daha büyük bahisler almaktan kaçının.</li>
          <li>Günlük zaman sınırları koyun (örneğin sadece 1 saat).</li>
          <li>Asla borç parayla veya acil ihtiyaçlarınızı karşılayacak parayla kumar oynamayın.</li>
        </ul>

        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-main)' }}>Bağımlılık Durumunda Yardım Alın</h2>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.7' }}>
          Kumarın kontrolünüzden çıktığını veya hayatınızı olumsuz etkilediğini düşünüyorsanız, hemen profesyonel destek almalısınız. GamCare veya GambleAware gibi uluslararası destek kuruluşlarından yardım alabilirsiniz. Ayrıca tüm yasal casino siteleri "Hesap Dondurma" (Self-Exclusion) seçeneği sunmak zorundadır.
        </p>
      </div>
    </div>
  );
}
