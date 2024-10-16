import React from "react";
import Banner from "./Banner";
import About from "./About";
import Services from "./Services";

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Banner></Banner>
      <About></About>
      <Services></Services>
    </div>
  );
};

export default LandingPage;
