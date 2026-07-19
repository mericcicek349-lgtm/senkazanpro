'use client';

import { useState, useEffect } from 'react';
import { casinosData } from '@/data/casinos';
import BrandLogo from '@/components/BrandLogo';

export default function CasinoCompare() {
  const [mounted, setMounted] = useState(false);
  const [selectedIdA, setSelectedIdA] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('igaming_compare_ids');
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          if (parsed[0]) return parsed[0];
        } catch (e) {
          console.error(e);
        }
      }
    }
    return casinosData[0].id;
  });

  const [selectedIdB, setSelectedIdB] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('igaming_compare_ids');
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          if (parsed[1]) return parsed[1];
        } catch (e) {
          console.error(e);
        }
      }
    }
    return casinosData[1].id;
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const casinoA = casinosData.find((c) => c.id === selectedIdA) || casinosData[0];
  const casinoB = casinosData.find((c) => c.id === selectedIdB) || casinosData[1];

  if (!mounted) {
    return (
      <section id="comparison" style={{ padding: '6rem 0', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ color: 'var(--primary)', fontSize: '1.25rem', fontWeight: 'bold' }}>
          Yükleniyor...
        </div>
      </section>
    );
  }

  const handleSelectA = (e) => {
    const id = e.target.value;
    setSelectedIdA(id);
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('igaming_compare_ids');
      let current = saved ? JSON.parse(saved) : [];
      current[0] = id;
      localStorage.setItem('igaming_compare_ids', JSON.stringify(current));
    }
  };

  const handleSelectB = (e) => {
    const id = e.target.value;
    setSelectedIdB(id);
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('igaming_compare_ids');
      let current = saved ? JSON.parse(saved) : [];
      current[1] = id;
      localStorage.setItem('igaming_compare_ids', JSON.stringify(current));
    }
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<span key={i} className="star-gold">★</span>);
      } else {
        stars.push(<span key={i} className="star-dim">★</span>);
      }
    }
    return stars;
  };

  // Helper to check which casino is "better" on certain metrics
  const isBetterRating = (valA, valB) => valA > valB;
  const isBetterWagering = (wagA, wagB) => {
    // Quick parse: smaller wagering number is better
    const numA = parseInt(wagA) || 99;
    const numB = parseInt(wagB) || 99;
    return numA < numB;
  };

  return (
    <section id="comparison" style={{ padding: '6rem 0', background: 'linear-gradient(180deg, var(--bg-dark) 0%, rgba(22, 25, 41, 0.4) 100%)' }}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Detaylı <span className="premium-gradient">Casino Karşılaştırma</span>
          </h2>
          <p className="section-desc">
            Seçtiğiniz iki casino markasını kafa kafaya karşılaştırın, ihtiyaçlarınıza en uygun olanı anında bulun.
          </p>
        </div>

        <div className="compare-container">
          {/* Casino A selector & Specs */}
          <div className="compare-card glass-panel">
            <div className="compare-dropdown-wrapper">
              <select 
                className="compare-select" 
                value={selectedIdA} 
                onChange={handleSelectA}
              >
                {casinosData.map((c) => (
                  <option key={c.id} value={c.id}>{c.name}</option>
                ))}
              </select>
            </div>

            <div className="compare-specs-list">
              <div className="compare-spec-item" style={{ textAlign: 'center', padding: '1.5rem 0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ marginBottom: '1rem' }}>
                  <BrandLogo brandId={casinoA.id} size={64} />
                </div>
                <div style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--primary)', marginBottom: '0.5rem', lineHeight: 1 }}>
                  {casinoA.rating}
                </div>
                <div className="stars" style={{ justifyContent: 'center', marginBottom: '0.25rem' }}>
                  {renderStars(casinoA.rating)}
                </div>
                <span className="rating-count">{casinoA.ratingCount} Kullanıcı Oyu</span>
              </div>

              <div className="compare-spec-item">
                <span className="compare-spec-label">Hoşgeldin Bonusu</span>
                <span className="compare-spec-value positive">{casinoA.bonusTitle}</span>
              </div>

              <div className="compare-spec-item">
                <span className="compare-spec-label">Eşleşme Oranı</span>
                <span className="compare-spec-value">%{casinoA.matchPercent} Eşleşme</span>
              </div>

              <div className="compare-spec-item">
                <span className="compare-spec-label">Çevrim Şartı</span>
                <span className={`compare-spec-value ${isBetterWagering(casinoA.wagering, casinoB.wagering) ? 'positive' : ''}`}>
                  {casinoA.wagering} {isBetterWagering(casinoA.wagering, casinoB.wagering) && '⚡'}
                </span>
              </div>

              <div className="compare-spec-item">
                <span className="compare-spec-label">Ödeme Hızı</span>
                <span className="compare-spec-value" style={{ color: 'var(--accent-cyan)' }}>
                  ⏳ {casinoA.payoutSpeed}
                </span>
              </div>

              <div className="compare-spec-item">
                <span className="compare-spec-label">Min. Yatırım</span>
                <span className="compare-spec-value">{casinoA.minDeposit}</span>
              </div>

              <div className="compare-spec-item">
                <span className="compare-spec-label">Lisans</span>
                <span className="compare-spec-value" style={{ fontSize: '0.95rem' }}>🛡️ {casinoA.license}</span>
              </div>

              <div className="compare-spec-item">
                <span className="compare-spec-label">Öne Çıkan Avantaj</span>
                <span className="compare-spec-value" style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                  🟩 {casinoA.pros[0]}
                </span>
              </div>

              <div style={{ marginTop: '1.5rem' }}>
                <a href={casinoA.url} className="btn-primary" target="_blank" rel="noopener noreferrer" style={{ width: '100%' }}>
                  {casinoA.name} Sitesine Git
                </a>
              </div>
            </div>
          </div>

          {/* VS Center Divider */}
          <div className="compare-vs-badge">
            <div className="vs-circle">VS</div>
          </div>

          {/* Casino B selector & Specs */}
          <div className="compare-card glass-panel">
            <div className="compare-dropdown-wrapper">
              <select 
                className="compare-select" 
                value={selectedIdB} 
                onChange={handleSelectB}
              >
                {casinosData.map((c) => (
                  <option key={c.id} value={c.id} disabled={c.id === selectedIdA}>{c.name}</option>
                ))}
              </select>
            </div>

            <div className="compare-specs-list">
              <div className="compare-spec-item" style={{ textAlign: 'center', padding: '1.5rem 0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ marginBottom: '1rem' }}>
                  <BrandLogo brandId={casinoB.id} size={64} />
                </div>
                <div style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--primary)', marginBottom: '0.5rem', lineHeight: 1 }}>
                  {casinoB.rating}
                </div>
                <div className="stars" style={{ justifyContent: 'center', marginBottom: '0.25rem' }}>
                  {renderStars(casinoB.rating)}
                </div>
                <span className="rating-count">{casinoB.ratingCount} Kullanıcı Oyu</span>
              </div>

              <div className="compare-spec-item">
                <span className="compare-spec-label">Hoşgeldin Bonusu</span>
                <span className="compare-spec-value positive">{casinoB.bonusTitle}</span>
              </div>

              <div className="compare-spec-item">
                <span className="compare-spec-label">Eşleşme Oranı</span>
                <span className="compare-spec-value">%{casinoB.matchPercent} Eşleşme</span>
              </div>

              <div className="compare-spec-item">
                <span className="compare-spec-label">Çevrim Şartı</span>
                <span className={`compare-spec-value ${isBetterWagering(casinoB.wagering, casinoA.wagering) ? 'positive' : ''}`}>
                  {casinoB.wagering} {isBetterWagering(casinoB.wagering, casinoA.wagering) && '⚡'}
                </span>
              </div>

              <div className="compare-spec-item">
                <span className="compare-spec-label">Ödeme Hızı</span>
                <span className="compare-spec-value" style={{ color: 'var(--accent-cyan)' }}>
                  ⏳ {casinoB.payoutSpeed}
                </span>
              </div>

              <div className="compare-spec-item">
                <span className="compare-spec-label">Min. Yatırım</span>
                <span className="compare-spec-value">{casinoB.minDeposit}</span>
              </div>

              <div className="compare-spec-item">
                <span className="compare-spec-label">Lisans</span>
                <span className="compare-spec-value" style={{ fontSize: '0.95rem' }}>🛡️ {casinoB.license}</span>
              </div>

              <div className="compare-spec-item">
                <span className="compare-spec-label">Öne Çıkan Avantaj</span>
                <span className="compare-spec-value" style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                  🟩 {casinoB.pros[0]}
                </span>
              </div>

              <div style={{ marginTop: '1.5rem' }}>
                <a href={casinoB.url} className="btn-primary" target="_blank" rel="noopener noreferrer" style={{ width: '100%' }}>
                  {casinoB.name} Sitesine Git
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
