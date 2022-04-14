import React from "react";
import SectionTitle from "../../../Cmmons/SectionTitle/SectionTitle";
import PackageCard from "./PackageCard";

const Packages = () => {
  return (
    <>
      <div className="section_wrapper">
        <SectionTitle section_title={"upcoming tour"} />
        <PackageCard />
      </div>
    </>
  );
};

export default Packages;
