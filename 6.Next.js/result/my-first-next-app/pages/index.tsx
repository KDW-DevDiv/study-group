import Link from 'next/link';
import type { MyApiData } from './api/my-api';

export default function Home() {
  // console.log('index.tsx');

  const handleClickHello = async () => {
    const res = await fetch('api/hello');
    const { name } = await res.json();
    console.log(name);
  };

  const handleClickMyApi = async () => {
    const res = await fetch('api/my-api', { method: 'POST', body: JSON.stringify({ name: 'my name' }) });
    const { message }: MyApiData = await res.json();
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
