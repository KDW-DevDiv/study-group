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
