"use client";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";

const OurService = ({ service, index }) => {
  useEffect(() => {
    Aos.init(Aos.init({ duration: 600, delay: 100 }));
  }, []);
  const { id, title, desc, image, category } = service;

  // Calculate whether the index is odd or even
  const isOdd = index % 2 !== 0;
  const imageLoader = ({ src, width, quality }) => {
    return `https://i.ibb.co/${src}?w=${width}&q=${quality || 75}`
  }

  return (
    <div
      className={`container mx-auto flex flex-col-reverse md:flex-row ${
        isOdd ? "md:flex-row-reverse" : ""
      } items-center w-full text-center md:text-left px-6 gap-10 md:gap-12 py-8 md:py-0`}
    >
      <div data-aos="fade-right" className="md:w-1/2 space-y-4">
        <h3 className="text-2xl sm:text-3xl font-semibold text-primary">
          {title}
        </h3>
        <p className="text-md md:text-xl">{desc}</p>
        <Link href={`/services/${category}`}>
          <button className="btn-primary mt-4">View details</button>
        </Link>
      </div>
      <div data-aos="fade-left" className="md:w-1/2">
        {image}
        <Image
          loader={imageLoader}
          src={image}
          width={500}
          height={500}
          alt=""
        />
      </div>
    </div>
  );
};

export default OurService;
