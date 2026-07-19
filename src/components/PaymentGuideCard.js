'use client';

import { useState } from 'react';

export default function PaymentGuideCard() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="guide-card glass-panel">
        <span className="guide-meta">Ödeme Rehberi</span>
        <h3>Para Çekimi En Hızlı ve Güvenli 5 Metot</h3>
        <p>Casino sitelerinden para çekerken kimlik ifşası yaşamamak ve anında hesabınıza aktarmak için Papara ve Kripto (Tether/USDT) kullanım ipuçları.</p>
        <button 
          onClick={(e) => { e.preventDefault(); setShowModal(true); }} 
          className="guide-link" 
          style={{ background: 'transparent', border: 'none', padding: 0, cursor: 'pointer', fontSize: '1rem', fontWeight: 600, color: 'var(--primary)' }}
        >
          Daha Fazla Oku →
        </button>
      </div>

      {showModal && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, width: '100vw', height: '100vh',
          background: 'rgba(0,0,0,0.7)',
          backdropFilter: 'blur(8px)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem'
        }} onClick={() => setShowModal(false)}>
          
          <div 
            className="glass-panel"
            style={{
              width: '100%',
              maxWidth: '550px',
              maxHeight: '90vh',
              background: 'linear-gradient(145deg, rgba(20,22,35,0.95) 0%, rgba(10,12,20,1) 100%)',
              borderRadius: '20px',
              border: '1px solid rgba(255,255,255,0.1)',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              overflow: 'hidden',
              textAlign: 'left'
            }}
            onClick={e => e.stopPropagation()}
          >
            <button 
              onClick={() => setShowModal(false)}
              style={{
                position: 'absolute', top: '15px', right: '15px',
                background: 'rgba(255,255,255,0.1)', border: 'none',
                color: 'white', width: '32px', height: '32px', borderRadius: '50%',
                cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.2rem', zIndex: 10
              }}
            >
              &times;
            </button>

            <div style={{ padding: '2rem', overflowY: 'auto' }}>
              <h2 style={{ fontSize: '1.6rem', marginBottom: '1.5rem', color: 'var(--primary)', fontWeight: 800 }}>
                Ödeme Metotları Özet Rehberi
              </h2>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ color: 'var(--text-main)', fontSize: '1.2rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: '#00c3ff' }}>💳</span> Papara
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  Türkiye'nin en popüler dijital cüzdanıdır. Para yatırma ve çekme işlemleri genellikle 1-5 dakika içinde gerçekleşir. Banka hesaplarına aktarımda hız sunarken, hesap hareketlerinin BDDK gözetiminde olduğunu unutmamak gerekir.
                </p>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ color: 'var(--text-main)', fontSize: '1.2rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: '#26a17b' }}>🟢</span> Kripto (Tether / USDT)
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  Tamamen anonim ve izi sürülemeyen en güvenilir ödeme yöntemidir. Büyük meblağlı çekimlerde sınır ve limitlere takılmadan TRC-20 veya ERC-20 ağları üzerinden dakikalar içinde işlem yapabilirsiniz.
                </p>
              </div>
            </div>

            <div style={{ padding: '1rem', background: 'rgba(0,0,0,0.3)', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
              <button 
                onClick={() => setShowModal(false)} 
                className="btn-primary" 
                style={{ width: '100%', padding: '0.8rem', border: 'none', cursor: 'pointer' }}
              >
                Anladım, Kapat
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
