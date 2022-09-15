import { useEffect, useState } from 'react';

const StateEffectComponent = () => {
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);

  useEffect(() => {
    console.log('only on mounting');
  }, []);

  useEffect(() => {
    console.log('every render');
  });

  useEffect(() => {
    console.log('trrigered by countA');
  }, [countA]);

  return (
    <div>
      <button
        onClick={() => {
          setCountA((prevCount) => prevCount + 1);
        }}
      >
        Add countA
      </button>
      <div>Count A {countA}</div>
      <button
        onClick={() => {
          setCountB((prevCount) => prevCount + 1);
        }}
      >
        Add countB
      </button>
      <div>Count B {countB}</div>
    </div>
  );
};

export default StateEffectComponent;
