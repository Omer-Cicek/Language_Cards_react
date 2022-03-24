import React from 'react';
import './App.scss';
import react from './assets/react.svg';
import Card from './components/card/Card';

const App = () => {
  return (
    <div className="container">
      <img src={react} alt="react" className="react-img" />
      <div className="container-cards-div">
        <h2 className="container-cards-div-h2">Languages</h2>
        <Card />
      </div>
      <div className="blue-div"></div>
    </div>
  );
};

export default App;
