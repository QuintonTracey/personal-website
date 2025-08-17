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
        {/* Profile header */}
        <section className="about-profile">
          <img src={avatarImage} alt="Quinton Tracey avatar" className="about-avatar" />
          <div className="about-header-text">
            <h2 className="about-name">Quinton Tracey</h2>
            <p className="about-role">AI & Automation Engineer • Software Developer</p>
            <p className="about-tagline">Toronto, Canada</p>
            <div className="about-actions">
              <a className="btn-linkedin" href="https://www.linkedin.com/in/quintontracey/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a className="btn-github" href="https://github.com/QuintonTracey" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        </section>

        {/* Intro */}
        <p className="about-intro">
          I am a Carleton University Software Engineering graduate, currently applying my skills as an AI and Automation Engineer at Ascend FS. I enjoy building reliable automation, elegant software, and exploring ML/AI and cloud technologies. I aim to learn something new every day and deliver practical impact.
        </p>

        {/* Experience quick switcher */}
        <section className="about-experience">
          <div className="about-tabs">
            {workHistory.map((job, idx) => (
              <button
                key={job.company + job.title}
                className={`about-tab ${idx === selectedIdx ? 'active' : ''}`}
                onClick={() => setSelectedIdx(idx)}
              >
                {job.title} <span className="muted">@ {job.company}</span>
              </button>
            ))}
          </div>
          <div className="about-tabpanel">
            <div className="about-desc">{workHistory[selectedIdx].description}</div>
            <div className="about-date">{workHistory[selectedIdx].date}</div>
          </div>
        </section>
      </PageGlowContainer>
    </>
  );
};

export default About; 