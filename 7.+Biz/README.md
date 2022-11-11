# index.tsx

## SSR

- セッションチェック

iron-session で保存している情報が正常かどうかチェックする。iron-session は指定した Secret Key で情報を暗号化し Cookie に保存してくれるライブラリ。

nipo_cloud_profile という cookie が存在しない場合、改ざん・なりますましの場合、また有効期限が切れている場合に異常とみなされ、False が返される。

- Redirect

既定の情報を入れて、redirect オブジェクトを生成する。

```
redirect: {
        permanent: false, // Browserにリダイレクト情報をchacheとして保存させない
        destination: '/menu', // リダイレクト先
},
```

## Page

UI(JSX) 部ベースで確認していく。

- データ保持(react-hook-form)

  画面で選択されたデータの保持や、接続ボタン押下時のイベントは react-hook-form というライブラリを利用している。

  validation チェックなども含まれており、useState などによる独自の state 管理よりも手間がかからない。  
  ※ログイン画面はユニバーサルな UX が分かりやすいと考えたので、この画面のみ react-hook-form を使用。

- テナント情報取得と認証チェック(useSWR)

  テナント情報取得時に、認証情報(JWT)を用いるため、認証情報が不正な場合にエラーを返してくれる。つまりテナント情報取得と認証チェックを同時に行っていることになる。

  useSWR は、定期的なデータ取得と取得時に Rendering を行ってくれる、クライアントサイドレンダリングの一種。

  第一引数は識別子を渡す。ここが null の場合、処理は行わない。第二引数に処理ファンクションを置く。第三引数は Options で、ここでは、エラー時の対応を明示的に示している。

```
  const { data: accessInfo } = useSWR(isAuthenticated ? '/api/tenants' : null, fetcher, {
    onError: (err: any) => {
      // useSWRの処理も止めているが、非同期処理がタイミングによっては走る可能性があるので、2重でチェックする
      if (!isAuthenticated) return;
      Logger.browserInfo({ caller: 'IndexPage/useSWR/onError/authSignOut', message: err });
      setIsAuthenticated(false);
    },
  });
```

- 各イベント

  - const handleTenantChange

  テナント選択時のイベント。

  画面表示項目の初期化と、Backend API コールを行い、選択可能な DB を取得する。

  - const handleDatabaseChange

  DB 選択時時のイベント。

  画面表示項目の初期化と、Backend API コールを行い、ユーザー ID を表示する。

  - sendRequest

  画面項目を Frontend API の store-session にリクエストし、iron-session の保存処理を行う。

  この処理の後に、+Biz の DB 情報などが詰まった cookie が生成される。

  - signOutCognito

  Cognito からサインアウトし、かつ画面に保持する認証状態を False に変える。これにより、再レンダリングが起こり、Authenticate コンポーネントが表示される。

- useEffect

  Cognito サインイン後に、state 関連を初期化するためにリロードを行う。

  サインイン直後に走らせたい処理のため、index.tsx を Mounting したタイミングで、イベント紐づけを行っておく。Unmounting 時はイベント削除を行っている。
