import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <h3 className="footer-title">Tandin Wangchuk</h3>
          <p className="footer-description">
            UX Designer & Web Developer, passionate about creating meaningful digital experiences.
          </p>
          
          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
            {/* ADDED: Inquiries Link */}
            <a href="#messages" className="footer-admin-link">Inquiries</a>
          </div>
          
          <div className="copyright">
            <p>
              © {currentYear} Tandin Wangchuk. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;