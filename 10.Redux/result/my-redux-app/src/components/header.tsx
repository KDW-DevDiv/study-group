import { useAppDispatch, useAppSelector } from '../app/hooks';
import { codeFilterModified, nameFilterModified } from '../features/search-item-slice';
import CodeFilter from './code-filter';
import NameFilter from './name-filter';

const Header = () => {
  console.log('header.tsx');

  return (
    <>
      <CodeFilter />
      <NameFilter />
    </>
  );
};

export default Header;
