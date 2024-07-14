import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">LOGO</div>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#properties">Properties</a></li>
          <li><a href="#about-us">About Us</a></li>
          <li><a href="#contact-us" className="contact-button">Contact Us</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
