import Banner from "@/components/banner/Banner";
import React from "react";
import MainContact from "./MainContact";
export const metadata = {
  title: "Contact Us | Top It",
  description: "Your best Online Top It",
};
const ContactPage = () => {
  return (
    <div>
      <Banner>Contact Us</Banner>
      <MainContact />
    </div>
  );
};

export default ContactPage;
