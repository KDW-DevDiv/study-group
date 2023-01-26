type HeaderProps = {
  codeFilter: number | null;
  setCodeFilter: (value: number) => void;
  nameFilter: string;
  setNameFilter: (value: string) => void;
};

const Header = ({ codeFilter, setCodeFilter, nameFilter, setNameFilter }: HeaderProps) => {
  return (
    <>
      <div>
        <div>コード</div>
        <input type="number" value={codeFilter || ''} onChange={(e) => setCodeFilter(Number(e.target.value))} />
      </div>
      <div>
        <div>名称</div>
        <input type="text" value={nameFilter} onChange={(e) => setNameFilter(e.target.value)} />
      </div>
    </>
  );
};

export default Header;
