import { useState, useEffect } from 'react';

const formatNumber = number => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};

const Counter = () => {
  const [count, setCount] = useState(1134147814);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return formatNumber(count);
};

export default Counter;
