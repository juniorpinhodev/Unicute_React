import React, { useState, useRef } from "react";
import styles from "./Header.module.css";

function Header() {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isPlaying, setPlaying] = useState(false);
  const [popupPosition, setPopupPosition] = useState({ top: "65%", left: "72%" });
  const [isMinimized, setMinimized] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const popupRef = useRef(null);

  const handlePlayPause = () => {
    if (!isPopupOpen) {
      setPopupOpen(true);
    }
    setPlaying((prev) => !prev);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
    setPlaying(false);
  };

  const handleMouseDown = (e) => {
    const popup = popupRef.current;
    if (popup) {
      const offsetX = e.clientX - popup.getBoundingClientRect().left;
      const offsetY = e.clientY - popup.getBoundingClientRect().top;

      const handleMouseMove = (moveEvent) => {
        setPopupPosition({
          top: `${moveEvent.clientY - offsetY}px`,
          left: `${moveEvent.clientX - offsetX}px`,
        });
      };

      const handleMouseUp = () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }
  };

  const handleMinimize = () => {
    setMinimized((prev) => !prev);
  };

  return (
    <>
      <header className={styles.header}>

        {/* Botão Hamburger */}
        <div className={styles.hamburger}>
          <button
             aria-label="Abrir menu"
            className={`${styles.hamburgerButton} ${
            isMenuOpen ? styles.active : ""
            }`}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
          <i
            className={`bx ${isMenuOpen ? "bx-x" : "bx-menu"} menu-icon`}
          ></i>

          </button>
        </div>

        <a href="#Home" className={styles.logo}>
          UNICUTE<span>.</span>
        </a>

        {/* Menu Navbar */}
        <nav
          className={`${styles.navbar} ${isMenuOpen ? styles.show : ""}`}
          onClick={() => setMenuOpen(false)} // Fecha o menu ao clicar em um link
        >
          <a href="#Home" className={styles.active}>
          Home
        </a>
          <a href="#Sobre">Sobre</a>
          <a href="#Games">Games</a>
        </nav>

        <div className={styles.player}>
          <button className={styles.liveButton} onClick={handlePlayPause}>
            <span className={styles.liveDot}></span>
            <span className={styles.liveText}>LIVE</span>
            <i
              className={`bx ${
                isPlaying ? "bx-pause-circle" : "bx-play-circle"
              }`}
            ></i>
          </button>
        </div>

        <div className={styles.links}>
          <a
            href="https://www.youtube.com/@unicuterelax"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-youtube"></i>
          </a>
          <a
            href="https://www.instagram.com/unicuterelax"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-instagram-alt"></i>
          </a>
          <a
            href="https://www.tiktok.com/@unicuterelax"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-tiktok"></i>
          </a>
          <a
            href="https://www.facebook.com/unicuterelax"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-facebook"></i>
          </a>
        </div>

        <a
          href="#Home"
          id="change-language"
          className={styles.languageSwitch}
        >
          English Language
          <img src="/assets/usa.png" alt="Switch to English" />
        </a>
      </header>

      {isPopupOpen && (
        <div
          className={`${styles.popup} ${isMinimized ? styles.minimized : ""}`}
          style={{
            top: !isMinimized ? popupPosition.top : "auto",
            left: !isMinimized ? popupPosition.left : "auto",
          }}
          ref={popupRef}
          onMouseDown={!isMinimized ? handleMouseDown : null}
        >
          <div className={styles.popupContent}>
            <button className={styles.closeButton} onClick={handleClosePopup}>Fechar</button>
            <button className={styles.minimizeButton} onClick={handleMinimize}>
              {isMinimized ? "⬆" : "⬇"}
            </button>
            <iframe
              width={isMinimized ? "200" : "560"}
              height={isMinimized ? "112" : "315"}
              src={`https://www.youtube.com/embed/Bmygmnpvo6k?autoplay=${isPlaying ? 1 : 0}`}
              title="UniCute Relax Live"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen 
            ></iframe>
          </div>
        </div>
      )}

    </>
  );
}

export default Header;
