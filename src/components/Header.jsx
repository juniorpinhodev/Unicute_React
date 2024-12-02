import React from 'react';
import "../index.css"; 

function Header() {
  return (
    <header className="header">
      <a href="#" className="logo">
        UNICUTE<span>.</span>
        <span className="animate" style={{ "--i": 1 }}></span>
      </a>
      <nav className="navbar">
        <a href="#Home" className="ativado">Home</a>
        <a href="#Sobre">Sobre</a>
        <a href="#Games">Games</a>
        <span className="ativado-nav"></span>
        <span className="animate" style={{ "--i": 2 }}></span>
      </nav>
      <a href="languages/english.html" id="change-language">
        English Language
        <img src="image/a1.png" alt="Switch to English" />
      </a>
      <div className="bx bx-menu" id="menu-icon">
        <span className="animate" style={{ "--i": 2 }}></span>
      </div>
    </header>
  );
}

export default Header;
