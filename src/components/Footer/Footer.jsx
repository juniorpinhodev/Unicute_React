import React from 'react';
import "../../App.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-text">
        <p>Copyright &copy; 2024 Desenvolvido por Junior Pinho | DEV</p>
      </div>

      <div className="footer-iconTop">
        <a href="#!" onClick={scrollToTop}>
          <i className="bx bxs-chevrons-up"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;

