import { useContext } from 'react';
import { themeColor } from './context';

const Grandchild = () => {
  const theme = useContext(themeColor);
  return <div style={{ color: theme }}>Grandchild</div>;
};

export default Grandchild;
