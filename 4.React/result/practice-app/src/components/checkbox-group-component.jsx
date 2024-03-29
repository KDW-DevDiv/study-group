import { useState } from 'react';

const CheckboxGroupComponent = () => {
  const [value, setValue] = useState('check2');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <label>
        check1
        <input type="checkbox" checked={value === 'check1'} value="check1" onChange={handleChange} />
      </label>
      <label>
        check2
        <input type="checkbox" checked={value === 'check2'} value="check2" onChange={handleChange} />
      </label>
      <label>
        check3
        <input type="checkbox" checked={value === 'check3'} value="check3" onChange={handleChange} />
      </label>
    </div>
  );
};

export default CheckboxGroupComponent;
