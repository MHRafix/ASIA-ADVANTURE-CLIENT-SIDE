import React from "react";
import SectionTitle from "../../../Cmmons/SectionTitle/SectionTitle";
import PackageCard from "./PackageCard";

const Packages = () => {
  return (
    <div className="upcoming_tour_section">
      <SectionTitle section_title={"upcoming tour"} />
      <PackageCard />
    </div>
  );
};

export default Packages;
