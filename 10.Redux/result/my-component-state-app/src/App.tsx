import { useState } from 'react';
import './App.css';
import Header from './components/header';
import ItemList from './components/item-list';

export type Data = {
  id: number;
  code: number;
  name: string;
  remark: string;
  isValid: boolean;
};

function App() {
  const [codeFilter, setCodeFilter] = useState<number | null>(null);
  const [nameFilter, setNameFilter] = useState('');

  const initialItems: Data[] = [
    { id: 1, code: 100, name: 'test1', remark: '', isValid: true },
    { id: 2, code: 101, name: 'test11', remark: '', isValid: true },
    { id: 3, code: 200, name: 'test2', remark: '', isValid: true },
    { id: 4, code: 201, name: 'test22', remark: '', isValid: true },
    { id: 5, code: 300, name: 'test3', remark: '', isValid: true },
  ];

  const [items, setItems] = useState<Data[]>(initialItems);

  const onRemarkChange = (index: number, value: string) => {
    setItems((prev) => {
      const result = [...prev];
      result[index].remark = value;
      return result;
    });
  };

  const onIsValidChange = (index: number, isValid: boolean) => {
    setItems((prev) => {
      const result = [...prev];
      result[index].isValid = isValid;
      return result;
    });
  };

  const onClick = () => {
    let targetItems = initialItems;
    if (codeFilter) targetItems = targetItems.filter((item) => item.code.toString().includes(codeFilter.toString()));
    if (nameFilter) targetItems = targetItems.filter((item) => item.name.includes(nameFilter));

    setItems(targetItems);
  };

  console.log('App.tsx');

  return (
    <div className="Container">
      <div>
        <Header
          codeFilter={codeFilter}
          setCodeFilter={setCodeFilter}
          nameFilter={nameFilter}
          setNameFilter={setNameFilter}
        />
        <br />
        <button onClick={onClick}>検索</button>
        <br />
        <ItemList items={items} onRemarkChange={onRemarkChange} onIsValidChange={onIsValidChange} />
      </div>
    </div>
  );
}

export default App;
