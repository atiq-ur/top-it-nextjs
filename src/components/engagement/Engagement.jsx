"use client";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Engagement = () => {
  useEffect(() => {
    Aos.init({ duration: 600, delay: 100 });
  }, []);
  return (
    <div className="py-16 bg-gray-200">
      <div data-aos="fade-up" className="text-center space-y-3">
        <h3 className="text-3xl md:text-4xl font-bold uppercase">
          OUR ENGAGEMENT MODEL
        </h3>
        <p className="md:w-4/6 2xl:w-1/2 mx-auto px-6 md:px-0">
          We build software development teams that grow with our clients, from
          the early stages to whatever they aspire to be. Our expertise includes
          front-end, backend, database, and server solutions for mobile, web,
          and desktop applications. Our purpose is to provide our clients with
          expert guidance and to build software vital to their organizations.
        </p>
      </div>
      {/* Engagement card */}
      <div className="container mx-auto px-6">
        <div className="mt-12 flex flex-col-reverse md:flex-row gap-12 items-center">
          <div data-aos="fade-right" className="space-y-4 md:w-1/2">
            <h3 className="text-2xl sm:text-3xl font-semibold text-primary">
              Full Time Engagement <br />
              <span className="text-black">Model</span>
            </h3>
            <p>
              For ongoing projects and continuous flow of work, we assign
              dedicated engineers for working exclusively on your projects. The
              team size can be augmented based on your workload and skill
              requirements.
            </p>
            <p>
              Weekly timesheets and status reports are submitted for your
              monitoring and review.
            </p>
          </div>
          <div data-aos="fade-left" className="md:w-1/2">
            <img
              className="w-4/6 lg:w-1/2 py-4 mx-auto md:mr-0"
              src="https://www.enosisbd.com/wp-content/uploads/2020/06/services-fte.png"
              alt=""
            />
          </div>
        </div>
        <div className="mt-12 flex flex-col md:flex-row gap-12 items-center">
          <div data-aos="fade-right" className="md:w-1/2">
            <img
              className="w-4/6 lg:w-1/2 py-4 mx-auto md:ml-0"
              src="https://www.enosisbd.com/wp-content/uploads/2020/06/services-project.png"
              alt=""
            />
          </div>
          <div data-aos="fade-left" className="space-y-4 md:w-1/2">
            <h3 className="text-2xl sm:text-3xl font-semibold text-primary">
              Project Based <br />
              <span className="text-black">Model</span>
            </h3>
            <p>
              For ongoing projects and continuous flow of work, we assign
              dedicated engineers for working exclusively on your projects. The
              team size can be augmented based on your workload and skill
              requirements.
            </p>
            <p>
              Weekly timesheets and status reports are submitted for your
              monitoring and review.
            </p>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="mt-12 flex flex-col-reverse md:flex-row gap-12 items-center">
            <div data-aos="fade-right" className="space-y-4 md:w-1/2">
              <h3 className="text-2xl sm:text-3xl font-semibold text-primary">
                Full Time Engagement <br />
                <span className="text-black">Model</span>
              </h3>
              <p>
                For ongoing projects and continuous flow of work, we assign
                dedicated engineers for working exclusively on your projects.
                The team size can be augmented based on your workload and skill
                requirements.
              </p>
              <p>
                Weekly timesheets and status reports are submitted for your
                monitoring and review.
              </p>
            </div>
            <div data-aos="fade-left" className="md:w-1/2">
              <img
                className="w-4/6 py-4 mx-auto md:mr-0"
                src="https://www.enosisbd.com/wp-content/uploads/2020/06/services-engagement-394x394.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Engagement;
