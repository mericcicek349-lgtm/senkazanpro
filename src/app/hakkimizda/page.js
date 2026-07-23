export const metadata = {
  title: 'Hakkımızda - Senkazan.pro',
  description: 'Senkazan.pro editör ekibi, inceleme metodolojimiz ve iGaming vizyonumuz hakkında detaylı bilgi.',
};

export default function Hakkimizda() {
  return (
    <div className="container" style={{ paddingTop: '100px', paddingBottom: '100px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 className="hero-title" style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Hakkımızda & <span className="premium-gradient">İnceleme Metodolojisi</span></h1>
      
      <div className="glass-panel" style={{ padding: '2rem', borderRadius: '16px' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-main)' }}>Biz Kimiz?</h2>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
          Senkazan.pro, 10 yılı aşkın iGaming ve casino sektörü deneyimine sahip uzman editörler tarafından kurulan bağımsız bir rehberlik ve inceleme platformudur. 
          Amacımız, Türkiye pazarında oyuncuları sahte ve lisanssız sitelerden koruyarak, en yüksek oranları ve en güvenilir para çekim süreçlerini sunan platformları şeffaf bir şekilde listelemektir.
        </p>

        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-main)' }}>İnceleme Metodolojimiz</h2>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
          Platformumuzdaki her casino incelemesi, 5 temel E-E-A-T (Deneyim, Uzmanlık, Yetki ve Güvenilirlik) prensibine dayanır:
        </p>
        <ul style={{ color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
          <li><strong>Lisans Denetimi:</strong> Yalnızca Curacao eGaming, MGA veya UKGC tarafından denetlenen siteler incelenir.</li>
          <li><strong>Finansal Testler:</strong> Editörlerimiz gerçek bakiye yüklemesi ve çekimi yaparak süreç hızlarını bizzat test eder.</li>
          <li><strong>Müşteri Destek Testi:</strong> Canlı destek hız ve çözüm odaklılığı test edilir.</li>
          <li><strong>Bonus Şeffaflığı:</strong> Gizli çevrim şartı olan bonuslar "eksiler" bölümünde ifşa edilir.</li>
        </ul>

        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-main)' }}>Bağımsızlık Beyanı</h2>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.7' }}>
          Sitemizde yer alan affiliate (ortaklık) bağlantıları, tarafsız puanlamalarımızı kesinlikle etkilemez. Önceliğimiz her zaman oyuncu güvenliği ve şeffaflığıdır.
        </p>
      </div>
    </div>
  );
}
