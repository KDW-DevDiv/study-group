## Redux

State をグローバルに管理するための Javascript ライブラリ。Store という場所に に State を格納し、決められた方法でのみ State へのアクセス・更新が可能とする。

以下の場合に効果を発揮する。

- アプリケーションの様々な場所から、アクセスを行う必要があるとき。

- 頻繁に State の更新が発生するとき。

- 更新ロジックが複雑なとき。

- 中・大規模アプリケーションで、多くの開発者がかかわるとき。

<br/>

## 背景

Component ベースの state 管理の場合、子・孫、、コンポーネントへの値受け渡しや更新が非常に煩雑になり、バグの温床やパフォーマンス低下に繋がることがある。

そこで、Component ツリーとは別の場所でグローバルに state を管理する方法が生み出された。

<br/>

## 用語

- Store

  State が管理されている場所。

- Action

  State を更新するために、必要な Javascript オブジェクト。

- Dispatch

  State を更新する際に、Action を Store に送信するためのメソッド。dispatch(action)のようなイメージ。

- Reducer

  Dispatch されたアクションを元に、Store 内で State の更新を行い、更新された State のコピーを返す。

<br/>

## Data Flow

この図が Redux におけるアクセスと更新を示しているので、頭の片隅においておく。

![Alt Text](./ReduxDataFlowDiagram.gif)

<br/>

## Component ベースの State 管理の場合

useState を用いて簡単なフィルターと明細形式のページを作成する。

<br/>

👨🏽‍💻 ハンズオン 👨🏽‍💻

```
cd 10.Redux
mkdir work
cd work
yarn create react-app [my-app] --template typescript
cd [my-app]
mkdir src/components
```

作成した components フォルダ配下に以下のファイルを作成する。

```
components
├── header.tsx
├── item-list.tsx
└── item.tsx
```

- header.tsx

検索フィルターを表示する Component

```
type HeaderProps = {
  codeFilter: number | null;
  setCodeFilter: (value: number) => void;
  nameFilter: string;
  setNameFilter: (value: string) => void;
};

const Header = ({ codeFilter, setCodeFilter, nameFilter, setNameFilter }: HeaderProps) => {
  return (
    <>
      <div>
        <div>コード</div>
        <input type="number" value={codeFilter || ''} onChange={(e) => setCodeFilter(Number(e.target.value))} />
      </div>
      <div>
        <div>名称</div>
        <input type="text" value={nameFilter} onChange={(e) => setNameFilter(e.target.value)} />
      </div>
    </>
  );
};

export default Header;
```

- item-list.tsx

明細部を表示する Component

```
import { Data } from '../App';
import Item from './item';

const ItemList = ({ items }: { items: Data[] }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>コード</th>
          <th>名称</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <Item item={item} />
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ItemList;
```

- item.tsx

1 行のデータを表示する Component

```
import { Data } from '../App';

const Item = ({ item }: { item: Data }) => {
  return (
    <>
      <td>{item.id}</td>
      <td>{item.code}</td>
      <td>{item.name}</td>
    </>
  );
};

export default Item;
```

src/App.tsx に以下の内容をコピー

App.tsx はフィルタと明細部の State を保持する親 Component。レンダリングの様子を確認するために、console.log を出力している。

```
import { useState } from 'react';
import './App.css';
import Header from './components/header';
import ItemList from './components/item-list';

export type Data = {
  id: number;
  code: number;
  name: string;
};

const initialItems: Data[] = [
  { id: 1, code: 100, name: 'test1' },
  { id: 2, code: 101, name: 'test11' },
  { id: 3, code: 200, name: 'test2' },
  { id: 4, code: 201, name: 'test22' },
  { id: 5, code: 300, name: 'test3' },
];

function App() {
  const [codeFilter, setCodeFilter] = useState<number | null>(null);
  const [nameFilter, setNameFilter] = useState('');

  const [items, setItems] = useState<Data[]>(initialItems);

  const onClick = () => {
    let targetItems = initialItems;
    if (codeFilter) targetItems = targetItems.filter((item) => item.code.toString().includes(codeFilter.toString()));
    if (nameFilter) targetItems = targetItems.filter((item) => item.name.includes(nameFilter));

    setItems(targetItems);
  };

  console.log('rendering');

  return (
    <div className="Container">
      <div>
        <Header
          codeFilter={codeFilter}
          setCodeFilter={setCodeFilter}
          nameFilter={nameFilter}
          setNameFilter={setNameFilter}
        />
        <br />
        <button onClick={onClick}>検索</button>
        <br />
        <ItemList items={items} />
      </div>
    </div>
  );
}

export default App;
```

src/App.css に以下の内容をコピー

```
.Container {
  display: flex;
  justify-content: center;
}

.Container div{
  display: block;
}

table, th, td {
  border: 1px solid;
}
input {
  border:0.5px solid
}
```

作成した Application を起動する

```
yarn start
```

Browser の Developer ツール-Console タブを開く

コードに値を入力すると、1 文字ごとに"rendering"が console に表示されていることがわかる。これは、useState の仕様で、setXXX が動作する度にレンダリングが走るためである。

サンプルアプリ程度であれば問題はないが、規模が大きくなってくるとパフォーマンスのボトルネックや、大量の Props による非効率性により、多人数で開発の妨げになる可能性も出てくる。

<br/>

## Redux ベースの State 管理の場合

```
cd ../
yarn create react-app [my-redux-app] --template typescript
cd [my-redux-app]
mkdir src/components
mkdir src/app
```

作成した app フォルダ配下に以下のファイルを作成する。

```
app
├── hooks.ts
└── store.ts
```

- hooks.ts

これに関しては呪文のような感じでとにかくコピーする。

```
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
```

- store.ts

ここも定義のようなものなので、とにかくコピーする。グローバルな値管理を行う Store を定義している。

```
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    // ここに定義したものを記載していく。
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
```

作成した components フォルダ配下に以下のファイルを作成する。

```
components
├── header.tsx
├── item-list.tsx
└── item.tsx
```
