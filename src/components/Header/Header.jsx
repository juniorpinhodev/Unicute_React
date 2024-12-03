import React, { useState, useRef } from "react";
import "../../index.css";

function Header() {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isPlaying, setPlaying] = useState(false);
  const [popupPosition, setPopupPosition] = useState({ top: "50%", left: "50%" });
  const popupRef = useRef(null); // Referência para o pop-up

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

  // Funções para arrastar
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

  const [isMinimized, setMinimized] = useState(false);

  const handleMinimize = () => {
    setMinimized((prev) => !prev);
};
  


  return (
    <>
      <header className="header">
        <a href="/" className="logo">
          UNICUTE<span>.</span>
        </a>

        <nav className="navbar">
          <a href="#Home" className="ativado">Home</a>
          <a href="#Sobre">Sobre</a>
          <a href="#Games">Games</a>
        </nav>

                {/* Player */}
                <div className="player">
          <button onClick={handlePlayPause}>
            {isPlaying ? "Pause" : "Play"}
          </button>
        </div>
        

        <div className="links">
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
        
        <a href="/languages/english.html" id="change-language">
          English Language
          <img src="src/assets/usa.png" alt="Switch to English" />
        </a>

        <div className="bx bx-menu" id="menu-icon"></div>

        
      </header>

      {/* Pop-up para exibir a live */}
      {isPopupOpen && (
  <div
    className={`popup ${isMinimized ? "minimized" : ""}`}
    style={{
      top: !isMinimized ? popupPosition.top : "auto",
      left: !isMinimized ? popupPosition.left : "auto",
    }}
    ref={popupRef}
    onMouseDown={!isMinimized ? handleMouseDown : null}
  >
    <div className="popup-content">
      <button className="close-button" onClick={handleClosePopup}>
        Fechar
      </button>
      <button className="minimize-button" onClick={handleMinimize}>
        {isMinimized ? "⬆" : "⬇"}
      </button>
      <iframe
        width={isMinimized ? "200" : "560"}
        height={isMinimized ? "112" : "315"}
        src={`https://www.youtube.com/embed/UdRLmVufx88?autoplay=${isPlaying ? 1 : 0}`}
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
