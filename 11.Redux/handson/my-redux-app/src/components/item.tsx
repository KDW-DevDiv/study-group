import { useAppDispatch, useAppSelector } from '../app/hooks';
import { itemIsValidToggled, itemRemarkModified } from '../features/search-item-slice';

const Item = ({ id }: { id: number }) => {
  const item = useAppSelector((state) => state.searchItem.items[id]);
  const dispatch = useAppDispatch();

  console.log('item.tsx');

  return (
    <>
      <td>{id}</td>
      <td>{item.code}</td>
      <td>{item.name}</td>
      <td>
        <input value={item.remark} onChange={(e) => dispatch(itemRemarkModified({ id: id, value: e.target.value }))} />
      </td>
      <td>
        <input
          type="checkbox"
          checked={item.isValid}
          onChange={() => dispatch(itemIsValidToggled({ id: id, isValid: !item.isValid }))}
        />
      </td>
    </>
  );
};

export default Item;
