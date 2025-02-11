import React, { useState } from 'react';
import './App.css';
import Card from './components/Card';

const App = () => {
  const [cardIndex, setCardIndex] = useState(0);
  const [showLargeCard, setShowLargeCard] = useState(false);
  const [fadeTransition, setFadeTransition] = useState(false);
  const [showAllCards, setShowAllCards] = useState(false); // New state for the last screen

  const pokemonCards = [
    { imageUrl: 'images/title.png' },
    { imageUrl: 'images/pack.png' },
    { imageUrl: 'images/wooper.png' },
    { imageUrl: 'images/lucario.png' },
    { imageUrl: 'images/cubone.png' },
    { imageUrl: 'images/vaporeon.png' },
    { imageUrl: 'images/luxray.png' },
    { imageUrl: 'images/trainer.png' },
    { imageUrl: 'images/letter.png' },
  ];

  const nextCard = () => {
    if (showAllCards) return; // Stop clicks once all cards are shown

    if (cardIndex <= 1) {
      setFadeTransition(false);
      setTimeout(() => {
        setCardIndex(cardIndex + 1);
      }, 50);
    } else if (cardIndex < pokemonCards.length - 2) {
      setFadeTransition(true);
      setTimeout(() => {
        setCardIndex(cardIndex + 1);
        setFadeTransition(false);
      }, 500);
    } else if (!showLargeCard) {
      setShowLargeCard(true);
    } else {
      setShowAllCards(true); // Trigger all cards to appear
    }
  };

  return (
    <div className="app">
      <div className={`card-container ${showAllCards ? 'fade-in-all' : ''}`} onClick={nextCard}>
        {showAllCards
          ? pokemonCards.map((card, index) => (
              <Card key={index} imageUrl={card.imageUrl} />
            ))
          : (
            <>
              <Card imageUrl={pokemonCards[cardIndex].imageUrl} fadeTransition={fadeTransition} />
              {showLargeCard && <Card imageUrl="images/letter.png" isLarge />}
            </>
          )}
      </div>
    </div>
  );
};

export default App;
