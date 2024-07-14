import React from 'react';
import './Navbar.css';


const Navbar = () => {
  return (
    <header className="header">
      <div className="logo">earnwave</div>

      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#business">For business</a></li>
          <li><a href="#media">Media</a></li>
          <li><a href="#blog">Blog</a></li>
        </ul>
      </nav>

      <button className="signup-button">Sign up</button>
      
    </header>
  );
};

export default Navbar;
