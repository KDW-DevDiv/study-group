const JsxComponent = ({ message }) => {
  const isShowing = true;
  const testString = 'comes from the variable';
  const itemArray = [
    { id: 1, item: 'item1' },
    { id: 2, item: 'item2' },
    { id: 3, item: 'item3' },
  ];

  console.log(message);

  return (
    <div>
      <h1>Hello World!</h1>
      <h2>{message}</h2>
      <h2>{testString}</h2>
      {isShowing && <h2>Conditional Output</h2>}
      {isShowing ? <h2>Conditional Output</h2> : undefined}
      <ul>
        {itemArray.map((el) => (
          <li key={el.id}>{el.item}</li>
        ))}
      </ul>
    </div>
  );
};

export default JsxComponent;
