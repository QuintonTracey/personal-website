import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageGlowContainer from '../components/PageLayout';

const TechStack = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="ddr-grid"></div>
      <PageGlowContainer title="My Tech Stack" glowColor="#9C27B0" onEsc={() => navigate('/') }>
        <p className="text-lg text-white text-center font-sans">This is the Tech Stack page of my coming soon... Or is it?</p>
      </PageGlowContainer>
    </>
  );
};

export default TechStack; 