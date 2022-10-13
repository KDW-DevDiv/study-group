const Item = ({ result, handleResultChange }) => {
  return (
    <div>
      {result.map((el, index) => (
        <div key={el.id}>
          <input
            type="checkbox"
            value={el.checked}
            onChange={(e) => handleResultChange(e.target.checked, 'checked', index)}
          />
          <input value={el.value1} onChange={(e) => handleResultChange(e.target.value, 'value1', index)} />
          <input value={el.value2} onChange={(e) => handleResultChange(e.target.value, 'value2', index)} />
        </div>
      ))}
    </div>
  );
};

export default Item;
