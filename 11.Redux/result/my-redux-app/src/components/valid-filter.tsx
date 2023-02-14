import { useAppDispatch, useAppSelector } from '../app/hooks';
import { validFilterModified } from '../features/search-item-slice';

const ValidFilter = () => {
  const checked = useAppSelector((state) => state.searchItem.filter.isValid);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div>有効データのみ</div>
      <input type="checkbox" checked={checked} onChange={() => dispatch(validFilterModified(!checked))} />
    </div>
  );
};

export default ValidFilter;
