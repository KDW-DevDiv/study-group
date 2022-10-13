import { useEffect, useState } from 'react';
import Filter from './filter';
import Item from './item';

const data = [
  { id: 1, checked: false, value1: 'A', value2: 'B' },
  { id: 2, checked: false, value1: 'C', value2: 'D' },
  { id: 3, checked: false, value1: 'E', value2: 'F' },
];

const Base = () => {
  const [result, setResult] = useState([]);
  const [filter, setFilter] = useState('');

  const handleResultChange = (value, key, index) => {
    setResult((prevState) => {
      const newResult = prevState.slice();
      newResult[index][key] = value;
      setResult(newResult);
    });
  };

  const handleFilterChange = (value) => {
    setFilter(value);
  };

  const handleSearch = () => {
    if (filter === '') {
      setResult(data);
      return;
    }

    const target = result.filter((el) => el.value1 === filter || el.value2 === filter);
    setResult(target);
  };

  const handleTransfer = () => {
    const target = result.filter((el) => el.checked === true);
    console.log(target);
  };

  useEffect(() => {
    // APIなどから初期表示データを取得
    // 今回は適当なデータを利用
    setResult(data);
  }, []);

  return (
    <>
      <button onClick={handleTransfer}>引用</button>
      <button onClick={handleSearch}>検索</button>
      <Filter handleFilterChange={handleFilterChange} />
      <Item result={result} handleResultChange={handleResultChange} />
    </>
  );
};

export default Base;
