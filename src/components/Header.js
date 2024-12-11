import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">argon</div>
      <div className="actions">
        <button className="btn-login">Biz Login</button>
        <button className="btn-login">Login</button>
      </div>
    </header>
  );
};

export default Header;
