import Banner from "@/components/banner/Banner";
import React from "react";
import JoinUs from "./JoinUs";
import Jobs from "./jobs/Jobs";

export const metadata = {
  title: "Careers | Top It",
  description: "Your best Online Top It",
};
const CareersPage = () => {
  return (
    <div>
      <Banner>Careers</Banner>
      <JoinUs />
      <Jobs />
    </div>
  );
};

export default CareersPage;
