import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/homepage';
import Gamesession from './pages/game_session';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/game_session" element={<Gamesession />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
