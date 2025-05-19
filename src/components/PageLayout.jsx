import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const bodyFont = 'Inter, Arial, sans-serif';

const PageGlowContainer = ({ title, children, glowColor = '#fff', className = '', onEsc }) => {
  const [showTransition, setShowTransition] = useState(false);

  // Handle ESC key
  useEffect(() => {
    if (!onEsc) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') handleEsc();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
    // eslint-disable-next-line
  }, [onEsc]);

  // Handle ESC button or key
  const handleEsc = () => {
    setShowTransition(true);
    setTimeout(() => {
      setShowTransition(false);
      onEsc();
    }, 1000); // Match growTransition animation duration
  };

  return (
    <>
      {showTransition && (
        <div className="page-transition" style={{ backgroundColor: glowColor }}>
          <span className="transition-text">Home</span>
        </div>
      )}
      <div
        className={`glow-container ${className}`}
        style={{
          boxShadow: `0 0 24px 4px ${glowColor}, 0 0 80px 10px ${glowColor}55`,
          border: `2.5px solid ${glowColor}`,
          borderRadius: '18px',
          background: 'rgba(0,0,0,0.7)',
          padding: '2rem 2rem 1.5rem 2rem',
          width: '98vw',
          maxWidth: 1300,
          minWidth: 320,
          minHeight: 0,
          maxHeight: '98vh',
          position: 'relative',
          color: '#fff',
          zIndex: 10,
          overflowY: 'auto',
          margin: '2vh auto',
        }}
      >
        {onEsc && (
          <button
            style={{
              position: 'absolute',
              top: 18,
              right: 24,
              background: 'rgba(0,0,0,0.7)',
              color: glowColor,
              border: `2px solid ${glowColor}`,
              borderRadius: 8,
              fontFamily: 'inherit',
              fontWeight: 900,
              fontSize: '1.2rem',
              padding: '0.3em 1.2em',
              cursor: 'pointer',
              boxShadow: `0 0 10px 2px ${glowColor}99`,
              zIndex: 10,
              letterSpacing: 2,
              transition: 'background 0.2s, color 0.2s',
            }}
            onClick={handleEsc}
          >
            ESC
          </button>
        )}
        <h1 style={{ marginTop: 0, marginBottom: '1.5rem', textAlign: 'left', fontSize: '2.5rem', fontWeight: 900 }}>{title}</h1>
        <div>{children}</div>
      </div>
    </>
  );
};

const PageLayout = ({ title, children, className }) => {
  return (
    <div className={`page-container ${className || ''}`}>
      <div className="page-content">

        
        <div className="content-container">
          <h1 className="page-title">{title}</h1>
          <div className="page-body">
            {children}
          </div>
          <Link to="/" className="back-link">Back to Menu</Link>
        </div>
      </div>
    </div>
  );
};

export default PageGlowContainer; 