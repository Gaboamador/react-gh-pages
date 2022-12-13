import logo from './logo.png';
import './App.css';
//import { useState } from 'react';
//import { computeHeadingLevel } from '@testing-library/react';
// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';
import EmbeddedEmail from './embeddedEmail'


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          FIFA World Cup Qatar 2022 - Semifinales
        </p>
        
        <EmbeddedEmail/>
        
      </header>

   </div>
   
  );

}; 

export default App;
