"use client";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const JoinUs = () => {
  useEffect(() => {
    Aos.init({ duration: 600, delay: 100 });
  }, []);
  return (
    <div className="py-16 bg-gray-100">
      <div
        data-aos="fade-right"
        className="text-center space-y-3 container mx-auto px-6"
      >
        <h3 className="text-3xl md:text-4xl font-bold uppercase">Join Us</h3>
        <p className="md:w-4/6 2xl:w-1/2 mx-auto">
          At Enosis, we foster and inspire innovative ideas to support growth
          and value addition. We are passionate about the work we do. Following
          a transparent system and keeping the communication channels open, we
          commute ideas and suggestions within the team. We invest in our people
          and offer them numerous learning and development opportunities. Join
          us to be a part of a visionary team.
        </p>
      </div>
    </div>
  );
};

export default JoinUs;
