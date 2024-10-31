import React, { useEffect, useRef, useState } from 'react';
import './feature.css';
import img1 from '../../../assets/main.png';

const Features = () => {
  const stepsRef = useRef([]);
  const [currentStepIndex, setCurrentStepIndex] = useState(0); // Track the active step

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const stepIndex = stepsRef.current.indexOf(entry.target);
          if (entry.isIntersecting) {
            stepsRef.current[stepIndex].classList.add('active1');
            stepsRef.current[stepIndex].classList.remove('default');
            setCurrentStepIndex(stepIndex); // Update the active step index
          } else {
            stepsRef.current[stepIndex].classList.remove('active1');
            stepsRef.current[stepIndex].classList.add('default');
          }
        });
      },
      {
        root: null,
        threshold: 0.6, // Trigger when 60% of the step is visible
      }
    );

    stepsRef.current.forEach((step) => {
      if (step) observer.observe(step);
    });

    return () => {
      stepsRef.current.forEach((step) => {
        if (step) observer.unobserve(step);
      });
    };
  }, []);

  return (
    <div className="feature">
      <h1 className="head">Features</h1>
      <p className="desc">
        An overview of our app’s key features designed to enhance user experience.
      </p>
      <div className="feat">
        <img
          src={img1}
          alt=""
          className={`animated-image step-${currentStepIndex}`} // Apply animation based on active step
        />
        <div className="steps-container">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="profile-step default"
              ref={(el) => (stepsRef.current[index] = el)}
            >
              <div className="bullet-line">
                <div className="bullet"></div>
                <div className="line"></div>
              </div>
              <div className="text">
                <h2>Build Apna Profile In Just 3 Steps</h2>
                <p>Lorem ipsum dolor sit amet consectetur. At rhoncus non nunc in. Vel sapie</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
