import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageGlowContainer, { bodyFont } from '../components/PageLayout';
import ContactLinks from '../components/ContactLinks';

const Contact = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="ddr-grid"></div>
      <PageGlowContainer title="Contact Me" glowColor="#FF5252" onEsc={() => navigate('/') }>
        <p className="contact-intro">If you have any thoughts or comments about me or my work, feel free to reach out via email or LinkedIn!</p>
        <ContactLinks />
      </PageGlowContainer>
    </>
  );
};

export default Contact; 