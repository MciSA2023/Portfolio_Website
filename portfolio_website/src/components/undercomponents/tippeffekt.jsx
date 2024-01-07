import React from 'react';
import './TipStyle.css';

const TipStyleName = ({ name, highlightedLetters }) => {
  return (
    <div className="tip-style">
      {name.split('').map((char, index) => (
        <span
          key={index}
          style={{
            animationDelay: `${index * 0.1}s`,
            fontWeight: highlightedLetters.includes(char) ? 'bold' : 'normal',
          }}
        >
          {char}
        </span>
      ))}
    </div>
  );
};

export default TipStyleName;
