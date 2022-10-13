import React from 'react';
import ReactDOM from 'react-dom/client';
import Base from './components/select-data/base';
import Parent from './components/theme-sharing/parent';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Base />
    <Parent />
  </>
);
