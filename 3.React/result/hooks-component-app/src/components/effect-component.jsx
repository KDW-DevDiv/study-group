import { useEffect, useState } from 'react';

const EffectComponent = () => {
  const [number, setNumber] = useState(0);
  const [value, setValue] = useState(0);

  // Renderingの度に動く
  useEffect(() => {
    console.log('A');
    return () => {
      console.log('A cleanup');
    };
  });

  // Mounting時に動く
  useEffect(() => {
    console.log('B []');
    return () => {
      console.log('B [] cleanup');
    };
  }, []);

  // numberの値が変わる度に動く
  useEffect(() => {
    console.log('C number', number);
    return () => {
      console.log('C number cleanup');
    };
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
