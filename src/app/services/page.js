import Banner from "@/components/banner/Banner";
import Engagement from "@/components/engagement/Engagement";
import FormSection from "@/components/formSection/FormSection";
import OurServices from "@/components/ourServices/OurServices";
import React from "react";
export const metadata = {
  title: "Services | Top It",
  description: "Your best Online Top It",
};
const ServicesPage = () => {
  return (
    <div>
      <Banner>Services</Banner>
      <OurServices />
      <Engagement />
      <FormSection />
    </div>
  );
};

export default ServicesPage;
