'use client';

import { useState, useEffect } from 'react';
import { casinosData } from '@/data/casinos';
import BrandLogo from '@/components/BrandLogo';

export default function CasinoList({ onCompareToggle, compareIds: propCompareIds = [] }) {
  const [category, setCategory] = useState('all');
  const [expandedId, setExpandedId] = useState(null);
  const [mounted, setMounted] = useState(false);
  const [compareIds, setCompareIds] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('igaming_compare_ids');
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch (e) {
          console.error(e);
        }
      }
    }
    return propCompareIds;
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const handleCompareToggleLocal = (id) => {
    let updated;
    if (compareIds.includes(id)) {
      updated = compareIds.filter((item) => item !== id);
    } else {
      if (compareIds.length >= 2) {
        updated = [compareIds[1], id];
      } else {
        updated = [...compareIds, id];
      }
    }
    setCompareIds(updated);
    localStorage.setItem('igaming_compare_ids', JSON.stringify(updated));
    if (onCompareToggle) {
      onCompareToggle(id);
    }
  };

  const filterCasinos = () => {
    if (category === 'all') return casinosData;
    return casinosData.filter((c) => c.categories.includes(category));
  };

  const handleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 !== 0;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<span key={i} className="star-gold">★</span>);
      } else if (i === fullStars + 1 && hasHalf) {
        stars.push(<span key={i} className="star-gold">⯪</span>);
      } else {
        stars.push(<span key={i} className="star-dim">★</span>);
      }
    }
    return stars;
  };

  return (
    <section id="bonuses" style={{ padding: '6rem 0' }}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Günün En İyi <span className="premium-gradient">Casino Teklifleri</span>
          </h2>
          <p className="section-desc">
            Editörlerimiz tarafından lisans, ödeme hızı ve güvenilirlik testlerinden tam not almış güncel liste.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="filter-wrapper">
          <button 
            className={`filter-btn ${category === 'all' ? 'active' : ''}`}
            onClick={() => setCategory('all')}
          >
            Tümü
          </button>
          <button 
            className={`filter-btn ${category === 'best-bonus' ? 'active' : ''}`}
            onClick={() => setCategory('best-bonus')}
          >
            🔥 Yüksek Bonuslar
          </button>
          <button 
            className={`filter-btn ${category === 'fast-payout' ? 'active' : ''}`}
            onClick={() => setCategory('fast-payout')}
          >
            ⚡ Hızlı Çekim
          </button>
          <button 
            className={`filter-btn ${category === 'crypto' ? 'active' : ''}`}
            onClick={() => setCategory('crypto')}
          >
            🪙 Kripto Dostu
          </button>
        </div>

        {/* Casino List Container */}
        <div className="casino-list-container">
          {filterCasinos().map((casino, index) => {
            const isExpanded = expandedId === casino.id;
            const isComparing = mounted && compareIds.includes(casino.id);

            return (
              <div 
                key={casino.id} 
                className={`casino-row-card glass-panel ${isExpanded ? 'expanded' : ''}`}
              >
                {/* Ranking Badge */}
                <div className="rank-num">#{index + 1}</div>

                {/* Main Card Content */}
                <div className="casino-card-main">
                  {/* Brand & Logo */}
                  <div className="casino-brand-info">
                    <div className="casino-avatar" style={{ padding: '4px', background: 'transparent' }}>
                      <BrandLogo brandId={casino.id} size={48} />
                    </div>
                    <div>
                      <div className="casino-name-row">
                        <h3>{casino.name}</h3>
                        {casino.badge && (
                          <span className={`badge-${index === 0 ? 'gold' : index === 1 ? 'cyan' : 'green'}`}>
                            {casino.badge}
                          </span>
                        )}
                      </div>
                      <div className="rating-box">
                        <span className="stars">{renderStars(casino.rating)}</span>
                        <span className="rating-val">{casino.rating}</span>
                        <span className="rating-count">({casino.ratingCount} oy)</span>
                      </div>
                    </div>
                  </div>

                  {/* Bonus Highlights */}
                  <div className="casino-bonus-details">
                    <div className="bonus-amount-highlight">{casino.bonusTitle}</div>
                    <div className="bonus-sub-text">{casino.bonusSubtitle}</div>
                  </div>

                  {/* Features Quick List */}
                  <div className="casino-quick-features">
                    <ul>
                      {casino.features.slice(0, 2).map((feat, fIdx) => (
                        <li key={fIdx}>✓ {feat}</li>
                      ))}
                    </ul>
                  </div>

                  {/* CTAs */}
                  <div className="casino-actions">
                    <a 
                      href={casino.url} 
                      className="btn-primary" 
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ width: '100%', padding: '0.75rem 1.2rem', fontSize: '0.9rem' }}
                    >
                      Bonus Al
                    </a>
                    
                    <div className="action-row-buttons">
                      <button 
                        className={`btn-secondary-action ${isComparing ? 'comparing' : ''}`}
                        onClick={() => handleCompareToggleLocal(casino.id)}
                        title="Karşılaştırma listesine ekle"
                      >
                        {isComparing ? '✓ Karşılaştırılıyor' : '⇆ Karşılaştır'}
                      </button>

                      <button 
                        className="btn-details-toggle"
                        onClick={() => handleExpand(casino.id)}
                      >
                        {isExpanded ? 'Detayları Gizle ▲' : 'Detayları İncele ▼'}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Expanded Details Drawer */}
                {isExpanded && (
                  <div className="casino-details-drawer">
                    <div className="drawer-grid">
                      <div className="drawer-col">
                        <h4>İnceleme Özeti</h4>
                        <div className="pros-cons-container">
                          <div className="pro-list">
                            <h5>Avantajlar</h5>
                            <ul>
                              {casino.pros.map((pro, pIdx) => (
                                <li key={pIdx}>🟩 {pro}</li>
                              ))}
                            </ul>
                          </div>
                          <div className="con-list">
                            <h5>Dezavantajlar</h5>
                            <ul>
                              {casino.cons.map((con, cIdx) => (
                                <li key={cIdx}>🟥 {con}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="drawer-col specs-col">
                        <h4>Teknik Bilgiler</h4>
                        <div className="spec-table">
                          <div className="spec-row">
                            <span>Çekim Hızı:</span>
                            <strong>⚡ {casino.payoutSpeed}</strong>
                          </div>
                          <div className="spec-row">
                            <span>Lisans:</span>
                            <strong>🛡️ {casino.license}</strong>
                          </div>
                          <div className="spec-row">
                            <span>Min. Yatırım:</span>
                            <strong>{casino.minDeposit}</strong>
                          </div>
                          <div className="spec-row">
                            <span>Çevrim Şartı:</span>
                            <strong>{casino.wagering}</strong>
                          </div>
                        </div>
                      </div>

                      <div className="drawer-col payment-col">
                        <h4>Yatırım Yöntemleri</h4>
                        <div className="payment-methods-grid">
                          {casino.depositMethods.map((method, mIdx) => (
                            <span key={mIdx} className="payment-badge">
                              {method}
                            </span>
                          ))}
                        </div>
                        <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '1.5rem' }}>
                          * Ödemeleriniz SSL şifreli güvenli altyapı ile gerçekleşir.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
