import { themeColor } from './context';
import Child from './child';
import { useState } from 'react';

const Parent = () => {
  const [isBlue, setIsBlue] = useState('blue');

  return (
    <>
      <button onClick={() => setIsBlue((prevState) => !prevState)}>Click</button>
      <themeColor.Provider value={isBlue ? 'blue' : 'black'}>
        <Child />
      </themeColor.Provider>
    </>
  );
};

export default Parent;
