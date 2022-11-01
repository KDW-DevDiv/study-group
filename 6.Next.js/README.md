# Next.js

**React のフレームワーク**。Web Application に求められる様々な要件が開発しやすく、パフォーマンスに優れている。ページ生成がサーバーサイドで行われるのが特徴、いわゆるサーバーサイドレンダリング。

React はライブラリのため、製品版として運用していくには、様々な設定・追加ライブラリが必要。Next.js がその部分をカバー・改良している。もちろん、Component の書き方等は、これまで学んできた React と同様。

ちなみに、以下のコマンドで生成してきた React プロジェクトは、Create-React-App というフレームワークで動作していると考えてよい。

フレームワークなので、多機能だが、勉強会では+Biz 製品のコードリーディングに必要な部分だけを抽出する。

<br/>

## Project 生成

Next.js の PJ 生成方法

```
yarn create next-app --typescript [app name]
```

<br/>

👨🏽‍💻 ハンズオン 👨🏽‍💻

work フォルダを生成

```
cd 6.Next.js
mkdir work
```

Next.js プロジェクトを生成

```
yarn create next-app --typescript [app name]
```

起動

```
yarn dev
```

停止

```
Ctrl + c
```

<br/>

## Pages

pages フォルダ配下に格納した Component(js、jsx、ts、tsx)名に準拠して、Routing が行われ、直観的に分かりやすい仕組みとなっている。ちなみに、\_app.tsx は page が初期化される際に必ず通る Component で、各ページ共通のレイアウトを入れる等の共通処理を記載できる。

<br/>

👨🏽‍💻 ハンズオン 👨🏽‍💻

これ以降のハンズオンで console ログを確認するため、React Strict Mode をオフにする

next.config.json に以下をコピー

```
/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
};

module.exports = nextConfig;
```

アプリケーションを起動

```
yarn dev
```

index.tsx を以下の内容をコピー

```
export default function Home() {
  return (
    <div>
      <div>Hello Next App</div>
    </div>
  );
}
```

新たな Page を追加

pages 配下に second.tsx を生成し、以下の内容をコピー

```
const Second = () => {
  return (
    <div>
      <div>Second Page</div>
    </div>
  );
};

export default Second;
```

http://localhost:3000/second にアクセスする

ページ遷移を確認

index.tsx に以下の内容をコピー

```
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <div>Hello Next App</div>
      <Link href="/second">次のページ</Link>
    </div>
  );
}
```

second.tsx に以下の内容をコピー

```
import Link from 'next/link';

const Second = () => {
  return (
    <div>
      <div>Second Page</div>
      <Link href="/">前のページ</Link>
    </div>
  );
};

export default Second;
```

サブフォルダを生成し、階層を増やす

pages 配下に、sub-dir フォルダを追加し、その中に hello.tsx 作成し、以下の内容をコピー

```
const Hello = () => {
  return <div>Hello</div>;
};

export default Hello;
```

http://localhost:3000/sub-dir/hello にアクセスする

<br/>

## Pre-rendering

Next.js では、UI 生成（ページ生成）の全てをクライアントサイドで行わず、事前にサーバーサイドで行う。ページロード（ユーザーが操作可能になるまでの時間）の短縮、Chaching 、SEO 対策を考慮する仕組みとなっている。

Pre-rendering には、以下の 2 種類がある。**いつ UI 生成が行われるのか**がポイント。

- Static Generation(SG)

  ビルド時にページ生成を行う。基本的には、この方法をメインとする。

  コードレベルでは、ページコンポーネントのみが export されている or getStaticProps と getStaticPaths が export されているページは、SG で生成されるページとなる。

  ※+Biz で該当箇所が無いため、本勉強会では getStaticProps と getStaticPaths については扱わない。

- Server-side Rendering(SSR)

  クライアントからのリクエストごとにページ生成を行う。リクエスト内容に応じたページ生成が必要な場合に利用する。

  +Biz では、Neo 側の初期設定情報の読み取りや、セッションチェックをリクエストごとに行うために全ページが SSR となっている。

  コードレベルでは、getServerSideProps が export されているページは、SSR を行うページとなる。

※yarn dev で起動する場合は、常に SSR でページ生成が行われている。

<br/>

👨🏽‍💻 ハンズオン 👨🏽‍💻

index.tsx を SG で生成

特に何も行わないが、以下のログを設定する

```
import Link from 'next/link';

export default function Home() {
  console.log('index.tsx');
  return (
    <div>
      <div>Hello Next App</div>
      <Link href="/second">次のページ</Link>
    </div>
  );
}
```

second.tsx を SSR で生成

以下のように、getServerSideProps を設定する

ログも設定する

```
import Link from 'next/link';
import { GetServerSideProps } from 'next';

const Second = () => {
  console.log('second.tsx');
  return (
    <div>
      <div>Second Page</div>
      <Link href="/">前のページ</Link>
    </div>
  );
};

export default Second;

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log('getServerSideProps');
  return { props: {} };
};
```

以下のコマンドで、Production 用起動を行う

```
yarn build
yarn start
```

http://localhost:3000 で、リロードを行う

index.tsx というログが Browser の Console に出力されていることが確認できる

これは SG でビルド時に生成済みのページが Browser にロードされ、Broser でのみログ出力が行われるからである

http://localhost:3000/second でリロードを行う

second.tsx というログが Browser の Console と VSCode のターミナルタブ（Node） に、getServerSideProps というログが VSCode のターミナルタブに出力されていることが確認できる

これは SSR でリクエスト時にページ生成が行われるため、サーバーサイド（Node）と、ページ生成後に Browser にロードされ、ログ出力が行われるからである

<br/>

## Api Route

pages フォルダ配下に Web API を簡単に生成することができ、これらはサーバーサイドに配置される。

<br/>

👨🏽‍💻 ハンズオン 👨🏽‍💻

サンプル生成済みの/api/hello をコールしてみる

index.tsx に Fetch 処理を追加

```
import Link from 'next/link';

export default function Home() {
  // console.log('index.tsx');

  const handleClickHello = async () => {
    const res = await fetch('api/hello');
    const { name } = await res.json();
    console.log(name);
  };

  return (
    <div>
      <div>Hello Next App</div>
      <Link href="/second">次のページ</Link>
      <div>
        <button onClick={handleClickHello}>Fetch Hello</button>
      </div>
    </div>
  );
}
```

Fetch Hello をクリックし、ログを確認

pages/api/my-api.ts を生成

```
import { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  message: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method === 'POST') {
    const body = JSON.parse(req.body);
    res.status(200).json({ message: body.name });
  } else {
    res.status(500).json({ message: `${req.method}はハンドルされません。` });
  }
};

export default handler;
```

index.tsx から生成した API をコール

```
import Link from 'next/link';

export default function Home() {
  // console.log('index.tsx');

  const handleClickHello = async () => {
    const res = await fetch('api/hello');
    const { name } = await res.json();
    console.log(name);
  };

  const handleClickMyApi = async () => {
    const res = await fetch('api/my-api', { method: 'POST', body: JSON.stringify({ name: 'my name' }) });
    const { message } = await res.json();
    if (res.status === 200) {
      console.log(message);
    } else {
      console.log(message);
      // その他のエラー処理
      //
      //
    }
  };

  return (
    <div>
      <div>Hello Next App</div>
      <Link href="/second">次のページ</Link>
      <div>
        <button onClick={handleClickHello}>Fetch Hello</button>
      </div>
      <div>
        <button onClick={handleClickMyApi}>Fetch My Api</button>
      </div>
    </div>
  );
}
```

オプションを削除し、GET で呼び出してみる

```
const res = await fetch('api/my-api')
```

エラーメッセージを確認

<br/>

<br/>

# クライアントとサーバー

Web Application において、クライアントは Browser を指し、サーバーはクライアントからリクエストを受け、適当なレスポンスを返すコンピュータを指す。

大まかな流れとして以下となる。

1. Browser（クライアント）から対象 URL にリクエスト
2. サーバーがリクエストに応じたレスポンスを返す。
3. Browser は受け取ったレスポンスを解釈し、画面に描画する。

Nextjs は、クライアントとサーバーサイドのどちらの処理もシームレスに書けるので、Debug 時に注意が必要。

## Debug

👨🏽‍💻 ハンズオン 👨🏽‍💻

基本的な Config は設定済み。

1. クライアントサイド Debug

   アプリケーションを起動する

   ```
   yarn dev
   ```

   Next.js: debug client-side を選択し、開始

   ※Chrome の Debug 機能に紐づけるため、アプリケーション起動が必要

2. サーバーサイド Debug

   Next.js: debug server-side を選択し、開始

   ※Node サーバーを Debug 起動しているので、明示的にアプリケーションを起動する必要が無い。

3. フルスタック Debug

   Next.js: debug full stack を選択

   ※Node サーバーを Debug 起動しているので、明示的にアプリケーションを起動する必要が無い。

  <br/>
