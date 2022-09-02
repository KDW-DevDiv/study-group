import { useState } from 'react';
import HelloComponent from './hello-component';

const MountUnMountComponent = () => {
  const [isShow, setIsShow] = useState(true);

  return (
    <div>
      <h1>Grand Parent</h1>
      <button onClick={() => setIsShow(!isShow)}>Display</button>
      {isShow && <HelloComponent />}
    </div>
  );
};

export default MountUnMountComponent;
