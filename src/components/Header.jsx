import React from 'react';
import "../index.css";

function Header() {
  return (
    <header className="header">
      <a href="/" className="logo">
        UNICUTE<span>.</span>
      </a>

      <nav className="navbar">
        <a href="#Home" className="ativado">Home</a>
        <a href="#Sobre">Sobre</a>
        <a href="#Games">Games</a>
      </nav>

      <div className="links">
        <a href="https://www.youtube.com/@unicuterelax" target="_blank" rel="noopener noreferrer">
          <i className="bx bxl-youtube"></i>
        </a>
        <a href="https://www.instagram.com/unicuterelax" target="_blank" rel="noopener noreferrer">
          <i className="bx bxl-instagram-alt"></i>
        </a>
        <a href="https://www.tiktok.com/@unicuterelax" target="_blank" rel="noopener noreferrer">
          <i className="bx bxl-tiktok"></i>
        </a>
        <a href="https://www.facebook.com/unicuterelax" target="_blank" rel="noopener noreferrer">
          <i className="bx bxl-facebook"></i>
        </a>
      </div>

      <a href="/languages/english.html" id="change-language">
        English Language
        <img src="src/assets/usa.png" alt="Switch to English" />
      </a>

      <div className="bx bx-menu" id="menu-icon"></div>
    </header>
  );
}

export default Header;