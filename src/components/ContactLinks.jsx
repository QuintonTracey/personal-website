import React, { useState } from 'react';

const LINKEDIN_URL = 'https://www.linkedin.com/in/quintontracey/';
const EMAIL = 'quintontracey01@gmail.com';

const ContactLinks = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      setCopied(false);
      alert('Failed to copy email.');
    }
  };

  return (
    <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', marginTop: '2.5rem', flexWrap: 'wrap' }}>
      <a
        href={LINKEDIN_URL}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'flex', alignItems: 'center', gap: '0.5em',
          background: '#0077b5', color: 'white', border: 'none', borderRadius: 8,
          padding: '0.7em 1.5em', fontWeight: 700, fontSize: '1.1rem', textDecoration: 'none',
          boxShadow: '0 0 10px 2px #0077b599',
          transition: 'background 0.2s',
        }}
      >
        <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="currentColor" style={{ verticalAlign: 'middle' }}>
          <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm15.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.37-1.54 2.82-1.54 3.01 0 3.57 1.98 3.57 4.56v5.62z"/>
        </svg>
        LinkedIn
      </a>
      <button
        onClick={handleCopy}
        style={{
          background: copied ? '#43e543' : '#222', color: copied ? '#222' : '#fff', border: '2px solid #43e543', borderRadius: 8,
          padding: '0.7em 1.5em', fontWeight: 700, fontSize: '1.1rem', cursor: 'pointer',
          boxShadow: copied ? '0 0 10px 2px #43e54399' : '0 0 10px 2px #43e54333',
          transition: 'background 0.2s, color 0.2s',
        }}
      >
        {copied ? 'Copied!' : 'Copy Email'}
      </button>
    </div>
  );
};

export default ContactLinks; 