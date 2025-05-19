import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageGlowContainer from '../components/PageLayout';

const Blog = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="ddr-grid"></div>
      <PageGlowContainer title="My Blog" glowColor="#006600" onEsc={() => navigate('/') }>
        <p>Coming soon I will be posting my thoughts and experiences here, most likely a feed of the latest reviews I've done.</p>
      </PageGlowContainer>
    </>
  );
};

export default Blog; 