import React from 'react';
import MainComponent from './components/MainComponent';
import NavComponent from './components/NavComponent';
import HeroComponent from './components/HeroComponent';
import Industries from './components/Industries';
import EntrepreneursComponent from './components/EntrepreneursComponent.js';
import TradersMain from './components/TradersMain';
import Partners from './components/Partners';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div className="App">
      <MainComponent>
        <NavComponent />
        <HeroComponent />
        <Industries />
        <EntrepreneursComponent />
        <TradersMain />
        <Partners />
        <FooterComponent />
      </MainComponent>
    </div>
  );
}

export default App;