# レンダリング

React が Component をレンダリングしない限り、UI に情報は反映されない。つまり、画面に表示する情報を動的に変更する場合は、その変更を React が関知し、再レンダリングが行われる必要がある。

## レンダリングの流れ

1. Component

```
<h1 className="bg-white">Hello World</h1>
```

2. JSX を Virtual DOM 作成用のオブジェクトに変換

```
_jsx('h1', { className: 'bh-white', children: 'Hello World' });
```

3. Virtual DOM を生成し、DOM との差分を更新

```
render(
  {...reactObj}
);
※具体的なObject構造は記載しない
```

4. Browser に UI が描画される

## Lifecycle

Component 単位で、以下のタイミングでレンダリングを行う。

### 1.Mounting

-DOM に Component が追加されるとき。

### 2.Updating

-Component 内部の "state" もしくは "props" が更新されたとき。  
-親 Component が再レンダリングされたとき。

### 3.Unmounting

-Component が DOM から除去されたとき。

## Hooks

React Application に Lifecycle を活かした動的な処理を持たせるために、Hook が用意されている。代表的な 2 つを説明する。

## useState

React のレンダリングの仕組みを利用した Component State がある。以下のように宣言し、Component に State を紐づける。setState のみ、state への更新が可能。setState により再レンダリングがキックされる。

```
const [state, setState] = useState();
```

## useEffect

DOM 更新後に、処理を行いたい場合に Effect を発生させることができる。以下のように useEffect 関数を呼ぶ。Component に Effect を紐づける。API コールやイベント紐づけなどを行ったりする。

```
useEffect(()=>{ 処理 })
```
