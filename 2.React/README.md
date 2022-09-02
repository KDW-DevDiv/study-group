# React Project

## PJ 構成要素

- Compiling

  ツール : Babel  
  役割 : JSX や新しい Syntax を Browser が理解できる JS ver に変換する。

- Bundling と Code Splitting

  ツール : Webpack
  役割 : Import と Export を最適化し、"最少"の JS ファイルにまとめる。共通モジュールを抜き出す等して、最適な分割も行う。

- Minifying

  ツール : Webpack  
  役割 : コメントや空白、変数名などを最適化し、"最小"の ファイルサイズにする

- Random Builded File

  ツール : Webpack  
  役割 : Build ごとに Build ファイルにランダム値を与えることで、Browser や Network の Caching を無効にする。

<br/>

## Create React App

React Project を簡単に始めれるのが以下のコマンド。  
上記の構成要素設定してくれている。Bundling のファイル名称を変更したい等の細かい調整が必要な場合や、パフォーマンス要件に応じて調整する場合は手を加える必要があるが、それ以外の場合は基本的に問題ない。  
※調整する場合は、yarn eject を行う。ただし、調整の余地を持てる分、上記の PJ 構成要素をよく理解している必要があり、調整コストが高くなってしまう可能性もある。

👨🏽‍💻 ハンズオン 👨🏽‍💻

ターミナルを開く（基本的には常に開いておく。次回からは省略）

PJ を生成する

1.work フォルダを生成

```
cd 2.React
mkdir work
cd work
```

2.ReactPJ を作成

```
yarn create react-app [Project Name]
or
npx create-react-app [Project Name]
```

3.起動する

```
cd [Project name]

yarn start
or
npm start
```

http://localhost:3000 にアクセス

4.停止するときはターミナルで ctrl + c

<br/>

## VS Code Debug

Debug Config を設定する必要がある。Debug パネルから Configuration ファイルを生成。Vscode が Chorome とワークスペースの Code を紐づけて Debug 実行してくれる。

👨🏽‍💻 ハンズオン 👨🏽‍💻

1.Debug Config の確認(既に生成済み)  
pj-root/.vscode/launch.json

2.Debug 用の Component を生成(以下のようにターミナルからでも、VSCode の Explorer からでもどちらでも良い)

```
mkdir src/components
ni ./src/components/debug-component.jsx
```

以下に完成版の Component があるので、それを見ながら、自分の debug-component.jsx に同じ内容をコーディングする。

pj-root/2.React/result/jsx-component-app/src/components/debug-component.jsx

3.作成した Component を Import する  
work/[Project Name]/src/index.js を開き、DebugComponent を配置する

````
```省略```
import DebugComponent from './components/debug-component';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <DebugComponent />
  </div>
);
````

4.起動

```
yarn start
or
npm start
```

5.Debug

DebugComponent の document.alert('Click!')の行に BreakePoint を置く。  
VSCode の左側にある Debug ペインで Launch Chrome against localhost が選択されていることを確認し、実行を押下。  
Chrome で Application 画面が立ち上がるので、立ち上がってきた画面の Click を押下。  
BreakPoint に止まることが確認できる。

6.Debug 停止
Debug 用のツールバーが立ち上がっているので停止ボタンを押下。もしくは立ち上がってきた Chrome を閉じる。

7.ctrl + c で Application を停止

<br/>

## JSX

React は、テクノロジー単位で分割せず、Component ベースで分割することをコンセプトとしている。そこで、鍵となってくるのが JSX(JavaScript XML)で、JS ファイル内で HTML のようなタグ形式で UI を表現できる。また、JS なので、分岐や繰り返し、動的な変数を JSX に関連して記述することができる。

👨🏽‍💻 ハンズオン 👨🏽‍💻

1.Component を生成

```
ni ./src/components/jsx-component.jsx
```

以下に完成版の Component があるので、それを見ながら、自分の jsx-component.jsx に同じ内容をコーディングする。

pj-root/2.React/result/jsx-component-app/src/components/jsx-component.jsx

2.作成した Component を Import する

````
```省略```
import JsxComponent from './components/jsx-component';
import DebugComponent from './components/debug-component';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <DebugComponent />
    <JsxComponent message="From Parent Component" />
  </div>
);
````

3.起動

```
yarn start
or
npm start
```

4.JS のロジックに UI が反応することを確認

<br/>

## props

props は property の略で、親 Component から子 Component に値を渡すことができる。これにより再利用性が高まる。

<br/>

## Component の種類

Class を利用して記述する方法と Function を利用して記述する 2 種類ある。機能的な違いは無いが、再利用性、可読性、コーディング難易度を考慮すると Function Component を選択すべき。React 開発チームも、Function Component を使うよう助言している。

- Function Component  
  pj-root/2.React/result/jsx-component-app/src/components/function-component.jsx

  Pure JavaScript Functionn なので Props(引数)を受け取り、return でエレメントを返す。直観的で分かりやすい。

- Class Component  
  pj-root/2.React/result/jsx-component-app/src/components/class-component.jsx

  Class を意識する必要があり、this キーワードや、Props の受け取りも呼び元を考慮せねばならず、コンポーネント内で完結しづらい。
