"use client";
import React, { useEffect } from "react";
import Form from "./Form";
import Aos from "aos";
import "aos/dist/aos.css";

const FormSection = () => {
  useEffect(() => {
    Aos.init({ duration: 600, delay: 100 });
  }, []);
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto flex justify-center items-center gap-16 px-6 pt-16 pb-14 flex-col md:flex-row">
        <div data-aos="fade-right" className="w-full md:w-1/2">
          <h2 className="text-3xl lg:text-7xl font-bold text-center md:text-left">
            WANT US TO CALL YOU?
          </h2>
        </div>
        <div data-aos="fade-left" className="w-full md:w-1/2">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default FormSection;
