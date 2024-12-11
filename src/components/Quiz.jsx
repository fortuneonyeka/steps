import React, { useState } from "react";
import Button from "./reuseables/Button";
import StepsContent from "./reuseables/StepsContent";

const Quiz = () => {
  const [initialState, setInitialState] = useState(1);
  const [rangeInitialState, setRangeInitialState] = useState(1);
  const [count, setCount] = useState(initialState - 1);
  const [rangeCount, setRangeCount] = useState(rangeInitialState - 1);
  const [date, setDate] = useState(new Date());
  const [rangeDate, setRangeDate] = useState(new Date());
  const [isHovered, setIsHovered] = useState(false);

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

  const handleRest = () => {
    setCount(0);
    setInitialState(1);
    setDate(new Date());
  };

  const handleRangeReset = () => {
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
        <Button className="btn" onclick={handleInitialStateMinus} text="-" />

        {/* <p className="count">Step: {initialState}</p> */}
        <StepsContent className="count" text="Step">{initialState}</StepsContent>
        <Button className="btn" onclick={handleInitialStateInc} text="+" />
      </div>

      <div className="flex">
        <Button className="btn" onclick={handleCountMinus} text="-" />

        <StepsContent className="count" text="Count">{count}</StepsContent>
        <Button className="btn" onclick={handleCountInc} text="+" />
      </div>

      <div>
        <p>
          {count === 0 ? (
            <span>Today is {date.toDateString()}</span>
          ) : (
           
            <StepsContent><span>{`${count} from today is ${date.toDateString()}`}</span></StepsContent>
          )}
        </p>
      </div>
      <div className="buttons">
        {count !== 0 || initialState !== 1 ? (
          <button
            style={{
              backgroundColor: isHovered ? "red" : "purple",
              transition: "background-color 0.3s",
              color: "white",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleRest}>
            Reset
          </button>
        ) : null}
      </div>
      <hr className="hr" />

      {/* Range Input Controls */}
      <div className="flex">
        <input
          type="range"
          min="1"
          max="10"
          value={rangeInitialState}
          onChange={(e) => setRangeInitialState(Number(e.target.value))}
        />{" "}
        <p>{rangeInitialState}</p>
      </div>
      <div className="flex">
        <Button className="btn" onclick={handleRangeCountMinus} text="-" />

        <input
          type="text"
          value={rangeCount}
          onChange={handleRangeCountChange}
        />
        <p className="count">Range Count: {rangeCount}</p>
        <Button className="btn" onclick={handleRangeCountInc} text="+" />
      </div>

      <p>
        {rangeCount === 0 ? (
          
          <StepsContent><span>Today is {rangeDate.toDateString()}</span></StepsContent>
        ) : (
          <span>{`${rangeCount} from today is ${rangeDate.toDateString()}`}</span>
        )}
      </p>
      <div className="buttons">
        {rangeCount !== 0 || rangeInitialState !== 1 ? (
          <Button
            className="button-reset"
            onclick={handleRangeReset}
            text="Reset"
          />
        ) : null}
      </div>
    </div>
  );
};

export default Quiz;
