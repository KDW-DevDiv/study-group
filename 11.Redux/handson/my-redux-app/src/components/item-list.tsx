import { useAppSelector } from '../app/hooks';
import { shallowEqual } from 'react-redux';
import Item from './item';

const ItemList = () => {
  const items = useAppSelector((state) => Object.keys(state.searchItem.items), shallowEqual);

  console.log('item-list.tsx');

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>コード</th>
          <th>名称</th>
          <th>備考</th>
          <th>有効</th>
        </tr>
      </thead>
      <tbody>
        {items.map((id) => (
          <tr key={Number(id)}>
            <Item id={Number(id)} />
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ItemList;
