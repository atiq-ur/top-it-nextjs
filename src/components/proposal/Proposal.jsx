import Benefit from "@/app/about/benefits/Benefit";
import React from "react";

const Proposal = ({ proposal }) => {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 mt-8">
      {proposal.map((benefit) => (
        <Benefit key={benefit.id} benefit={benefit}></Benefit>
      ))}
    </div>
  );
};

export default Proposal;
