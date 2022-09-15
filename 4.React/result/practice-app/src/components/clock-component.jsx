import { useEffect, useState } from 'react';

const ClockComponent = () => {
  const [time, setTime] = useState(new Date());
  console.log(time);

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  return <div>{time.toISOString()}</div>;
};

export default ClockComponent;
