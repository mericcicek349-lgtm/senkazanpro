'use client';

import { useState } from 'react';
import BrandLogo from './BrandLogo';

export default function CasinoModal({ casino, onClose }) {
  const [activeTab, setActiveTab] = useState('promos'); // 'promos', 'license', 'socials'

  if (!casino) return null;

  return (
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
    }} onClick={onClose}>
      
      {/* Modal Content */}
      <div 
        className="glass-panel"
        style={{
          width: '100%',
          maxWidth: '500px',
          maxHeight: '90vh',
          background: 'linear-gradient(145deg, rgba(20,22,35,0.95) 0%, rgba(10,12,20,1) 100%)',
          borderRadius: '20px',
          border: '1px solid rgba(255,255,255,0.1)',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          overflow: 'hidden'
        }}
        onClick={e => e.stopPropagation()} // Prevent close on clicking inside
      >
        
        {/* Close Button */}
        <button 
          onClick={onClose}
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

        {/* Header / Logo */}
        <div style={{ padding: '2rem 2rem 1.5rem', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ 
            width: '100px', height: '70px', margin: '0 auto 1rem', 
            background: 'rgba(255,255,255,0.03)', borderRadius: '12px', 
            display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px'
          }}>
            <BrandLogo brandId={casino.id} size={50} />
          </div>
          <h2 style={{ fontSize: '1.8rem', margin: 0, fontWeight: 800 }}>{casino.name}</h2>
          <div style={{ color: 'var(--primary)', fontSize: '0.9rem', marginTop: '0.5rem', fontWeight: 600 }}>
            {casino.bonusTitle}
          </div>
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <button 
            onClick={() => setActiveTab('promos')}
            style={{
              flex: 1, padding: '1rem 0', background: 'transparent', border: 'none',
              color: activeTab === 'promos' ? 'var(--primary)' : 'var(--text-muted)',
              borderBottom: activeTab === 'promos' ? '2px solid var(--primary)' : '2px solid transparent',
              fontWeight: activeTab === 'promos' ? 700 : 500,
              cursor: 'pointer', transition: 'all 0.3s'
            }}
          >
            Promosyonlar
          </button>
          <button 
            onClick={() => setActiveTab('license')}
            style={{
              flex: 1, padding: '1rem 0', background: 'transparent', border: 'none',
              color: activeTab === 'license' ? 'var(--primary)' : 'var(--text-muted)',
              borderBottom: activeTab === 'license' ? '2px solid var(--primary)' : '2px solid transparent',
              fontWeight: activeTab === 'license' ? 700 : 500,
              cursor: 'pointer', transition: 'all 0.3s'
            }}
          >
            Lisans
          </button>
          <button 
            onClick={() => setActiveTab('socials')}
            style={{
              flex: 1, padding: '1rem 0', background: 'transparent', border: 'none',
              color: activeTab === 'socials' ? 'var(--primary)' : 'var(--text-muted)',
              borderBottom: activeTab === 'socials' ? '2px solid var(--primary)' : '2px solid transparent',
              fontWeight: activeTab === 'socials' ? 700 : 500,
              cursor: 'pointer', transition: 'all 0.3s'
            }}
          >
            Sosyal Medya
          </button>
        </div>

        {/* Tab Content */}
        <div style={{ padding: '1.5rem', overflowY: 'auto', flex: 1 }}>
          
          {/* Promos Tab */}
          {activeTab === 'promos' && (
            <div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--text-main)' }}>🎁 Güncel Promosyonlar</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem', gap: '0.8rem', display: 'flex', flexDirection: 'column' }}>
                {casino.detailedPromos?.map((promo, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                    <span style={{ color: 'var(--primary)', marginTop: '2px' }}>✓</span>
                    {promo}
                  </li>
                ))}
              </ul>

              <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--text-main)' }}>💰 Cashback (Kayıp İadesi)</h3>
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>İade Oranı:</span>
                  <span style={{ color: 'var(--primary)', fontWeight: 800 }}>{casino.cashback?.rate}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.8rem' }}>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Türü:</span>
                  <span style={{ color: 'var(--text-main)', fontWeight: 600, fontSize: '0.9rem' }}>{casino.cashback?.type}</span>
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', borderTop: '1px dashed rgba(255,255,255,0.1)', paddingTop: '0.5rem' }}>
                  <strong style={{color: 'var(--text-main)'}}>Kural:</strong> {casino.cashback?.rules}
                </div>
              </div>
            </div>
          )}

          {/* License Tab */}
          {activeTab === 'license' && (
            <div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--text-main)' }}>🛡️ Lisans ve Güvenlik</h3>
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Otorite:</span>
                  <span style={{ color: 'var(--text-main)', fontWeight: 700 }}>{casino.licenseDetails?.name || casino.license.split('#')[0]}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.8rem' }}>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Lisans No:</span>
                  <span style={{ color: 'var(--primary)', fontWeight: 600 }}>{casino.licenseDetails?.number || casino.license.split('#')[1]}</span>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.5', margin: 0, borderTop: '1px dashed rgba(255,255,255,0.1)', paddingTop: '0.8rem' }}>
                  {casino.licenseDetails?.description}
                </p>
              </div>
            </div>
          )}

          {/* Socials Tab */}
          {activeTab === 'socials' && (
            <div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--text-main)' }}>📱 Resmi Sosyal Medya</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                {casino.socials?.telegram && (
                  <a href={casino.socials.telegram} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(0,136,204,0.1)', padding: '0.8rem 1rem', borderRadius: '10px', textDecoration: 'none', border: '1px solid rgba(0,136,204,0.3)' }}>
                    <span style={{ color: '#0088cc', fontWeight: 700 }}>Telegram</span>
                    <span style={{ color: 'var(--text-muted)' }}>↗</span>
                  </a>
                )}
                {casino.socials?.instagram && (
                  <a href={casino.socials.instagram} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(225,48,108,0.1)', padding: '0.8rem 1rem', borderRadius: '10px', textDecoration: 'none', border: '1px solid rgba(225,48,108,0.3)' }}>
                    <span style={{ color: '#e1306c', fontWeight: 700 }}>Instagram</span>
                    <span style={{ color: 'var(--text-muted)' }}>↗</span>
                  </a>
                )}
                {casino.socials?.twitter && (
                  <a href={casino.socials.twitter} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(29,161,242,0.1)', padding: '0.8rem 1rem', borderRadius: '10px', textDecoration: 'none', border: '1px solid rgba(29,161,242,0.3)' }}>
                    <span style={{ color: '#1da1f2', fontWeight: 700 }}>X (Twitter)</span>
                    <span style={{ color: 'var(--text-muted)' }}>↗</span>
                  </a>
                )}
                {casino.socials?.youtube && (
                  <a href={casino.socials.youtube} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(255,0,0,0.1)', padding: '0.8rem 1rem', borderRadius: '10px', textDecoration: 'none', border: '1px solid rgba(255,0,0,0.3)' }}>
                    <span style={{ color: '#ff0000', fontWeight: 700 }}>YouTube</span>
                    <span style={{ color: 'var(--text-muted)' }}>↗</span>
                  </a>
                )}
                {casino.socials?.whatsapp && (
                  <a href={casino.socials.whatsapp} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(37,211,102,0.1)', padding: '0.8rem 1rem', borderRadius: '10px', textDecoration: 'none', border: '1px solid rgba(37,211,102,0.3)' }}>
                    <span style={{ color: '#25d366', fontWeight: 700 }}>WhatsApp</span>
                    <span style={{ color: 'var(--text-muted)' }}>↗</span>
                  </a>
                )}
              </div>
            </div>
          )}

        </div>

        {/* Sticky CTA Bottom */}
        <div style={{ padding: '1.5rem', background: 'rgba(0,0,0,0.3)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <a href={casino.url} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ width: '100%', padding: '1rem', textDecoration: 'none', display: 'flex', justifyContent: 'center' }}>
            Hemen Siteye Git →
          </a>
        </div>
      </div>
    </div>
  );
}
