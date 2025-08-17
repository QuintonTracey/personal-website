import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageGlowContainer, { bodyFont } from '../components/PageLayout';
import SubsectionBoxes from '../components/SubsectionBoxes';

const blue = '#00ccff';

const projectItems = [
  {
    title: 'BattleBees Multiplayer',
    icon: (
      <svg width="2em" height="2em" viewBox="0 0 24 24" fill={blue}><circle cx="12" cy="12" r="10" stroke="#fff" strokeWidth="2" fill={blue}/><text x="12" y="16" textAnchor="middle" fontSize="10" fill="#fff" fontFamily="monospace">BB</text></svg>
    ),
    link: 'https://github.com/QuintonTracey/BattleBees',
    descriptions: ['A multiplayer word game inspired by spelling bee puzzles, built with React, TypeScript, and Socket.IO.']
  },
  {
    title: 'EndpointExplorer',
    icon: (
      <svg width="2em" height="2em" viewBox="0 0 24 24" fill={blue}><rect x="3" y="6" width="18" height="12" rx="3" stroke="#fff" strokeWidth="2" fill={blue}/><path d="M7 12h10" stroke="#fff" strokeWidth="2"/><circle cx="7" cy="12" r="1.5" fill="#fff"/><circle cx="17" cy="12" r="1.5" fill="#fff"/></svg>
    ),
    link: 'https://github.com/QuintonTracey/EndpointExplorer',
    descriptions: ['My group capstone project which aimed to streamline the reverse engineering process by transforming natural user interactions with a website into key insights about the API of the target web application.']
  },
  {
    title: 'The Bookstore',
    icon: (
      <svg width="2em" height="2em" viewBox="0 0 24 24" fill={blue}><rect x="4" y="4" width="16" height="16" rx="2" stroke="#fff" strokeWidth="2" fill={blue}/><path d="M8 8h8M8 12h8M8 16h4" stroke="#fff" strokeWidth="2"/></svg>
    ),
    link: 'https://github.com/QuintonTracey/Bookstore-SYSC4806',
    descriptions: ['A Sample Bookstore Web application created with Spring Boot.']
  },
  {
    title: 'Elevator System',
    icon: (
      <svg width="2em" height="2em" viewBox="0 0 24 24" fill={blue}><rect x="6" y="3" width="12" height="18" rx="2" stroke="#fff" strokeWidth="2" fill={blue}/><path d="M12 7v6M9 13l3 3 3-3" stroke="#fff" strokeWidth="2"/></svg>
    ),
    link: 'https://github.com/QuintonTracey/Elevator_System',
    descriptions: ['An elevator control system and simulator.']
  },
  {
    title: 'Monopoly',
    icon: (
      <svg width="2em" height="2em" viewBox="0 0 24 24" fill={blue}><rect x="4" y="4" width="16" height="16" rx="4" stroke="#fff" strokeWidth="2" fill={blue}/><circle cx="12" cy="12" r="4" fill="#fff"/><text x="12" y="16" textAnchor="middle" fontSize="8" fill={blue} fontFamily="monospace">M</text></svg>
    ),
    link: 'https://github.com/QuintonTracey/Monopoly',
    descriptions: ['A multiplayer monopoly game to be played with multiple people or with bots on one computer.']
  },
  {
    title: 'Soccer Database',
    icon: (
      <svg width="2em" height="2em" viewBox="0 0 24 24" fill={blue}><circle cx="12" cy="12" r="10" stroke="#fff" strokeWidth="2" fill={blue}/><path d="M12 6v12M6 12h12" stroke="#fff" strokeWidth="2"/></svg>
    ),
    link: 'https://github.com/QuintonTracey/COMP3005Project',
    descriptions: ['Designed a database to store soccer events from a dataset that spans multiple competitions and seasons']
  },
];

const Projects = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="ddr-grid"></div>
      <PageGlowContainer title="My Projects" glowColor={blue} className="blue-scroll" onEsc={() => navigate('/') }>
        <h2 className="projects-subheading" style={{ color: blue, letterSpacing: 1 }}>Projects</h2>
        <p className="projects-description">
          Here are some of the latest projects I've worked on. For more information on a specific project, click on its icon. For a complete list of github projects, check out my{' '}
          <a href="https://github.com/QuintonTracey" className="projects-link" style={{ color: blue }}>GitHub</a>.
        </p>
        <SubsectionBoxes items={projectItems} color={blue} />
      </PageGlowContainer>
    </>
  );
};

export default Projects; 