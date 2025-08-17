import React from 'react';

const SubsectionBoxes = ({ items, color = '#43e543' }) => {
  return (
    <div className="subsection-grid">
      {items.map((item, idx) => (
        <div
          key={item.title}
          className="subsection-box"
          style={{ borderColor: color, boxShadow: `0 0 12px 1.5px ${color}55` }}
        >
          {item.link ? (
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="subsection-link" style={{ color }}>
              {item.icon}
              <span className="subsection-title" style={{ color }}>{item.title}</span>
            </a>
          ) : (
            <div className="subsection-header" style={{ color }}>
              {item.icon}
              <span className="subsection-title" style={{ color }}>{item.title}</span>
            </div>
          )}
          {item.descriptions.map((desc, i) => (
            <p key={i} className="subsection-description">{desc}</p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default SubsectionBoxes; 