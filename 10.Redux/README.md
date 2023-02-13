# Redux

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

  State を更新するために必要な Javascript オブジェクト。

- Dispatch

  State を更新する際、Action を Store に送信するためのメソッド。

  dispatch(action)のように実行する。

- Reducer

  Store に属し、Dispatch された Action を元に、Store 内で State の更新を行い、更新された State のコピーを返す。

<br/>

## Data Flow

この図が Redux におけるアクセスと更新を示しているので、とりあえず頭の片隅においておく。

![](./ReduxDataFlowDiagram.gif)

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

<br/>

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
  ```

- item.tsx

  1 行のデータを表示する Component

  ```
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
  ```

<br/>

親 Component を作成する。

- src/App.tsx

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
    remark: string;
    isValid: boolean;
  };

  function App() {
    const [codeFilter, setCodeFilter] = useState<number | null>(null);
    const [nameFilter, setNameFilter] = useState('');

    const initialItems: Data[] = [
      { id: 1, code: 100, name: 'test1', remark: '', isValid: true },
      { id: 2, code: 101, name: 'test11', remark: '', isValid: true },
      { id: 3, code: 200, name: 'test2', remark: '', isValid: true },
      { id: 4, code: 201, name: 'test22', remark: '', isValid: true },
      { id: 5, code: 300, name: 'test3', remark: '', isValid: true },
    ];

    const [items, setItems] = useState<Data[]>(initialItems);

    const onRemarkChange = (index: number, value: string) => {
      setItems((prev) => {
        const result = [...prev];
        result[index].remark = value;
        return result;
      });
    };

    const onIsValidChange = (index: number, isValid: boolean) => {
      setItems((prev) => {
        const result = [...prev];
        result[index].isValid = isValid;
        return result;
      });
    };

    const onClick = () => {
      let targetItems = initialItems;
      if (codeFilter) targetItems = targetItems.filter((item) => item.code.toString().includes(codeFilter.toString()));
      if (nameFilter) targetItems = targetItems.filter((item) => item.name.includes(nameFilter));

      setItems(targetItems);
    };

    console.log('App.tsx');

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
          <ItemList items={items} onRemarkChange={onRemarkChange} onIsValidChange={onIsValidChange} />
        </div>
      </div>
    );
  }

  export default App;
  ```

- src/App.css

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

<br/>

作成した Application を起動する

```
yarn start
```

Browser の Developer ツール-Console タブを開く

ユーザーアクションに応じて、"App.tsx"が console に表示されていることがわかる。これは、useState の仕様で、setXXX が動作する度にレンダリングが走るためである。

サンプルアプリ程度であれば問題はないが、規模が大きくなってくるとパフォーマンスのボトルネックや、大量の Props による開発非効率性により、多人数で開発の妨げになる可能性も出てくる。

<br/>

## Redux ベースの State 管理の場合

上記のアプリと全く同じ機能を Redux ベースで作成する。一部の Component は Redux 利用の最適化のために、細分化されている。

<br/>

👨🏽‍💻 ハンズオン 👨🏽‍💻

React プロジェクトを生成後に、Redux に必要な Package をインストールする。

```
cd ../
yarn create react-app [my-redux-app] --template typescript
cd [my-redux-app]

# Packageインストール
yarn add @reduxjs/toolkit react-redux

mkdir src/features
mkdir src/app
mkdir src/components
```

<br/>

作成した features フォルダ配下に以下のファイルを作成する。

```
features
└── search-item-slice.ts
```

- search-item-slice.ts

  Store の定義に必要な Reducer を作る。また、Dispatch する際の Action も生成する。

  ```
  import { createSlice, PayloadAction } from '@reduxjs/toolkit';

  type SearchItem = {
    filter: {
      code: number | null;
      name: string;
    };
    items: { [id: number]: { code: number; name: string; remark: string; isValid: boolean } };
  };

  const initialState: SearchItem = {
    filter: {
      code: null,
      name: '',
    },
    items: {
      1: { code: 100, name: 'test1', remark: '', isValid: true },
      2: { code: 101, name: 'test11', remark: '', isValid: true },
      3: { code: 200, name: 'test2', remark: '', isValid: true },
      4: { code: 201, name: 'test22', remark: '', isValid: true },
      5: { code: 300, name: 'test3', remark: '', isValid: true },
    },
  };

  const searchItemSlice = createSlice({
    name: 'searchItem',
    initialState: initialState,
    reducers: {
      codeFilterModified(state, action: PayloadAction<number>) {
        state.filter.code = action.payload;
      },
      nameFilterModified(state, action: PayloadAction<string>) {
        state.filter.name = action.payload;
      },
      itemRemarkModified(state, action: PayloadAction<{ id: number; value: string }>) {
        state.items[action.payload.id].remark = action.payload.value;
      },
      itemIsValidToggled(state, action: PayloadAction<{ id: number; isValid: boolean }>) {
        state.items[action.payload.id].isValid = action.payload.isValid;
      },
      resultFiltered(state) {
        const initialItems = initialState.items;
        const filtered = Object.entries(initialItems).filter(([_id, item]) => {
          if (state.filter.code && !item.code.toString().includes(state.filter.code.toString())) {
            return false;
          }
          if (state.filter.name && !item.name.includes(state.filter.name)) {
            return false;
          }
          return true;
        });
        state.items = Object.fromEntries(filtered);
      },
    },
  });

  export const { codeFilterModified, nameFilterModified, itemRemarkModified, itemIsValidToggled, resultFiltered } =
    searchItemSlice.actions;

  export default searchItemSlice.reducer;
  ```

<br/>

作成した app フォルダ配下に以下のファイルを作成する。

```
app
├── hooks.ts
└── store.ts
```

- hooks.ts

  これに関しては Redux を React で使用するための、下準備なので、とにかくコピーする。

  ```
  import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
  import type { RootState, AppDispatch } from './store';

  // Use throughout your app instead of plain `useDispatch` and `useSelector`
  export const useAppDispatch = () => useDispatch<AppDispatch>();
  export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
  ```

- store.ts

  グローバルな値管理を行う Store を定義している。

  ```
  import { configureStore } from '@reduxjs/toolkit';
  import searchItemReducer from '../features/search-item-slice';

  export const store = configureStore({
    reducer: {
      // 先ほど作成したReducerをここに配置
      searchItem: searchItemReducer,
    },
  });

  export type AppDispatch = typeof store.dispatch;
  export type RootState = ReturnType<typeof store.getState>;
  ```

<br/>

作成した components フォルダ配下に以下のファイルを作成する。

```
components
├── code-filter.tsx
├── name-filter.tsx
├── item-list.tsx
└── item.tsx
```

- code-filter.tsx

  ```
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
  ```

- name-filter.tsx

  ```
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
  ```

- item-list.tsx

  ```
  import { useAppSelector } from '../app/hooks';
  import { shallowEqual } from 'react-redux';
  import Item from './item';

  const ItemList = () => {
    const items = useAppSelector((state) => Object.keys(state.searchItem.items), shallowEqual);

    console.log('item-list.tsx');

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
          {items.map((id) => (
            <tr key={Number(id)}>
              <Item id={Number(id)} />
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  export default ItemList;
  ```

- item.tsx

  ```
  import { useAppDispatch, useAppSelector } from '../app/hooks';
  import { itemIsValidToggled, itemRemarkModified } from '../features/search-item-slice';

  const Item = ({ id }: { id: number }) => {
    const item = useAppSelector((state) => state.searchItem.items[id]);
    const dispatch = useAppDispatch();

    console.log('item.tsx');

    return (
      <>
        <td>{id}</td>
        <td>{item.code}</td>
        <td>{item.name}</td>
        <td>
          <input value={item.remark} onChange={(e) => dispatch(itemRemarkModified({ id: id, value: e.target.value }))} />
        </td>
        <td>
          <input
            type="checkbox"
            checked={item.isValid}
            onChange={() => dispatch(itemIsValidToggled({ id: id, isValid: !item.isValid }))}
          />
        </td>
      </>
    );
  };

  export default Item;
  ```

<br/>

親 Component を作成する。

- src/App.tsx

  ```
  import './App.css';
  import { useAppDispatch } from './app/hooks';
  import CodeFilter from './components/code-filter';
  import ItemList from './components/item-list';
  import NameFilter from './components/name-filter';
  import { resultFiltered } from './features/search-item-slice';

  export type Data = {
    id: number;
    code: number;
    name: string;
  };

  function App() {
    const dispatch = useAppDispatch();

    const onClick = () => {
      dispatch(resultFiltered());
    };

    console.log('App.tsx');

    return (
      <div className="Container">
        <div>
          <CodeFilter />
          <NameFilter />
          <br />
          <button onClick={onClick}>検索</button>
          <br />
          <ItemList />
        </div>
      </div>
    );
  }

  export default App;
  ```

- src/App.css

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

<br/>

ここまでで、Store の定義と Component 側から State へのアクセス・更新のコーディングが完了。

ただ、このままではエラーが発生する。作成した Store を各 Component に認識させる必要がある。

以下のように\<App />をラップして、定義した store を伝播させる。

- src/index.tsx

  ```
  import ReactDOM from 'react-dom/client';
  import { Provider } from 'react-redux';
  import App from './App';
  import { store } from './app/store';
  import './index.css';

  const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  ```

<br/>

作成した Application を起動する

```
yarn start
```

Browser の Developer ツール-Console タブを開く

Component ベースの State 管理アプリケーションの場合は、ユーザーアクションに応じて、親 Component(App.tsx)が何度もレンダリングされていた。つまり、コードフィルタの値変更だけなのに、名称フィルタや明細部の Component も再レンダリングされていたということになる。

一方、Redux ベースの State 管理アプリケーションの場合は、App.tsx はロード時のみで、各ユーザーアクションに応じて、最小限の Component レンダリングのみが行われていることがわかる。

<br/>

## 判断基準

Redux が効率が良いように見えるが、使い方によっては最大限の効力を発揮できなかったり、習得スキルがネックになり、逆に開発効率が落ちることも考えられる。

Redux の採用には、開発人数、スキル、アプリケーション規模、Component 構成を考慮する必要がある。
