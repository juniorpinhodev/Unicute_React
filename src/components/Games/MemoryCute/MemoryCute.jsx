import React, { useState, useEffect } from "react";
import './MemoryCute.css';

// Importe as imagens diretamente
import u1 from './image/u1.png';
import u2 from './image/u2.png';
import u3 from './image/u3.png';
import u4 from './image/u4.png';
import u5 from './image/u5.png';
import u6 from './image/u6.png';
import preso2 from './image/preso2.png';

const MemoryCute = () => {
  const [timeLeft, setTimeLeft] = useState(60);
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [lockCard, setLockCard] = useState(false);
  const [message, setMessage] = useState("");
  const [gameFinished, setGameFinished] = useState(false); // Estado para verificar se o jogo terminou

  // Cartas com imagens de frente e verso
  const cardsData = [
    { id: 1, image: u1 },
    { id: 2, image: u2 },
    { id: 3, image: u3 },
    { id: 4, image: u4 },
    { id: 5, image: u5 },
    { id: 6, image: u6 },
  ];

  useEffect(() => {
    const shuffledCards = [...cardsData, ...cardsData].sort(() => Math.random() - 0.5); // Duplicar e embaralhar
    setCards(shuffledCards.map(card => ({ ...card, isFlipped: false })));
  }, []);

  useEffect(() => {
    if (gameFinished) return; // Se o jogo já terminou, não começa o cronômetro
    const timer = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft(prevTime => prevTime - 1);
      } else {
        clearInterval(timer);
        setMessage("Você perdeu! Tente novamente.");
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, gameFinished]);

  const flipCard = (index) => {
    if (lockCard || cards[index].isFlipped) return;

    const newCards = [...cards];
    newCards[index].isFlipped = true;
    setCards(newCards);
    setFlippedCards(prev => [...prev, { ...newCards[index], index }]);
  };

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [firstCard, secondCard] = flippedCards;

      if (firstCard.image === secondCard.image) {
        // Cartas combinam
        setFlippedCards([]);
        checkForWin();
      } else {
        // Cartas não combinam
        setLockCard(true);
        setTimeout(() => {
          const resetCards = [...cards];
          resetCards[firstCard.index].isFlipped = false;
          resetCards[secondCard.index].isFlipped = false;
          setCards(resetCards);
          setFlippedCards([]);
          setLockCard(false);
        }, 1500);
      }
    }
  }, [flippedCards, cards]);

  const checkForWin = () => {
    if (cards.every(card => card.isFlipped)) {
      setMessage(`Parabéns! Você venceu! Tempo final: ${timeLeft} segundos`);
      setGameFinished(true); // Define o jogo como finalizado
    }
  };

  const resetGame = () => {
    const shuffledCards = [...cardsData, ...cardsData].sort(() => Math.random() - 0.5);
    setCards(shuffledCards.map(card => ({ ...card, isFlipped: false })));
    setFlippedCards([]);
    setLockCard(false);
    setTimeLeft(60);
    setMessage("");
    setGameFinished(false); // Resetar o estado de jogo finalizado
  };

  return (
    <div className="memory-game">
      <div className="game">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`card ${card.isFlipped ? "flip" : ""}`}
            onClick={() => flipCard(index)}
            style={{
              backgroundImage: card.isFlipped ? `url(${card.image})` : `url(${preso2})`,
            }}
          ></div>
        ))}
      </div>

      <div id="timer-container">
        <div id="timer">Tempo: {String(timeLeft).padStart(2, "0")}</div>
      </div>

      <div id="message">{message}</div>

      <button id="reset-button" onClick={resetGame}>
        Reiniciar
      </button>
    </div>
  );
};

export default MemoryCute;
