'use client';

import { useState, useEffect } from 'react';
import { casinosData } from '@/data/casinos';

export default function BonusCalculator() {
  const [deposit, setDeposit] = useState(1000);
  const [matchPercent, setMatchPercent] = useState(100);

  // Derive recommendedCasino directly during render
  const getRecommendedCasino = () => {
    const matchingCasinos = casinosData.filter(
      (c) => c.matchPercent >= matchPercent
    );

    if (matchingCasinos.length > 0) {
      return [...matchingCasinos].sort((a, b) => b.rating - a.rating)[0];
    }
    return [...casinosData].sort((a, b) => b.rating - a.rating)[0];
  };

  const recommendedCasino = getRecommendedCasino();

  const calculateBonus = () => {
    const limit = recommendedCasino.maxBonus;
    const rawBonus = deposit * (matchPercent / 100);
    return Math.min(rawBonus, limit);
  };

  const bonusValue = calculateBonus();
  const totalBalance = deposit + bonusValue;

  // Extract wagering multiplier (e.g., "30x" -> 30)
  const getWagerMultiplier = (wagerText) => {
    const match = wagerText.match(/(\d+)x/);
    return match ? parseInt(match[1]) : 30; // default 30x
  };

  const multiplier = getWagerMultiplier(recommendedCasino.wagering);
  const estimatedWagering = multiplier * (recommendedCasino.wagering.includes('Sadece') || recommendedCasino.wagering.includes('Yalnızca') ? bonusValue : totalBalance);

  return (
    <section id="calculator" style={{ padding: '6rem 0' }}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Akıllı <span className="premium-gradient">Bonus Hesaplayıcı</span>
          </h2>
          <p className="section-desc">
            Yatırmak istediğiniz tutarı belirleyin, hangi sitede ne kadar bonus alacağınızı ve çevrim şartlarını anında görün.
          </p>
        </div>

        <div className="calculator-card glass-panel">
          <div className="calc-grid">
            {/* Left Column: Controls */}
            <div className="calc-inputs">
              <div className="form-group">
                <div className="form-label-row">
                  <label htmlFor="deposit-range">Yatırım Tutarı</label>
                  <span className="label-value">₺{deposit.toLocaleString('tr-TR')}</span>
                </div>
                <input 
                  id="deposit-range"
                  type="range" 
                  min="100" 
                  max="30000" 
                  step="100" 
                  value={deposit} 
                  onChange={(e) => setDeposit(Number(e.target.value))}
                  className="slider-input"
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-dim)' }}>
                  <span>₺100</span>
                  <span>₺10.000</span>
                  <span>₺20.000</span>
                  <span>₺30.000</span>
                </div>
              </div>

              <div className="form-group">
                <label>Hedef Bonus Oranı</label>
                <div className="btn-group-toggle">
                  <button 
                    type="button"
                    className={`toggle-btn ${matchPercent === 100 ? 'active' : ''}`}
                    onClick={() => setMatchPercent(100)}
                  >
                    %100 Eşleşme
                  </button>
                  <button 
                    type="button"
                    className={`toggle-btn ${matchPercent === 150 ? 'active' : ''}`}
                    onClick={() => setMatchPercent(150)}
                  >
                    %150 Eşleşme
                  </button>
                  <button 
                    type="button"
                    className={`toggle-btn ${matchPercent === 200 ? 'active' : ''}`}
                    onClick={() => setMatchPercent(200)}
                  >
                    %200 Eşleşme
                  </button>
                </div>
              </div>

              {/* Dynamic recommendation link */}
              <div className="calc-recommendation">
                <div className="calc-rec-info">
                  <h5>Önerilen Casino</h5>
                  <p>{recommendedCasino.name}</p>
                </div>
                <div>
                  <a 
                    href={recommendedCasino.url} 
                    className="btn-primary" 
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ padding: '0.6rem 1.2rem', fontSize: '0.85rem' }}
                  >
                    Üye Ol & Bonus Al
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Results */}
            <div className="calc-results-panel">
              <div className="result-row">
                <span className="result-label">Yatırdığınız Nakit</span>
                <span className="result-value">₺{deposit.toLocaleString('tr-TR')}</span>
              </div>
              <div className="result-row">
                <span className="result-label">Kazanılan Bonus Cash</span>
                <span className="result-value accent">+ ₺{bonusValue.toLocaleString('tr-TR')}</span>
              </div>
              <div className="result-row">
                <span className="result-label">Toplam Başlangıç Bakiyesi</span>
                <span className="result-value accent" style={{ fontSize: '2.25rem' }}>
                  ₺{totalBalance.toLocaleString('tr-TR')}
                </span>
              </div>
              <div className="result-row">
                <span className="result-label">Tahmini Çevrim Şartı ({multiplier}x)</span>
                <span className="result-value" style={{ color: 'var(--accent-rose)', fontSize: '1.25rem' }}>
                  ₺{estimatedWagering.toLocaleString('tr-TR')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
