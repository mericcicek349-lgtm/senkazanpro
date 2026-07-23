import Link from "next/link";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Senkazan.pro - En Güvenilir Bahis ve Casino Siteleri 2026",
  description: "En güvenilir online casino ve bahis sitelerinin detaylı incelemeleri, güncel deneme bonusları, kayıp bonusları ve özel promosyon kodları.",
  keywords: "casino siteleri, bahis siteleri, güvenilir casino, deneme bonusu, casino incelemeleri, papara bahis, kripto casino",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>
        <Navbar />
        {children}
        <footer className="footer">
          <div className="container">
            <div className="footer-grid">
              <div className="footer-info">
                <div className="logo" style={{ marginBottom: '1rem' }}>
                  <span className="logo-icon"></span>
                  <span className="premium-gradient">SENKAZAN</span>
                  <span style={{ fontWeight: 400, color: 'var(--text-main)' }}>.PRO</span>
                </div>
                <p>
                  Senkazan.pro, Türkiye&apos;deki en güvenilir casino ve bahis platformlarını tarafsız bir şekilde analiz eden bağımsız bir rehberdir. En güncel bonus fırsatlarını ve lisans bilgilerini sunar.
                </p>
                <div className="footer-socials">
                  <a href="#" className="footer-social-icon" aria-label="Telegram">TG</a>
                  <a href="#" className="footer-social-icon" aria-label="Twitter">TW</a>
                  <a href="#" className="footer-social-icon" aria-label="Instagram">IG</a>
                </div>
              </div>

              <div className="footer-links-col">
                <h4>Hızlı Bağlantılar</h4>
                <ul>
                  <li><Link href="/">Ana Sayfa</Link></li>
                  <li><Link href="/bonuses">En İyi Bonuslar</Link></li>
                  <li><Link href="/comparison">Karşılaştırma</Link></li>
                  <li><Link href="/calculator">Bonus Hesapla</Link></li>
                  <li><Link href="/guides">Rehberler</Link></li>
                </ul>
              </div>

              <div className="footer-links-col">
                <h4>Kategoriler</h4>
                <ul>
                  <li><a href="#bonuses">Deneme Bonusları</a></li>
                  <li><a href="#bonuses">Kripto Casino</a></li>
                  <li><a href="#bonuses">Hızlı Para Çekim</a></li>
                  <li><Link href="/rehberler">Lisans Kontrolü</Link></li>
                </ul>
              </div>

              <div className="footer-links-col">
                <h4>Kurumsal</h4>
                <ul>
                  <li><Link href="/hakkimizda">Hakkımızda</Link></li>
                  <li><Link href="/sorumlu-oyun">Sorumlu Oyun Politikası</Link></li>
                  <li><Link href="/gizlilik-politikasi">Gizlilik ve Çerez Politikası</Link></li>
                  <li><Link href="/iletisim">İletişim</Link></li>
                </ul>
              </div>
            </div>

            <div className="footer-bottom">
              <div className="footer-warning">
                <span className="warning-icon">18</span>
                <span>Lütfen bilinçli ve sorumlu bir şekilde oynayınız. Bahis oynamak bağımlılık yapabilir.</span>
              </div>
              <div className="footer-logos">
                <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>CURACAO EGAMING</span>
                <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>MALTA GAMING AUTHORITY</span>
                <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>RESPONSIBLE GAMBLING</span>
              </div>
              <p style={{ fontSize: '0.8rem', marginTop: '1rem', color: 'var(--text-dim)' }}>
                &copy; {new Date().getFullYear()} Senkazan.pro. Tüm hakları saklıdır. Bu site sadece bilgilendirme amaçlıdır ve kumar oynatmaz.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
