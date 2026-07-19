'use client';

import { useState } from 'react';
import { casinosData } from '@/data/casinos';
import BrandLogo from '@/components/BrandLogo';
import CasinoModal from '@/components/CasinoModal';

export default function Home() {
  const [selectedCasino, setSelectedCasino] = useState(null);
  return (
    <main style={{ minHeight: '100vh', paddingTop: '80px' }}>
      {/* Hero Section */}
      <section style={{ 
        padding: '6rem 0 3rem', 
        textAlign: 'center', 
        background: 'radial-gradient(circle at center, rgba(0, 255, 135, 0.08) 0%, transparent 65%)',
        position: 'relative'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 3 }}>
          <span className="badge-gold" style={{ marginBottom: '1.5rem', display: 'inline-block' }}>
            ★ LİSANSLI PREMİUM REHBER 2026
          </span>
          <h1 style={{ 
            fontSize: 'clamp(2.25rem, 6vw, 4rem)', 
            marginBottom: '1.5rem', 
            lineHeight: '1.1',
            fontWeight: 900 
          }}>
            Güvenilir Bahis ve <span className="premium-gradient">iGaming Siteleri</span>
          </h1>
          <p style={{ 
            fontSize: '1.2rem', 
            color: 'var(--text-muted)', 
            maxWidth: '850px', 
            margin: '0 auto 2.5rem', 
            lineHeight: '1.6' 
          }}>
            En yüksek oranlar, çevrimsiz deneme bonusları ve 5 dakikada ödeme garantisi sunan Türkiye'nin en popüler lisanslı casino sitelerini keşfedin. Doğrudan giriş yapmak için markanın kartına veya ikonuna tıklayabilirsiniz.
          </p>
        </div>

        {/* Ambient glow backgrounds */}
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(0, 240, 255, 0.05) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '10%',
          right: '5%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(255, 196, 0, 0.03) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />
      </section>

      {/* Brand Showcase (Vitrin) Section */}
      <section style={{ padding: '2rem 0 6rem' }}>
        <div className="container">
          {/* Section Header Removed per request */}

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '2.5rem',
            marginTop: '2.5rem'
          }}>
            {casinosData.map((casino) => (
              <div 
                key={casino.id} 
                onClick={() => setSelectedCasino(casino)}
                className="glass-panel"
                style={{
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  padding: '2.5rem 2rem 2rem',
                  textAlign: 'center',
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  overflow: 'hidden',
                  background: 'linear-gradient(145deg, rgba(20,22,35,0.7) 0%, rgba(10,12,20,0.9) 100%)',
                  border: '1px solid rgba(255,255,255,0.05)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-12px)';
                  e.currentTarget.style.borderColor = 'rgba(0, 255, 135, 0.4)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 255, 135, 0.1), 0 0 20px rgba(0, 255, 135, 0.05) inset';
                  e.currentTarget.querySelector('.hover-glow').style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                  e.currentTarget.querySelector('.hover-glow').style.opacity = '0';
                }}
              >
                {/* Background Glow */}
                <div className="hover-glow" style={{
                  position: 'absolute',
                  top: '-50%',
                  left: '-50%',
                  width: '200%',
                  height: '200%',
                  background: 'radial-gradient(circle, rgba(0,255,135,0.1) 0%, transparent 70%)',
                  opacity: 0,
                  transition: 'opacity 0.4s ease',
                  pointerEvents: 'none',
                  zIndex: 0
                }}></div>

                {/* Badge Overlay */}
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: 'linear-gradient(90deg, #ff2a5f, #ff7600)',
                  color: 'white',
                  padding: '0.4rem 1rem',
                  borderRadius: '20px',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  boxShadow: '0 4px 10px rgba(255, 42, 95, 0.3)',
                  zIndex: 1,
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase'
                }}>
                  {casino.badge}
                </div>

                {/* Logo wrapper */}
                <div style={{ 
                  width: '100%', 
                  height: '80px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  background: 'rgba(255,255,255,0.03)',
                  borderRadius: '16px',
                  border: '1px solid rgba(255,255,255,0.05)',
                  marginBottom: '1.5rem',
                  padding: '10px',
                  zIndex: 1
                }}>
                  <BrandLogo brandId={casino.id} size={60} />
                </div>

                {/* Content */}
                <div style={{ zIndex: 1, width: '100%' }}>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '0.4rem', color: 'var(--text-main)', fontWeight: 800, letterSpacing: '-0.5px' }}>
                    {casino.name}
                  </h3>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', marginBottom: '1.5rem' }}>
                    <span style={{ color: '#ffd600', fontSize: '1.1rem' }}>★</span>
                    <span style={{ fontWeight: 800, fontSize: '1rem', color: 'var(--text-main)' }}>{casino.rating}</span>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>({casino.ratingCount} Oylama)</span>
                  </div>

                  {/* Toned Down CTA Button */}
                  <div className="btn-secondary" style={{
                    width: '100%',
                    padding: '0.9rem',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.4rem',
                    transition: 'all 0.3s ease',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    fontSize: '0.9rem'
                  }}>
                    BONUS İNCELE
                    <span style={{ fontSize: '1.1rem' }}>→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pop-up Modal */}
      <CasinoModal 
        casino={selectedCasino} 
        onClose={() => setSelectedCasino(null)} 
      />
    </main>
  );
}
