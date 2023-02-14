import { useAppDispatch, useAppSelector } from '../app/hooks';
import { codeFilterModified } from '../features/search-item-slice';

const CodeFilter = () => {
  const codeFilter = useAppSelector((state) => state.searchItem.filter.code);
  const dispatch = useAppDispatch();

  console.log('code-filter.tsx');

  return (
    <div>
      <div>コード</div>
      <input
        type="number"
        value={codeFilter || ''}
        onChange={(e) => dispatch(codeFilterModified(Number(e.target.value)))}
      />
    </div>
  );
};

export default CodeFilter;
