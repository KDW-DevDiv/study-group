import Grandchild from './grandchild';

const Child = () => {
  return (
    <>
      <div style={{ color: 'red' }}>Child</div>
      <Grandchild />
    </>
  );
};

export default Child;
