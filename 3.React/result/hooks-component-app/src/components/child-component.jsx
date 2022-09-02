import { useEffect } from 'react';

const ChildComponent = ({ id }) => {
  useEffect(() => {
    console.log(`useEffect Child Component ${id}`);
  });

  console.log('Child');

  return (
    <div>
      <h1>Child {id}</h1>
    </div>
  );
};

export default ChildComponent;
