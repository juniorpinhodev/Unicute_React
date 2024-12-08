import React, { useState, useEffect } from "react";
import styles from "./MemoryCute.module.css";

import u1 from './image/u1.png';
import u2 from './image/u2.png';
import u3 from './image/u3.png';
import u4 from './image/u4.png';
import u5 from './image/u5.png';
import u6 from './image/u6.png';
import preso2 from './image/preso2.png';

import confetti from 'canvas-confetti';

const MemoryCute = () => {
  const [timeLeft, setTimeLeft] = useState(60);
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [lockCard, setLockCard] = useState(false);
  const [message, setMessage] = useState("");
  const [ranking, setRanking] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  const cardsData = [
    { id: 1, image: u1 },
    { id: 2, image: u2 },
    { id: 3, image: u3 },
    { id: 4, image: u4 },
    { id: 5, image: u5 },
    { id: 6, image: u6 },
  ];

  useEffect(() => {
    const shuffledCards = [...cardsData, ...cardsData].sort(() => Math.random() - 0.5);
    setCards(shuffledCards.map(card => ({ ...card, isFlipped: false })));

    const storedRanking = JSON.parse(localStorage.getItem("ranking")) || [];
    setRanking(storedRanking);
  }, []);

  useEffect(() => {
    if (gameOver) return; // Interrompe o cronômetro se o jogo terminou

    const timer = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft(prevTime => prevTime - 1);
      } else {
        clearInterval(timer);
        setMessage("Você perdeu! Tente novamente.");
        setGameOver(true); // Marca o jogo como terminado
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, gameOver]);

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
        setFlippedCards([]);
        checkForWin();
      } else {
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
      setMessage("Parabéns! Você venceu!");
      setGameOver(true);
      triggerConfetti();
      updateRanking();
    }
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 200,
      spread: 70,
      origin: { x: 0.5, y: 0.5 },
      colors: ['#ff0000', '#00ff00', '#0000ff', '#ff00ff', '#ffff00'],
    });

    confetti({
      particleCount: 100,
      spread: 200,
      origin: { x: 0.5, y: 0.5 },
      scalar: 1.2,
      ticks: 150,
    });
  };

  const updateRanking = () => {
    const newRanking = [...ranking, timeLeft].sort((a, b) => b - a);
    setRanking(newRanking);
    localStorage.setItem("ranking", JSON.stringify(newRanking));
  };

  const resetGame = () => {
    const shuffledCards = [...cardsData, ...cardsData].sort(() => Math.random() - 0.5);
    setCards(shuffledCards.map(card => ({ ...card, isFlipped: false })));
    setFlippedCards([]);
    setLockCard(false);
    setTimeLeft(60);
    setMessage("");
    setGameOver(false); // Reseta o estado do jogo
  };

  return (
    <div className={styles.memoryGame}>
      <div className={styles.ranking}>
        <h3>Seu maior recorde: {ranking[0] || "Nenhum"}</h3>
        <ul>
          {ranking.slice(1).map((time, index) => (
            <li key={index}>{index + 2}º Venceu faltando {time} segundos</li>
          ))}
        </ul>
      </div>

      <div className={styles.game}>
        {cards.map((card, index) => (
          <div
            key={index}
            className={`${styles.card} ${card.isFlipped ? styles.flip : ""}`}
            onClick={() => flipCard(index)}
            style={{
              backgroundImage: card.isFlipped ? `url(${card.image})` : `url(${preso2})`,
            }}
          ></div>
        ))}
      </div>

      <div className={styles.timerContainer}>
        <div className={styles.timer}>Tempo: {String(timeLeft).padStart(2, "0")}</div>
      </div>

      <div className={styles.message}>{message}</div>

      <button className={styles.resetButton} onClick={resetGame}>
        Reiniciar
      </button>
    </div>
  );
};

export default MemoryCute;
