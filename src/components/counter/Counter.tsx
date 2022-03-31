import React, { ReactElement, useState } from 'react';

import './counter.css';

interface ICounterProps {
  initialCount?: number,
  step?: number
};

export default function Counter({
  initialCount = 0,
  step = 1
}: ICounterProps): ReactElement {
  const [count, setCount] = useState<number>(initialCount);

  const increment = (e: React.MouseEvent<HTMLElement>) => setCount(count + multiplyStep(e));
  const decrement = (e: React.MouseEvent<HTMLElement>) => setCount((count - multiplyStep(e)) > 0 ? count - multiplyStep(e) : 0);
  const multiplyStep = (e: React.MouseEvent<HTMLElement>) => e.shiftKey ? step * 10 : step;

  return (
    <div className='counter-line'>
      <p className="count-result" title="count-value">Actual count: {count}</p>
      <div onClick={increment} title="increment" className="button">+</div>
      <div onClick={decrement} title="decrement" className="button">-</div>
    </div>
  );
};
