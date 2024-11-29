import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <header className="header">
        <div className="logo">
          <img src='https://ok2showup-frontend.s3.us-east-2.amazonaws.com/logo192.png' alt='logo' className='logo' />
        </div>
        <nav>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <section className="hero">
        <h1>Step Up, Stand Out</h1>
        <p className='textSize'>Unlock your potential today with impactful strategies that drive results.</p>
        <div className="buttons">
          <button className="btn btn-primary">Get Started</button>
          <button className="btn btn-secondary">Learn More</button>
        </div>
      </section>
      <footer className="footer">
        <p>© 2024 Ok2ShowUp.com All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;
