import React, { useEffect } from 'react';
import '../App.css';
import SongSelector from '../components/SongSelector';
import avatarImage from '../assets/IMG_9833_inPixio.png';

function Home() {
  // Reset the figure position when home page loads
  useEffect(() => {
    const figureContainer = document.querySelector('.figure-container');
    if (figureContainer) {
      figureContainer.classList.remove('transitioning');
    }
  }, []);

  return (
    <div className="home-container">
      <div className="home-layout">
        <div className="ddr-grid"></div>
        <div className="figure-container">
          <div className="home-avatar-container">
            <img src={avatarImage} alt="Avatar" className="home-avatar-image" />
          </div>
        </div>
        <div className="content-container">
          <SongSelector />
        </div>
      </div>
    </div>
  );
}

export default Home; 