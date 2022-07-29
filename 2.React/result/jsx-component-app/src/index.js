import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import JsxComponent from './components/jsx-component';
import FunctionComponent from './components/function-component';
import ClassComponent from './components/class-component';
import DebugComponent from './components/debug-component';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <DebugComponent />
    <JsxComponent message="From Parent Component" />
    <FunctionComponent title="Function Title" />
    <ClassComponent title="Class Title" />
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
