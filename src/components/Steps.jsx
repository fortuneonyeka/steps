import React, { useState } from "react";
import { messages } from "../messages";
import "../index.css";
import Button from "./reuseables/Button";
import StepsContent from "./reuseables/StepsContent";

const Steps = () => {
  const [step, setStep] = useState(1); // Start at step 1 (assuming steps start from 1)
  const [isOpen, setIsOpen] = useState(true);
  const steps = [1, 2, 3];

  const handlePrevious = () => {
    if (step > 1) setStep((prev) => prev - 1); // Ensure step doesn't go below 1
  };

  const handleNext = () => {
    if (step < 3) setStep((prev) => prev + 1); // Ensure step doesn't go above 3
  };

  const handleClose = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <Button
        className="close"
        style={{ fontSize: "30px" }}
        onclick={handleClose}
        content={isOpen ? <p>&times;</p> : <p>+</p>}
      />
      {isOpen ? (
        <div className="steps">
          <div className="numbers">
            {steps.map((num) => (
              <div key={num} className={step === num ? "active" : "inactive"}>
                {num}
              </div>
            ))}
          </div>
          {/* <p className="message"> */}
            {/* Step {step}: {messages[step - 1]} */}
          {/* </p> */}
          <StepsContent className="message" text="Step"> {step}: {messages[step-1]}</StepsContent>

          <div className="buttons">
            <Button
              style={{
                backgroundColor: step === 1 ? "#d3d3d3" : "#7950f2",
                color: "#fff",
                cursor: step === 1 ? "not-allowed" : "pointer",
              }}
              onclick={handlePrevious}
              disabled={step === 1}>
              <span>⏮</span> Previous
            </Button>

            <Button
              style={{
                backgroundColor: step === 3 ? "#d3d3d3" : "#7950f2",
                color: "#fff",
                cursor: step === 3 ? "not-allowed" : "pointer",
              }}
              disabled={step === 3}
              onclick={handleNext}>
              Next <span>⏭</span>
            </Button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Steps;
