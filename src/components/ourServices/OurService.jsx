"use client";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";
import pic from "../../assets/banner/banner.jpg";

const OurService = ({ service, index }) => {
  useEffect(() => {
    Aos.init(Aos.init({ duration: 600, delay: 100 }));
  }, []);
  const { id, title, desc, image, category } = service;

  // Calculate whether the index is odd or even
  const isOdd = index % 2 !== 0;
  console.log(image);

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
        <Image
          src="https://i.ibb.co/0j4RK7r/home-banner.png"
          alt="Picture of the author"
          width="350px"
          height="300px"
          layout="responsive"
        />
      </div>
    </div>
  );
};

export default OurService;
