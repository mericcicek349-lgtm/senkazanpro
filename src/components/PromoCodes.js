'use client';

import { useState } from 'react';

export default function PromoCodes() {
  const [toasts, setToasts] = useState([]);
  const [toastIdCounter, setToastIdCounter] = useState(0);

  const promoCodesData = [
    { id: 1, brand: 'SpinPremium', code: 'SPIN100', benefit: '100 Free Spin', detail: 'Min. ₺200 yatırım ile geçerlidir. Gates of Olympus oyununda geçerli.' },
    { id: 2, brand: 'SlotVista', code: 'VISTA200', benefit: '%200 Çevrimsiz Bonus', detail: 'İlk slot yatırımınıza özel çevrimsiz ek bakiye tanımlanır.' },
    { id: 3, brand: 'CryptoBet', code: 'CRYPTOFSD', benefit: '₺250 Deneme Bonusu', detail: 'Üyelik sonrası canlı destekten talep edilebilir. Çevrim şartı yoktur.' },
    { id: 4, brand: 'CasinoGold', code: 'GOLDVIP', benefit: '%25 Anlık Kayıp İadesi', detail: 'Tüm canlı casino kayıplarınızda geçerli VIP cashback oranı.' }
  ];

  const addToast = (message) => {
    const nextId = toastIdCounter + 1;
    setToastIdCounter(nextId);
    setToasts((prev) => [...prev, { id: nextId, message }]);
    
    // Auto remove toast after 3 seconds
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== nextId));
    }, 3000);
  };

  const handleCopy = (code, brand) => {
    navigator.clipboard.writeText(code);
    addToast(`${brand} özel kodu "${code}" panoya kopyalandı!`);
  };

  return (
    <section id="codes" style={{ padding: '6rem 0', background: 'linear-gradient(180deg, rgba(22, 25, 41, 0.4) 0%, var(--bg-dark) 100%)' }}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Üyelere Özel <span className="premium-gradient">Promosyon Kodları</span>
          </h2>
          <p className="section-desc">
            Aşağıdaki özel kodları kullanarak üyelik işlemlerinizde ekstra bonus ve çevrimsiz bedava dönüşler kazanabilirsiniz.
          </p>
        </div>

        <div className="promo-grid">
          {promoCodesData.map((promo) => (
            <div key={promo.id} className="promo-card glass-panel">
              <span className="badge-green" style={{ alignSelf: 'center' }}>{promo.brand}</span>
              <h3>{promo.benefit}</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', minHeight: '40px' }}>
                {promo.detail}
              </p>
              
              <div 
                className="code-box" 
                onClick={() => handleCopy(promo.code, promo.brand)}
                title="Kopyalamak için tıklayın"
              >
                {promo.code}
                <div className="code-copy-overlay">
                  KOPYALA 📋
                </div>
              </div>
              
              <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>
                * Kopyalamak için kod kutusuna tıklayın.
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Toasts container */}
      <div className="toast-container">
        {toasts.map((toast) => (
          <div key={toast.id} className="toast">
            <span>📋</span>
            <span>{toast.message}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
