import { useAppDispatch, useAppSelector } from '../app/hooks';
import { nameFilterModified } from '../features/search-item-slice';

const NameFilter = () => {
  const nameFilter = useAppSelector((state) => state.searchItem.filter.name);
  const dispatch = useAppDispatch();

  console.log('name-filter.tsx');

  return (
    <div>
      <div>名称</div>
      <input type="text" value={nameFilter} onChange={(e) => dispatch(nameFilterModified(e.target.value))} />
    </div>
  );
};

export default NameFilter;
