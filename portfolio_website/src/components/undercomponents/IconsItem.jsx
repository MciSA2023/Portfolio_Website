// IconsItem.js
import React, { useState, useEffect } from 'react';
import './IconsItem.css';

const IconsItem = ({ images }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const container = document.getElementById('image-container');
    const imageWidth = document.querySelector('.image')?.offsetWidth || 0;

    const scrollInterval = setInterval(() => {
      setScrollPosition((prevPosition) => {
        const newPosition = prevPosition + 1;
        const isEndReached = newPosition >= imageWidth * images.length;

        if (isEndReached) {
          container.style.transition = 'none';
          setScrollPosition(0);
          setTimeout(() => {
            setScrollPosition(-450);
          }, 0);
        }

        return newPosition;
      });
    }, 10); 

    return () => clearInterval(scrollInterval);
  }, [images]);

  return (
    <div className="grid-item">
      <div id="image-container" className="image-container" style={{ transform: `translateX(${-scrollPosition}px)` }}>
        {images.map((image, index) => (
          <div key={index} className="image">
            <img src={image} alt={`Image ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default IconsItem;
