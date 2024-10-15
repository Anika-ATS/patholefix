import React from "react";
import Image from "next/image";
const About = () => {
  return (
    <div className="hero min-h-screen text-slate-900">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
          <Image
            width={900}
            height={1000}
            alt="Team image"
            src={"/assets/images/AboutUs/team1.jpg"}
            className="w-3/4 mx-12 rounded-lg shadow-2xl"
          />
          <Image
            width={1000}
            height={1000}
            alt="team2 image"
            src={"/assets/images/AboutUs/team2.jpg"}
            className="w-1/2 absolute right-5 top-1/2 rounded-lg border-8 border-white shadow-2xl"
          />
        </div>
        <div className="lg:w-1/2 space-y-5 p-4">
          <h3 className="text-6xl text-orange-500 font-bold mt-5 mb-5">
            About Us
          </h3>
          <h1 className="text-4xl font-bold mt-4">
            Welcome to Pathole Fix Team!
          </h1>
          <p className="py-2">
            At Pathole Fix Team, we are dedicated to making your roads safer and
            smoother. Our mission is to tackle the persistent problem of
            potholes in our communities, providing prompt and efficient repair
            solutions that enhance the driving experience for everyone.
          </p>
          <h2 className="font-bold">Our Commitment</h2>
          <p className="py-2">
            We believe that safe roads are a fundamental right. Our team of
            skilled professionals utilizes the latest techniques and
            high-quality materials to ensure durable and long-lasting repairs.
            Whether it's a small pothole or a larger road issue, we approach
            each project with the same level of care and precision.
          </p>
          <button className="btn btn-primary">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
