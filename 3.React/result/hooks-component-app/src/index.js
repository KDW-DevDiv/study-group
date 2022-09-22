import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import EffectComponent from './components/effect-component';
import HelloComponent from './components/hello-component';
import MountUnMountComponent from './components/mount-unmount-component';
import ParentComponent from './components/parent-component';

const root = ReactDOM.createRoot(document.getElementById('root'));
// console.log(<HelloComponent />);
root.render(
  <div>
    <HelloComponent />
    <MountUnMountComponent />
    <ParentComponent />
    <EffectComponent />
  </div>
);
