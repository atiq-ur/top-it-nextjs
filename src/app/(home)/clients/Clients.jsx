"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import client1 from "../../../assets/clients/infinitime-248x80.png";
import client2 from "../../../assets/clients/infonet-202x80.png";
import client4 from "../../../assets/clients/matrix-210x80.png";
import client5 from "../../../assets/clients/omnigo-200x80.png";
import client6 from "../../../assets/clients/treeno-198x80.png";
import React, { useEffect, useRef, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
// Import Swiper React components

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

const Clients = () => {
  useEffect(() => {
    Aos.init({ duration: 600, delay: 100 });
  }, []);
  return (
    <div data-aos="fade-up" className="py-16 bg-gray-100">
      <div className="text-center space-y-3">
        <h3 className="text-3xl md:text-4xl font-bold uppercase">
          OUR Clients
        </h3>
        <p className="md:w-4/6 2xl:w-1/2 mx-auto px-4 md:px-0">
          We build software development teams that grow with our clients, from
          the early stages to whatever they aspire to be. Our expertise includes
          front-end.
        </p>
      </div>
      <div className="mt-8 container mx-auto px-6">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="h-16 md:h-28 px-4 flex justify-center items-center">
              <Image src={client1} objectFit="cover" alt="clients" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-16 md:h-28 px-4 flex justify-center items-center">
              <Image src={client2} objectFit="cover" alt="clients" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-16 md:h-28 px-4 flex justify-center items-center">
              <Image src={client4} objectFit="cover" alt="clients" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-16 md:h-28 px-4 flex justify-center items-center">
              <Image src={client5} objectFit="cover" alt="clients" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-16 md:h-28 px-4 flex justify-center items-center">
              <Image src={client6} objectFit="cover" alt="clients" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Clients;
