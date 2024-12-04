import React, { useState } from "react";

const Quiz = () => {
  const [initialState, setInitialState] = useState(1);
  const [count, setCount] = useState(initialState - 1);

  const [date, setDate] = useState(new Date())

  const handleInitialStateInc = () => {
    if (initialState <= 30) setInitialState((prev) => prev + 1);
  };
  const handleInitialStateMinus = () => {
    if (initialState  > 1) setInitialState((prev) => prev - 1);
  };

  const handleCountInc = () => {
    setCount((prev) => prev + initialState);
    const newDate = new Date(date)
    newDate.setDate(newDate.getDate() +  initialState)
     setDate(newDate)
  };

  const handleCountMinus = () => {
    setCount((prev) => prev - initialState);
    const newDate = new Date(date)
    newDate.setDate(newDate.getDate() - initialState)
     setDate(newDate)
  };

  return (
    <div className="quiz-cont">
      <div className="flex">

      <p className="btn" onClick={handleInitialStateMinus}>-</p>
      <p className="count">Step: {initialState}</p>
      <p className="btn" onClick={handleInitialStateInc}>+</p>
      </div>
      <div className="flex">
        <p className="btn" onClick={handleCountMinus}>-</p>
        <p className="count">Count: {count}</p>
        <p className="btn" onClick={handleCountInc}>+</p>
      </div>

      <div>
        {/* <p>{`${count} from today is ${date}`}</p> */}
        <p>
  {count === 0 ? (
    <span>Today is {date.toDateString()}</span>
  ) : (
    <span>{`${count} from today is ${date.toDateString()}`}</span>
  )}
</p>
      </div>
    </div>
  );
};

export default Quiz;
