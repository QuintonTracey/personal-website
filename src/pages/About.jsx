import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageGlowContainer, { bodyFont } from '../components/PageLayout';
import avatarImage from '../assets/IMG_9833_inPixio.png';

// Career timeline data (copied from Career.jsx, short descriptions added)
const workHistory = [
  {
    company: 'Ascend FS',
    title: 'AI and Automation Engineer',
    date: 'May 2025 - Present',
    description: 'Developing AI and automation solutions for previously manual processes.'
  },
  {
    company: 'IMCD Group',
    title: 'IT Specialist',
    date: 'May 2024 - Aug 2024',
    description: 'Automated business processes and supported IT operations.'
  },
  {
    company: 'Ericsson',
    title: 'Automation Developer',
    date: 'Sep 2022 - Sep 2023',
    description: 'Built automation tools and improved workflow efficiency.'
  },
  {
    company: 'JSI',
    title: 'Software Developer',
    date: 'Jan 2022 - Apr 2022',
    description: 'Enhanced load testing systems and managed dev workflows.'
  },
  {
    company: 'Metrolinx',
    title: 'Summer Student',
    date: 'May 2021 - Aug 2021',
    description: 'Supported engineering teams and improved documentation.'
  },
];

const About = () => {
  const navigate = useNavigate();
  const [selectedIdx, setSelectedIdx] = useState(0);
  return (
    <>
      <div className="ddr-grid"></div>
      <PageGlowContainer title="About Me" glowColor="#FFEB3B" onEsc={() => navigate('/') }>
        <div style={{ display: 'flex', justifyContent: 'left', margin: '1.5rem 0 1.5rem 0' }}>
          <img src={avatarImage} alt="Quinton Tracey avatar" style={{ width: 180, height: 180, borderRadius: 18, boxShadow: '0 0 24px #FFEB3B88, 0 0 0 4px #222', background: '#111', objectFit: 'cover' }} />
        </div>
        <p style={{ fontSize: '1.1rem', color: '#fff', textAlign: 'center', fontFamily: bodyFont }}>
          Hello, I'm Quinton Tracey, a Software Engineering student from Toronto that graduated from Carleton University. Currently I'm applying my skills as an AI and Automation Engineer at Ascend FS. I bring a background in software development, automation, and IT solutions, constantly expanding my expertise in machine learning, artificial intelligence, and cloud applications. My goal is to learn something new every day and achieve impactful results in the dynamic field of technology.
        </p>
        
        <div style={{ margin: '2.5rem 0 1.2rem 0', textAlign: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
            {workHistory.map((job, idx) => (
              <React.Fragment key={job.company + job.title}>
                <button
                  onClick={() => setSelectedIdx(idx)}
                  style={{
                    background: idx === selectedIdx ? '#222' : '#111',
                    color: idx === selectedIdx ? '#FFEB3B' : '#fff',
                    border: `2px solid ${idx === selectedIdx ? '#FFEB3B' : '#fff'}`,
                    borderRadius: 8,
                    padding: '0.5em 1.1em',
                    fontFamily: bodyFont,
                    fontWeight: 700,
                    fontSize: '1rem',
                    cursor: 'pointer',
                    boxShadow: idx === selectedIdx ? '0 0 8px #FFEB3B88' : '0 0 6px #fff3',
                    outline: 'none',
                    transition: 'all 0.18s',
                    marginBottom: 6
                  }}
                >
                  {job.title} <span style={{ fontWeight: 400, fontSize: '0.95em', color: '#aaa' }}>@ {job.company}</span>
                </button>
                {idx < workHistory.length - 1 && (
                  <span aria-hidden="true" style={{ color: '#FFEB3B', fontSize: '2rem', margin: '0 0.2em', userSelect: 'none', fontFamily: 'monospace', fontWeight: 700 }}>←</span>
                )}
              </React.Fragment>
            ))}
          </div>
          <div style={{ marginTop: '1.2rem', color: '#fff', fontFamily: bodyFont, fontSize: '1.08rem', minHeight: 32 }}>
            {workHistory[selectedIdx].description}
            <div style={{ color: '#FFEB3B', fontSize: '0.98rem', marginTop: 2 }}>{workHistory[selectedIdx].date}</div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '2.2rem', marginTop: '2.5rem', marginBottom: '0.5rem' }}>
          <a href="https://www.linkedin.com/in/quintontracey/" target="_blank" rel="noopener noreferrer" style={{ color: '#0af', background: '#111', border: '2px solid #0af', borderRadius: 8, padding: '0.6em 1.3em', fontFamily: bodyFont, fontWeight: 700, fontSize: '1.1rem', textDecoration: 'none', boxShadow: '0 0 8px #0af88', transition: 'background 0.2s, color 0.2s' }}>
            LinkedIn
          </a>
          <a href="https://github.com/QuintonTracey" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', background: '#222', border: '2px solid #fff', borderRadius: 8, padding: '0.6em 1.3em', fontFamily: bodyFont, fontWeight: 700, fontSize: '1.1rem', textDecoration: 'none', boxShadow: '0 0 8px #fff8', transition: 'background 0.2s, color 0.2s' }}>
            GitHub
          </a>
        </div>
      </PageGlowContainer>
    </>
  );
};

export default About; 