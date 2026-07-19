export const metadata = {
  title: "iGaming Rehberler ve Taktikler - Senkazan.pro",
  description: "Bahis sitelerinde kazanma olasılığınızı artırmak için hazırladığımız güncel rehberler, taktikler ve sıkça sorulan sorular.",
};

import PaymentGuideCard from '@/components/PaymentGuideCard';

export default function GuidesPage() {
  return (
    <main style={{ minHeight: '100vh', paddingTop: '80px' }}>
      {/* Guides Section */}
      <section id="guides" style={{ padding: '4rem 0 6rem' }}>
        <div className="container">
          <div className="section-header">
            <span className="badge-cyan" style={{ marginBottom: '1rem', display: 'inline-block' }}>
              📚 BİLGİ KÜTÜPHANESİ
            </span>
            <h1 className="section-title" style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '0.75rem' }}>
              iGaming <span className="premium-gradient">Oyuncu Rehberleri</span>
            </h1>
            <p className="section-desc">
              Kazanma şansınızı artırmak için hazırladığımız güncel taktik ve analiz rehberlerimizi inceleyin.
            </p>
          </div>

          <div className="guides-grid">
            <div className="guide-card glass-panel">
              <span className="guide-meta">Başlangıç Rehberi</span>
              <h3>Güvenilir Casino Siteleri Nasıl Seçilir?</h3>
              <p>Türkiye pazarında binlerce site arasından dolandırıcı olmayan, lisanslı ve ödemeleri zamanında yapan platformları seçerken nelere dikkat etmeniz gerektiğini anlatıyoruz.</p>
              <a href="#" className="guide-link">Daha Fazla Oku →</a>
            </div>

            <div className="guide-card glass-panel">
              <span className="guide-meta">Bonus Taktikleri</span>
              <h3>Deneme Bonusu Veren Siteler ve Çevrim Tüyoları</h3>
              <p>Yatırım yapmadan önce siteleri test etmenizi sağlayan bedava deneme bonuslarının çevrim şartlarını en hızlı ve kolay şekilde tamamlamanın matematiksel yolları.</p>
              <a href="#" className="guide-link">Daha Fazla Oku →</a>
            </div>

            <PaymentGuideCard />
          </div>
        </div>
      </section>

      {/* SEO Content Section - Detailed Guides */}
      <section style={{ padding: '4rem 0', background: 'rgba(255, 255, 255, 0.01)', borderTop: '1px solid var(--border-color)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          
          {/* Roulette Guide */}
          <article className="glass-panel" style={{ padding: '2.5rem', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.8rem', color: 'var(--primary)', marginBottom: '1rem', fontWeight: 800 }}>Rulet Rehberi</h2>
            <div style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1.05rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <p>
                <strong>Rulet</strong>, dünyanın en popüler ve köklü casino oyunlarından biridir. Oyunun temel mantığı, dönen bir çark üzerindeki sayılara veya renklere bahis yapılmasına dayanır. Çarkın içinde dönen ufak topun (rulet topu) hangi sayının veya rengin üzerinde duracağını tahmin etmek oyunun ana amacıdır.
              </p>
              <h3 style={{ color: 'var(--text-main)', fontSize: '1.3rem', margin: '1rem 0 0.5rem' }}>Temel Rulet Kuralları</h3>
              <ul style={{ paddingLeft: '1.5rem' }}>
                <li><strong>İç Bahisler (Inside Bets):</strong> Doğrudan tek bir sayıya (Straight Up), iki sayıya (Split) veya sayılardan oluşan küçük gruplara yapılan bahislerdir. Kazanma ihtimali daha düşüktür ancak ödeme oranı çok yüksektir (örneğin tek sayıya bahis 1'e 35 verir).</li>
                <li><strong>Dış Bahisler (Outside Bets):</strong> Kırmızı/Siyah, Tek/Çift, 1-18/19-36 gibi daha geniş kapsamlı gruplara yapılan bahislerdir. Kazanma şansı %50'ye yakındır (Yeşil 0 hariç), ancak ödemeler 1'e 1 oranındadır.</li>
                <li>Avrupa Ruletinde çarkta sadece tek bir 0 (sıfır) bulunurken, Amerikan Ruletinde 0 ve 00 (çift sıfır) bulunur. Başlangıç için her zaman kazanma marjı oyuncu lehine olan <strong>Avrupa Ruleti</strong> tavsiye edilir.</li>
              </ul>
              <h3 style={{ color: 'var(--text-main)', fontSize: '1.3rem', margin: '1rem 0 0.5rem' }}>Nasıl Oynanır?</h3>
              <p>
                Krupiye bahislerin açık olduğunu duyurduğunda fişlerinizi masadaki ilgili alanlara yerleştirirsiniz. Krupiye "Bahisler kapandı" (No more bets) diyene kadar bahis yapmaya devam edebilirsiniz. Top çarkın üzerinde durduğunda kazanan sayı belirlenir ve masadaki kaybeden bahisler toplanıp kazananlara ödemeleri yapılır.
              </p>
            </div>
          </article>

          {/* Blackjack Guide */}
          <article className="glass-panel" style={{ padding: '2.5rem' }}>
            <h2 style={{ fontSize: '1.8rem', color: 'var(--primary)', marginBottom: '1rem', fontWeight: 800 }}>Blackjack Rehberi</h2>
            <div style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1.05rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <p>
                <strong>Blackjack (21)</strong>, şansa olduğu kadar stratejiye de dayalı, kasaya (krupiyeye) karşı oynanan dünyaca ünlü bir kart oyunudur. Amacınız, elinizdeki kartların toplam değerini 21'e yaklaştırmak, ancak kesinlikle 21'i geçmemektir (Bust). Aynı zamanda elinizin değerinin, krupiyenin elinden daha yüksek olması gerekir.
              </p>
              <h3 style={{ color: 'var(--text-main)', fontSize: '1.3rem', margin: '1rem 0 0.5rem' }}>Kart Değerleri</h3>
              <ul style={{ paddingLeft: '1.5rem' }}>
                <li><strong>Papaz, Kız, Vale (Resimli Kartlar):</strong> Her biri 10 puan değerindedir.</li>
                <li><strong>As (Ace):</strong> Duruma göre 1 veya 11 puan olarak sayılabilir. (Örn: Elinizde As ve 8 varsa puanınız 9 veya 19 olabilir).</li>
                <li><strong>Diğer Kartlar (2-10):</strong> Üzerlerindeki sayı değeri kadar puan alırlar.</li>
              </ul>
              <h3 style={{ color: 'var(--text-main)', fontSize: '1.3rem', margin: '1rem 0 0.5rem' }}>Nasıl Oynanır?</h3>
              <p>
                Oyun başlarken hem size hem krupiyeye ikişer kart dağıtılır. Sizin iki kartınız da açıktır ancak krupiyenin kartlarından yalnızca biri açıktır. Eğer elinizdeki ilk iki kart bir As ve bir 10 değerinde kart ise, anında "Blackjack" yapmış olursunuz ve genellikle 1.5 katı (3:2) kazanırsınız.
              </p>
              <p>Eğer Blackjack yapmadıysanız hamle sırası size geçer:</p>
              <ul style={{ paddingLeft: '1.5rem' }}>
                <li><strong>Kart İste (Hit):</strong> Elinizin değerini yükseltmek için yeni bir kart istersiniz. 21'i geçerseniz anında kaybedersiniz.</li>
                <li><strong>Dur (Stand):</strong> Elinizdeki kartların toplamından memnunsanız durursunuz ve sıra krupiyeye geçer.</li>
                <li><strong>İkiye Katla (Double Down):</strong> İlk elinizdeki kartlara güveniyorsanız, bahsinizi iki katına çıkarıp yalnızca tek bir kart daha çekersiniz.</li>
                <li><strong>Böl (Split):</strong> İlk iki kartınız aynı değerdeyse (Örn: İki tane 8), kartları bölüp iki ayrı el olarak oynamaya devam edebilirsiniz.</li>
              </ul>
            </div>
          </article>

        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section style={{ padding: '6rem 0', background: 'rgba(255, 255, 255, 0.01)', borderTop: '1px solid var(--border-color)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="section-header">
            <h2 className="section-title">Sıkça Sorulan Sorular</h2>
            <p className="section-desc">iGaming dünyası hakkında en çok merak edilen konular.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="glass-panel" style={{ padding: '1.5rem 2rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--primary)' }}>❓ Hangi casino siteleri güvenilirdir?</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                Güvenilir bir casino sitesinin en önemli kanıtı geçerli bir lisansa sahip olmasıdır (Malta Gaming Authority veya Curacao eGaming). Ayrıca kullanıcı yorumları, ödeme süreleri ve kullandığı altyapı sağlayıcıları (Evolution, Pragmatic vb.) güvenilirlik durumunu belirler.
              </p>
            </div>

            <div className="glass-panel" style={{ padding: '1.5rem 2rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--primary)' }}>❓ Deneme bonusu nasıl alınır?</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                Deneme bonusu veren sitelere yeni üye olduktan hemen sonra, herhangi bir yatırım yapmadan önce &quot;Canlı Destek&quot; hattına bağlanarak veya &quot;Promosyonlar&quot; sayfasından kodu aktif ederek deneme bonusunuzu hesabınıza tanımlatabilirsiniz.
              </p>
            </div>

            <div className="glass-panel" style={{ padding: '1.5rem 2rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--primary)' }}>❓ Çevrim şartı nedir?</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                Sitelerin verdiği bonus paraları çekilebilir nakit bakiyeye dönüştürmek için oynamanız gereken toplam oyun miktarıdır. Örneğin; 30x çevrim şartı olan ₺100 bonus aldıysanız, slot oyunlarında toplam ₺3.000 değerinde bahis yapmanız gerekir.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
