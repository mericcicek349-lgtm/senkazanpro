'use client';

export default function BrandLogo({ brandId, size = 48 }) {
  // Use rectangular image logic
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: `${size}px`, width: '100%' }}>
      <img 
        src={`/images/logos/${brandId}.png`} 
        alt={`${brandId} logo`} 
        style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} 
        onError={(e) => {
          // Fallback if image not found
          e.target.style.display = 'none';
          e.target.nextSibling.style.display = 'flex';
        }}
      />
      {/* Fallback initials if image fails to load */}
      <div style={{
        display: 'none',
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: '8px',
        background: 'var(--primary)',
        color: 'var(--bg-dark)',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 800,
        fontSize: '1.2rem',
        textTransform: 'uppercase'
      }}>
        {brandId.substring(0, 2)}
      </div>
    </div>
  );
}
