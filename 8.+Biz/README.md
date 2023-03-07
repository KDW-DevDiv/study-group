# Menu

メインとなるコンポーネントが pages 配下の menu.tsx で、そこからモバイル版とデスクトップ版のコンポーネントを条件分岐で表示する。

<br/>

# menu.tsx

## SSR

- Logger

  Pino というライブラリを利用している。Server ログと Browser(クライアント)ログを出力できる。それぞれ、Node サーバーと Browser に出力される。

  特に、Browser ログの"エラー"については、Server サイドに送るようにしており、Node サーバーでも確認できる。

- 設定データ取得

  初期設定や項目定義などの設定値を取得する。

- 通知情報取得

  夏季休業やメンテナンス時間の通知用の情報を取得。

  AWS Dynamo に上記の情報が保存されているので、それを取得している。

- try catch

  SSR 処理で、異常が発生した場合は、errorCode を出力し、Menu.tsx でエラーコンポーネントを表示する。

## Component

- UI 部の確認

  - AnnouncementContext

    react の context という仕組みを利用している。これにより、SSR で取得した通知情報を特定のコンポーネントのみに"Props を介さず"に渡すことができる。

    ※4 回目の勉強会-発展に仕組みの概要が記載されている。

  - showMobilePage

    モバイル版かデスクトップ版のコンポーネントを表示するための分岐を行う。

<br/>

- \<Error />

  SSR から取得した値に、errorCode が含まれていた場合、Error コンポーネントを表示する。Error コンポーネントは Next.js から提供されているものを使用。もちろん、独自の Error コンポーネント表示も可能。

<br/>

- 認証チェック(useSWR)

  Cognito 認証情報が正常かチェックする。また、認証情報に組み込まれている E メールアドレスも同時に取得する。

  このメールアドレスは、認可情報として保存されている Cookie の情報との比較に利用される。

- 設定を保存

  Redux という仕組みを利用して、グローバルに State を保存。これにより、Props を介さずに、各コンポーネントで一元的に State を利用できるうえに、"変更"も可能。

  ※Redux の仕組みは、省略。要望に応じて別途勉強会を開催。

- 認可情報チェック

  "認証"情報として持っているメールアドレスを"認可"情報にも入っているメールアドレスと比較している。相違があれば、会社選択画面に引き戻す。

  ケースとしては少ないが、以下を想定した対応となっている。

  1. ユーザー A で Cognito 認証、会社選択を行う。
  2. しばらく放置され、Cognito 認証が時間切れとなり、Cognito ログインが表示される。
  3. ここでユーザー B が Cognito 認証を行う。仮にユーザー B が所属している会社データなどが違っていた場合に、アプリケーション動作に不正な結果をもたらすので、会社選択画面に引き戻し、正しい会社を選択してもらう。

- ページ離脱防止

  何かしらの操作が加わった後に、アプリケーションが Browser の閉じる等で閉じられそうになったタイミングで Popup を表示するように紐づけを行う。

- モバイル版かどうかを判断

  Browser が保持している情報からモバイル版かどうかを判断する。

  <br/>

# menu-page-for-mobile.tsx

- UI 部の確認

  - \<NavBar />

    ユーザー情報や通知アイコンを持つコンポーネント。

  - \<AnnouncementBar />

    夏季休業などの情報を表示するコンポーネント。Context により保持されている情報を利用している。

  - \<Link />

    日報登録画面への遷移を担当するコンポーネント。

- 各処理

  - 日報データ取得(useSWR)

    \_.times(n, (n) =>{})という処理で、7 日分のデータに加工している。

  - 日報登録画面への遷移

    通常のボタン押下による、登録画面への遷移。

  - 遷移時のログ

    \<Link />による遷移の際に、ログ出力を行うためのイベント。

  - 日報検索画面への遷移

    ボタン押下による、検索画面への遷移。

<br/>

# 実践

- 工事コードを表示

  1. クライアントサイドで取得されている情報に工事コードが含まれているか確認
  2. 工事コードのプロパティを確認
  3. UI 部の Table に項目名と実際の値を追加
  4. 正確に動作しているか確認

<br/>

- データ表示の頻度を画面ロード時の一回のみにする

  1. useSWR 内の処理を useEffect に移動
  2. 加工処理も同じ Function 内で完結
  3. Reload でデータ表示されるかを確認

  <br/>

  ◎ 不要な通信やレンダリングを避けるという点も考慮できるとよい。