import React from 'react';
import styles from './Sobre.module.css'; // Importando o CSS como módulo

const Sobre = () => {
  return (
    <section className={styles.sobre} id="Sobre">
      <article>
        <h2 className={styles.heading}>
          Sobre <span>Unicute Relax</span>
        </h2> 
        
        <div className={styles['sobre-img']}>
          <img 
            src="/assets/LogoUnicute.png" 
            alt="UniCute Relax" 
          />
          <span className={styles.circle}></span>
        </div>
        
        <div className={styles['about-content']}>
        <div className={styles['about-content']}>
        <div className={styles['about-content']}>

<p>                                                 
  Seja bem-vindo ao <strong>UniCute Relax</strong>, o cantinho perfeito do <strong>LoFi Hip-Hop</strong> pra quem curte <em>vibes</em> tranquilas e quer dar uma pausa no ritmo agitado do dia a dia. Conecte-se com um universo de batidas suaves e melodias relaxantes que funcionam como trilha sonora perfeita para qualquer situação: <em>estudar</em>, <em>trabalhar</em>, <em>realizar tarefas</em> ou simplesmente relaxar. Seja para manter o foco ou aliviar o estresse, o UniCute Relax está aqui para acompanhar você.
</p>

<p>
  Com nossas <strong>Lives 24 horas</strong> e <strong>playlists LoFi</strong>, você encontrará um ambiente aconchegante sempre à disposição. Basta dar o <strong>play</strong>, desacelerar, respirar fundo e deixar tudo fluir. Encontre o equilíbrio e a tranquilidade que você merece.
</p>

<p>
  O UniCute Relax é para todos! Se você precisa de um espaço acolhedor, UniCute Relax também é sugerido para lidar com <em>neurodivergências</em>, como <strong>TDAH</strong> ou <strong>autismo</strong>, auxiliando no <em>foco</em> e <em>concentração</em>. Este é o lugar certo, seja para organizar suas ideias, focar ou simplesmente descansar, nosso objetivo é tornar sua rotina mais leve e agradável.
</p>

<p>
  E tem mais! Oferecemos <strong>jogos relaxantes</strong> no estilo puzzle, criados especialmente para proporcionar diversão, treinar sua memória e atenção. Além disso, estamos desenvolvendo novos jogos, blogs e outros conteúdos para tornar sua experiência ainda mais envolvente e interessante.
</p>

<p>
  <em>Quer levar as músicas do <strong>UniCute Relax</strong> para onde você for?</em> Elas estão disponíveis nas principais plataformas de streaming, como <strong>Spotify</strong>, <strong>Deezer</strong>, <strong>Amazon Music</strong>, <strong>YouTube Music</strong>, <strong>TikTok</strong>, <strong>Apple Music</strong>, entre outras. Basta escolher sua favorita e aproveitar!
</p>

<p>
  Permita-se explorar o universo do UniCute Relax. Deixe que nossas batidas e melodias transformem o seu dia em uma experiência única de tranquilidade e inspiração.
</p>


</div>

</div>


          {/* Carrossel de Logos */}
          <div className={styles['streaming-carousel']}>
            <h3 className={styles['carousel-heading']}>Disponível nas principais plataformas de Streamings:</h3>
            <div className={styles['carousel-icons']}>
              
              <a href="https://open.spotify.com/intl-pt/artist/15rAb41co5784UdtRFGRWD" target="_blank" rel="noopener noreferrer" >
                  <i className="bx bxl-spotify" aria-label="Spotify"></i>
                </a>
                <a aria-label="Deezer">
                  <i className="bx bxl-deezer"></i>
                </a>
                <a href="https://music.amazon.com/artists/B0DQVJ5GS1/unicute-relax" target="_blank" rel="noopener noreferrer" aria-label="Amazon Music">
                  <i className="bx bxl-amazon"></i>
                </a>
                <a href="https://music.youtube.com/playlist?list=OLAK5uy_lhNClDwOZMxaUhAV938QjV4ozwgvpOvJ8" target="_blank" rel="noopener noreferrer" aria-label="YouTube Music">
                  <i className="bx bxl-youtube"></i>
                </a>
                <a href="https://www.tiktok.com/@unicuterelax" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                  <i className="bx bxl-tiktok"></i>
                </a>
                <a aria-label="Apple Music"> <i className="bx bxl-apple"></i>
                </a>

            </div>
          </div>
        </div>
        
        <p className={styles['p-center']}>
          Bem-vindo ao UniCute Relax - onde a música e a paz se unem para acalmar sua mente e renovar suas energias!
        </p>
      </article>
    </section>
  );
};

export default Sobre;
