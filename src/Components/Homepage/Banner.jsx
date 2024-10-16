import React from "react";

const Banner = () => {
  return (
    <div className="container mx-16  ">
      <div className="carousel w-11/12 mt-10">
        {banners.map((banner, index) => (
          <div
            style={{
              backgroundImage: `linear-gradient(45deg, rgba(7,25,82,0.7), rgba(0,0,0,0.3)), url(/assets/images/banners/${
                index + 1
              }.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            key={index}
            id={`slide${index + 1}`}
            className="carousel-item relative w-full h-[90vh] rounded-xl bg-top bg-no-repeat bg-cover"
          >
            <div className="h-full w-full flex items-center text-white pl-36">
              <div className="space-y-6">
                {" "}
                <h1 className="mt-5 text-4xl font-bold">{banner.title}</h1>
                <p>{banner.description}</p>
                <button className="btn btn-primary mr-5">Discover More</button>
                <button className="btn btn-primary btn-outline">
                  Latest Project
                </button>
              </div>
            </div>

            <div className="absolute  flex transform justify-between bottom-12 right-12">
              <a href={banner.prev} className="btn btn-circle mr-6">
                ❮
              </a>
              <a href={banner.next} className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const banners = [
  {
    title: "Pathole Fix Services",
    description:
      "Don’t Let Potholes Become a Liability,Fix Your Potholes Before It's Too Late!!",
    prev: "#slide4",
    next: "#slide2",
  },
  {
    title: "Pathole Fix Services",
    description:
      "Don’t Let Potholes Become a Liability,Fix Your Potholes Before It's Too Late!!",
    prev: "#slide1",
    next: "#slide3",
  },
  {
    title: "Pathole Fix Services",
    description:
      "Don’t Let Potholes Become a Liability,Fix Your Potholes Before It's Too Late!!",
    prev: "#slide2",
    next: "#slide4",
  },
  {
    title: "Pathole Fix Services",
    description:
      "Don’t Let Potholes Become a Liability,Fix Your Potholes Before It's Too Late!!",
    prev: "#slide3",
    next: "#slide1",
  },
];

export default Banner;
