import React from 'react';
import ReactDOM from 'react-dom/client';
import CheckboxGroupComponent from './components/checkbox-group-component';
import JsxPropsComponent from './components/jsx-props-component';
import StateEffectComponent from './components/state-effect-component';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ClockComponent from './components/clock-component';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <div>1. JSX と Props</div>
    <JsxPropsComponent message="Hello World" />
    <br />
    <br />
    <div>2. useState と useEffect</div>
    <StateEffectComponent />
    <br />
    <br />
    <div>3. チェックボックスグループ</div>
    <CheckboxGroupComponent />
    <br />
    <br />
    <div>4. デジタル時計を表示</div>
    <ClockComponent />
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
