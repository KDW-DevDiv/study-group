import { useState } from 'react';
import EffectComponent from './effect-component';

const EffectPComponent = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? 'Close' : 'Open'}</button>
      <br />
      <br />
      <div>EffectComponent</div>
      {isOpen && <EffectComponent />}
    </div>
  );
};

export default EffectPComponent;
