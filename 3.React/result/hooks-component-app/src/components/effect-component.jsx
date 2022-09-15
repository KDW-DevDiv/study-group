import { useEffect, useState } from 'react';

const EffectComponent = () => {
  const [number, setNumber] = useState(0);
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log('useEffect');
  });

  useEffect(() => {
    console.log('useEffect []');
  }, []);

  useEffect(() => {
    console.log('useEffect number', number);
  }, [number]);

  return (
    <div>
      <button
        onClick={() => {
          setNumber((prevState) => prevState + 1);
        }}
      >
        Change Number
      </button>
      <div>Number {number}</div>
      <button
        onClick={() => {
          setValue((prevState) => prevState + 1);
        }}
      >
        Change Value
      </button>
      <div>Value {value}</div>
    </div>
  );
};

export default EffectComponent;
