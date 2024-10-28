import React from 'react';
import Header from '../components/header';
import './homepage.css';

const Homepage = () => {
  return (
    <div>
      <Header />
    <div className="homepage">
      <div className="body">
        <h2>Bienvenue sur VocalEase !</h2>
        <p>C'est ici que vous pouvez perfectionner votre prononciation.</p>
        <button>A vous de jouer !</button>
      </div>
    </div>
    </div>
  );
}

export default Homepage;
