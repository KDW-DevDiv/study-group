# 実践

## 準備

4.React/work に PJ を作成する。

最終形は以下の PJ に作成済み。必ず、動作(npm start)を確認すること。

STUDY-GROUP/4.React/result/practive-app

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
