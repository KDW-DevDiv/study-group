# 実践

## 準備

4.React/work に PJ を作成する。

最終形は以下の PJ に作成済み。必ず、動作(npm start)を確認すること。

STUDY-GROUP/4.React/result/practice-app

## 1. JSX と Props

- 要件

  Component の Props に任意の値を渡し、その値を表示する。

  早く完了した方へ ↓  
  Default 値を持たせ、Props に値を渡さなくても Default の値を表示できるようにする。

- ゴール

  STUDY-GROUP/4.React/result/practice-app/src/components/jsx-props-component.jsx

<br/>

## 2. useState と useEffect

- 要件

  ボタンクリックで+1 ずつ増加するカウンター A とカウンター B を 表示する(それぞれ別の state を使用。)。さらに、2 つの useEffect を利用し、console にログを出力。ただし 1 つはレンダリングごとにログを出力し、もう一方は、上記で用意したカウンター A が増加する度にログを出力する。

- ゴール

  STUDY-GROUP/4.React/result/practice-app/src/components/state-effect-component.jsx

<br/>

## 3. チェックボックスグループ

- 要件

  3 つのチェックボックスを表示し、その中で常に 1 つしかチェックできないようにする。また、Default 値(初期値)は 2 つ目のチェックボックスとする。

<br/>

- ゴール

  STUDY-GROUP/4.React/result/practice-app/src/components/checkbox-group-component.jsx

  <br/>

## 4. デジタル時計を表示

- 要件

  現在時刻を表示するデジタル時計を作成する。

  ```
  // 1秒ごとに処理を実行する
  setInterval(()=>{},1000)
  ```

- ゴール

  STUDY-GROUP/4.React/result/practice-app/src/components/clock-component.jsx

  <br/>

# 発展

## Component を横断して、State を管理したいとき

例）データを一覧形式で表示する（検索条件あり）。また、選択したデータを呼び出し元画面に戻す。

- 構成

  検索、引用ボタンを持つ Base Component、検索条件を持つ Filter Component、データ表示エリアを持つ Item Component に分ける。再利用性や可読性を考慮すると概ねこのような構成になるはず。

- 課題点

  もし、それぞれの Component に State を保持した場合、検索や引用処理の際にどのように Base Component は処理したらよいか。State は Component に属するので、Component 間で直接アクセスするこはできない。

- 解決策

  共通の親 Component に State を配置（useState を宣言）し、子 Component に state と setState を渡す。つまり、一元的に情報を管理し、子 Component はそれらを利用するだけ。

- Code

  STUDY-GROUP/4.React/result/advanced-app/src/components/select-data

<br/>

## Component ツリーの一部をスキップして Props を渡したいとき

Props での受け渡しを行わず、グローバルにデータを共有できる"Context"を利用する。

- 作り方

  1.Context を生成

  ```
  import { createContext } from 'react';
  export const themeColor = createContext('blue');
  ```

  2.生成した Context を共有したいエリアに設定する

  ```
  <themeColor.Provider value={isBlue ? 'blue' : 'black'}>
      <Child />
  </themeColor.Provider>
  ```

  3.データを利用する Component で、データを取得する

  ```
  const theme = useContext(themeColor);
  ```

- Code

  STUDY-GROUP/4.React/result/advanced-app/src/components/theme-sharing
