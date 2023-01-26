import './App.css';
import { useAppDispatch } from './app/hooks';
import Header from './components/header';
import ItemList from './components/item-list';
import { resultFiltered } from './features/search-item-slice';

export type Data = {
  id: number;
  code: number;
  name: string;
};

function App() {
  const dispatch = useAppDispatch();

  const onClick = () => {
    dispatch(resultFiltered());
  };

  console.log('App.tsx');

  return (
    <div className="Container">
      <div>
        <Header />
        <br />
        <button onClick={onClick}>検索</button>
        <br />
        <ItemList />
      </div>
    </div>
  );
}

export default App;
