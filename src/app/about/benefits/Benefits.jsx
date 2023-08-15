"use client";
import React, { useEffect, useState } from "react";
import Benefit from "./Benefit";
import Aos from "aos";
import "aos/dist/aos.css";

const Benefits = () => {
  const [benefits, setBenefits] = useState([]);
  useEffect(() => {
    fetch("/benefits.json")
      .then((res) => res.json())
      .then((data) => setBenefits(data));
  }, []);
  useEffect(() => {
    Aos.init({ duration: 600, delay: 100 });
  }, []);
  return (
    <div className="py-16">
      <div data-aos="fade-up" className="text-center space-y-3">
        <h3 className="text-3xl md:text-4xl font-bold uppercase">
          BENEFITS OF WORKING WITH ENOSIS
        </h3>
        <p className="md:w-4/6 2xl:w-1/2 mx-auto px-6 md:px-0">
          We build software development teams that grow with our clients, from
          the early stages to whatever they aspire to be. Our expertise includes
          front-end, backend.
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
        {benefits.map((benefit) => (
          <Benefit key={benefit.id} benefit={benefit}></Benefit>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
