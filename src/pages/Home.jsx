import React, { useEffect } from 'react';
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
      <div className="home-background">
        <div className="home-gradient"></div>
      </div>
      <div className="home-content">
        <div className="avatar-section">
          <div className="avatar-container">
            <img src={avatarImage} alt="Avatar" className="avatar-image" />
          </div>
        </div>
        <div className="song-selector-section">
          <SongSelector />
        </div>
      </div>
    </div>
  );
}

export default Home; 