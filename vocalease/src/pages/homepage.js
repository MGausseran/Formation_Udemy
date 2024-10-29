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
        <p>C'est ici que vous allez perfectionner votre prononciation.</p>
        <section className='main_menu'>
          <h3 className='main_menu_title'>Alors, on apprend quoi aujourd'hui ?</h3>
          <h4 className='sub_menus start'>Découvrir</h4>
          <ul className='languages_list'>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <h4 className='sub_menus reload'>Reprendre</h4>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </section>
      </div>
    </div>
    </div>
  );
}

export default Homepage;
