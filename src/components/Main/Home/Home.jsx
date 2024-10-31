import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import { useSpring, animated } from "react-spring"; // For smooth animations
import "./home.css";

const Home = () => {
  const [scale, setScale] = useState(1);
  const [opacity, setOpacity] = useState(1);

  // Update scale and opacity based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY; 
      const newScale = Math.max(1 - scrollY / 600, 0.5);
      const newOpacity = Math.max(1 - scrollY / 400, 0); 
      setScale(newScale);
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Use react-spring for smooth transitions
  const springProps = useSpring({
    transform: `scale(${scale})`,
    opacity: opacity,
    config: { mass: 1, tension: 180, friction: 20 },
  });

  return (
    <div>
      <animated.div style={springProps} className="container">
        <h1 className="title">
          <span className="span1">Transformation</span> Vision into <br />
          <span className="span2">Digital Reality</span>
        </h1>
        <p className="para">
          Bring your visions to life with custom mobile and web apps, ensuring
          better user experience, engagement, and smart technology in a single
          transformative solution.
        </p>
        <div className="subcontainer">
          <div>
            <h1 className="num">
              <CountUp start={0} end={150} duration={2} delay={0} />+
            </h1>
            <p className="pro">Projects Delivered</p>
          </div>

          <div>
            <h1 className="num">
              <CountUp start={0} end={5} duration={2} delay={0} />+
            </h1>
            <p className="pro">Years of Experience</p>
          </div>

          <div>
            <h1 className="num">
              <CountUp start={0} end={100} duration={2} delay={0} />+
            </h1>
            <p className="pro">Five Star Rating</p>
          </div>
        </div>
      </animated.div>
    </div>
  );
};

export default Home;
