"use client";
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Slider.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import SingleSlider from "./SingleSlider";

const Slider = () => {
  const sliderItems = [
    {
      id: 1,
      title: "Your trusted Software Development Partner 1",
      desc: "A top tier software development team assisting owners and decision makers to implement digital initiatives to achieve lasting financial success",
      link: "https://github.com/",
      image: "https://www.enosisbd.com/wp-content/uploads/2020/06/home-qa.png",
    },
    {
      id: 2,
      title: "Top-It Your trusted Software Development Partner 2",
      desc: "A top tier software development team assisting owners and decision makers to implement digital initiatives to achieve lasting financial success",
      link: "https://github.com/",
      image: "https://www.enosisbd.com/wp-content/uploads/2020/06/home-dev.png",
    },
    {
      id: 3,
      title: "Top-It Your trusted Software Development Partner 3",
      desc: "A top tier software development team assisting owners and decision makers to implement digital initiatives to achieve lasting financial success",
      link: "https://github.com/",
      image: "https://www.enosisbd.com/wp-content/uploads/2020/06/home-web.png",
    },
  ];
  return (
    <div className="slider">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {sliderItems.map((item) => (
          <SwiperSlide key={item.id}>
            <SingleSlider item={item}></SingleSlider>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
