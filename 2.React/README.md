# React Project

## PJ 構成要素

### Compiling

ツール : Babel  
役割 : JSX や新しい Syntax を Browser が理解できる JS ver に変換する。

### Bundling と Code Splitting

ツール : Webpack
役割 : Import と Export を最適化し、"最少"の JS ファイルにまとめる。共通モジュールを抜き出す等して、最適な分割も行う。

### Minifying

ツール : Webpack  
役割 : コメントや空白、変数名などを最適化し、"最小"の ファイルサイズにする

### Rondom Builded File

ツール : Webpack  
役割 : Build ごとに Build ファイルにランダム値を与えることで、Browser や Network の Caching を無効にする。

<br/>

## Create React App

React Project を簡単に始めれるのが以下のコマンド。  
上記の構成要素設定してくれている。Bundling のファイル名称を変更したい等の細かい調整が必要な場合や、パフォーマンス要件に応じて調整する場合は手を加える必要があるが、それ以外の場合は基本的に問題ない。  
※調整する場合は、eject が必要。ただし、調整の余地を持てる分、上記の構成要素をよく理解している必要があり、調整コストが高くなってしまう可能性もある。

```
yarn create react-app [Project Name]
or
npx create-react-app [Project Name]
```

## VS Code Debug

Debug Config を設定する必要がある。Debug パネルから Configuration ファイルを生成。Vscode が Chorome とワークスペースの Code を紐づけて Debug 実行してくれる。

## JSX

React は、テクノロジー単位で分割せず、Component ベースで分割することをコンセプトとしている。そこで、鍵となってくるのが JSX(JavaScript XML)で、JS ファイル内で HTML のようなタグ形式で UI を表現できる。また、JS なので、分岐や繰り返し、動的な変数を JSX に関連して記述することができる。

## props

props は property の略で、親 Component から子 Component に値を渡すことができる。これにより再利用性が高まる。

## Component のタイプ

Class を利用して記述する方法と Function を利用して記述する 2 種類ある。機能的な違いは無いが、再利用性、可読性、コーディング難易度を考慮すると Function Component を選択すべき。React 開発チームも、Function Component を使うよう助言している。

### Function Component

Pure JavaScript Functionn なので Props(引数)を受け取り、return でエレメントを返す。直観的で分かりやすい。

### Class Component

Class を意識する必要があり、this キーワードや、Props の受け取りも呼び元を考慮せねばならず、コンポーネント内で完結しづらい。
