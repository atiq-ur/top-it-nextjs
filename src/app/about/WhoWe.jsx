"use client";
import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const WhoWe = () => {
  const [displayFlex, setDisplayFlex] = useState(false);
  useEffect(() => {
    Aos.init({ duration: 600, delay: 100 });
    setDisplayFlex(window.innerWidth >= 768);
  }, []);
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-center items-center gap-4 py-16">
        <div data-aos="fade-right" className="md:w-[35%] text-center">
          <h1 className="text-right text-4xl md:text-8xl lg:text-10xl font-bold">
            <span className="text-primary">WHO</span>{" "}
            <br className={`${displayFlex ? "flex" : "hidden"}`} /> WE{" "}
            <br className={`${displayFlex ? "flex" : "hidden"}`} /> ARE
          </h1>
        </div>
        <div className="hidden md:flex h-[150px] w-[3px] bg-primary"></div>
        <div
          data-aos="fade-left"
          className="md:w-[48%] md:ml-8 space-y-4 text-center md:text-left"
        >
          <p>
            Enosis is a premier provider of software development and testing
            services. Having talented software engineers on board, we craft
            compelling web, desktop, and mobile applications for our clients.
          </p>
          <p>
            Since our inception, we have partnered with numerous companies and
            delivered operational gains to startup, emerging, and established
            organizations in the United States and Canada.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhoWe;
