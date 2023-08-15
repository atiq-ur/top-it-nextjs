"use client";
import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Proposal from "@/components/proposal/Proposal";
import Engagement from "@/components/engagement/Engagement";
import FormSection from "@/components/formSection/FormSection";
import Banner from "@/components/banner/Banner";
import Image from "next/image";

const SingleCategory = ({ category }) => {
  const [service, setService] = useState([]);
  const [proposal, setProposal] = useState([]);
  useEffect(() => {
    fetch("/ourServices.json")
      .then((res) => res.json())
      .then((data) => {
        const findService = data.find((srv) => srv.category === category);
        if (findService) {
          setService(findService);
        }
      });
  }, [category]);
  useEffect(() => {
    fetch("/proposal.json")
      .then((res) => res.json())
      .then((data) => {
        const findProposal = data.filter((srv) => srv.category === category);
        if (findProposal) {
          setProposal(findProposal);
        }
      });
  }, [category]);
  useEffect(() => {
    Aos.init({ duration: 600, delay: 100 });
  }, []);
  const { title, desc, image } = service;
  return (
    <div>
      <Banner title="Our Services">
        Services -{" "}
        <span>
          {(category === "software" && "Custom Software Development") ||
            (category === "web" && "Web Application Development") ||
            (category === "mobile" && "Mobile Application Development") ||
            (category === "quality" && "Quality assurance & Testing")}
        </span>
      </Banner>
      {/* software */}
      <div className="py-16">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center w-full text-center md:text-left px-6 gap-10 md:gap-12 py-8 md:py-0">
          <div data-aos="fade-right" className="md:w-1/2 space-y-4">
            <h3 className="text-2xl sm:text-3xl font-semibold text-primary">
              {title}
            </h3>
            <p className="text-md md:text-xl">{desc}</p>
          </div>
          <div data-aos="fade-left" className="md:w-1/2">
            {/* <img className="w-4/6 py-4 mx-auto" src={image} alt="" /> */}
            {/* <Image src={image} width={200} height={200} alt="Category" /> */}
          </div>
        </div>
      </div>
      {/* Why Work With Top It */}
      <div className="pb-16">
        <div className="text-center space-y-3">
          <h3 className="text-3xl md:text-4xl font-bold uppercase px-6">
            <span>
              {(category === "software" && "Why Work With Top IT") ||
                (category === "web" && "Our Web App Expertise") ||
                (category === "mobile" &&
                  "App Development Project Life Cycle") ||
                (category === "quality" && "Our QA & Testing Expertise")}
            </span>
          </h3>
          <p className="md:w-4/6 2xl:w-1/2 mx-auto px-6 md:px-0">
            We build software development teams that grow with our clients, from
            the early stages to whatever they aspire to be. Our expertise
            includes front-end, backend.
          </p>
        </div>
        <div>
          <Proposal proposal={proposal}></Proposal>
        </div>
      </div>
      <Engagement />
      <FormSection />
    </div>
  );
};

export default SingleCategory;
