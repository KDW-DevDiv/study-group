- 明細部に工事コードを表示する。

  nippo-search-panel-mobile.tsx

  ```
  <table className="border-collapse border border-black w-full">
    <thead className="sticky top-0 z-10">
      <tr className="bg-custom-background-mobile text-white text-center">
        <th className="w-18 font-light border border-black">日付</th>
        // 追加
        <th className="font-light border border-black w-32">{`${settingInfo.itemSettings.Mst_KojiBase.smnTblItemName}コード`}</th>
        <th className="font-light border border-black">{settingInfo.itemSettings.Mst_KojiBase.smnTblItemName}</th>
        <th className="w-28 font-light border border-black">作成者</th>
        <th className="w-12 font-light border border-black">複写</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-400">
      {nipoInfos?.map((data, index) => (
        <tr key={index} className="divide-x divide-black divide-solid">
          <td className="text-center">{moment(data?.niYmd).locale('ja').format('M/D(ddd)')}</td>
          // 追加
          <td className="text-center">{`${data.niKojiNo}-${data.niKbNo?.toString().padStart(2, '0')}`}</td>
          <td className="pl-0.5 whitespace-pre-wrap break-all">
  ```
