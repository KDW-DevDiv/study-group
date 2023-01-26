import { Data } from '../App';

type ItemProps = {
  item: Data;
  onRemarkChange: (value: string) => void;
  onIsValidChange: (isValid: boolean) => void;
};

const Item = ({ item, onRemarkChange, onIsValidChange }: ItemProps) => {
  return (
    <>
      <td>{item.id}</td>
      <td>{item.code}</td>
      <td>{item.name}</td>
      <td>
        <input value={item.remark} onChange={(e) => onRemarkChange(e.target.value)} />
      </td>
      <td>
        <input type="checkbox" checked={item.isValid} onChange={() => onIsValidChange(!item.isValid)} />
      </td>
    </>
  );
};

export default Item;
