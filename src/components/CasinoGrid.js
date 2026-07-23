'use client';

import { useState } from 'react';
import BrandLogo from '@/components/BrandLogo';
import CasinoModal from '@/components/CasinoModal';

export default function CasinoGrid({ casinosData }) {
  const [selectedCasino, setSelectedCasino] = useState(null);

  return (
    <>
      <div className="grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '2rem',
        marginTop: '3rem'
      }}>
        {casinosData.map((casino) => (
          <div 
            key={casino.id} 
            className="casino-card"
            onClick={() => setSelectedCasino(casino)}
            style={{ 
              position: 'relative', 
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              padding: '2rem 1.5rem',
              borderRadius: '20px',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              background: 'linear-gradient(180deg, rgba(20, 20, 20, 0.8) 0%, rgba(10, 10, 10, 0.9) 100%)',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              overflow: 'hidden'
            }}
          >
            {/* Hover Glow Effect */}
            <div className="card-glow" />

            {/* Badge */}
            {casino.badge && (
              <div className="badge" style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                background: 'linear-gradient(90deg, #26a17b 0%, #1e8262 100%)',
                color: '#fff',
                padding: '4px 12px',
                borderRadius: '20px',
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.5px',
                boxShadow: '0 4px 15px rgba(38, 161, 123, 0.3)',
                zIndex: 2
              }}>
                {casino.badge}
              </div>
            )}

            {/* Logo Container */}
            <div className="logo-container" style={{
              width: '100px',
              height: '100px',
              borderRadius: '24px',
              background: 'rgba(0, 0, 0, 0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.5rem',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.5)',
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

      <CasinoModal 
        casino={selectedCasino} 
        onClose={() => setSelectedCasino(null)} 
      />
    </>
  );
}
