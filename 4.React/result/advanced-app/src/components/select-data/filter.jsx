const Filter = ({ handleFilterChange }) => {
  return (
    <div>
      <label>Search for</label>
      <input onChange={(e) => handleFilterChange(e.target.value)} />
    </div>
  );
};

export default Filter;
