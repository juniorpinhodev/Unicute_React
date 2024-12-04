import React, { useState } from "react";
import "../../index.css"; 

import MemoryCute from './MemoryCute/MemoryCute.jsx';
import UniCandy from './UniCandy/UniCandy.jsx';

const Games = () => {
  const [selectedGame, setSelectedGame] = useState(null); // Estado para controlar o jogo selecionado
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar se o modal está aberto

  // Função que altera o jogo selecionado e abre o modal
  const handleGameSelect = (game) => {
    setSelectedGame(game);
    setIsModalOpen(true); // Abre o modal quando um jogo for selecionado
  };

  // Função para fechar o modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedGame(null); // Limpa o jogo selecionado ao fechar o modal
  };

  return (
    <section className="games" id="Games">
      <h2 className="heading">
        Games <span>Unicute Relax</span>
      </h2>

      <div className="games-container">
        {/* Links de jogos */}
        <div className="game-card" onClick={() => handleGameSelect('UniCandy')}>
          <h3 className="game-title">UniCandy</h3>
          <img className="game-image" src="src/assets/thumb_UniCandy.png" alt="UniCandy" />
        </div>
        <div className="game-card" onClick={() => handleGameSelect('MemoryCute')}>
          <h3 className="game-title">Memory Cute</h3>
          <img className="game-image" src="src/assets/thumb_Memory_Cute.png" alt="Memory Cute" />
        </div>
      </div>

      {/* Modal com o jogo selecionado */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            
            {/* Exibindo o jogo selecionado */}
            {selectedGame === 'UniCandy' && <UniCandy />}
            {selectedGame === 'MemoryCute' && <MemoryCute />}
          </div>
        </div>
      )}
    </section>
  );
};

export default Games;
