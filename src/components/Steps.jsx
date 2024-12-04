import React, { useState } from 'react';
import { messages } from '../messages';
import "../index.css";

const Steps = () => {
  const [step, setStep] = useState(1); // Start at step 1 (assuming steps start from 1)
  const [isOpen, setIsOpen] = useState(true)
  const steps = [1,2,3]

  const handlePrevious = () => {
    if (step > 1) setStep((prev) => prev - 1); // Ensure step doesn't go below 1
  };

  const handleNext = () => {
    if (step < 3) setStep((prev) => prev + 1); // Ensure step doesn't go above 3
  };





  return (
 <div className="steps">
      <div className="numbers">
      
        {steps.map((num) => (
          <div key={num} className={step === num ? "active" : "inactive"}>
            {num}
          </div>
        ))}
      </div>
      <p className="message">Step {step}: {messages[step - 1]}</p>

      <div className="buttons">
        <button
          style={{ backgroundColor:step === 1 ? "#d3d3d3" : "#7950f2", color: "#fff", 
            cursor: step === 1 ? "not-allowed" : "pointer"
          }}
          onClick={handlePrevious}
          disabled={step === 1} // Disable if already on the first step
        >
          Previous
        </button>
        <button
          style={{ backgroundColor: step === 3 ? "#d3d3d3" : "#7950f2", color: "#fff", 
            cursor: step === 3 ? "not-allowed" : "pointer"
          }}
          onClick={handleNext}
          disabled={step === 3} // Disable if already on the last step
        >
          Next
        </button>
      </div>
    </div> 
);
};



export default Steps;
