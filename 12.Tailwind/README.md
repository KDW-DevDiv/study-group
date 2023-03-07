## CSS

Browser に表示される UI の配置やスタイリングを行う言語。

HTML に配置されたエレメントに対して、どのようなスタイリングを行うかを記述していく。

グローバルスコープという点を注意しなければいけない。

<br/>

👨🏽‍💻 ハンズオン 👨🏽‍💻

フォルダを作成。

```
cd 12.Tailwind
mkdir -r work/plain
cd work/plain
```

HTML を作成

plain-version.html

```
<!DOCTYPE html>
<html>
  <head>
    <title>Plain CSS</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <div class="container">
      <h1 class="message">Plain CSS</h1>
    </div>
  </body>
</html>
```

CSS を作成

styles.css

```
.container {
  background-color: red;
}

.message {
  color: white;
}
```

上記で作成した plain-version.html を Browser で開くと、背景色が赤、文字色が白でスタイリングされた Plain CSS という文字が表示される。

次に、Plain CSS2 という文字を背景色を青、文字色を黄色で追加してみる。

plain-version.html

```
<!DOCTYPE html>
<html>
  <head>
    <title>Plain CSS</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <div class="container">
      <h1 class="message">Plain CSS</h1>
    </div>
    <div class="container2">
      <h1 class="message2">Plain CSS2</h1>
    </div>
  </body>
</html>
```

styles.css

```
.container {
  background-color: red;
}

.message {
  color: white;
}

.container2 {
  background-color: blue;
}

.message2 {
  color: yellow;
}
```

<br/>

実アプリケーション規模になったときに、以下の点が煩雑になる。

1. class で指定する名称を考案する必要がある。かつグローバルでユニークでなければいけない。

2. CSS ファイルがスタイリングを定義する度に肥大化していく

3. グローバルに影響するので、既存 CSS を修正した場合に影響度を調査する必要がある。

<br/>

## Tailwind

従来の方法では、煩雑になる点を改善できる CSS フレームワーク。

<br/>

👨🏽‍💻 ハンズオン 👨🏽‍💻

フォルダを作成

```
cd ../
mkdir tailwind
cd tailwind
```

Tailwind の Package を追加する

```
npm init -y
npm install -D tailwindcss
npx tailwindcss init
touch input.css
```

tailwind.config.js が生成されるので、以下のように設定する

```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./tailwind-version.html"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

input.css に tailwind を読み込むように設定する。

```
@tailwind base;
```

ここまでが事前設定。

tailwind-version.html を生成し、以下の内容にする。

```
<!DOCTYPE html>
<html>
  <head>
    <title>Tailwind CSS</title>
    <link rel="stylesheet" href="./dist/output.css" />
  </head>
  <body>
    <div class="bg-red-500">
      <h1 class="text-white">Tailwind CSS</h1>
    </div>
  </body>
</html>
```

bg-red-500 や text-white が tailwind で定義された名称。

このままでは、html と css が紐づいていないので、tailwind 用にビルドを行う

```
# watchを追加し、継続的にビルドを行うようにする
npx tailwindcss -i ./input.css -o ./dist/output.css --watch
```

上記で作成した tailwind-version.html を Browser で開くと、背景色が赤、文字色が白でスタイリングされた Tailwind CSS という文字が表示される。

次に、Tailwind CSS2 という文字を背景色を青、文字色を黄色で追加してみる。

```
<!DOCTYPE html>
<html>
  <head>
    <title>Tailwind CSS</title>
    <link rel="stylesheet" href="./dist/output.css" />
  </head>
  <body>
    <div class="bg-red-500">
      <h1 class="text-white">Tailwind CSS</h1>
    </div>
    <div class="bg-blue-500">
      <h1 class="text-yellow-300">Tailwind CSS2</h1>
    </div>
  </body>
</html>
```

Tailwind を用いたスタイリングでは、CSS ファイルを直接編集する必要が無いため、上記で挙げた 3 点を意識する必要がない。

<br/>

## 仕組み

定義された class 名に基づいて、Tailwind が CSS を自動生成してくれる。そのため、最終的な成果物は当然のごとく、html、css として、Browser 上で認識されて動作している。
