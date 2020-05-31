import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/Card.css'
import Card from './components/Card.js'
import { render } from '@testing-library/react';

  function App() {
    return (
      <div className="App">
        <h1>Cryptocurrency values:</h1>
        <div className='cont'>
        <Card name="BTC"/>
        <Card name="ETH"/>
        <Card name="LTC"/>
        </div>
      </div>
    );
  }



export default App;
