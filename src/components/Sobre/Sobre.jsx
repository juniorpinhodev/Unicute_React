import React from 'react';
import '../../App.css';

const Sobre = () => {
  return (
    <section className="sobre" id="Sobre">
      <article>
        <h2 className="heading">Sobre <span>Unicute Relax</span></h2> 
        
        <div className="sobre-img">
          <img 
            src="src/assets/modeloParaFav.png" 
            alt="UniCute Relax" 
          />
          <span className="circle"></span>
        </div>
        
        <div className="about-content">
          <p>
            Com <strong>UniCute</strong>, embarque em uma jornada encantadora de música <em>LoFi</em> e serenidade.
            Com o nosso adorável unicórnio, UniCute, como guia, oferecemos uma live 24/7 com músicas relaxantes
            para te acompanhar em seus <em>estudos</em>, <em>trabalhos</em>, <em>descanso</em> ou em qualquer momento do dia.
            Além das melodias suaves, explore <em>jogos</em> relaxantes e <em>dicas anti-stress</em> para cuidar do seu <em>bem-estar</em> <em>mental</em> e <em>emocional</em>.
          
            Este é o lugar perfeito para se desconectar do caos e se conectar consigo mesmo.
            Sintonize UniCute Relax e permita-se encontrar calma e inspiração em meio ao ritmo acelerado da vida.
            Junte-se a nós nesta jornada de tranquilidade e <em>concentração</em>, e descubra um universo de
            <em>relaxamento</em> e harmonia.
          </p>

          <p>
            Além disso, oferecemos <strong>jogos relaxantes</strong> especialmente desenvolvidos para proporcionar diversão 
            enquanto você alivia o estresse. Perfeito para quem busca momentos de descontração no dia a dia!
          </p>

          <p>
            Estamos animados em anunciar que, em breve, nossas músicas estarão disponíveis nas principais plataformas de streaming, 
            como <strong>Spotify</strong>, <strong>Deezer</strong>, <strong>Amazon Music</strong>, <strong>YouTube Music</strong>, e <strong>Apple Music</strong>. 
            Assim, você poderá levar o universo de UniCute Relax para onde quiser!
          </p>

          {/* Carrossel de Logos */}
          <div className="streaming-carousel">
            <h3 className="carousel-heading">Disponível em breve:</h3>
            <div className="carousel-icons">
              <i className="bx bxl-spotify" aria-label="Spotify"></i>
              <i className="bx bxl-deezer" aria-label="Deezer"></i>
              <i className="bx bxl-amazon" aria-label="Amazon Music"></i>
              <i className="bx bxl-apple" aria-label="Apple Music"></i>
              <i className="bx bxl-youtube" aria-label="YouTube Music"></i>
            </div>
          </div>
        </div>
        
        <p className='p-center'>
          Bem-vindo ao UniCute Relax - onde a música e a paz se unem para acalmar sua mente e renovar suas energias!
        </p>
      </article>
    </section>
  );
};

export default Sobre;
