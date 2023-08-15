"use client";
import React, { useEffect } from "react";
import banner from "../../assets/banner/banner.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const Banner = ({ children, title }) => {
  useEffect(() => {
    Aos.init({ duration: 600, delay: 100 });
  }, []);
  return (
    <div className="relative z-0">
      <div className="absolute inset-0 bg-gradient-to-bl from-transparent to-black"></div>
      <Image src={banner} alt="Banner" />
      <div
        data-aos="fade-up"
        className="absolute inset-0 flex flex-col justify-center items-center text-white text-center"
      >
        {title ? (
          <h1 className="text-4xl lg:text-6xl font-bold">{title}</h1>
        ) : (
          <h1 className="text-4xl lg:text-6xl font-bold">{children}</h1>
        )}
        <h4 className="font-semibold text-xl mt-3">
          Home - <span className="text-primary">{children}</span>
        </h4>
      </div>
    </div>
  );
};

export default Banner;
