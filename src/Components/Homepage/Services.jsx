import React from "react";
import { services } from "../../lib/services";
import ServiceCard from "../Card/ServiceCard";
const Services = () => {
  return (
    <div className="text-slate-800 min-h-screen">
      <div className="text-center container mx-auto">
        <h3 className="text-5xl font-bold text-orange-600 mt-10 p-10">
          Services We Provide
        </h3>
        <p>
          We believe that safe roads are a fundamental right. Our team of
          skilled professionals utilizes the <br /> latest techniques and
          high-quality materials to ensure durable and long-lasting repairs.
        </p>
        <h3 className="text-xl font-bold text-orange-600 p-5 ">
          Why Choose Us?
        </h3>
        <ul className="flex flex-row mt-2 gap-20 list-disc mx-56 mb-5 font-mono">
          <li>Expert Team</li>
          <li>Community Focused</li>
          <li>Fast Response Time</li>
          <li>Quality Assurance</li>
        </ul>
        <h2 className="text-4xl font-semibold mt-16 mb-5">Our Service Area</h2>
      </div>

      <div className="container mx-auto mt-12 grid grid-cols-1 lg:grid-cols-3 gap-3">
        {services.map((service) => (
          <ServiceCard service={service} key={service._id} />
        ))}
      </div>
    </div>
  );
};

export default Services;
