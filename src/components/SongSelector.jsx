import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SongSelector.css';



const SongSelector = () => {
  const navigate = useNavigate();
  
  const menuItems = [
    { id: 1, name: 'About', color: '#FFEB3B', colorRgb: '255, 235, 59', path: '/about' },
    { id: 2, name: 'Career', color: '#0066ff', colorRgb: '0, 102, 255', path: '/career' },
    { id: 3, name: 'Projects', color: '#00ccff', colorRgb: '0, 204, 255', path: '/projects' },
    { id: 4, name: 'Tech Stack', color: '#9C27B0', colorRgb: '156, 39, 176', path: '/tech-stack' },
    { id: 5, name: 'Hobbies', color: '#00ff00', colorRgb: '0, 255, 0', path: '/hobbies' },
    { id: 6, name: 'Blog', color: '#006600', colorRgb: '0, 102, 0', path: '/blog' },
    { id: 7, name: 'Contact', color: '#FF5252', colorRgb: '255, 82, 82', path: '/contact' },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionColor, setTransitionColor] = useState('');
  const carouselRef = useRef(null);
  const markerRef = useRef(null);
  const itemsRef = useRef(null);
  const transitionRef = useRef(null);
  const getResponsiveItemHeight = () => {
    if (window.innerHeight >= 1100) {
      return 185; // Larger for tall screens
    }
    return 130;
  };

  const [itemHeight, setItemHeight] = useState(getResponsiveItemHeight());

  useEffect(() => {
    const handleResize = () => {
      setItemHeight(getResponsiveItemHeight());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // --- STATE ADDITIONS ---
  const [actionQueue, setActionQueue] = useState([]); // Queue for navigation actions
  const [isAnimating, setIsAnimating] = useState(false); // Animation in progress
  const [animationDirection, setAnimationDirection] = useState(null); // 'up' or 'down'
  const [offset, setOffset] = useState(0); // Offset for sliding transform
  const [animationDistance, setAnimationDistance] = useState(1); // Number of steps to animate (for click)
  const [pendingClick, setPendingClick] = useState(null); // Track last click index
  const ANIMATION_DURATION = 500; // ms per step
  
  // Handle selection change
  const handleSelectionChange = (newIndex) => {
    setSelectedIndex(newIndex);
  };

  // Navigate to the selected page with a growing animation
  const navigateToPage = () => {
    const selectedItem = menuItems[selectedIndex];
    setTransitionColor(selectedItem.color);
    setIsTransitioning(true);
    
    // Add transitioning class to figure container
    const figureContainer = document.querySelector('.figure-container');
    if (figureContainer) {
      figureContainer.classList.add('transitioning');
    }
    
    // Wait for the animation to complete before navigating
    setTimeout(() => {
      navigate(selectedItem.path);
    }, 1000); // Match this with the CSS animation duration
  };

  // --- QUEUE HANDLING ---
  // Add navigation action to queue
  const queueAction = (direction) => {
    setActionQueue((q) => [...q, direction]);
  };

  // Cancel all queued actions and animation
  const cancelAnimation = () => {
    setActionQueue([]);
    setIsAnimating(false);
    setAnimationDirection(null);
    setAnimationDistance(1);
    setOffset(0);
  };

  // Process the next action in the queue (keyboard navigation)
  useEffect(() => {
    if (!isAnimating && actionQueue.length > 0) {
      const direction = actionQueue[0];
      setIsAnimating(true);
      setAnimationDirection(direction);
      setAnimationDistance(1);
      setOffset(direction === 'up' ? itemHeight : -itemHeight);
      setTimeout(() => {
        setSelectedIndex((prev) => {
          if (direction === 'up') {
            return prev === 0 ? menuItems.length - 1 : prev - 1;
          } else {
            return prev === menuItems.length - 1 ? 0 : prev + 1;
          }
        });
        setOffset(0);
        setIsAnimating(false);
        setActionQueue((q) => q.slice(1));
      }, ANIMATION_DURATION);
    }
  }, [actionQueue, isAnimating, itemHeight, menuItems.length]);

  // --- KEY HANDLING ---
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (isTransitioning) return;
      if (event.key === 'ArrowUp') {
        queueAction('up');
      } else if (event.key === 'ArrowDown') {
        queueAction('down');
      } else if (event.key === 'Enter') {
        if (!isAnimating) navigateToPage();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isTransitioning, isAnimating]);

  // --- CLICK HANDLING ---
  const handleItemClick = (index) => {
    if (isTransitioning) return;
    if (index === selectedIndex) {
      if (!isAnimating) navigateToPage();
      return;
    }
    // Cancel any ongoing animation/queue
    cancelAnimation();
    // Calculate shortest direction and distance
    const total = menuItems.length;
    let upDist = (selectedIndex - index + total) % total;
    let downDist = (index - selectedIndex + total) % total;
    let direction, distance;
    if (upDist <= downDist) {
      direction = 'up';
      distance = upDist;
    } else {
      direction = 'down';
      distance = downDist;
    }
    if (distance === 0) return;
    setIsAnimating(true);
    setAnimationDirection(direction);
    setAnimationDistance(distance);
    setPendingClick(index); // Only last click is honored
    setOffset(direction === 'up' ? itemHeight * distance : -itemHeight * distance);
    setTimeout(() => {
      setSelectedIndex(index);
      setOffset(0);
      setIsAnimating(false);
      setAnimationDistance(1);
      setPendingClick(null);
    }, ANIMATION_DURATION * distance);
  };

  // --- VISIBLE ITEMS (for seamless wrap and extra item during animation) ---
  const getVisibleItems = () => {
    const visibleItems = [];
    const totalItems = menuItems.length;
    // Add items above (3)
    for (let i = 3; i > 0; i--) {
      const index = (selectedIndex - i + totalItems) % totalItems;
      visibleItems.push({
        ...menuItems[index],
        originalIndex: index,
        position: -i
      });
    }
    // Add current item (0)
    visibleItems.push({
      ...menuItems[selectedIndex],
      originalIndex: selectedIndex,
      position: 0
    });
    // Add items below (3)
    for (let i = 1; i <= 3; i++) {
      const index = (selectedIndex + i) % totalItems;
      visibleItems.push({
        ...menuItems[index],
        originalIndex: index,
        position: i
      });
    }
    // Add extra items for wrap animation (for up to 3 steps)
    if (isAnimating && animationDistance > 0 && animationDistance <= 3) {
      if (animationDirection === 'up') {
        // Prepend N items from the bottom
        for (let n = animationDistance; n > 0; n--) {
          const index = (selectedIndex - 3 - n + totalItems) % totalItems;
          visibleItems.unshift({
            ...menuItems[index],
            originalIndex: index,
            position: -3 - n
          });
        }
      } else if (animationDirection === 'down') {
        // Append N items from the top
        for (let n = 1; n <= animationDistance; n++) {
          const index = (selectedIndex + 3 + n) % totalItems;
          visibleItems.push({
            ...menuItems[index],
            originalIndex: index,
            position: 3 + n
          });
        }
      }
    }
    return visibleItems;
  };
  
  // Calculate item style based on position
  const getItemStyle = (position, colorRgb) => {
    const distance = Math.abs(position);
    return {
      transform: `translateY(${position * itemHeight}px) scale(${1 - Math.min(0.15, distance * 0.05)})`,
      opacity: 1 - Math.min(0.4, distance * 0.15),
      zIndex: 10 - distance,
      '--position': position, // Add position as CSS variable for hover effects
      '--item-color-rgb': colorRgb || '255, 255, 255' // RGB color for background opacity
    };
  };

  const visibleItems = getVisibleItems();

  return (
    <div className={`song-selector-container ${isTransitioning ? 'transitioning' : ''}`}>
      <div className="header-bar">
        <div className="header-title">// Select Page</div>
        <div className="header-counter">{selectedIndex + 1}/{menuItems.length}</div>
      </div>
      
      <div className="song-info">
        <h2>{menuItems[selectedIndex].name}</h2>
        <p>Use ↑ and ↓ keys to navigate</p>
        <p>Press ENTER to select</p>
      </div>
      
      <div className="carousel-container" ref={carouselRef}>
        <div className="selection-marker" ref={markerRef}></div>
        {/* Animate the viewport as a group */}
        <div
          className="carousel-viewport"
          ref={itemsRef}
          style={{
            transition: isAnimating ? `transform ${ANIMATION_DURATION * animationDistance}ms cubic-bezier(0.4, 0, 0.2, 1)` : 'none',
            transform: `translateY(${offset}px)`
          }}
        >
          {visibleItems.map((item) => {
            const isItemSelected = item.originalIndex === selectedIndex;
            return (
              <div
                key={`${item.id}-pos-${item.position}`}
                className={`carousel-item ${isItemSelected ? 'selected' : ''}`}
                style={{
                  ...getItemStyle(item.position, item.colorRgb)
                }}
                onClick={() => handleItemClick(item.originalIndex)}
              >
                <span className="arrow-indicator">{isItemSelected ? '>' : ''}</span>
                <span className="item-name">{item.name}</span>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Screen transition overlay */}
      {isTransitioning && (
        <div 
          className="page-transition" 
          ref={transitionRef}
          style={{ backgroundColor: transitionColor }}
        >
          <span className="transition-text">{menuItems[selectedIndex].name}</span>
        </div>
      )}
    </div>
  );
};

export default SongSelector; 