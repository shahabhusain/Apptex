import React from "react";
import Hero from "../../../Askmid/Hero/Hero";
import About from "../../../Askmid/About/About";
import Features from "../../../Askmid/Features/Features";
import Screens from "../../../Askmid/Screens/Screens";
import Challenge from "../../../Askmid/Challenge/Challenge";
import Solution from "../../../Askmid/Solution/Solution";
import './askmid.css'
import Footers from "../../../Askmid/Footer/Footers";
const Askmid = () => {
  return (
    <div className="mt">
      <Hero />
      <About />
      <Features />
      <Screens />
       <div className="chja">
       <Challenge />
       </div>
       <div className="chja">
       <Solution />
       </div>
     
        <div className="chja1">
        <Footers />
        </div>
    </div>
  );
};

export default Askmid;
