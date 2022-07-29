const DebugComponent = () => {
  const handleClick = () => {
    document.alert('Click!');
  };

  return <button onClick={handleClick}>Click</button>;
};

export default DebugComponent;
