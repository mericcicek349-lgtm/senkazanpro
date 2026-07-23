'use client';

import { useState } from 'react';

export default function BonusCalculator() {
  const [deposit, setDeposit] = useState(1000);
  const [matchPercent, setMatchPercent] = useState(100);
  const [wagering, setWagering] = useState(30);

  const bonusValue = deposit * (matchPercent / 100);
  const totalBalance = deposit + bonusValue;
  // Estimated volume is usually bonus * wagering OR (deposit + bonus) * wagering. We'll use bonus * wagering as standard in TR.
  const estimatedWagering = bonusValue * wagering;

  return (
    <section id="calculator" style={{ padding: '6rem 0' }}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Gelişmiş <span className="premium-gradient">Bonus Hesaplayıcı</span>
          </h2>
          <p className="section-desc">
            Yatırmak istediğiniz tutarı, bonus oranını ve çevrim katsayısını belirleyerek ulaşmanız gereken oyun hacmini net bir şekilde hesaplayın.
          </p>
        </div>

        <div className="calculator-card glass-panel" style={{ padding: '2rem', borderRadius: '24px', border: '1px solid rgba(38,161,123,0.3)' }}>
          <div className="calc-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
            
            {/* Left Column: Controls */}
            <div className="calc-inputs" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              
              <div className="form-group">
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <label style={{ color: 'var(--text-main)', fontWeight: 'bold' }}>Yatırım Tutarı</label>
                  <span style={{ color: 'var(--accent-glow)', fontWeight: 'bold' }}>₺{deposit.toLocaleString('tr-TR')}</span>
                </div>
                <input 
                  type="range" 
                  min="100" 
                  max="50000" 
                  step="100" 
                  value={deposit} 
                  onChange={(e) => setDeposit(Number(e.target.value))}
                  style={{ width: '100%', accentColor: '#26a17b' }}
                />
              </div>

              <div className="form-group">
                <label style={{ display: 'block', color: 'var(--text-main)', fontWeight: 'bold', marginBottom: '1rem' }}>Bonus Oranı</label>
                <div style={{ display: 'flex', gap: '10px' }}>
                  {[50, 100, 150, 200].map(val => (
                    <button 
                      key={val}
                      onClick={() => setMatchPercent(val)}
                      style={{
                        flex: 1, padding: '10px', borderRadius: '8px', border: 'none', cursor: 'pointer', fontWeight: 'bold',
                        background: matchPercent === val ? '#26a17b' : 'rgba(255,255,255,0.1)',
                        color: matchPercent === val ? '#000' : '#fff'
                      }}
                    >
                      %{val}
                    </button>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <label style={{ color: 'var(--text-main)', fontWeight: 'bold' }}>Çevrim Katsayısı</label>
                  <span style={{ color: '#e74c3c', fontWeight: 'bold' }}>{wagering}x</span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="50" 
                  step="1" 
                  value={wagering} 
                  onChange={(e) => setWagering(Number(e.target.value))}
                  style={{ width: '100%', accentColor: '#e74c3c' }}
                />
              </div>

            </div>

            {/* Right Column: Results */}
            <div className="calc-results-panel" style={{ background: 'rgba(0,0,0,0.5)', padding: '2rem', borderRadius: '16px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>Yatırılan Nakit</span>
                <span style={{ color: 'var(--text-main)', fontWeight: 'bold' }}>₺{deposit.toLocaleString('tr-TR')}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>Alınacak Bonus</span>
                <span style={{ color: '#26a17b', fontWeight: 'bold' }}>+ ₺{bonusValue.toLocaleString('tr-TR')}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>
                <span style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>Toplam Kasa</span>
                <span style={{ color: 'var(--accent-glow)', fontSize: '1.5rem', fontWeight: 'bold' }}>
                  ₺{totalBalance.toLocaleString('tr-TR')}
                </span>
              </div>
              
              <div style={{ marginTop: 'auto', background: 'rgba(231, 76, 60, 0.1)', border: '1px solid rgba(231, 76, 60, 0.3)', padding: '1.5rem', borderRadius: '12px', textAlign: 'center' }}>
                <span style={{ color: 'var(--text-muted)', display: 'block', marginBottom: '0.5rem' }}>Tamamlanması Gereken Oyun Hacmi</span>
                <span style={{ color: '#e74c3c', fontSize: '2rem', fontWeight: 'bold' }}>
                  ₺{estimatedWagering.toLocaleString('tr-TR')}
                </span>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>
                  Para çekimi yapabilmeniz için casino oyunlarında oynamanız gereken toplam bahis miktarıdır. (Bonus Miktarı x Çevrim Şartı)
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .calc-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
