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
        <div className="page-transition-overlay" style={{ color: glowColor }}>
          <span className="transition-text">Home</span>
        </div>
      )}
      <div
        className={`glow-container ${className}`}
        style={{ boxShadow: `0 0 24px 4px ${glowColor}, 0 0 80px 10px ${glowColor}55`, borderColor: glowColor }}
      >
        {onEsc && (
          <button
            className="esc-button"
            style={{ color: glowColor, borderColor: glowColor, boxShadow: `0 0 10px 2px ${glowColor}99`, letterSpacing: 2 }}
            onClick={handleEsc}
          >
            ESC
          </button>
        )}
        <h1 className="glow-title">{title}</h1>
        <div>{children}</div>
        {onEsc && (
          <button
            className="esc-button-mobile"
            style={{ color: glowColor, borderColor: glowColor, boxShadow: `0 0 10px 2px ${glowColor}99`, letterSpacing: 2 }}
            onClick={handleEsc}
          >
            ESC
          </button>
        )}
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
          <div className="page-body">{children}</div>
          <Link to="/" className="back-link">Back to Menu</Link>
        </div>
      </div>
    </div>
  );
};

export default PageGlowContainer; 