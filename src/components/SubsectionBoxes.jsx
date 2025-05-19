import React from 'react';

const bodyFont = 'Inter, Arial, sans-serif';

const SubsectionBoxes = ({ items, color = '#43e543' }) => {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gridAutoRows: '1fr',
      gap: '1rem',
      margin: '1.5rem 0',
      width: '100%',
      maxWidth: 1500,
      height: '100%',
    }}>
      {items.map((item, idx) => (
        <div
          key={item.title}
          style={{
            background: 'rgba(0,0,0,0.85)',
            border: `2px solid ${color}`,
            borderRadius: 14,
            boxShadow: `0 0 12px 1.5px ${color}55`,
            padding: '0.7rem 0.4rem 0.4rem 0.4rem',
            color: '#fff',
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            minHeight: 0,
            height: '100%',
            flex: 1,
            position: 'relative',
            fontFamily: 'inherit',
            fontSize: '0.92rem',
            lineHeight: 1.25,
          }}
        >
          {item.link ? (
            <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ color: color, textDecoration: 'none', marginBottom: 4, fontSize: '1.3rem', display: 'flex', flexDirection: 'column', alignItems: 'center', transition: 'color 0.2s', fontFamily: 'inherit' }}>
              {item.icon}
              <span style={{ fontSize: '0.98rem', fontWeight: 700, marginTop: 1, fontFamily: 'inherit', color: color }}>{item.title}</span>
            </a>
          ) : (
            <div style={{ color: color, fontSize: '1.3rem', marginBottom: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', fontFamily: 'inherit' }}>
              {item.icon}
              <span style={{ fontSize: '0.98rem', fontWeight: 700, marginTop: 1, fontFamily: 'inherit', color: color }}>{item.title}</span>
            </div>
          )}
          {item.descriptions.map((desc, i) => (
            <p key={i} style={{ margin: '0.35em 0', fontSize: '1rem', textAlign: 'center', lineHeight: 1.25, fontFamily: bodyFont }}>{desc}</p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default SubsectionBoxes; 