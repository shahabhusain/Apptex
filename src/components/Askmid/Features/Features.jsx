import React, { useState, useRef } from "react";
import "./feature.css";
import img1 from "../../../assets/main.png";

const Features = () => {
  const stepsRef = useRef([]);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentStepIndex(index);
  };

  return (
    <div className="feature">
      <h1 className="head">Features</h1>
      <p className="desc">
        An overview of our app’s key features designed to enhance user
        experience.
      </p>
      <div className="feat">
        <img src={img1} alt="" className="animated-image" />
        {/* Apply position based on active step */}
        <div className={`boxes1 position-${currentStepIndex}`}></div>
        <div className={`boxes2 position-${currentStepIndex}`}></div>
        <div className={`boxes3 position-${currentStepIndex}`}></div>
        <div className={`boxes4 position-${currentStepIndex}`}></div>

        <div className="steps-container">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className={`profile-step ${
                currentStepIndex === index ? "active1" : "default"
              }`}
              ref={(el) => (stepsRef.current[index] = el)}
              onClick={() => handleClick(index)}
            >
              <div className="bullet-line">
                <div className="bullet"></div>
                <div className="line"></div>
              </div>
              <div className="text">
                <h2>Build Apna Profile In Just 3 Steps</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur. At rhoncus non nunc in.
                  Vel sapie
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
