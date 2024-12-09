import React, { useEffect } from 'react';
import Typed from 'typed.js';
import styles from './Home.module.css';

const Home = () => {
  useEffect(() => {
    const typed = new Typed(`.${styles.multiText}`, {
      strings: ['UniCute', 'LoFi', 'Relax'],
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
    <section className={styles.wrapper} id="Home">
      <div className={`${styles.cols} ${styles.cols0}`}>
        <span className={styles.topline}>Olá</span>
        <h1>
          Sou <span className={styles.multiText}></span>
        </h1>
        <p>
          Relaxe com o UniCute. <br />
          Acesse nossas lives no YouTube - Jogue nossos Games Relaxantes
        </p>
      </div>

      <div className={`${styles.cols} ${styles.cols1}`}>
        <div className={styles.imgbox}>
          <img src="/assets/ball.png" alt="Ball" id="splash" />
          <img src="/assets/img2.png" alt="Uniute" />
        </div>
      </div>
    </section>
  );
};

export default Home;
