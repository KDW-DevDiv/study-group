# レンダリング(画面描画)

React が Component をレンダリングしない限り、Browser の UI に情報は反映されない。つまり、画面に表示する情報を動的に変更する場合は、その変更を React が感知し、再レンダリングが行われる必要がある。

<br/>

👨🏽‍💻 ハンズオン 👨🏽‍💻

PJ 生成（時間がかかりそうなので、このタイミングで生成）

```
cd 3.React
mkdir work
cd work

yarn create react-app [Project Name]
or
npx create-react-app [Project Name]
```

<br/>

## JSX コンポーネント->Browser UI へ

1.Component

```
<h1 className="bg-white">Hello World</h1>
```

2.JSX を Virtual DOM 作成用のオブジェクトに変換

```
_jsx('h1', { className: 'bg-white', children: 'Hello World' });
```

3.Virtual DOM を生成し、DOM との差分を更新

```
render(
  {...reactObj}
);
※具体的なObject構造は記載しない
```

4.Browser に UI が描画される

<br/>

👨🏽‍💻 ハンズオン 👨🏽‍💻

HelloComponent を作成

```
cd [Project Name]
mkdir src/components
ni ./src/components/hello-component.jsx
```

以下の Component から内容をコピー  
pj-root/3.React/result/hook-component-app/src/components/hello-component.jsx

作成した Component を Import する  
work/[Project Name]/src/index.js を開き、Component を配置する

````
```省略```
import HelloComponent from './components/hello-component';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <HelloComponent />
  </div>
);
````

生成した Component が呼び出され、最終的に React ライブラリの render()に入っていくことがコード上確認できる。

<br/>

## いつレンダリングが行われているのか？

Component 単位で、以下の Lifecycle に基づいてレンダリングが行われている。

1.Mounting

-DOM に Component が追加されるとき。  
例）画面ロードや画面遷移、Component を動的に表示・非表示を切り替えるとき。

2.Unmounting

-Component が DOM から除去されたとき。  
例）画面クローズや画面遷移、Component を動的に表示・非表示を切り替えるとき。

<br/>

👨🏽‍💻 ハンズオン 👨🏽‍💻

MountUnmountComponent を作成

```
ni ./src/components/mount-unmount-component.jsx
```

以下の Component から内容をコピー  
pj-root/3.React/result/hook-component-app/src/components/mount-unmount-component.jsx

作成した Component を Import する  
work/[Project Name]/src/index.js を開き、Component を配置する

````
```省略```
import MountUnMountComponent from './components/hello-component';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <MountUnMountComponent />
  </div>
);
````

Browser の DeveloperTool/Element タブで Element の状態が変わっていることが確認できる。

<br/>

3.Updating

-Component 内部の "state" もしくは "props" が更新されたとき。  
例）ボタンクリックで Component 内部で表示している情報を変更するとき。

<br/>

👨🏽‍💻 ハンズオン 👨🏽‍💻

ParentComponent を作成。(付随する ChildComponent も作成)

```
ni ./src/components/parent-component.jsx
ni ./src/components/child-component.jsx
```

以下の Component から内容をコピー  
pj-root/3.React/result/hook-component-app/src/components/parent-component.jsx  
pj-root/3.React/result/hook-component-app/src/components/child-component.jsx

作成した Component を Import する  
work/[Project Name]/src/index.js を開き、Component を配置する

````
```省略```
import ParentComponent from './components/parent-component';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <ParentComponent />
  </div>
);
````

Browser の DeveloperTool/Element タブで Element の状態が変わっていることが確認できる。

<br/>

## Hooks

React は上記で説明した Lifecycle で動作するため、そこを利用して Application を作っていかなければならない。画面レンダリングを効率的に感覚的に行える半面、React のルールに従う必要があるということ。

## useState

動的に UI に反映される値を変更したい場合は、"state"を保持する必要がある。以下のように宣言し、Component に State を紐づける。setState のみ、state への更新が可能。setState により Updating と感知され、再レンダリングが走る。

```
const [state, setState] = useState();
```

👨🏽‍💻 ハンズオン 👨🏽‍💻

## useEffect

画面ロード時に API コールをしたい、Mounting と Unmounting のタイミングのみに XX の処理を入れたいといった場合に主に利用する。厳密にいうと、レンダリングが完了した後に走る処理を設定する箇所になる。以下のように useEffect 関数を呼び、Component に Effect を紐づける。

```
useEffect(()=>{ 処理 })
```
