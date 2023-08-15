import React from "react";
import WhoWe from "./WhoWe";
import Banner from "@/components/banner/Banner";
import Benefits from "./benefits/Benefits";
import FormSection from "@/components/formSection/FormSection";
export const metadata = {
  title: "About | Top It",
  description: "Your best Online Top It",
};

const AboutPage = () => {
  return (
    <div>
      <Banner>About Us</Banner>
      <WhoWe />
      <Benefits />
      <FormSection />
    </div>
  );
};

export default AboutPage;
