import React from 'react';
import logo from './CSSImages/logo.svg';
import './CSSImages/App.css';

import Counter from './counter.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Is this sufficiently edited?
        </p>
          <Counter/>
      </header>
    </div>
  );
}

export default App;
