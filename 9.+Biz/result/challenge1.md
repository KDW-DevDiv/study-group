- 現在日付よりも、後の日付を入力できないようにする

  DatePicker の変更処理を修正。

  setting-form-nippo-search-mobile.tsx

  ```
  <DatePicker
    selected={dateYmd}
    onChange={(date) => {
      // 追加
      if (new Date() <= (date as Date)) return;
      onDateChange && onDateChange(date as Date);
    }}
    locale="ja"
    dateFormat="yyyy/MM/dd"
    customInput={<ButtonDatePickerInput />}
  />
  ```

<br/>

- 入力できても検索処理が実行されないようにする。

  - 検索ボタン押下時に制御を入れる。

    ※onClick に渡すのは callBack ファンクションとなるので、匿名ファンクションの構成を作る必要がある。

    nippo-search-page-for-mobile.tsx

    ```
    <button
    ref={buttonRef}
    className="border outline-none px-4 py-1 rounded-md border-custom-border"
    // 追加
    onClick={() => {
      if (new Date() <= new Date(settingFormNippoSearchState.dateYYMMDD)) return;
      handleWhenClickSearch;
    }} >
    検索
    </button>
    ```

    <br/>

  - API コール前に処理を入れる。

    nippo-search-page-for-mobile.tsx

    ```
    const handleWhenClickSearch = async () => {
    //　追加
    if (new Date() <= new Date(settingFormNippoSearchState.dateYYMMDD)) return;

    const args = {
      kojino_from: settingFormNippoSearchState.kojiMaster?.KojiNo,
      kojino_to: settingFormNippoSearchState.kojiMaster?.KojiNo,
      kbno_from: settingFormNippoSearchState.kojiMaster?.KbNo,
      kbno_to: settingFormNippoSearchState.kojiMaster?.KbNo,
      ymd_from: settingFormNippoSearchState.dateYYMMDD,
      ymd_to: settingFormNippoSearchState.dateYYMMDD,
      syaincd_from: settingFormNippoSearchState.syainMaster?.Syaincd,
      syaincd_to: settingFormNippoSearchState.syainMaster?.Syaincd,
    };

    // 以下省略
    ```
