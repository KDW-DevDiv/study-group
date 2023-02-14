import { useAppDispatch, useAppSelector } from '../app/hooks';
import { shallowEqual } from 'react-redux';
import Item from './item';
import { useEffect } from 'react';
import { fetchItems } from '../features/search-item-slice';

const ItemList = () => {
  const items = useAppSelector((state) => Object.keys(state.searchItem.items), shallowEqual);
  const dispatch = useAppDispatch();

  console.log('item-list.tsx');

  useEffect(() => {
    dispatch(fetchItems());
    // eslint-disable-next-line
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>コード</th>
          <th>名称</th>
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
