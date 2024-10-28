import React from 'react';
import Header from '../components/header';
import './game_session.css';

const Gamesession = () => {
  return (
    <div>
        <Header />
    <div className="gamesession">
      
      <div className="body">
        <h2>Session de jeu</h2>
        <p>Prêt ?</p>
      </div>
    </div>
    </div>
  );
}

export default Gamesession;
