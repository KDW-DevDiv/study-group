# React 詳細

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

## Component -> Browser UI へ

1.Component(Coding)

```
<h1 className="bg-white">Hello World</h1>
```

<br/>

2.JSX を Virtual DOM 作成用のオブジェクトに変換(Build)

```
_jsx('h1', { className: 'bg-white', children: 'Hello World' });
```

<br/>

3.Virtual DOM を生成し、DOM との差分を更新(Runtime)

```
render(
  {...reactObj}
);
```

<br/>

4.Browser に UI が描画される(Runtime)

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
また、Component を可視化したいので、 console.log()を配置する

````
```省略```
import HelloComponent from './components/hello-component';

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(<HelloComponent />)
root.render(
  <div>
    <HelloComponent />
  </div>
);
````

生成した Component が呼び出され、JS の Object に変換されていることが分かる。これを React が解釈し、Browser UI に表示している。

<br/>

## Lifecycle

Component 単位で以下のフェーズが存在する。  
ここをイメージできると React Application が非常に作りやすくなる。

1.Mounting

-DOM に Component が追加されるとき。  
例）ページロード、Component を動的に表示・非表示を切り替えるとき。

2.Unmounting

-Component が DOM から除去されたとき。  
例）ページクローズ、Component を動的に表示・非表示を切り替えるとき。

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
※console.log(<HelloComponent />)は削除 or コメントアウトする

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

Browser の DeveloperTool/Element タブで Component の Mounting と Unmounting が確認できる。

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

Browser の DeveloperTool/Element タブで Element が"state" と "props"の変化に応じて、更新されていることが分かる。

<br/>

# React Hooks

React Application を開発するために欠かせない Hooks という Function 群が存在する。Hooks の中でも特に重要な 2 つを紹介する。

## useState

動的に UI に反映される値を変更したい場合は、"state"を保持する必要がある。以下のように Component 内部で宣言し、"state" を紐づける。"state" の更新は "setState" のみ可能。"setState" により React が Updating と感知し、再レンダリングが走る。

```
const [state, setState] = useState();
```

👨🏽‍💻 ハンズオン 👨🏽‍💻

ParentComponent が "setState"により、UI 更新されていることを確認。  
※ローカル変数を用意して、変更をかけても意味がない。なぜなら、React の Render 処理がキックされないため。

<br/>

## useEffect

レンダリングが完了した後に、更に処理を入れ込みたい場合に利用する。例えば、画面ロード時に API コールをしたい、タイマーを設定したい、イベントを紐づけたい場合など。以下のように useEffect Function を Component に設定し、Effect を紐づける。  
※感覚的にわざわざ useEffect ではなく、return の前で API コールすればよいのではないかと思うかもしれないが、レンダリングの一貫性が保たれず、UI がちらついたりする可能性があるので、useEffect が必要。

以下に記載のように、"[dependencies]"を指定することで、XXX の値が変更されたときのみや、[]のみの指定で Component が Mounting されたときのみ"effect 処理"を動作させることができる。また、return 内に記載されている"cleanup 処理"は、直前の"effect 処理"を打消したいときに利用され、例えば、"effect 処理"でイベントの動的な紐づけを行い、"cleanup 処理"でその紐づけ解除を行う場合。

```
useEffect(()=>{
  // effect処理

  return () => {
    // cleanup処理
    }
  },[dependencies])
```

👨🏽‍💻 ハンズオン 👨🏽‍💻

<br/>
EffectComponent を作成。

```
ni ./src/components/effect-p-component.jsx
ni ./src/components/effect-component.jsx
```

以下の Component から内容をコピー  
pj-root/3.React/result/hook-component-app/src/components/effect-p-component.jsx
pj-root/3.React/result/hook-component-app/src/components/effect-component.jsx

作成した Component を Import する  
work/[Project Name]/src/index.js を開き、Component を配置する

````
```省略```
import EffectPComponent from './components/effect-p-component';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <EffectPComponent />
  </div>
);
````

useEffect の処理順を Console のログで確認
