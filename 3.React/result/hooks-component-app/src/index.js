import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import EffectComponent from './components/effect-component';
import HelloComponent from './components/hello-component';
import MountUnMountComponent from './components/mount-unmount-component';
import ParentComponent from './components/parent-component';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <HelloComponent />
    <MountUnMountComponent />
    <ParentComponent />
    <EffectComponent />
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
