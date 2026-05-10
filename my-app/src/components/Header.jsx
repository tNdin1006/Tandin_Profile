import React from 'react';
import { FiHome, FiUser, FiBriefcase, FiMail, FiDownload, FiDatabase } from 'react-icons/fi';

const Header = ({ activeSection, onSectionClick }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: <FiHome /> },
    { id: 'about', label: 'About', icon: <FiUser /> },
    { id: 'skills', label: 'Skills', icon: <FiBriefcase /> },
    { id: 'projects', label: 'Projects', icon: <FiBriefcase /> },
    { id: 'contact', label: 'Contact', icon: <FiMail /> },
    { id: 'messages', label: 'Inquiries', icon: <FiDatabase /> }, // The new link
  ];

  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <div className="logo-container">
            <button className="logo" onClick={() => onSectionClick('home')}>
              Tandin Wangchuk
            </button>
          </div>

          <div className="nav-right">
            <div className="nav-links">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                  onClick={() => onSectionClick(item.id)}
                >
                  {item.icon}
                  <span className="nav-text">{item.label}</span>
                </button>
              ))}
            </div>
            <a href="/Tandin_Wangchuk_CV.pdf" className="cv-download-btn" download>
              <FiDownload />
              <span>CV</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;