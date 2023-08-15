import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const SingleOffer = ({ offer }) => {
  const { id, title, desc, image } = offer;
  useEffect(() => {
    Aos.init({ duration: 600, delay: 100 });
  }, []);
  return (
    <div data-aos="fade-up" className="shadow-md">
      <div className="bg-gray-100">
        <img src={image} alt="" />
      </div>
      <div className="space-y-3 p-6">
        <h3 className="text-2xl md:text-3xl font-bold text-primary">{title}</h3>
        <p className="text-md md:text-lg">{desc}</p>
      </div>
    </div>
  );
};

export default SingleOffer;
