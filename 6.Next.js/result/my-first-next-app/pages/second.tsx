import Link from 'next/link';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

type SsrProps = {
  userAgent: string | undefined;
};

const Second = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  console.log('second.tsx');
  console.log('SSR Content', data.userAgent);
  return (
    <div>
      <div>Second Page</div>
      <Link href="/">前のページ</Link>
    </div>
  );
};
export default Second;

export const getServerSideProps: GetServerSideProps<{ data: SsrProps }> = async (context) => {
  console.log('getServerSideProps');

  // リクエスト情報を利用した何等かの処理を行う

  // 今回はハンズオンなので、リクエストヘッダーのuser-agentをそのままページに渡す
  return { props: { data: { userAgent: context.req.headers['user-agent'] } } };
};
