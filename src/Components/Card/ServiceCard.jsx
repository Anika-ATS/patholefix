import Image from "next/image";
import React from "react";

const ServiceCard = ({ service }) => {
  const { title, img, price } = service || {};
  return (
    <div className=" p-10">
      <div className="card card-compact bg-base-100 w-96 shadow-xl border-b-lime-200 border-2">
        <figure>
          <Image
            className="mx-auto w-10/12 mt-4 rounded-md h-10/12"
            width={120}
            height={20}
            src={img}
            alt={title}
          ></Image>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{service.title}</h2>
          {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
          <div className="card-actions justify-between items-center">
            <h5 className="text-primary font-semibold">Price:{price}</h5>
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
