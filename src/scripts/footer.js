import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2023 Seamless Dreams. All rights reserved.</p>
      <nav>
        <ul>
          <li><a href="#privacy-policy">Privacy Policy</a></li>
          <li><a href="#terms-of-service">Terms of Service</a></li>
          <li><a href="#help-center">Help Center</a></li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
