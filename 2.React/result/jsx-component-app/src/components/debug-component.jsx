const DebugComponent = () => {
  const handleClick = () => {
    alert('Click!');
  };

  return <button onClick={handleClick}>Click</button>;
};

export default DebugComponent;
