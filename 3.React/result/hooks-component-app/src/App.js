import logo from './logo.svg';
import './App.css';
import { jsx as _jsx } from 'react/jsx-runtime';
import React from 'react';

function App() {
  console.log(_jsx('h1', { className: 'bh-white', children: 'Hello World' }));
  console.log({ $$typeof: Symbol(React.element), bbb: 245 });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
