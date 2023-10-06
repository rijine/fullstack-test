import { useEffect, useState } from 'react';

type Props = {
  interval: number;
};

const Timer = (props: Props) => {
  const [time, setTime] = useState(new Date().toLocaleString().split(', ')[1]);
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleString().split(', ')[1]);
    }, props.interval);

    return () => clearInterval(timer);
  }, [props.interval]);
  return <span className="badge text-bg-dark">{time}</span>;
};

export default Timer;
