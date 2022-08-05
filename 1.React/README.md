# React 基礎

## シンプルな WebApplication を作る

button、textarea を画面に表示し、button 押下で textarea に"Hello World"を表示。button の背景色は黄色。単純に index.html ファイルを Browser に表示ではなく、何かしらのツールで Serving する。

## Browser

ツリー構造のモデルから、画面レンダリングの構成要素を抽出し、表示位置を計算し、画面に表示する。

## アプリケーション構成

1.html  
=> DOM の Node を構成する  
2.CSS  
=> CSSOM の Node を構成する  
3.JavaScript  
=> DOM と CSSOM で作成された Render Tree を変更する  
4.Serving(IIS,nginx,Nodejs,,,)  
=> Client から Request されたページを返す

<br/>

**上記の構成が WebApplication の基本。React であっても何であっても、作り上げる過程は違うが、最終的な Output や構成は変わらない。**

## 従来の方法

html と JS を編集し、画面レンダリングをおこなっていくという従来のコーディングだと、以下のような不利益が出てくる。

・ファイルが肥大化する（分割できない）  
・JS による RenderTree の更新が非効率になる可能性がある  
・html と js の両ファイルを調整する必要があり、開発が非効率になる可能性がある

## React ライブラリを使用

※フレームワークではない。

・コンポーネントベース  
=> UI の構成を部品レベルで分割できるため、ファイルが肥大化しづらい  
・VirtualDOM  
=> React は独自のライフサイクルで VirtualDOM を生成し、Browser の表示で使用される DOM との差分を効率よく更新する。  
・JSX
=> JS サイドで xml 形式で html 部分を記載できるため、ファイルを行ったり来たりする必要がなく開発しやすい。

## with-react

・app.js  
=> UI 部のデザインと button クリック時の動作を担っている  
・index.js  
=> React のレンダリングと html を紐づけている  
・index.html  
=> 実際にレンダリングが行われる html ファイル
・package.json
=> npm で更新・参照されるファイル。Javascript を用いた PJ ではほぼ必ず入っている。必要なライブラリや実行コマンドなど核となる情報を定義する  
・webpack.config.js
=> 関連ファイルをひとまとめ（バンドリング）してくれる Webpack が利用するコンフィグファイル。import、export を用いる PJ ではバンドリングは必須。

<br/>

# without-react と with-react の実行方法

## without-react

```
cd 1.React/result/without-react
```

```
node server.js
```

http://localhost:3000 にアクセス

## with-react

```
cd 1.React/result/with-react
```

```
npm install
```

```
npm start
```

http://localhost:3000 にアクセス
