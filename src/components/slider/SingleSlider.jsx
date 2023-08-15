"use client";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import Image from "next/image";

const SingleSlider = ({ item }) => {
  useEffect(() => {
    Aos.init(Aos.init({ duration: 600, delay: 100 }));
  }, []);
  const { id, title, desc, image } = item;
  return (
    <>
      <div className="container mx-auto flex flex-col md:flex-row items-center w-full text-center md:text-left px-6 xl:px-24 gap-12 py-8">
        <div data-aos="fade-right" className="md:w-1/2 space-y-4">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
            {title}
          </h3>
          <p className="text-md md:text-xl">{desc}</p>
          <button className="btn-primary">
            <Link href="/">View details</Link>
          </button>
        </div>
        <div data-aos="fade-left" className="md:w-1/2">
          {/* <Image src={image} alt="Slider" height={100} width={100} /> */}
        </div>
      </div>
    </>
  );
};

export default SingleSlider;
