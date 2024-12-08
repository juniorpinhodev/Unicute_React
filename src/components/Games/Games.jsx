import React, { useState } from "react";
import "../../index.css";

import UniCandy from "./UniCandy/UniCandy.jsx";
import MemoryCute from "./MemoryCute/MemoryCute.jsx";

const Games = () => {
  const [selectedGame, setSelectedGame] = useState(null); // Estado para controlar o jogo selecionado

  const jogos = [
    {
      id: 1,
      titulo: "UniCandy",
      descricao: "Um jogo divertido com doces e unicórnios!",
      imagem: "public/thumb_UniCandy.png",
      component: <UniCandy />, // Componente do jogo
    },
    {
      id: 2,
      titulo: "Memory Cute",
      descricao: "Treine sua memória com fofura!",
      imagem: "public/thumb_Memory_Cute.png",
      component: <MemoryCute />, // Componente do jogo
    },
  ];

  // Função para alterar o jogo exibido
  const handleGameSelect = (jogo) => {
    setSelectedGame(jogo);
  };

  // Função para voltar à lista de jogos
  const goBack = () => {
    setSelectedGame(null); // Volta à lista inicial
  };

  return (
    <section className="games" id="Games">
      {selectedGame ? (
        // Renderiza o componente do jogo selecionado
        <div className="game-container">
          <button className="back-button" onClick={goBack}>
            Voltar
          </button>
          {selectedGame.component}
        </div>
      ) : (
        // Renderiza a lista de jogos
        <>
          <h2 className="heading">
            Games <span>Unicute Relax</span>
          </h2>

          <div className="games-container">
            {jogos.map((jogo) => (
              <div
                key={jogo.id}
                className="game-card"
                onClick={() => handleGameSelect(jogo)}
              >
                <img className="game-image" src={jogo.imagem} alt={jogo.titulo} />
                <h3 className="game-title">{jogo.titulo}</h3>
                <p className="game-description">{jogo.descricao}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default Games;
