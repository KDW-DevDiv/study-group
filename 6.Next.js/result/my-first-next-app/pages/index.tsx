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
