"use client";
import React, { useEffect, useState } from "react";
import SingleOffer from "./SingleOffer";
import Aos from "aos";
import "aos/dist/aos.css";

const Offer = () => {
  const [offers, setOffers] = useState([]);
  useEffect(() => {
    fetch("/offers.json")
      .then((res) => res.json())
      .then((data) => setOffers(data));
  }, []);

  useEffect(() => {
    Aos.init({ duration: 600, delay: 100 });
  }, []);
  return (
    <div className="py-16 px-6">
      <div data-aos="fade-up" className="text-center space-y-3">
        <h3 className="text-3xl md:text-4xl font-bold uppercase">
          WHAT WE OFFER
        </h3>
        <p className="md:w-4/6 2xl:w-1/2 mx-auto px-6">
          We build software development teams that grow with our clients, from
          the early stages to whatever they aspire to be. Our expertise includes
          front-end, backend, database, and server solutions for mobile, web,
          and desktop applications. Our purpose is to provide our clients with
          expert guidance and to build software vital to their organizations.
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 mt-8">
        {offers.map((offer) => (
          <SingleOffer key={offer.id} offer={offer}></SingleOffer>
        ))}
      </div>
    </div>
  );
};

export default Offer;
