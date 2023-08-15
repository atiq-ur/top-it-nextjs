"use client";
import React, { useEffect } from "react";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { MdEngineering } from "react-icons/md";
import { GiAscendingBlock } from "react-icons/gi";
import { VscSettingsGear } from "react-icons/vsc";
import Aos from "aos";
import "aos/dist/aos.css";

const Benefit = ({ benefit }) => {
  useEffect(() => {
    Aos.init(Aos.init({ duration: 600, delay: 100 }));
  }, []);
  const { id, title, desc, image } = benefit;
  let IconComponent;

  if (image === "BsFillRocketTakeoffFill") {
    IconComponent = BsFillRocketTakeoffFill;
  } else if (image === "MdEngineering") {
    IconComponent = MdEngineering;
  } else if (image === "GiAscendingBlock") {
    IconComponent = GiAscendingBlock;
  } else if (image === "VscSettingsGear") {
    IconComponent = VscSettingsGear;
  }

  return (
    <div
      data-aos="fade-up"
      className="shadow-md flex justify-center items-center flex-col pt-6 benefitIcon1"
    >
      <div className="border-2 border-primary inline-flex p-6 rounded-full benefitIcon2">
        <IconComponent className="mx-auto h-20 w-20" />
      </div>
      <div className="space-y-3 p-6 text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-primary">{title}</h3>
        <p className="text-md md:text-lg">{desc}</p>
      </div>
    </div>
  );
};

export default Benefit;
