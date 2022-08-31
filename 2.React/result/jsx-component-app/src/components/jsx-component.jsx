const JsxComponent = ({ message }) => {
  const isShow = true;
  const testString = 'Come from a variable';
  const itemArray = [
    { id: 1, item: 'item1' },
    { id: 2, item: 'item2' },
    { id: 3, item: 'item3' },
  ];

  return (
    <div>
      <h1>Hello World!</h1>
      <h2>{message}</h2>
      <h2>{testString}</h2>
      {isShow && <h2>Conditional Output1</h2>}
      {isShow ? <h2>Conditional Output2</h2> : undefined}
      <ul>
        {itemArray.map((el) => (
          <li key={el.id}>{el.item}</li>
        ))}
      </ul>
    </div>
  );
};

export default JsxComponent;
