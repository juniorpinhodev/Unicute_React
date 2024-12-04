import React, { useEffect } from 'react';
import Typed from 'typed.js';
import "../../App.css"; 

const Home = () => {
  useEffect(() => {
    const typed = new Typed('.multiText', {
      strings: ['UniCute', 'LoFi', 'Relax', 'Chill'],
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1500,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="wrapper" id="Home">
      
      <div className="cols cols0">
        <span className="topline">Olá</span>
        <h1>
          Sou <span className="multiText"></span>
        </h1>
        <p>
          Relaxe com o UniCute. <br />
          Acesse nossas lives no YouTube - Jogue nossos Games Relaxantes
        </p>
      </div>

      <div className="cols cols1">
        <div className="imgbox">
          <img src="src/assets/ball.png" alt="Ball" id="splash" />
          <img src="src/assets/img2.png" alt="Decorative" />
        </div>
      </div>
          
    </section>
  );
};

export default Home;
