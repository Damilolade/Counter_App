import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("Counter is ready");

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  // Update message when count changes
  useEffect(() => {
    setMessage(`The count is now: ${count}`);
  }, [count]);

  return (
    <div className="counter-container">
      <h1 className="title">Superdami_Counter_App</h1>
      <h2 className="message">{message}</h2>
      <div className="button-group">
        <button className="btn increase" onClick={handleIncrease}>Increase +</button>
        <button className="btn reset" onClick={handleReset}>Reset 0</button>
        <button className="btn decrease" onClick={handleDecrease}>Decrease -</button>
      </div>
    </div>
  );
};

export default Counter;
