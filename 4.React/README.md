# 実践

## 0. React PJ 生成

4.React/work に PJ を作成する。

## 1. JSX と Props

- 時間配分

  Coding : 10 min  
  解説 : 5 min

- 要件

  Component の Props に任意の値を渡し、その値を表示する。

  早く完了した方へ ↓  
  Default 値を持たせ、Props に値を渡さなくても Default の値を表示できるようにする。

- ゴール

  STUDY-GROUP/4.React/result/practice-app/src/components/jsx-props-component.jsx

<br/>

## 2. useState と useEffect

- 時間配分

  Coding : 10 min  
  解説 : 5 min

- 要件

  ボタンクリックで+1 ずつ増加するカウンター A とカウンター B を 表示する(それぞれ別の state を使用。)。さらに、2 つの useEffect を利用し、console にログを出力。ただし 1 つはレンダリングごとにログを出力し、もう一方は、上記で用意したカウンター A が増加する度にログを出力する。

- ゴール

  STUDY-GROUP/4.React/result/practice-app/src/components/state-effect-component.jsx

<br/>

## 3. チェックボックスグループ

- 時間配分

  Coding : 15 min  
  解説 : 5 min

- 要件

  3 つのチェックボックスを表示し、その中で常に 1 つしかチェックできないようにする。

  Component のテンプレート

  ```
  import { useState } from 'react';

  const CheckboxGroupComponent = () => {
    const [value, setValue] = useState();

    const handleChange = (e) => {
      ???
    };

    return (
      <div>
        <label>
          check1
          <input type="checkbox" checked={???} value="check1" onChange={handleChange} />
        </label>
        <label>
          check2
          <input type="checkbox" checked={???} value="check2" onChange={handleChange} />
        </label>
        <label>
          check3
          <input type="checkbox" checked={???} value="check3" onChange={handleChange} />
        </label>
      </div>
    );
  };

  export default CheckboxGroupComponent;
  ```

<br/>

- ゴール

  STUDY-GROUP/4.React/result/practice-app/src/components/checkbox-group-component.jsx

## 4. デジタル時計を表示

- 時間配分

Coding : 15 min
解説 : 5 min

- 要件

  現在時刻を表示するデジタル時計を作成する。

  ```
  // 1秒ごとに処理を実行する
  setInterval(()=>{},1000)
  ```

- ゴール

  STUDY-GROUP/4.React/result/practice-app/src/components/clock-component.jsx
