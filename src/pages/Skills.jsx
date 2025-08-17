import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageGlowContainer from '../components/PageLayout';

const Skills = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="ddr-grid"></div>
      <PageGlowContainer title="My Skills" glowColor="#9C27B0" onEsc={() => navigate('/') }>
        <p className="text-lg text-white text-center font-sans">This is the Skills page of my DDR-inspired portfolio.</p>
      </PageGlowContainer>
    </>
  );
};

export default Skills; 