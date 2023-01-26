import { Data } from '../App';
import Item from './item';

type ItemListProps = {
  items: Data[];
  onRemarkChange: (index: number, value: string) => void;
  onIsValidChange: (index: number, isValid: boolean) => void;
};

const ItemList = ({ items, onRemarkChange, onIsValidChange }: ItemListProps) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>コード</th>
          <th>名称</th>
          <th>備考</th>
          <th>有効</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr key={item.id}>
            <Item
              item={item}
              onRemarkChange={(value: string) => onRemarkChange(index, value)}
              onIsValidChange={(isValid: boolean) => onIsValidChange(index, isValid)}
            />
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ItemList;
