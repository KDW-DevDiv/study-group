import { useState } from 'react';
import ChildComponent from './child-component';

const ParentComponent = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>Parent Component : Counter {counter}</h1>
      <button
        onClick={() => {
          setCounter((prevState) => prevState + 1);
        }}
      >
        Increment
      </button>
      <ChildComponent id={1} />
      <ChildComponent />
    </div>
  );
};

export default ParentComponent;
