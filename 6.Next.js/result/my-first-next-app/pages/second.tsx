import Link from 'next/link';
import { GetServerSideProps } from 'next';

const Second = ({ data }: { data: any }) => {
  console.log('second.tsx');
  console.log('SSR Content', data);
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

  // リクエスト情報を利用した何等かの処理を行う

  // 今回はハンズオンなので、リクエストヘッダーのuser-agentをそのままページに渡す
  return { props: { data: context.req.headers['user-agent'] } };
};
