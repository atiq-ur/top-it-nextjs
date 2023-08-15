"use client";
import React, { useEffect, useState } from "react";
import OurService from "./OurService";
import Aos from "aos";
import "aos/dist/aos.css";

const OurServices = () => {
  useEffect(() => {
    Aos.init(Aos.init({ duration: 600, delay: 100 }));
  }, []);
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("/ourServices.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="pt-16 pb-8">
      <div data-aos="fade-up" className="text-center space-y-3">
        <h3 className="text-3xl md:text-4xl font-bold uppercase">
          OUR SERVICES
        </h3>
        <p className="md:w-4/6 2xl:w-1/2 mx-auto px-6 md:px-0">
          We build software development teams that grow with our clients, from
          the early stages to whatever they aspire to be. Our expertise includes
          front-end, backend, database, and server solutions for mobile, web,
          and desktop applications. Our purpose is to provide our clients with
          expert guidance and to build software vital to their organizations.
        </p>
      </div>
      <div className="py-12">
        {services.map((service, index) => (
          <OurService
            key={service.id}
            service={service}
            index={index}
          ></OurService>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
