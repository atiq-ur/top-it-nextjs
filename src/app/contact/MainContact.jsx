"use client";
import React, { useEffect } from "react";
import { ImMobile } from "react-icons/im";
import Form from "../../components/formSection/Form";
import { MdOutgoingMail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import Aos from "aos";
import "aos/dist/aos.css";

const MainContact = () => {
  useEffect(() => {
    Aos.init({ duration: 600, delay: 100 });
  }, []);
  return (
    <>
      <div className="bg-gray-100">
        <div className="container mx-auto flex gap-16 px-6 pt-16 pb-14 flex-col md:flex-row">
          <div data-aos="fade-right" className="w-full md:w-1/2 space-y-12">
            <div className="flex gap-6 text-gray1">
              <div>
                <ImMobile className="w-12 h-12" />
              </div>
              <div>
                <h4 className="text-2xl font-semibold mb-2">Give us a call</h4>
                <p>+526875558</p>
                <p>+880172687555</p>
              </div>
            </div>
            <div className="flex gap-6 text-gray1">
              <div>
                <MdOutgoingMail className="w-12 h-12" />
              </div>
              <div>
                <h4 className="text-2xl font-semibold mb-2">
                  Send us an email
                </h4>
                <p>monirul8680@gmail.com</p>
              </div>
            </div>
            <div className="flex gap-6 text-gray1">
              <div>
                <IoLocationSharp className="w-12 h-12" />
              </div>
              <div>
                <h4 className="text-2xl font-semibold mb-2">Location</h4>
                <p>
                  House 06, Road 11, <br /> Mirpur-1, Dhaka 1216, <br />{" "}
                  Bangladesh
                </p>
              </div>
            </div>
          </div>
          <div data-aos="fade-left" className="w-full md:w-1/2">
            <Form />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContact;
