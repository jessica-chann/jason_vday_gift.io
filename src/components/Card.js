import React, { useEffect, useState } from 'react';
import './Card.css';

const Card = ({ imageUrl, isLarge, isLastCard, fadeTransition, delay = 0 }) => {
  const [fadeClass, setFadeClass] = useState(fadeTransition ? 'fade-out' : 'fade-in');

  useEffect(() => {
    if (fadeTransition) {
      setFadeClass('fade-out');
    } else {
      setTimeout(() => setFadeClass('fade-in'), delay); // Apply delay for smooth fade-in
    }
  }, [fadeTransition, delay]);

  return (
    <div
      className={`card ${isLarge ? 'large' : ''} ${isLastCard ? 'shift-left' : ''} ${fadeClass}`}
      style={{ animationDelay: `${delay}ms` }} // Ensure staggered fade-in
    >
      <img src={imageUrl} alt="Pokemon Card" className="card-image" />
    </div>
  );
};

export default Card;
