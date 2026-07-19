'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <a href="#" className="logo" onClick={closeMenu}>
            <span className="logo-icon"></span>
            <span className="premium-gradient">SENKAZAN</span>
            <span style={{ fontWeight: 400, color: 'var(--text-main)', marginLeft: '2px' }}>.PRO</span>
          </a>

          <ul className="nav-links">
            <li><Link href="/">Ana Sayfa</Link></li>
            <li><Link href="/bonuses">En İyi Bonuslar</Link></li>
            <li><Link href="/comparison">Karşılaştırma</Link></li>
            <li><Link href="/calculator">Bonus Hesapla</Link></li>
            <li><Link href="/guides">Rehberler</Link></li>
          </ul>

          <div className="nav-cta-desktop">
            <Link href="/bonuses#codes" className="btn-primary nav-cta">
              Özel Kodlar
            </Link>
          </div>

          <button 
            className={`hamburger ${isOpen ? 'active' : ''}`} 
            onClick={toggleMenu}
            aria-label="Menüyü Aç/Kapat"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Backdrop */}
      {isOpen && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0,0,0,0.5)',
            backdropFilter: 'blur(4px)',
            zIndex: 998
          }}
          onClick={closeMenu}
        />
      )}

      {/* Mobile Menu Drawer */}
      <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
        <ul className="mobile-menu-links">
          <li><Link href="/" onClick={closeMenu}>Ana Sayfa</Link></li>
          <li><Link href="/bonuses" onClick={closeMenu}>En İyi Bonuslar</Link></li>
          <li><Link href="/comparison" onClick={closeMenu}>Karşılaştırma</Link></li>
          <li><Link href="/calculator" onClick={closeMenu}>Bonus Hesapla</Link></li>
          <li><Link href="/guides" onClick={closeMenu}>Rehberler</Link></li>
        </ul>
        <div style={{ marginTop: '2rem' }}>
          <Link href="/bonuses#codes" className="btn-primary" style={{ width: '100%' }} onClick={closeMenu}>
            Özel Kodlar
          </Link>
        </div>
      </div>
    </>
  );
}
