import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Get in touch with us</h3>
        <input type="email" placeholder="Email Address" />
        <button>Submit</button>
      </div>
    </footer>
  );
};

export default Footer;
