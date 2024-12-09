import React, { useState } from "react";

const Quiz = () => {
  const [initialState, setInitialState] = useState(0);
  const [rangeInitialState, setRangeInitialState] = useState(1);
  const [count, setCount] = useState(initialState);
  const [rangeCount, setRangeCount] = useState(rangeInitialState - 1);
  const [date, setDate] = useState(new Date());
  const [rangeDate, setRangeDate] = useState(new Date());

  // Handlers for increment and decrement of initialState
  const handleInitialStateInc = () => {
    if (initialState <= 30) setInitialState((prev) => prev + 1);
  };

  const handleInitialStateMinus = () => {
    if (initialState > 1) setInitialState((prev) => prev - 1);
  };

  
  // Handlers for increment and decrement of count
  const handleCountInc = () => {
    setCount((prev) => prev + initialState);
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + initialState);
    setDate(newDate);
  };

  const handleCountMinus = () => {
    setCount((prev) => prev - initialState);
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() - initialState);
    setDate(newDate);
  };

  // Handlers for increment and decrement of rangeCount
  const handleRangeCountInc = () => {
    setRangeCount((prev) => prev + rangeInitialState);
    const newDate = new Date(rangeDate);
    newDate.setDate(newDate.getDate() + rangeInitialState);
    setRangeDate(newDate);
  };

  const handleRangeCountMinus = () => {
    setRangeCount((prev) => prev - rangeInitialState);
    const newDate = new Date(rangeDate);
    newDate.setDate(newDate.getDate() - rangeInitialState);
    setRangeDate(newDate);
  };


  const handleRangeCountChange = (e) => {
    const newValue = Number(e.target.value);
    if (!isNaN(newValue)) {
      setRangeCount(newValue);

      
      const newDate = new Date();
      newDate.setDate(newDate.getDate() + newValue);
      setRangeDate(newDate);
    }
  };

  
  const handleReset = () => {
    setInitialState(0);
    setRangeInitialState(1);
    setCount(0);
    setRangeCount(0);
    setDate(new Date());
    setRangeDate(new Date());
  };
  
  
  

  return (
    <div className="quiz-cont">
     
      <div className="flex">
        <p className="btn" onClick={handleInitialStateMinus}>
          -
        </p>
        <p className="count">Step: {initialState}</p>
        <p className="btn" onClick={handleInitialStateInc}>
          +
        </p>
      </div>

     
      <div className="flex">
        <p className="btn" onClick={handleCountMinus}>
          -
        </p>
        <p className="count">Count: {count}</p>
        <p className="btn" onClick={handleCountInc}>
          +
        </p>
      </div>

     
      <div>
        <p>
          {count === 0 ? (
            <span>Today is {date.toDateString()}</span>
          ) : (
            <span>{`${count} from today is ${date.toDateString()}`}</span>
          )}
        </p>
      </div>
      <hr className="hr"/>

      {/* Range Input Controls */}
      <div className="flex">

      <input
        type="range"
        min="1"
        max="10"
        value={rangeInitialState}
        onChange={(e) => setRangeInitialState(Number(e.target.value))}
        /> <p>{rangeInitialState}</p>
        </div>
      <div className="flex">
        <p className="btn" onClick={handleRangeCountMinus}>
          -
        </p>
        <input type="text" value={rangeCount} onChange={handleRangeCountChange}/>
        <p className="count">Range Count: {rangeCount}</p>
        <p className="btn" onClick={handleRangeCountInc}>
          +
        </p>
      </div>

      <p>
        {rangeCount === 0 ? (
          <span>Today is {rangeDate.toDateString()}</span>
        ) : (
          <span>{`${rangeCount} from today is ${rangeDate.toDateString()}`}</span>
        )}
      </p>
      <div className="buttons">

      <button  className="button-reset" onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Quiz;
