import { useEffect, useState } from 'react';

const ChildComponent = ({ id }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log(`useEffect Child Component ${id}`);
  });

  console.log('Child');

  return (
    <div>
      <h1>
        Child Component {id} : Counter {counter}
      </h1>
      <button
        onClick={() => {
          setCounter((prevState) => prevState + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
};

export default ChildComponent;
